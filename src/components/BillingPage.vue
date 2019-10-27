<template>
    <div class="overlay_background">
        <div class="overlay" @click.stop>
            <overlay-header :text="'Abrechnung'"></overlay-header>
            <div class="overlay_body">
                <div class="text">Zuletzt bezahlt bei {{lastPaidMileage}} km.</div>
                <div class="text">
                    Ich habe für
                    <br>
                    <input id="input-refuel" type="number" step="0.01" v-model="refuel"/> €
                    <br>
                    getankt.
                </div>
                <button class="button" @click="refuelHandler">Verrechnen</button>
                <br>
                <br>
                <div class="text">aktuelle Kosten: {{costs}} €</div>
                <button class="button" @click="payedHandler">{{submitButtonText}}</button>
            </div>
        </div>
    </div>

     
</template>

<script>
import {getLastPaidMileage, setLastPaidMileage, readDriveHistory, addRefuel, getRefuelData, clearRefuelData} from '../services/dbAccess.js';
import OverlayHeader from './OverlayHeader'

export default {
    name: "BillingPage",

    components: {OverlayHeader},

    data() {
        return {
            costs: 0,
            lastPaidMileage: 0,
            driveHistory: [],
            refuel: 0,
            submitButtonText: "Ich habe bezahlt",
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
            return parseFloat(Math.round(100 * (billedMileage * 0.25 - summedRefuelValue)) / 100).toFixed(2);
        },

        async refuelHandler() {
            await addRefuel(this.refuel);
            this.costs = await this.calcCosts();
        },

        async payedHandler() {
            this.submitButtonText="Speichere ...";
            await clearRefuelData();
            await this.setMileageAsPaid();
            this.costs = await this.calcCosts();
            this.$emit("close");
        }
    },

    async created() {
        this.lastPaidMileage = await getLastPaidMileage();
        this.driveHistory = await readDriveHistory();
        this.costs = await this.calcCosts();
    }
}
</script>
