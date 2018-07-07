<template>
    <div>
        <div class="row">
            <div class="col">
                <img src="http://www.thaihemophilia.org/images/common/logo.png">
                <h3 class="title">SignUp</h3>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row ignore-screen level">
                    <div class="col-3 ignore-screen level-item">
                        <p>อีเมลล์:</p>
                    </div>
                    <div class="col-9 ignore-screen level-item">
                        <input type="email" v-model="email">
                    </div>
                </div>

                <div class="row ignore-screen level">
                    <div class="col-3 ignore-screen level-item">
                        <p>รหัสผ่าน:</p>
                    </div>
                    <div class="col-9 ignore-screen level-item">
                        <input type="password" v-model="password">
                    </div>
                </div>

                <div class="row ignore-screen level">
                    <div class="col-3 ignore-screen level-item">
                        <p>ชื่อ:</p>
                    </div>
                    <div class="col-9 ignore-screen level-item">
                        <input type="name" v-model="name">
                    </div>
                </div>
                <div class="row ignore-screen level">
                    <div class="col-3 ignore-screen level-item">
                        <p>ชื่อโรงพยาบาล:</p>
                    </div>
                    <div class="col-9 ignore-screen level-item">
                        <input type="name" v-model="hospital">
                    </div>
                </div>
            </div>
        </div>
        <div class="row position">
            <button type="button" class="submit" @click="signup()">สมัครสมาชิก</button>
            <button type="butotn" class="cancel" @click="back()">ยกเลิก</button>
        </div>
        <p style="color: red: font-size: 20px">{{err}}</p>
    </div>

</template>
<script>
import {
  doctorInformationService,
  userService
} from '../plugins/feathers.js'
  export default{
    data:function(){
      return{
        email: '',
        password: '',
        name: '',
        hospital: '',
        err: ''
      }
    },
    methods:{
      signup: function(){
        userService.create({
          email: this.email,
          password: this.password
        }).then(({_id})=>{
          doctorInformationService.create({
            userId: _id,
            name: this.name,
            hospitalName: this.hospital
          }).then((data)=>{
            this.$router.push('/')
          }).catch((err)=>{
            this.err = 'เกิดปัญหาในการสมัครสมาชิก'
          })
        })
      },
      back: function(){
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: auto;
    }

    input{
      font-size: 18px;
    }
    .position {
        display: flex;
        flex-flow: row;
        justify-content: center;
    }

    .position button {
        margin-left: 20px;
    }

    .title {
        text-align: center;
    }

    .container {
        width: 50vw;
        margin-left: 25vw;
    }

    .submit {
        background-color: rgb(241, 28, 21);
        color: white;
        font-size: 18px
    }

    .cancel {
        background-color: rgb(149, 149, 149);
        color: white;
        font-size: 18px
    }

    .submit:hover {
        background-color: rgb(194, 24, 18);
        color: white;
    }

    .cancel:hover {
        background-color: rgb(102, 101, 101);
        color: white;
    }

    @media screen and (max-width: 600px){
      .container{
        width: 90vw;
        margin-left: 5vw;
      }
    }
</style>
