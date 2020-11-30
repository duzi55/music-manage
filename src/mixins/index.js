export const mixin ={
  methods:{
    notify(type,title,msg){
      this.$notify({
        type:type,
        title:title,
        message:msg
      })
    }
  }
}
