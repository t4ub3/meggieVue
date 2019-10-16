<template>
  <div id="app">
    <history-page v-if="currentPage == 'HistoryPage'"/>
    <billing-page v-if="currentPage == 'BillingPage'"/>
    <Mileage-page v-if="currentPage == 'MileagePage'"/>
    <FixedOverlay></FixedOverlay>

  </div>
</template>

<script>
import MenuHeader from './components/MenuHeader.vue'
import MainMenu from './components/MainMenu.vue'
import MainMenuTop from './components/MainMenuTop'
import MileagePage from './components/MileagePage.vue'
import HistoryPage from './components/HistoryPage.vue'
import BillingPage from './components/BillingPage.vue'
import FixedOverlay from './components/FixedOverlay.vue'
import {createPageMap} from './utils/maps.js'


export default {
  name: 'app',

  components: {
    MenuHeader,
    MainMenu,
    MainMenuTop,
    MileagePage,
    HistoryPage,
    BillingPage,
    FixedOverlay
  },

  data () {
    return {
      currentPage: "HistoryPage",
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
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
  flex-grow: 1;
  font-size: 1.2rem;
  padding: 10px;
  background-color: #e5e5e5;
}
.button {
  padding: 8px 16px;
  appearance: none;
  background-color: #0B2F59;
  color: white;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
}
.button:hover {
  background-color: #409589;
}
</style>
