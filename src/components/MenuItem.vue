<template>
    <button class="menu-button">
        <font-awesome-icon :icon="iconName"></font-awesome-icon>
    </button>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        iconName: String,
        goalPage: String
    },
}
</script>

<style scoped>
    .menu-button {
        width: 30px;
        height: 30px;
        font-size: 2rem;
        border: none;
        background-color: #3c70ad;
        color: #0B2F59;
    }
    .menu-button:hover {
        color: #409589;
    }
</style>