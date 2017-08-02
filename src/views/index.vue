<template>
  <div>
    <button @click="test()">测试</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: this.$store.state.global.testData,
      }
    },
    created() {

    },
    methods:{
      test(){
        this.axios.post('/api/test',{name:'张三'}).then(res => {
          console.log(res.data)
        });
      }
    }
  }
</script>