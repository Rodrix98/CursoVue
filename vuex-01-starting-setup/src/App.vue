<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="inc">Add 4</button>
    <button @click="increase({value: 10})">Add 20</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>  
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue'; 
import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    // addOne() {
    //   // this.$store.commit('increase', { value: 10 });  forma 1, forma 2 la de abajo 
    //   this.$store.dispatch({
    //     type: 'increment',
    //     value: 10
    //   })
    // },
    // addTwo() {
    //   // this.$store.commit('increase', { value: 10 });  forma 1, forma 2 la de abajo 
    //   this.$store.dispatch({  
    //     type: 'counter/increase',                   //FIJARSE ESTA PARTE PARA LLAMAR DISPATCH CON MODULOS CON NAMESPACE
    //     value: 10
    //   })
    // }                                   Esta forma es la larga

    // ...mapActions(['increment', 'increase']) // Forma 2 con mapActions

    ...mapActions('counter', {
      inc: 'increment',
      increase: 'increase'
    })
  },
  computed: {
    isAuth(){
        return this.$store.getters.userIsAuthenticated;
    }
  }
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
</style>