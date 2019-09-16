<template>
    <nav class="nav">
        <menu-item iconName="tachometer-alt" @click.native="triggerPageSelect($event, 'MileagePage')" :isActive="currentPage==='MileagePage'"></menu-item>
        <menu-item iconName="table" @click.native="triggerPageSelect($event, 'HistoryPage')" :isActive="currentPage==='HistoryPage'"></menu-item>
        <menu-item iconName="euro-sign" @click.native="triggerPageSelect($event, 'BillingPage')" :isActive="currentPage==='BillingPage'"></menu-item>
    </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue"

export default {
    name: "MainMenu",

    components: {
        MenuItem
    },

    methods: {
        triggerPageSelect: function(event, pageName) {
            this.$emit("select-page", pageName);
        }
    },

    props: {
        currentPage: String
    }
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