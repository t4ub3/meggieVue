<template>
    <div class="header">
        {{pageMap[currentPage].name}}
    </div>
</template>

<script>
export default {
    name: "MenuHeader",
    props: {
        currentPage: String,
        pageMap: Object
    }
}
</script>

<style scoped>
    .header{
        background-color: #0B2F59;
        color: white;
        font-size: 26px;
        font-weight: bold;
    }
</style>