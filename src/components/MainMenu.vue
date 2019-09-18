<template>
    <nav class="nav">
        <menu-item iconName="tachometer-alt" @click.native="triggerPageSelect($event, 'MileagePage')" :isActive="currentPage==='MileagePage'"></menu-item>
        <menu-item iconName="table" @click.native="triggerPageSelect($event, 'HistoryPage')" :isActive="currentPage==='HistoryPage'"></menu-item>
        <menu-item iconName="euro-sign" @click.native="triggerPageSelect($event, 'BillingPage')" :isActive="currentPage==='BillingPage'"></menu-item>
    </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue"
import {menuMixin} from "../mixins/MenuMixin.js"

export default {
    mixins: [menuMixin],
    name: "MainMenu",

    components: {
        MenuItem
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