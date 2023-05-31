<template>
  <div style="display: flex; justify-content: center">
    <h3>Planner V</h3>
  </div>
  <div style="display: flex; justify-content: center">
    <Card title="Просмотр Плана" width="500"></Card>
  </div>
  <button class="btnDef" style="margin-top: 1rem;" @click="consolka">Новая задача</button>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: "Main",
  components:{
    Card
  },
  data:()=>({
  }),
  methods:{
    consolka(){
      alert('error')
    }
  }
}
</script>

<style scoped>
.btnDef{
  background-color: silver;
  color: black;
  border: 0.1rem solid black;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: 1s;
}
.btnDef:hover{
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  transform: scale(1.2)
}
Card{
  animation-duration: 1s;
  animation-name: sliden;
}
</style>
