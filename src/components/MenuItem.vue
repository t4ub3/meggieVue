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

