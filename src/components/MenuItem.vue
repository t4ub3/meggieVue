<template>
    <button :class="classButton">
        {{text}}
    </button>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        text: String,
        isActive: Boolean
    },
    computed: {
        classButton(){
            if (this.isActive) {
                return "menu-button menu-button--active";
            } else {
                return "menu-button";
            }
        }
    }
}
</script>

<style scoped>
    .menu-button{
        width: 100%;
        font-size: 26px;
        border: 2px solid #500D00;
        color: #500D00;
    }
    .menu-button:hover{
        background-color: #500D00;
        color: white;
    }
    .menu-button--active{
        background-color: #FFD6AA;
    }
</style>