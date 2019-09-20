<template>
    <div class="box">
        Zuletzt bezahlt bei {{lastPaidMileage}} km.
        <br>
        <br>
        Ich habe für <input id="input-refuel" type="number" v-model="refuel"/> € getankt.
        <button @click="refuelHandler">Verrechnen</button>
        <br>
        <br>
        aktuelle Kosten: {{costs}} €
        <br>
        <br>
        <button @click="payedHandler">Ich habe bezahlt</button>
    </div>
    
</template>

<script>
import {getLastPaidMileage, setLastPaidMileage, readDriveHistory, addRefuel, getRefuelData, clearRefuelData} from '../services/dbAccess.js';

export default {
    name: "BillingPage",

    data() {
        return {
            costs: 0,
            lastPaidMileage: getLastPaidMileage(),
            driveHistory: readDriveHistory(),
            refuel: 0
        }
    },

    methods: {        
        setMileageAsPaid() {
            let lastPaidMileage = this.driveHistory[this.driveHistory.length - 1].mileage;
            setLastPaidMileage(lastPaidMileage);
            this.lastPaidMileage = lastPaidMileage; //Wert aktualisieren, ohne neu aus LS zu laden
        },

        calcCosts() {
            let lastPaidMileage = this.lastPaidMileage;
            let filteredHistory = this.driveHistory.filter(function(currentDriveSession){
                return (currentDriveSession.driver === "stoffel" && currentDriveSession.mileage > lastPaidMileage);
            });
            let billedMileage = filteredHistory.reduce(function(currentSum, currentDriveSession) {
                return currentSum + currentDriveSession.distance;
            }, 0);
            let summedRefuelValue = getRefuelData().reduce(function(currentRefuel, currentData) {
                return currentRefuel + currentData;
            }, 0);
            return Math.round(100 * (billedMileage * 0.15 - summedRefuelValue)) / 100;
        },

        refuelHandler() {
            addRefuel(this.refuel);
            this.costs = this.calcCosts();
        },

        payedHandler() {
            clearRefuelData();
            this.setMileageAsPaid();
            this.costs = this.calcCosts();
            clearRefuelData();
        }
    },

    created() {
        this.costs = this.calcCosts();
    }
}
</script>

<style scoped>
    
</style>