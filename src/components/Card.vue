<template>
  <div class="cardStyle" :style="{width: $props.width +'px'}">
    <div style="display: flex; justify-content: center">
      <h3 style="color:white">{{ $props.title }}</h3>
    </div>
    <div style="display: block;">
      <input id="name" class="inputStyle" style="margin-left: 0.5rem" type="text">
    </div>

  </div>
</template>

<script>
export default {
  name: "Card",
  props:{
    title:{
      value:String,
      default(){
        return "Default Title"
      }
    },
    width:{
      value:Number,
      default() {
        return 700;
      }
    }
  },
  data:() =>({
    def:false
  }),
  methods:{

  }
}
</script>

<style scoped>
.cardStyle{
  border: solid grey 1px;
  border-radius: 2rem;
  padding: 1rem;
  background: slategray;
  background-size: 100%;
  transition: 1s;
}
.cardStyle:hover{
  transform: scale(1.1);
}

.inputStyle{
  border: red 1rem;
  border-radius: 0.2rem;
  background-color: antiquewhite;
}
</style>