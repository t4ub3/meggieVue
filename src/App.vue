<template>
  <div id="app">
    <menu-item :text="'Kilometerstand'" @click.native="showMileagePage"></menu-item>
    <menu-item :text="'Historie'" @click.native="showHistoryPage"></menu-item>
    <Mileage-page v-if="currentPage == 'MileagePage'"/>
    <history-page v-if="currentPage == 'HistoryPage'"/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import MenuItem from './components/MenuItem.vue'
import MileagePage from './components/MileagePage'
import HistoryPage from './components/HistoryPage'


export default {
  name: 'app',
  components: {
    MenuItem,
    MileagePage,
    HistoryPage
  },
  data () {
    return {
      currentPage: "MileagePage"
    };
  },
  methods: {
    showMileagePage () {
      this.currentPage = "MileagePage";
    },
    showHistoryPage () {
      this.currentPage = "HistoryPage"
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
