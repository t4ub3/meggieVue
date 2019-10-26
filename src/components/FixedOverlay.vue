<template>
    <div class="fixed">
        <menu-item iconName="plus" @click.native="triggerPageSelect($event, 'MileagePage')"></menu-item>
        <menu-item iconName="dollar-sign" @click.native="triggerPageSelect($event, 'BillingPage')"></menu-item>
    </div>
</template>

<script>
import MenuItem from "./MenuItem.vue"
import {menuMixin} from "../mixins/MenuMixin.js"

export default {
    mixins: [menuMixin],
    name: "FixedOverlay",
    components: {
        MenuItem
    },
}
</script>

<style>
    .fixed {
        position: fixed;
        right: 24px;
        bottom: 24px;
    }
</style>