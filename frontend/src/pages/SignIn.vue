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
    <div class="col-12">
      <button class="btn font-prompt" @click="signIn()">เข้าสู่ระบบ</button>
      <br>
      <p style="color:red; text-align:center; font-size: 18px;">{{err}}</p>
    </div>
  </div>
</template>

<script>
  import feathers from '../plugins/feathers.js'
  export default {
    data: function () {
      return {
        username: '',
        password: '',
        err: ''
      }
    },
    methods: {
      signIn() {
          feathers.authenticate({
              strategy: 'local',
              email: this.username,
              password: this.password
          }).then((data)=>{
              this.$router.push('/dashboard')
          }).catch(()=>{
              this.err = 'ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง'
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

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  input {
    font-size: 15px;
  }

  .container {
    width: 40vw;
    margin-left: 30vw;
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
    background-color: rgb(134, 31, 27);
  }

  @media screen and (max-width: 800px) {
    .container {
      width: 90vw;
      margin-left: 5vw;
    }
  }

</style>
