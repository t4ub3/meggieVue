<template>
    <button @click="openHistory">
        {{text}}
    </button>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        text: String
    },
    methods: {
        openHistory() {

        }
    }

}
</script>

<style scoped>

</style>