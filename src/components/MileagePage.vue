<template>
    <div class="overlay_background">
        <div class="overlay_page" @click.stop>
            Wer ist zuletzt gefahren?
            <br><br>
            <input id="radio-stoffel" name="radio-driven-last" type="radio" value="Stoffel" v-model="driver"/>
            <label for="radio-stoffel">Stoffel</label>
            <input id="radio-neumann" name="radio-driven-last" type="radio" value="Neumann" v-model="driver"/>
            <label for="radio-neumann">Neumann</label>
            <br><br>
            <label for="input-mileage">aktueller Kilometerstand:</label>
            <br>
            <input id="input-mileage" type="number" v-model="mileage"/>
            <br><br>
            <button class="button" @click="submitRecord">{{submitButtonText}}</button>
        </div>
    </div>    
</template>

<script>

    import {addMileageRecord, getLastMileage} from '../services/dbAccess.js'

    export default {
        name: "MileagePage",

        data() {
            return {
                driver: "Stoffel",
                mileage: 0,
                oldMileage: 0,
                submitButtonText: "Absenden",
            }
        },

        async created() {
            this.mileage = this.oldMileage = await getLastMileage();
        },
        
        methods: {
            async submitRecord() {
                if (this.oldMileage <= this.mileage) {
                    this.submitButtonText = "Speichere ..."
                    await addMileageRecord(this.driver, this.mileage);
                    this.$emit("close");
                }
                else {
                    alert("Bitte gib einen gültigen km-Stand an!");
                }                

            }
        }
    }
</script>

<style scoped>
    .overlay_page {
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.7);
        background-color: white;
        padding: 16px;
    }
</style>