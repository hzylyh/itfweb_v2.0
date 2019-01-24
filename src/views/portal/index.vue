<template>
  <div>shouye </div>
</template>

<script>
  import { test } from '../../api/login'
  export default {
    name: "index",
    data () {
      return {

      }
    },
    created() {
      this.test()
    },
    methods: {
      test() {
        console.log("index")
        test()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
