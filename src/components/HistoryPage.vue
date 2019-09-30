<template>
    <div class="box">
        <table class="table">
            <tr class="row" v-for="(drivingRecord,index) in drivingHistory" :key="index">
                <td class="column leftColumn">{{drivingRecord.mileage}} km</td>
                <td class="column">-</td>
                <td class="column rightColumn">{{drivingRecord.driver}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import {readDriveHistory} from '../services/dbAccess';

export default {
    name: "HistoryPage",

    data() {
        return {
            drivingHistory: []
        }
    },

    async created() {
        this.drivingHistory = await readDriveHistory();
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
        padding: 5px;
    }
    .leftColumn {
        text-align: right;
    }
    .rightColumn {
        text-align: left;
    }
</style>