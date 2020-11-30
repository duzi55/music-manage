<template>
  <div>
    <Header></Header>
    <Aside></Aside>
    <router-view></router-view>

  </div>
</template>
<script>
import Header from "./Header"
import Aside from "./Aside"
export default {
  components:{
    Header,
    Aside
  }
}
</script>
