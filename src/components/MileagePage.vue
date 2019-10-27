<template>
    <div class="overlay_background">
        <div class="overlay" @click.stop>
            <overlay-header :text="'Neuer km-Stand'"></overlay-header>
            <div class="overlay_body">
                <div class="text">Wer ist zuletzt gefahren?</div>
                <input class="text" id="radio-stoffel" name="radio-driven-last" type="radio" value="Stoffel" v-model="driver"/>
                <label class="text" for="radio-stoffel">Stoffel</label>
                <br>
                <input class="text" id="radio-neumann" name="radio-driven-last" type="radio" value="Neumann" v-model="driver"/>
                <label class="text" for="radio-neumann">Neumann</label>
                <br><br>
                <label class="text" for="input-mileage">aktueller Kilometerstand:</label>
                <input class="text" id="input-mileage" type="number" v-model="mileage"/>
                <br><br>
                <button class="button" @click="submitRecord">{{submitButtonText}}</button>
            </div>            
        </div>
    </div>    
</template>

<script>
    import {addMileageRecord, getLastMileage} from '../services/dbAccess.js'
    import OverlayHeader from './OverlayHeader'

    export default {
        name: "MileagePage",
        components: {OverlayHeader},

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
