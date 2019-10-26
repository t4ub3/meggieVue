<template>
  <div id="app">
    <history-page :drivingHistory="drivingHistory"/>
    <billing-page v-if="currentPage == 'BillingPage'"/>
    <mileage-page v-if="currentPage == 'MileagePage'" @click.native="currentPage = 'HistoryPage'" @close="backToHistory"/>
    <FixedOverlay @select-page="showNewPage($event)" :currentPage="currentPage"></FixedOverlay>
  </div>
</template>

<script>
import MileagePage from './components/MileagePage.vue'
import HistoryPage from './components/HistoryPage.vue'
import BillingPage from './components/BillingPage.vue'
import FixedOverlay from './components/FixedOverlay.vue'
import {createPageMap} from './utils/maps.js'
import {readDriveHistory} from './services/dbAccess';

export default {
  name: 'app',
  components: {
    MileagePage,
    HistoryPage,
    BillingPage,
    FixedOverlay
  },

  data () {
    return {
      currentPage: "",
      pageMap: createPageMap(),
      drivingHistory: [],
    };
  },
  
  methods: {
    showNewPage (pageName) {
      this.currentPage = pageName;
    },
    async backToHistory () {
      this.currentPage = 'HistoryPage';
      this.drivingHistory = await readDriveHistory();
    }
  },

  async created() {
      this.drivingHistory = await readDriveHistory();
  }
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
  overflow: scroll;
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
  padding: 16px;
  background-color: #f3f3f3;
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
.overlay_background {
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  width: 100%;
  padding: 32px;
}
.overlay_page {
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.7);
  background-color: white;
  padding: 16px;
  height: 75%;
}

</style>
