<template>
    <nav class="nav">
        <menu-item-top siteName="Kilometer" @click.native="triggerPageSelect($event, 'MileagePage')" :isActive="currentPage==='MileagePage'"></menu-item-top>
        <menu-item-top siteName="Historie" @click.native="triggerPageSelect($event, 'HistoryPage')" :isActive="currentPage==='HistoryPage'"></menu-item-top>
        <menu-item-top siteName="Abrechnung" @click.native="triggerPageSelect($event, 'BillingPage')" :isActive="currentPage==='BillingPage'"></menu-item-top>
    </nav>
</template>

<script>
import MenuItemTop from "./MenuItemTop.vue"
import {menuMixin} from "../mixins/MenuMixin.js"

export default {
    mixins: [menuMixin],
    name: "MainMenu",

    components: {
        MenuItemTop
    },
}
</script>

<style scoped>
    .nav{
        flex-grow: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>