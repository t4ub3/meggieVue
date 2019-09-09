<template>
  <div id="app">
    <main-menu @select-page="showNewPage($event)"></main-menu>
    <Mileage-page v-if="currentPage == 'MileagePage'"/>
    <history-page v-if="currentPage == 'HistoryPage'"/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import MileagePage from './components/MileagePage'
import HistoryPage from './components/HistoryPage'


export default {
  name: 'app',
  components: {
    MainMenu,
    MileagePage,
    HistoryPage
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
  margin-top: 60px;
}
</style>
