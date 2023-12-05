Vue.createApp({
    data(){
        return {
            task: '',
            arrayTask: [],
            caption: 'Hide List',
            visible: true,
        }
    },
    computed: {

    },
    methods: {
        fillArray(){
            this.arrayTask.push(this.task);
        },
        hideShowList()
        {
            this.visible = !this.visible;

            if(this.visible != true)
            {
                this.caption = 'Show List'
            } else {

                this.caption = 'Hide List'
            }

        }
    }
}).mount("#assignment")