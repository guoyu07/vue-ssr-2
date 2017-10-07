<template>
  <div>
    <p v-for="item in items">姓名:{{item.name}}-------年龄:{{item.age}}</p>
  </div>
</template>

<script>
  export default {
    name: 'item',
    asyncData({store, route}) {
      // 触发 action 后，会返回 Promise
      return store.dispatch('fetchItem')
    },
    mounted() {

    },
    computed: {
      // 从 store 的 state 对象中的获取 item。
      items() {
        return this.$store.state.items
      }
    }
  }
</script>