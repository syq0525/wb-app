<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-03 09:08:18
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-03 14:58:20
-->
<template>
  <div id="app">
    <keep-alive :exclude="/^ex-/">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style lang="scss">

</style>
