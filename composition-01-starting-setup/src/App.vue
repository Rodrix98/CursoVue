<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName"/>
      <input type="text" placeholder="Last Name" v-model="lastName"/>
    </div>
  </section>
</template>

<script>
import {  ref, computed, reactive, provide /*watch*/ } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    // const uName = ref('Rodri');

    // REACTIVE para objetos, REF para variables 
    const user = reactive({
      name: 'rodri',
      age: 25
    });

    const firstName = ref('');
    const LastName = ref('');
    const uAge = ref(31);

    provide('userAge', uAge);

    const fullName = computed(function() {
      return firstName.value + ' ' + LastName.value;
    })

    function setNewAge() {
      user.age = 32;
    }

    // watch([uAge, fullName], function(oldValues, newValues) {
    //   console.log('Old age: ' + oldValues[0]);
    //   console.log('New age: ' + newValues[0]);
    //   console.log('Old Name: ' + oldValues[1]);
    //   console.log('New name: ' + newValues[1]);
    // })

    // setTimeout(() => {
    //     user.name = 'RawRacism';
    //     user.age = 54;
    // }, 2000);

    // const userRefs = toRefs(user)

    return {
      user: user, setAge: setNewAge, fullname: fullName, firstName: firstName, lastName: LastName, age: uAge
    }
  },
  // provide() {
  //   return { age: this.age };
  // }
  
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>