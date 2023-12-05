Vue.createApp({
    data(){
        return {
            firstValue: '',
            paragraph: '',
            firstValueEnter: '',
            paragraphEnter: '',

        }

    },
    methods: {
        ShowAlert(){
            alert('A veces solo debes pintar toda la casa')
        },
        GetValue(event){
            this.firstValue = event.target.value;
        },
        GetValueEnter(event){
            this.firstValueEnter = event.target.value;
        },
        PutValueEnter(){
            return this.paragraphEnter = this.firstValueEnter;
        }

    }
}).mount('#assignment')