<template>
  <air-scroll ref="scroll" pullDownRefresh @pullingDown="load" md>
    <yd-button type="primary">安缪</yd-button>
    <p class="p-4 f-11">ww</p>
    <p>{{hehe}}</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
    <p>ww</p>
  </air-scroll>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  hehe = 'hehe'

  load() {
    setTimeout(() => this.$refs.scroll.forceUpdate(true), 2000)
  }
}
</script>
