<template>
  <div>
    <p @click="text='test'">{{text}}</p>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        text: ''
      }
    },
    created() {
      this.text = '一万个草泥马'
    },
    methods: {}
  }
</script>

<style>
</style>