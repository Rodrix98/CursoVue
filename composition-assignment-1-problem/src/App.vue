<template>
  <h2>Your Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseGoal.peekaboo" >{{ courseGoal.cGoal }}L</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="nowYouSeeMe">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  
  setup() {
    //Separate refs
    // const cGoal = ref('I Want to fucking end this course of Vue.js');
    // const peekaboo = ref(true);

    // function setHideShow() {
    //   peekaboo.value = !peekaboo.value
    //   console.log(peekaboo.value)
    // }

    //Ref Object
    // const goalObject = ref({
    //   cGoal: 'I Want to fucking end this course of Vue.js',
    //   peekaboo: true
    // })

    // function setHideShow() {
    //   goalObject.value.peekaboo = !goalObject.value.peekaboo
    //   console.log(goalObject.value.peekaboo)
    // }

    //Reactive Object
    const goalObject = reactive({
      cGoal: 'I Want to fucking end this course of Vue.js',
      peekaboo: true
    })

    function setHideShow() {
      goalObject.peekaboo = !goalObject.peekaboo
      console.log(goalObject.peekaboo)
    }

    //Separate Ref
    // return {courseGoal: cGoal, nowYouSeeMe: setHideShow }
    
    //Ref Object
    return {courseGoal: goalObject, nowYouSeeMe: setHideShow }

  }

}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>