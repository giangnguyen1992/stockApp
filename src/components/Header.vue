<template>
    <div>
        <h1>HEADER</h1>
        <button @click="change('app-intro')">Intro</button>
        <button @click="change('app-portfolio')">Portfolio</button>
        <button @click="change('app-stocks')">Stocks</button>
    </div>
</template>

<script>
    export default {
        props: ['change']
    }
</script>

<style scoped>

</style>

