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
        border: none;
        background-color: #3c70ad;
        color: #0B2F59;
    }
    .menu-button:hover{
        color: #409589;
    }
    .menu-button--active{
        background-color: #0B2F59;
        color: white;
    }
</style>