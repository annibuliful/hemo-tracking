<template>
  <div>
    <navbar/>
    <div class="container">
      <vue-event-calendar :events="events" class="calendar">
        <template slot-scope="props">
          <div v-for="(event, index) in props.showEvents" class="event-item" :key="index">
            <div v-if="event.type === 'injection'">
              <p class="title">{{event.title}}
                <span>{{event.date}}</span>
              </p>
              <p class="detail">{{event.reasonInjection}}</p>
              <p class="detail">{{event.medicineName}}</p>
              <p class="detail">{{event.medicineVolume}}</p>
            </div>

            <div v-if="event.type === 'injury'">
              <p class="title">{{event.title}}
                <span>{{event.date}}</span>
              </p>
              <p class="detail">{{event.injuryParts}}</p>
              <p class="detail">{{event.painLevel}}</p>
            </div>
          </div>
        </template>
      </vue-event-calendar>
    </div>
  </div>
</template>

<script>
  import feathers, {
    injectionService,
    injuryService,
    lifeQualityService
  } from '../plugins/feathers.js';
  import Navbar from '../components/navbar';
  import moment from 'moment'
  export default {
    components: {
      Navbar
    },
    created() {
      Promise.all([
        injectionService.find({
          query: {
            userId: localStorage.getItem('feathers-jwt')
          }
        }),
        injuryService.find({
          query: {
            userId: localStorage.getItem('feathers-jwt')
          }
        }),
        lifeQualityService.find({
          query: {
            userId: localStorage.getItem('feathers-jwt')
          }
        })
      ]).then((data) => {
        console.log(data)
        const injuryEvents = data[1].data.map((event) => {
          return {
            title: 'อาการบาดเจ็บ',
            type: 'injury',
            date: moment(event.injuryDate).format('YYYY/MM/DD'),
            injuryParts: `เลือดออก: ${event.injuryParts}`,
            painLevel: `ระดับความเจ็บ: ${event.painLevel}`
          }
        })
        const injectionEvents = data[0].data.map((event) => {
          return {
            title: 'บันทึกการฉีดยา',
            type: 'injection',
            date: moment(event.injuryDate).format('YYYY/MM/DD'),
            medicineName: `ชื่อยา: ${event.medicine.name}`,
            medicineVolume: `ขนาด: ${event.medicine.volume} IU`,
            reasonInjection: `เหตุผล: ${event.reasonInjection}`,
          }
        })
        this.events = injectionEvents.concat(injuryEvents);
      })
    },
    data() {
      return {
        events: [],
        today: moment().format('YYYY/MM/DD')
      }
    }
  }

</script>
<style scoped>
  .calendar {
    padding-top: 30px;
  }

  span {
    text-align: right;
    padding-left: 30px;
  }

  .container {
    width: 80vw;
    margin-left: 10vw;
    padding-top: 10px;
  }

  @media screen and (max-width: 800px) {
    .container {
      width: 90vw;
      margin-left: 5vw;
    }
  }

</style>
