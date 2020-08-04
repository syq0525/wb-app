<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-03 09:08:18
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-03 15:17:09
-->

<template>
  <div class="flex-container" :style="{'background':bgcolor}">
    <header class="header">
      <slot name="header"></slot>
    </header>

    <main class="main">
      <slot></slot>
    </main>

    <footer class="footer" >
      <div class="footer-box" ref="footerBox">
        <slot name="footer"></slot>
      </div>
      <div class="ipx-height" v-if="bottom>0" :style="{'background':ipxcolor}"></div>
    </footer>
    <slot name="aside"></slot>
  </div>
</template>

<script>
export default {
  name: "app-layout",
  props: {
    bgcolor: { type: String, default: "#fff" },
    ipxcolor: { type: String, default: "#fff" },
  },
  data() {
    return {
      bottom: 0,
    };
  },
  mounted() {
    this.setPageSize();
  },
  methods: {

    setPageSize() {
      this.$nextTick(() => {
        this.bottom = this.$refs.footerBox.offsetHeight;
      });
    }
  }
};
</script>

<style lang="scss">

.flex-container {
  @include flexBox(nowrap);
  @include flexDir(column);
  width: 100%;
  height: 100vh;
  .header {
    z-index: 10;
  }
  .main {
    @include flex;
    width: 100%;
    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .footer {
    z-index: 10;
  }
}
</style>
