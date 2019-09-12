<template>
    <div class="box">
        <ul>
            <li v-for="(drivingRecord,index) in drivingHistory" :key="index">{{drivingRecord.driver}}: {{drivingRecord.mileage}}</li>
        </ul>
    </div>
</template>

<script>
import {readDriveHistory} from '../services/dbAccess';

export default {
    name: "HistoryPage",

    data () {
        return {
            drivingHistory: readDriveHistory()
        }
    },

    methods: {

    }
}
</script>

<style scoped>
    .box {
        padding: 10px;
        background-color: #cfcfcf;
        border-top: solid 3px #0B2F59;
        border-bottom: solid 3px #0B2F59;
    }
</style>