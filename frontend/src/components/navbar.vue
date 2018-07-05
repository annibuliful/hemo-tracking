<template>
  <div class="header unselectable header-animated">
    <div class="header-brand">
      <div class="nav-item no-hover">
        <h6 class="title">
          <router-link to="/dashboard">
            <img src="https://med.mahidol.ac.th/sites/default/files/public/img/awards/international/ThaiHemophilia01.gif">
          </router-link>
        </h6>
      </div>
      <div class="nav-item nav-btn" id="header-btn" @click="toggle()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="header-nav" id="header-menu">
      <div class="nav-left">
        <div class="nav-item">
          <router-link to="injection">บันทึกการฉีดยา</router-link>
        </div>
        <div class="nav-item">
          <router-link to="injury">บันทึกอาการเลือดออก</router-link>
        </div>
        <div class="nav-item">
          <router-link to="life">คุณภาพชีวิต</router-link>
        </div>
        <div class="nav-item">
          <router-link to="calendar" href="#">ปฏิทิน</router-link>
        </div>
        <div class="nav-item">
          <a href="#">รายงานสรุปผล</a>
        </div>
      </div>
      <div class="nav-right">
        <div class="nav-item">
          <p @click="logout()">ออกจากระบบ</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import feathers from '../plugins/feathers';
  export default {
    methods: {
      toggle: function () {
        let dropDownMenu = document.getElementById('header-menu');

        // Toggle the nav-btn and the dropdown menu
        dropDownMenu.classList.toggle('active');
      },
      logout: function(){
      feathers.logout().then((data)=>{
        this.$router.push('/')
      }
      )
    }
    },
  }

</script>
<style scoped>
  .active {
    height: 40vh;
  }

  img {
    width: 60px;
  }

  .nav-item a {
    color: rgb(59, 59, 59)
  }

</style>
