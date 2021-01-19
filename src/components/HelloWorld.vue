<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
    <van-button type="primary" size="small">按 钮</van-button>
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <span>11111111111</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  h5 {
    height: 100px;
    line-height: 100px;
    background: lightcoral;
  }
  span {
    color: @text-color;
  }
}
</style>
