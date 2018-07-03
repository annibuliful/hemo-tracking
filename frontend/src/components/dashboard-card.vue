<template>
  <div class="card" :style="style">
    <router-link :to="link">
      <div class="content">
        <div class="row">
          <img :src="icon" class="level" id="projectlogo" />
          <p class="font">{{title}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    props: ['link', 'title', 'icon', 'color'],
    computed: {
      style() {
        return `background-color: ${this.color};border-color: ${this.color}`;
      }
    },
  }

</script>
<style scoped>
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  p {
    text-align: center;
    color: black;
    font-size: 20px;
  }

</style>
