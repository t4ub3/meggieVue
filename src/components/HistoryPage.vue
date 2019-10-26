<template>
    <div class="box">
        <table class="table">
            <tr class="row" v-for="drivingRecord in drivingHistoryReverse" :key="drivingRecord.mileage">
                <td class="column leftColumn">{{drivingRecord.mileage}} km</td>
                <td class="column">-</td>
                <td class="column rightColumn">{{drivingRecord.driver}}</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: "HistoryPage",

    props: {
        drivingHistory: Array,
    },

    computed: {
        drivingHistoryReverse() {
            return [...this.drivingHistory].reverse();
        }
    }
}
</script>

<style scoped>
    .table {
        margin: 0 auto;
        border-collapse: collapse;
    }
    .row:not(:last-child) .column {
        border-bottom: 1px solid darkgray;
    }
    .column {
        padding: 8px;
    }
    .leftColumn {
        padding-left: 16px;
        text-align: right;
    }
    .rightColumn {
        padding-right: 16px;
        text-align: left;
    }
</style>