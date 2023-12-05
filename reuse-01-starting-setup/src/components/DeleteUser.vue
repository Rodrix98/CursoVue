<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert.js';
import UserAlert from './UserAlert.vue';


export default {
  mixins: [alertMixin],
  components: {
    UserAlert,
  },
  data() {
    return { // alertTitle existe en nuestro mixin, pero si en el mismo componente, volvemos a declarar y le pasamos un valor este es reemplazado
      alertTitle: 'Delete User?'
    }
  }
    
}
</script>