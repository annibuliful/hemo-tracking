<template>
<div>
  <p v-if="level === 1">ไม่มีปัญหาในการเดิน</p>
  <p v-if="level === 2">มีปัญหาในการเดินเล็กน้อย</p>
  <p v-if="level === 3">มีปัญหาในการเดินปานกลาง</p>
  <p v-if="level === 4">มีปัญหาในการเดินอย่างมาก</p>
  <p v-if="level === 5">ไม่สามารถเดินได้</p>
</div>
</template>
<script>
export default {
  props: ['level']
}
</script>
