<template>
  <div>
    <navbar/>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <card
            icon="https://i.imgur.com/hcgD2QA.png"
            title="กราฟการฉีดยาของผู้ป่วย"
            link="/injection"
            color="#9575cd"
            />
        </div>
        <div class="col-4">
          <card
            icon="https://i.imgur.com/mJOL6ob.png"
            title="รายชื่อผู้ป่วย"
            link="/injection"
            color="#64b5f6"
            />
        </div>
        <div class="col-4">
          <card
            icon="https://i.imgur.com/MH0XJi2.png"
            title="อาการบาดเจ็บของผู้ป่วย"
            link="/injection"
            color="#e57373"
            />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import navbar from '../components/navbar';
  import card from '../components/dashboard-card';
  export default {
    components:{
      navbar,
      card
    }
  }
</script>
<style scoped>
.container{
    width: 70vw;
    margin-left: 15vw;
    padding-top: 50px;
}
.col-4{
    margin-top: 20px;
}
@media screen and (max-width: 800px) {
    .container {
      width: 90vw;
      margin-left: 5vw;
    }
  }

</style>
