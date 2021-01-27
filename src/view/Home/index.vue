<template>
  <div>
    <router-link to="/upload?type=img">Upload_Img</router-link>
    <br>
    <router-link to="/upload?type=video">Upload_Video</router-link>
    哈哈哈哈哈
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style scoped>

</style>