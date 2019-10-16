<template>
    <div class="fixed">
        <menu-item iconName="plus">123</menu-item>
        <menu-item iconName="euro-sign">456</menu-item>
    </div>
</template>

<script>
import MenuItem from "./MenuItem.vue"
import {menuMixin} from "../mixins/MenuMixin.js"

export default {
    name: "FixedOverlay",
    components: {
        MenuItem
    },
}
</script>

<style>
    .fixed {
        position: fixed;
        right: 20px;
        bottom: 20px;
    }
</style>