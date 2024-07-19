<template>
    <div class="header">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/counter">Counter</RouterLink>
        <RouterLink to="/deepMutate">DeepMutate</RouterLink>
        <RouterLink to="/directive">V-Directive</RouterLink>
        <RouterLink to="/Event">Event</RouterLink>
        <RouterLink to="/Binding">Binding</RouterLink>
        <RouterLink to="/Hook">LifeCycleHook</RouterLink>
        <RouterLink to="/Watch">Watch</RouterLink>
        <RouterLink to="/Parent">Props</RouterLink>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .header {
        color: white;
        background-color: #8f71b6;
        display: flex;
        padding: 4px;
        margin-bottom: 10px;
    }
    .header .router-link-exact-active {
        color: #354953;
    }
    .header a {
        color: white;
        margin: 5px;
    }
</style>