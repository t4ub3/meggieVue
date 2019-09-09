<template>
    <nav>
        <menu-item :text="'Kilometerstand'" @click.native="triggerPageSelect($event, 'MileagePage')" ></menu-item>
        <menu-item :text="'Historie'" @click.native="triggerPageSelect($event, 'HistoryPage')"></menu-item>
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
    }
}
</script>

<style scoped>

</style>