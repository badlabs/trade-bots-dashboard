<template>
  <div>
    Hello World!{{robot.name}}
  </div>
</template>

<script>
export default {
  name: "MainScreen",
  data(){
    return{
      robot:{name:"Bender"}
    }
  }
}
</script>

<style scoped>

</style>
