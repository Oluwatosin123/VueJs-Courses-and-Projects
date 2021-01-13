const app = Vue.createApp({
    data() {
        return {
            name: 'Ajose Tosin',
            age: '28 years old',
            ageInFiveYears: [],
            randomNumber: [],
            imgLink: `https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg`
        }
    },

    methods: {
        ageInFive() {
            this.ageInFiveYears.push(this.age + 5);
        }
    }
});

app.mount('#exercise');