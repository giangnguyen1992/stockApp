<template>
  <div>
    <app-header :change="changeComp"></app-header>
    <component :is="selectedComp"></component>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Intro from './components/Intro.vue';
  import Portfolio from './components/Portfolio.vue';
  import Stocks from './components/Stocks.vue';

  export default {
    data() {
      return {
        selectedComp: 'app-intro'
      }
    },
    methods: {
      changeComp(component) {
        this.selectedComp = component;
      }
    },
    components: {
      'app-header': Header,
      'app-intro': Intro,
      'app-portfolio': Portfolio,
      'app-stocks': Stocks
    }
  }
</script>

<style>

</style>
