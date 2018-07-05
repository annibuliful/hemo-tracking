<template>
  <div>
    <navbar/>
    <div class="container">
      <div class="col-12 ignore-screen logo">
        <img src="../assets/injection.svg">
        <br>
        <p class="title" style="text-align: center">บันทึกการฉีดยา</p>
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
          <p class="font">เหตุผลที่ใช้ยา:</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="reason">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">ผู้ฉีด:</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="personInjecting">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">ยาที่ใช้</p>
        </div>
        <div class="col-7 ignore-screen input-control">
          <select class="select" placeholder="Choose one" v-model="medicineName">
            <option value="" disabled hidden>ชื่อยา</option>
            <option value="Alphanate">Alphanate</option>
            <option value="Recombinate">Recombinate</option>
            <option value="Haemoctin-m">Haemoctin-m</option>
            <option value="Red cross">Red cross</option>
            <option value="FEiBA">FEiBA</option>
            <option value="NOVO">NOVO</option>
          </select>
          <select class="select" placeholder="Choose one" v-model="medicineVolume">
            <option value="" disabled hidden>ขนาดยา</option>
            <option value="250">250 IU</option>
            <option value="500">500 IU</option>
            <option value="1000">1000 IU</option>
          </select>
          <select class="select" placeholder="Choose one" v-model="medicineNumber">
            <option value="" disabled hidden>จำนวน</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">อาการและตำแหน่งเมื่อมีเลือดออก
            <br>/สาเหตุ:</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="injuryPartAndCause">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">จำนวนครั้งที่แทงเส้น</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="injectingNumber">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">การดูแลอื่นๆ</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="otherTakeCare">
        </div>
      </div>
      <div class="row ignore-screen level">
        <div class="col-5 ignore-screen level-item">
          <p class="font">การตอบสนองต่อการรักษา</p>
        </div>
        <div class="col-7 ignore-screen level-item input-control">
          <input type="text" v-model="effect">
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
    injectionService
  } from '../plugins/feathers.js'
  import moment from 'moment'
  import Navbar from '../components/navbar';
  export default {
    components: {
      Navbar
    },
    data: function () {
      return {
        date: '',
        time: '',
        reason: '',
        personInjecting: '',
        medicineName: '',
        medicineVolume: '',
        medicineNumber: '',
        otherMedicind: [],
        injuryPartAndCause: '',
        injectingNumber: '',
        otherTakeCare: '',
        effect: '',
        remark: '',
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
          injectionService.create({
            jwt: data.accessToken,
            injuryDate: isoFormat,
            injuryTime: this.time,
            reasonInjection: this.reason,
            whoInjecting: this.personInjecting,
            medicine: {
              name: this.medicineName,
              volume: this.medicineVolume,
              number: this.medicineNumber
            },
            injuryPartsAndCause: this.injuryPartAndCause,
            injectionNumber: this.injectingNumber,
            otherTakeCare: this.otherTakeCare,
            effect: this.effect,
            remark: this.remark
          }).then((data) => {
            this.complete = 'บันทึกการฉีดยาเรียบร้อย'
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
