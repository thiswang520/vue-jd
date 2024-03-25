<template>
  <!-- <router-link to="/"></router-link> -->
  <router-view  :key="$route.fullPath"/>
</template>
<script>
export default {
  name: 'App'
}
</script>
