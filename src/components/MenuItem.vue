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
        width: 56px;
        height: 56px;        
        margin: 8px;

        border: none;
        border-radius: 50%;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.7);
        background-color: #3c70ad;
        color: #0B2F59;
        font-size: 2rem;
    }
    .menu-button:hover {
        color: #409589;
    }
</style>