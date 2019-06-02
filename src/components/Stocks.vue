<template>
    <section class="stocks">
        <div class="stocks_card" :key="stock.id" v-for="(stock, index) in allStocks">
            <h3 class="stocks_card-name">{{ index }}</h3>
            <p class="stocks_card-price">Price {{ stock.price}}</p>
            <input v-model="userValue" class="stocks_card-input" type="Number">
            <button @click="buyStocks([index, userValue])" class="stocks_card-btn">Buy</button>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                userValue: 0
            }
        },
        computed: {
            allStocks() {
                return this.$store.state.allStocks;
            }
        },
        methods: {
            ...mapActions([
                'buyStocks'
            ])
        }
    }
</script>

<style scoped>
    .stocks {
        display: flex;
    }

    .stocks_card {
        border: 1px solid #ccc;
        background-color: lightgreen;
        margin: 2rem 2rem;
        padding: 3rem;
    }
</style>