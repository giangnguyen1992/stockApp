<template>
    <header class="header">
        <ul class="header_ul">
            <li class="header_ul_list" @click="change('app-intro')">
                <h1>Stock Trader</h1>
            </li>
            <li class="header_ul_list" @click="change('app-portfolio')">
                Portfolio
            </li>
            <li class="header_ul_list" @click="change('app-stocks')">
                Stocks
            </li>
            <li @click="newPrice" class="header_ul_list">
                End Day
            </li>
            <li class="header_ul_list">
                Save and Load
            </li>
            <li class="header_ul_list">
                Funds: {{ funds }}
            </li>
        </ul>
    </header>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['change'],
        computed: {
            funds() {
                return this.$store.state.funds;
            }
        },
        methods: {
            ...mapActions([
                'newPrice'
            ])
        }
    }
</script>

<style scoped>
    .header {
        background-color: #ccc;
        width: 80%;
        height: 5rem;
        border-radius: 5px;
        margin: 0 auto;
    }

    .header_ul {
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: space-evenly;
    }

    .header_ul_list {
        cursor: pointer;
        font-size: 2rem;
    }
</style>

