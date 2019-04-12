<template>
<div class="itemBox">
  <Content father="item"></Content>
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
  },
  created() {
    this.$store.commit('TIME')
  }
}
</script>

<style lang='less' scoped>

</style>
