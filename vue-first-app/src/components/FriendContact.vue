<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails" >{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{phoneNumber}}</li>
            <li><strong>Email:</strong> {{emailAddress}}</li>
        </ul>
    </li>

</template>

<script>
export default {
    props: [
        'name',
        'phoneNumber',
        'emailAddress'
    ], 
    data(){
        return{
            detailsVisible: false,
            friend: {    
                id: 1,
                name: 'rodrigo',
                phone: 3432423423,
                email: 'test@test.com'
            }
        }
    },
    methods: {
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible;
        }
    }
}
</script>