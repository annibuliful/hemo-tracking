<template>
  <div class="container">
    <div class="col-12 ignore-screen logo">
      <img src="../assets/logo.png">
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">อีเมล์:</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <input type="text" v-model="username">
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">รหัสผ่าน:</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <input type="password" v-model="password">
      </div>
    </div>
    <div cass="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p>เพศ:</p>
      </div>
      <div class="col-9 ignore-screen level-item input-control">
        <select class="select" placeholder="Choose one" v-model="sex">
          <option value="men">ชาย</option>
          <option value="women">ผู้หญิง</option>
        </select>
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">วันเดือนปีเกิด</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <!-- <input type="password" v-model="password"> -->
        <datepicker :language="th" :input-class="'calendar'" placeholder="วันเกิด" v-model="birthDate"></datepicker>
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">รหัสบัตรประชาชน</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <input type="text" v-model="id">
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">หมายเลขโทรศัพท์</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <input type="text" v-model="telePhoneNumber">
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">โรงพยาบาล</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <input type="text" v-model="hospitalName">
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">แพทย์ที่รักษา</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <input type="password" v-model="doctorName">
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">สิทธิ์การรักษา</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <input type="password" v-model="password">
      </div>
    </div>
    <div class="col-12">
      <button class="btn font-maitree" @click="signUp()">สมัครสมาชิก</button>
      <br>
      <p style="color:red; text-align:center; font-size: 18px;">{{err}}</p>
    </div>
  </div>
</template>

<script>
  import {
    userService
  } from '../plugins/feathers.js'
  import Datepicker from 'vuejs-datepicker';
  import {
    th
  } from 'vuejs-datepicker/dist/locale'
  export default {
    components: {
      Datepicker
    },
    data: function () {
      return {
        th: th,
        username: '',
        password: '',
        id: '',
        telePhoneNumber: '',
        hospitalName: '',
        doctorName: '',
        birthDate: '',
        sex: '',
        err: ''
      }
    },
    methods: {
      signUp() {
        userService.create({
          email: this.username,
          password: this.password
        }).then((data) => {
          this.err = ''
          this.$router.push('/')
        }).catch(() => {
          this.err = 'เกิดปัญหาในการ สมัครสมาชิก'
        })
      }
    }
  }

</script>
<style scoped>
  .font-maitree {
    font-weight: 600;
    font-size: 18px;
  }

  .logo {
    padding-bottom: 10%;
  }

  .calendar {
    width: 100vw;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
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
    background-color: rgb(241, 28, 21);
    font-family: 'Maitree', serif;
    color: white;
    width: 40%;
    font-size: 20px;
  }

  button:hover {
    background-color: rgb(185, 27, 22);
  }

  @media screen and (max-width: 800px) {
    .container {
      width: 90vw;
      margin-left: 5vw;
    }
  }

</style>
