<template>
  <div>
    <navbar/>
    <div class="container">
      <div class="col-12 ignore-screen logo">
        <img src="https://i.imgur.com/UUWScH1.png">
        <br>
        <p class="title" style="text-align: center">บันทึกอาการเลือดออก</p>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">วันที่:</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" placeholder="วันที่/เดือน/ปี: 20/6/2560" v-model="date">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">เวลา:</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" placeholder="13:45" v-model="time">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">ส่วนที่เลือดออก:</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="parts">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">อาการที่เลือดออก:</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="pain">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">สาเหตุ:</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="reason">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">กิจกรรมที่ทำอยู่</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="activity">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">ระดับความเจ็บปวด</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <star-rating v-model="painLevel" :max-rating="10" :show-rating="false" :star-size="25"></star-rating>
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">รูป</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="file" @change="imageURL($event)">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">อื่นๆ</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="remark">
        </div>
      </div>
      <div class="col-12">
        <button class="btn font" @click="saveInformation()">บันทึก</button>
        <br>
        <p style="color:green; text-align:center; font-size: 18px;">{{complete}}</p>
        <p style="color:red; text-align:center; font-size: 18px;">{{err}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import feathers, {
    injuryService,
    uploadService
  } from '../plugins/feathers.js'
  import StarRating from 'vue-star-rating'
  import Navbar from '../components/navbar'
  import moment from 'moment'
  export default {
    components: {
      Navbar,
      StarRating
    },
    data: function () {
      return {
        date: '',
        time: '',
        parts: '',
        pain: '',
        reason: '',
        activity: '',
        painLevel: 0,
        image: '',
        remark: '',
        err: '',
        complete: ''
      }
    },
    methods: {
      imageURL: function () {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.onload = (event) => {
            this.image = event.target.result;
            feathers.authenticate().then(()=>{
                uploadService.create({
                    uri:this.image
                }).then((data)=>{
                    this.image = data.fullpath
                })
            })
          }

          reader.readAsDataURL(event.target.files[0]);
        }
      },
      saveInformation: function () {
        feathers.authenticate().then((data) => {
          const date = this.date.split('/')
          const format = `${date[2] - 543}-${date[1]}-${date[0]}`
          const isoFormat = moment(format).format()
          injuryService.create({
            jwt: data.accessToken,
            injuryDate: isoFormat,
            injuryTime: this.time,
            injuryParts: this.parts,
            reason: this.reason,
            painDetail: this.pain,
            activity: this.activity,
            painLevel: this.painLevel,
            remark: this.remark,
            injuryImage: this.image
          }).then((data) => {
            console.log(data)
            this.complete = 'บันทึกอาการบาดเจ็บเรียบร้อย'
          }).catch(() => {
            this.err = 'เกิดปัญหาในการบันทึก'
          })
        })
      }
    }
  }

</script>
<style scoped>
  .title {
    font-size: 30px;
    font-family: 'Trirong', serif;
  }

  .font {
    font-weight: 600;
    font-size: 18px;
  }

  .logo {
    padding-bottom: 10%;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15%;
  }

  input {
    font-size: 18px;
  }

  .container {
    width: 50vw;
    margin-left: 20vw;
    padding-top: 10vh;
  }

  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(59, 155, 219);
    font-family: 'Maitree', serif;
    color: white;
    width: 40%;
    font-size: 20px;
  }

  button:hover {
    background-color: rgb(36, 89, 124);
  }

  @media screen and (max-width: 800px) {
    .container {
      width: 90vw;
      margin-left: 5vw;
    }
  }

</style>
