<template>
  <div id="app">
    <history-page :drivingHistory="drivingHistory"/>
    <billing-page v-if="currentPage == 'BillingPage'" @click.native="currentPage = 'HistoryPage'" @close="backToHistory"/>
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
    overflow: auto;
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    --primary-dark: #2c3e50;
    --primary-bright: #3c70ad;
    --secondary: #3e7171;
    --background-dark: #f3f3f3;
    --background-bright: #fafafa;
    --text-bright: #fafafa;
    --text-dark: #1a252f;
  }
  .box {
    flex-grow: 1;
    font-size: 1.2rem;
    padding: 16px;
    background-color: var(--background-dark);
  }
  .button {
    padding: 8px 16px;
    appearance: none;
    background-color: var(--primary-dark);
    color: var(--text-bright);
    border-radius: 2px;
    border: none;
    font-size: 1.1rem;
  }
  .button:hover {
    background-color: var(--secondary);
  }
  .overlay_background {
    box-sizing: border-box;
    position: fixed;
    height: 100%;
    width: 100%;
    padding: 32px 32px 120px;
  }
  .overlay {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.7);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .overlay_header {
    padding: 8px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    background-color: var(--primary-bright);
    font-size: 1.7rem;
    color: var(--text-bright);
    flex-basis: auto;
  }
  .overlay_body {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    box-sizing: border-box;
    background-color: var(--background-bright);
    padding: 16px;
    flex-grow: 2;
  }
  .menu-button {
    width: 56px;
    height: 56px;        
    margin: 8px;

    border: none;
    border-radius: 50%;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.7);
    background-color: var(--primary-bright);
    color: var(--text-bright);
    font-size: 2rem;
  }
  .menu-button:hover {
      color: var(--secondary);
  }
  .text {
    font-size: 1.1rem;
    margin: 8px;
  }
</style>
