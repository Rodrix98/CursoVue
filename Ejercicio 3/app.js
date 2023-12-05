Vue.createApp({
    data(){
        return {
            suma: 0
        }
    },
    computed: {
        mensaje(){

            if (this.suma < 37) {
                return 'Not There Yet'; 
            }
            if (this.suma > 37) {
                return 'Too Much!'; 
            }
            if (this.suma === 37) {
                return '37'; 
            }
        }
    },
    watch:{
        suma(value){

            var referencia = this;

            if (value != 0) {
                setTimeout(function() {
                    referencia.suma = 0;
                }, 5000)
            }
        }
    },
    methods:{
        sum5(){
            this.suma = this.suma + 5;
        },
        sum1(){
            this.suma = this.suma + 1;
        }
    }
}).mount("#assignment")