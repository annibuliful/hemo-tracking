<template>
   <div>
      <navbar/>
      <div class="container">
         <vue-event-calendar :events="events" class="calendar">
            <template slot-scope="props">
               <div v-for="(event, index) in props.showEvents" class="event-item" :key="index">
                  <div v-if="event.type === 'injection'">
                     <p class="title">{{event.title}}
                        <span class="event-date">{{event.date}}</span>
                     </p>
                     <p class="detail">{{event.reasonInjection}}</p>
                     <p class="detail">{{event.medicineName}}</p>
                     <p class="detail">{{event.medicineVolume}}</p>
                  </div>
                  <div v-if="event.type === 'injury'">
                     <p class="title">{{event.title}}
                        <span class="event-date">{{event.date}}</span>
                     </p>
                     <p class="detail">{{event.injuryParts}}</p>
                     <p class="detail">{{event.painLevel}}</p>
                  </div>
                  <div v-if="event.type === 'life'">
                     <p class="title">{{event.title}}
                        <span class="event-date">{{event.date}}</span>
                     </p>
                     <p class="life-detail">
                        <span class="life-level">ความเจ็บปวด:</span>
                        <PainLevel :level="event.painLevel"/>
                     </p>
                     <p class="life-detail">
                        <span class="life-level">กิจกรรมที่ทำประจำ:</span>
                        <ActivityLevel :level="event.activityLevel"/>
                     </p>
                     <p class="life-detail">
                        <span class="life-level">การเคลื่อนไหว:</span>
                        <MovementLevel :level="event.movementLevel"/>
                     </p>
                     <p class="life-detail">
                        <span class="life-level">การดูแลตัวเอง:</span>
                        <TakeCareLevel :level="event.takecareLevel"/>
                     </p>
                     <p class="life-detail">
                        <span class="life-level">ความเครียด:</span>
                        <StressedLevel :level="event.stressedLevel"/>
                     </p>
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
   import PainLevel from '../components/life-level/pain';
   import ActivityLevel from '../components/life-level/activity';
   import MovementLevel from '../components/life-level/movement';
   import TakeCareLevel from '../components/life-level/takecare';
   import StressedLevel from '../components/life-level/stressed';
   import moment from 'moment'
   export default {
     components: {
       Navbar,
       PainLevel,
       ActivityLevel,
       MovementLevel,
       TakeCareLevel,
       StressedLevel
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
         const lifeQuality = data[2].data.map((event) => {
           console.log(event)
           return {
             title: 'คุณภาพชีวิต',
             type: 'life',
             date: moment(event.injuryDate).format('YYYY/MM/DD'),
             activityLevel: event.activity,
             movementLevel: event.movement,
             painLevel: event.pain,
             stressedLevel: event.stressed,
             takecareLevel: event.takecare
           }
         })
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
         this.events = injectionEvents.concat(injuryEvents, lifeQuality);
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
   .life-detail {
   padding-top: 20px;
   }
   .calendar {
   padding-top: 30px;
   }
   .life-level {
   font-weight: bold;
   }
   .event-date {
   text-align: right;
   padding-left: 70px;
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
