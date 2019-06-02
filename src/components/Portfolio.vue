<template>
    <section class="portfolio">
        <div class="portfolio_card" :key="stock.id" v-for="(stock, index) in allStocks">
            <h3 class="portfolio_card-name">{{ index }}</h3>
            <p class="portfolio_card-price">Price {{ stock.price}} | Quantity: {{ stock.quantity }}</p>
            <input v-model="userValue" class="portfolio_card-input" type="Number">
            <button @click="sellStocks([index, userValue])" class="portfolio_card-btn">Sell</button>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return  {
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
                'sellStocks'
            ])
        }
    }
</script>

<style scoped>
    .portfolio {
        display: flex;
    }

    .portfolio_card {
        border: 1px solid #ccc;
        margin: 2rem 2rem;
        padding: 3rem;
        background-color: lightblue;
    }
</style>