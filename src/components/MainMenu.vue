<template>
    <nav class="nav">
        <menu-item v-for="(pageData,page) in pageMap" 
                   :key="page" 
                   :iconName="pageData.icon" 
                   @click.native="triggerPageSelect($event, page)" 
                   :isActive="currentPage===page">
        </menu-item>
    </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue"
import {menuMixin} from "../mixins/MenuMixin.js"

export default {
    mixins: [menuMixin],
    name: "MainMenu",

    props: {
        pageMap: Object
    },

    components: {
        MenuItem
    },
}
</script>

<style scoped>
    .nav {
        flex-grow: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>