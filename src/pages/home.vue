<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-03 13:46:52
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-04 11:09:04
-->
<template>
  <app-layout>
    <div slot="header" class="header">header</div>
    <div slot="footer" class="wrap">footer</div>
  </app-layout>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data(){
    return{

    }
  },
  computed: {
    ...mapState(["HOST"])
  },
  mounted(){
    
    this.getData()
  },

  methods:{
    ...mapActions([
      "getHostSync",
    ]),
    async getData(){
      const data = { content: { platform: "mweb" } };
      const res = await this.$post("/mall29/index.html", data);

      const d = 'ssssssssss'
    this.getHostSync(d)

    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  width: 375px;
  background: red;
}
.wrap{
  font-size: 40px;
}
</style>