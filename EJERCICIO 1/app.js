Vue.createApp({
    data(){
        return {
            name: 'Rodrigo Garcia',
            age: 24,
            imgLink: 'https://www.sportscarmarket.com/wp-content/uploads/2021/05/1996-dodge-viper-gts-coupe-drivers-front.jpg'
        }; 
    },
    methods: {
        AgePlusFive(){
                        
            const newAge = this.age + 5

            return newAge;
        },

        RandomNumber(){

            var random = Math.random()

            return random.toFixed(1)
             
        },

        

        
    }
}).mount('#assignment')