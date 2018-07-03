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
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">ชื่อ:</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <input type="text" v-model="name">
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">เพศ:</p>
      </div>
      <div class="col-9 ignore-screen level-item input-control">
        <select class="select" placeholder="Choose one" v-model="sex">
          <option value="male">ชาย</option>
          <option value="female">หญิง</option>
        </select>
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">วันเดือนปีเกิด</p>
      </div>
      <div class="col-9 ignore-screen level-item">
        <input type="text" v-model="birthDate" placeholder="วันที่/เดือน/ปี : 20/06/2541">
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
        <input type="text" v-model="telephoneNumber">
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
        <input type="text" v-model="doctorName">
      </div>
    </div>
    <div class="row ignore-screen level">
      <div class="col-3 ignore-screen level-item">
        <p class="font-maitree">สิทธิ์การรักษา</p>
      </div>
      <div class="col-9 ignore-screen level-item input-control">
        <select class="select" placeholder="Choose one" v-model="permissionTreatment">
          <option value="servant">ข้าราชการ</option>
          <option value="social">ประกันสังคม</option>
          <option value="heal">ประกันสุขภาพถ้วนหน้า(30 บาท)</option>
          <option value="insurance">ประกันส่วนบุคคล</option>
          <option value="money">จ่ายเงินเอง</option>
          <option value="etc">อื่นๆ</option>
        </select>
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
    userService,
    userInformation
  } from '../plugins/feathers.js'
  import moment from 'moment'
  export default {
    data: function () {
      return {
        username: '',
        password: '',
        name: '',
        id: '',
        telephoneNumber: '',
        hospitalName: '',
        doctorName: '',
        birthDate: '',
        sex: '',
        err: '',
        permissionTreatment: '',
      }
    },
    methods: {
      signUp() {
        const date = this.birthDate.split('/')
        const format = `${date[2] - 543}-${date[1]}-${date[0]}`
        const isoFormat = moment(format).format()
        userService.create({
          email: this.username,
          password: this.password
        }).then((data) => {
          this.err = ''
          userInformation.create({
            userId: data._id,
            permissionTreatment: this.permissionTreatment,
            doctor: {
              name: this.doctorName,
              hospital: this.hospitalName
            },
            patientIdCard: {
              number: this.id
            },
            patientInformation: {
              name: this.name,
              birthDate: isoFormat,
              telephoneNumber: this.telephoneNumber
            }

          }).then((data) => {
            this.$router.push('/')
          }).catch((err) => {
            console.log('info', err)
            this.err = 'เกิดปัญหาในการ สมัครสมาชิก'
          })
        }).catch((err) => {
          console.log('user', err)
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
