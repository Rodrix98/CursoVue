Vue.createApp({
    data(){
        return{
            nombreClase: '',
            clases: true,
            randomColor: ''
        }
    },
    computed: {
        classGrabber(){
            return this.nombreClase;
            
        },

        visibility(){
            return {
                visible: this.clases,
                hidden: !this.clases
            }
        },
    },
    methods: {
        NowYouSeeMeNowYouDont(){
            this.clases = !this.clases
        }
    }
}).mount('#assignment')