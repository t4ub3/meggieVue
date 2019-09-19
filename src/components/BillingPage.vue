<template>
    <div class="box">
        Zuletzt bezahlt bei {{lastPaidMileage}} km.
        <br>
        <br>
        aktuelle Kosten: {{calcCosts}} €
        <br>
        <br>
        Ich habe für <input id="input-refuel" type="number" v-model="refuel"/> € getankt.
        <button @click="calcCostsWithRefuel">Verrechnen</button>
        <br>
        <br>
        Kosten mit Tanken: {{costs}} €
        <br>
        <br>
        <button @click="setMileageAsPaid">Ich habe bezahlt</button>
    </div>
    
</template>

<script>
import {getLastPaidMileage, setLastPaidMileage, readDriveHistory, setRefuelValue, getRefuelValue} from '../services/dbAccess.js';

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

        calcCostsWithRefuel() {
            setRefuelValue(this.refuel);
            let refuelValue = getRefuelValue();
            this.costs = calcCosts() - refuelValue;
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