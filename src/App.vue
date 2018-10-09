<template>
  <div id="app" flex="dir:top">
    <div flex-box="0">1</div>
    <div :class="['content-view']" flex-box="1">
      <router-view/>
    </div>
    <div flex-box="0">2</div>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
}
</script>
<style lang="less">
</style>
