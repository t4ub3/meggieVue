<template>
    <div class="box">
        {{lastPaidMileage}}
        <br>
        {{calcCosts}} €
        <br>
        <button @click="setMileageAsPaid">i have payed</button>
    </div>
    
</template>

<script>
import {getLastPaidMileage, setLastPaidMileage, readDriveHistory} from '../services/dbAccess.js';

export default {
    name: "BillingPage",

    data() {
        return {
            costs: 0,
            lastPaidMileage: getLastPaidMileage(),
            driveHistory: readDriveHistory()
        }
    },

    methods: {
        setMileageAsPaid() {
            let lastPaidMileage = this.driveHistory[this.driveHistory.length - 1].mileage;
            setLastPaidMileage(lastPaidMileage);
            this.lastPaidMileage = lastPaidMileage; //Wert aktualisieren, ohne neu aus LS zu laden
        }
    },

    computed: {
        calcCosts() {
            let lastPaidMileage = this.lastPaidMileage;
            let filteredHistory = this.driveHistory.filter(function(currentDriveSession){
                return (currentDriveSession.driver === "stoffel" && currentDriveSession.mileage > lastPaidMileage);
            });

            let billedMileage = filteredHistory.reduce(function(currentSum, currentDriveSession) {
                return currentSum + currentDriveSession.distance;
            }, 0);

            return Math.round(billedMileage * 15) / 100; //zum runden auf 2 Dezimalstellen
        }
    }
}
</script>

<style scoped>
    
</style>