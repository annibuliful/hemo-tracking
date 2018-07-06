<template>
  <div>
    <navbar/>
    <div class="container wrap">
      <div class="col-12 ignore-screen logo">
        <img src="https://i.imgur.com/b7jss16.png">
        <br>
        <p class="title" style="text-align: center">คุณภาพชีวิต</p>
        <p style="text-align: center;font-family: 'Maitree', serif;">กรุณาประเมินคุณภาพชีวิตโดยรวมของท่านในประเด็นต่างๆต่อไปนี้โดนยึดเอาระยะเวลาใน 2 สัปดาห์ที่ผ่านมา</p>
      </div>
      <div class="row ignore-screen level ">
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
          <p class="font">การเคลื่อนไหว</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <select class="select" placeholder="Choose one" v-model="movement">
            <option value="" disabled hidden>ระดับ</option>
            <option value="1">ไม่มีปัญหาในการเดิน</option>
            <option value="2">มีปัญหาในการเดินเล็กน้อย</option>
            <option value="3">มีปัญหาในการเดินปานกลาง</option>
            <option value="4">มีปัญหาในการเดินอย่างมาก</option>
            <option value="5">ไม่สามารถเดินได้</option>
          </select>
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">การดูแลตัวเอง</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <select class="select" placeholder="Choose one" v-model="takecare">
            <option value="" disabled hidden>ระดับ</option>
            <option value="1">ไม่มีปัญหาในการอาบน้ำหรือใส่เสื้อผ้าด้วยตัวเอง</option>
            <option value="2">มีปัญหาในการอาบน้ำหรือใส่เสื้อผ้าด้วยตัวเองเล็กน้อย</option>
            <option value="3">มีปัญหาในการอาบน้ำหรือใส่เสื้อผ้าด้วยตัวเองปานกลาง</option>
            <option value="4">มีปัญหาในการอาบน้ำหรือใส่เสื้อผ้าด้วยตัวเองอย่างมาก</option>
            <option value="5">ไม่สามารถอาบน้ำหรือใส่เสื้อผ้าด้วยตัวเองได้</option>
          </select>
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <div>
            <p class="font">กิจกรรมที่ทำเป็นประจำ</p>
            <p style="font-size: 13px;font-family: 'Trirong', serif;">เช่น ทำงาน, เรียนหนังสือ, ทำงานบ้าน, กิจกรรมในครอบครัว, หรือ กิจกรรมยามว่าง</p>
          </div>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <select class="select" placeholder="Choose one" v-model="activity">
            <option value="" disabled hidden>ระดับ</option>
            <option value="1">ไม่มีปัญหาในการทำกิจกรรมที่ทำเป็นประจำ</option>
            <option value="2">มีปัญหาในการทำกิจกรรมที่ทำเป็นประจำเล็กน้อย</option>
            <option value="3">มีปัญหาในการทำกิจกรรมที่ทำเป็นประจำปานกลาง</option>
            <option value="4">มีปัญหาในการทำกิจกรรมที่ทำเป็นประจำอยากมาก</option>
            <option value="5">ไม่สามารถทำกิจกรรมที่ทำเป็นประจำได้</option>
          </select>
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
            <p class="font">อาการเจ็บปวด/อาหารไม่สบายตัว</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <select class="select" placeholder="Choose one" v-model="pain">
            <option value="" disabled hidden>ระดับ</option>
            <option value="1">ไม่มีอาการเจ็บปวดหรืออาการไม่สบายตัว</option>
            <option value="2">มีอาการเจ็บปวดหรืออาการไม่สบายตัวเล็กน้อย</option>
            <option value="3">มีอาการเจ็บปวดหรืออาการไม่สบายตัวปานกลาง</option>
            <option value="4">มีอาการเจ็บปวดหรืออาการไม่สบายตัวอย่างมาก</option>
            <option value="5">มีการเจ็บปวดหรืออาการไม่สบายตัวตลอดเวลา</option>
          </select>
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
            <p class="font">ความวิตกกังวล / ความซึมเศร้า</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <select class="select" placeholder="Choose one" v-model="stressed">
            <option value="" disabled hidden>ระดับ</option>
            <option value="1">ไม่มีอาการเจ็บปวดหรืออาการไม่สบายตัว</option>
            <option value="2">มีอาการเจ็บปวดหรืออาการไม่สบายตัวเล็กน้อย</option>
            <option value="3">มีอาการเจ็บปวดหรืออาการไม่สบายตัวปานกลาง</option>
            <option value="4">มีอาการเจ็บปวดหรืออาการไม่สบายตัวอย่างมาก</option>
            <option value="5">มีการเจ็บปวดหรืออาการไม่สบายตัวตลอดเวลา</option>
          </select>
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
    lifeQualityService,
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
        movement: '',
        takecare: '',
        activity: '',
        pain: '',
        stressed: '',
        err: '',
        complete: ''
      }
    },
    methods: {
      saveInformation: function () {
        feathers.authenticate().then((data) => {
          const date = this.date.split('/')
          const format = `${date[2] - 543}-${date[1]}-${date[0]}`
          const isoFormat = moment(format).format()
          lifeQualityService.create({
            jwt: data.accessToken,
            date: isoFormat,
            time: this.time,
            movement: this.movement,
            takecare: this.takecare,
            activity: this.activity,
            pain: this.pain,
            stressed: this.stressed,
          }).then((data) => {
            console.log(data)
            this.complete = 'บันทึกคุณภาพชีวิตเรียบร้อย'
          }).catch((err) => {
              console.log(err)
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
    margin-left: 25vw;
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
