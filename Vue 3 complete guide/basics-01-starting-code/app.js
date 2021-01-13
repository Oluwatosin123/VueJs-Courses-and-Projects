const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue',
            courseGoalB: 'Master Vuejs and build amazing apps',
            courseGoalC: '<h3>Be professional at Vuejs</h3>',
            vueLink: 'https://vuejs.org/'
        }
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else if (randomNumber === 0.7) {
                return this.courseGoalB;
            } else {
                return this.courseGoalC
            }
        }
    }
});

app.mount('#user-goal');