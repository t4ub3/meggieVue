<template>
    <div class="overlay_background">
        <div class="overlay_page">
            Zuletzt bezahlt bei {{lastPaidMileage}} km.
            <br>
            <br>
            Ich habe für <input id="input-refuel" type="number" v-model="refuel"/> € getankt.
            <br>
            <br>
            <button class="button" @click="refuelHandler">Verrechnen</button>
            <br>
            <br>
            <br>
            aktuelle Kosten: {{costs}} €
            <br>
            <br>
            <button class="button" @click="payedHandler">Ich habe bezahlt</button>
        </div>
    </div>

     
</template>

<script>
import {getLastPaidMileage, setLastPaidMileage, readDriveHistory, addRefuel, getRefuelData, clearRefuelData} from '../services/dbAccess.js';

export default {
    name: "BillingPage",

    data() {
        return {
            costs: 0,
            lastPaidMileage: 0,
            driveHistory: [],
            refuel: 0
        }
    },

    methods: {        
        async setMileageAsPaid() {
            let lastPaidMileage = this.driveHistory[this.driveHistory.length - 1].mileage;
            await setLastPaidMileage(lastPaidMileage);
            this.lastPaidMileage = lastPaidMileage; //Wert aktualisieren, ohne neu aus LS zu laden
        },

        async calcCosts() {
            let lastPaidMileage = this.lastPaidMileage;
            let filteredHistory = this.driveHistory.filter(function(currentDriveSession){
                return (currentDriveSession.driver === "Stoffel" && currentDriveSession.mileage > lastPaidMileage);
            });
            let billedMileage = filteredHistory.reduce(function(currentSum, currentDriveSession) {
                return currentSum + currentDriveSession.distance;
            }, 0);
            let summedRefuelValue = (await getRefuelData()).reduce(function(currentRefuel, currentData) {
                return currentRefuel + currentData;
            }, 0);
            return parseFloat(Math.round(100 * (billedMileage * 0.15 - summedRefuelValue)) / 100).toFixed(2);
        },

        async refuelHandler() {
            await addRefuel(this.refuel);
            this.costs = await this.calcCosts();
        },

        async payedHandler() {
            await clearRefuelData();
            await this.setMileageAsPaid();
            this.costs = await this.calcCosts();
        }
    },

    async created() {
        this.lastPaidMileage = await getLastPaidMileage();
        this.driveHistory = await readDriveHistory();
        this.costs = await this.calcCosts();
    }
}
</script>

<style scoped>
    
</style>