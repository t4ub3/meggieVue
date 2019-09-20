<template>
    <nav class="nav">
        <menu-item-top v-for="(pageData,page) in pageMap" 
                       :key="page" 
                       :siteName="pageData.name" 
                       @click.native="triggerPageSelect($event, page)" 
                       :isActive="currentPage===page">
        </menu-item-top>
    </nav>
</template>

<script>
import MenuItemTop from "./MenuItemTop.vue"
import {menuMixin} from "../mixins/MenuMixin.js"

export default {
    mixins: [menuMixin],
    name: "MainMenu",

    props: {
        pageMap: Object
    },

    components: {
        MenuItemTop
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