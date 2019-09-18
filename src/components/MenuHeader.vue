<template>
    <div class="header">
        {{getName}}
    </div>
</template>

<script>
export default {
    name: "MenuHeader",
    props: {
        currentPage: String
    },
    computed: {
        getName(){
            switch (this.currentPage) {
                case "MileagePage":
                    return "Kilometer";
                case "HistoryPage":
                    return "Historie";
                default:
                    return "Abrechnung"
            }
        }
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