<template>
  <div class="homeBox">
    <!-- 带冒号与不带冒号的区别 带冒号的会从data中寻找值，不带冒号传过去的是一个死的字符串 -->
    <Content father ="home"></Content>
  </div>
</template>

<script>
import Content from '@/components/content'
export default {
  name:'',
  components: {Content},
  data(){
   return {
     
   }
  }
}
</script>

<style lang='less' scoped>

</style>
