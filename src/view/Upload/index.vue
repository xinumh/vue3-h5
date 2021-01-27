<template>
  <div>
    <h1>upload</h1>
    <p>count: {{count}}</p>
    <button @click="onClick">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  /**
   * setup函数是处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数
   * 也就说在 setup函数中是无法 使用 data 和 methods 中的数据和方法的
   * 在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用
   */
  setup (props) {
    const count = ref(0)
    console.log('props', props)
    const onClick = () => {
      console.log('count', count)
      count.value ++
    }
    return {
      count,
      onClick
    }
  }
})
</script>

<style scoped>

</style>