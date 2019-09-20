<template>
    <div class="box">
        Wer ist zuletzt gefahren?
        <br><br>
        <input id="radio-stoffel" name="radio-driven-last" type="radio" value="stoffel" v-model="driver"/>
        <label for="radio-stoffel">Stoffel</label>
        <input id="radio-neumann" name="radio-driven-last" type="radio" value="neumann" v-model="driver"/>
        <label for="radio-neumann">Neumann</label>
        <br><br>
        <label for="input-mileage">aktueller Kilometerstand:</label>
        <br>
        <input id="input-mileage" type="number" v-model="mileage"/>
        <br><br>
        <button @click="submitRecord">Absenden</button>
    </div>
</template>

<script>
import {addMileageRecord, getLastMileage} from '../services/dbAccess.js'
export default {
    name: "MileagePage",
    data () {
        return {
            driver: "stoffel",
            mileage: getLastMileage()
        }
    },
    methods: {
        submitRecord() {
            addMileageRecord(this.driver, this.mileage);
        }
    }
}
</script>

<style scoped>
    
</style>