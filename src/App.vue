<template>
  <div id="app">
    <main-menu @select-page="showNewPage($event)" :currentPage="currentPage"></main-menu>
    <Mileage-page v-if="currentPage == 'MileagePage'"/>
    <history-page v-if="currentPage == 'HistoryPage'"/>
    <billing-page v-if="currentPage == 'BillingPage'"/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import MileagePage from './components/MileagePage.vue'
import HistoryPage from './components/HistoryPage.vue'
import BillingPage from './components/BillingPage.vue'


export default {
  name: 'app',
  components: {
    MainMenu,
    MileagePage,
    HistoryPage,
    BillingPage
  },
  data () {
    return {
      currentPage: "MileagePage"
    };
  },
  methods: {
    showNewPage (pageName) {
      this.currentPage = pageName;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
