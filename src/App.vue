<template>
  <div id="app">
    <mq-layout mq=lg+>
      <main-menu-top @select-page="showNewPage($event)" :currentPage="currentPage" :pageMap="pageMap"></main-menu-top>
    </mq-layout>
    <mq-layout mq=sm>
      <menu-header :currentPage='currentPage' :pageMap="pageMap"></menu-header>
    </mq-layout>
    <Mileage-page v-if="currentPage == 'MileagePage'"/>
    <history-page v-if="currentPage == 'HistoryPage'"/>
    <billing-page v-if="currentPage == 'BillingPage'"/>
    <mq-layout mq=sm>
      <main-menu @select-page="showNewPage($event)" :currentPage="currentPage" :pageMap="pageMap"></main-menu>
    </mq-layout>
  </div>
</template>

<script>
import MenuHeader from './components/MenuHeader.vue'
import MainMenu from './components/MainMenu.vue'
import MainMenuTop from './components/MainMenuTop'
import MileagePage from './components/MileagePage.vue'
import HistoryPage from './components/HistoryPage.vue'
import BillingPage from './components/BillingPage.vue'
import {createPageMap} from './utils/maps.js'


export default {
  name: 'app',

  components: {
    MenuHeader,
    MainMenu,
    MainMenuTop,
    MileagePage,
    HistoryPage,
    BillingPage
  },

  data () {
    return {
      currentPage: "MileagePage",
      pageMap: createPageMap()
    };
  },
  
  methods: {
    showNewPage (pageName) {
      this.currentPage = pageName;
    }
  },
}
</script>

<style>
body {
  margin: 0px;
}
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
  flex-grow: 1;
  padding: 10px;
  background-color: #e5e5e5;
  border-top: solid 3px #0B2F59;
  border-bottom: solid 3px #0B2F59;
}
</style>
