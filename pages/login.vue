<template>
    <div>
      <input v-model="inputText" type="text">
      <button @click="checkInput">Submit</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        inputText: '',
      };
    },
    methods: {
      async checkInput() {
        if (this.inputText === 'yes') {
            alert('you logged in successfully')
          // Proceed with login logic
          console.log('Login logic goes here...');
        } else {
          // Redirect to home page
          this.$router.push('/');
          alert("write 'yes'  word in text box ")
        }
      },
    },
  });
  </script>
  
  <style scoped>
  /* Add scoped styles here */
  </style>
  