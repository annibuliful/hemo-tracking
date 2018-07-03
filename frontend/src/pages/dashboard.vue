<template>
<div>
  <navbar/>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <card-component icon="https://i.imgur.com/Lpr9rrw.png" title="บันทึกการฉีดยา" link="/injection" color="#66bb6a"/>
      </div>
      <div class="col-4">
        <card-component icon="https://i.imgur.com/UUWScH1.png" title="บันทึกอาการเลือดออก" link="/injury" color="#ffa000"/>
      </div>
      <div class="col-4">
        <card-component icon="https://i.imgur.com/bGdjEH7.png" title="คุณภาพชีวิต" link="/life" color="#f06292"/>
      </div>
      <div class="col-4 offset-2">
        <card-component icon="https://i.imgur.com/ZWUFPJW.png" title="ปฏิทิน" link="/" color="#7e57c2"/>
      </div>
      <div class="col-4">
        <card-component icon="https://i.imgur.com/hcaoriN.png" title="สิทธิขั้นตอน" link="/permission" color="#ffd54f"/>
      </div>
      <!-- <div class="col-4">
        <card-component icon="https://i.imgur.com/Z1GLgVI.png" title="รายงานสรุปผล" link="/" color="#42a5f5"/>
      </div> -->
    </div>
  </div>
</div>
</template>
<script>
  import CardComponent from '../components/dashboard-card'
  import Navbar from '../components/navbar'
  export default {
    components: {
      CardComponent,
      Navbar
    }
  }

</script>
<style scoped>
.container{
    width: 60vw;
    margin-left: 20vw;
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
