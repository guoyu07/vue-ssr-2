<template>
  <div>
    <ul>
      <li v-for="li in list">{{li}}</li>
    </ul>
  </div>
</template>

<script>
  import globalStoreModule from '../store/modules/global'

  export default {
    name: 'index',
    asyncData({store, route}) {
      store.registerModule('global', globalStoreModule);
      return store.dispatch('global/fetchItem')
    },
    destroyed() {
      console.log('index实例被销毁');
      this.$store.unregisterModule('global')
    },
    computed: {
      list() {
        return this.$store.state.global.testData
      }
    }
  }
</script>

<style lang="scss">
  ul > li {
    font-size: 16px;
    color: red;
  }
</style>