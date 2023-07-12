<template>
  <div style="display: flex; justify-content: center">
    <h3>Регион Волга</h3>
  </div>
  <div style="display: flex; justify-content: center">
    <Card title="Просмотр Плана" width="500"></Card>
  </div>
  <button class="btnDef" style="margin-top: 1rem;" @click="visible = true" >Новая задача</button>
  <Dialog v-model:visible="visible" modal header="Новая задача" :style="{ width: '50vw' }">
  </Dialog>
  <br>
  <div>
    <DataTable :value="dataTable" style="margin-top: 1rem;" @row-dblclick="handleRowClick">
      <Column field="number" header="Номер:"></Column>
      <Column field="timeto" header="Время выполнения:"></Column>
      <Column field="dateto" header="Сдать к:"></Column>
      <Column field="datefrom" header="Дата и время поставки задачи:"></Column>
    </DataTable>
  </div>
</template>

<script>
import { ref } from "vue";
const visible = ref(false);
import Card from '@/components/Card.vue'
export default {
  name: "Main",
  components:{
    Card
  },
  data() {
    return {
      visible: false,
      dataTable:[
        {number:'1', timeto:'1 час 30 минут', dateto:'07.07.2023 14:00', datefrom:'07.07.2023 12:30'},
        {number:'2', timeto:'1 час 30 минут', dateto:'07.07.2023 17:30', datefrom:'07.07.2023 16:00'},
        {number:'3', timeto:'1 час 30 минут', dateto:'07.07.2023 20:00', datefrom:'07.07.2023 18:30'},

      ]
    }
  },


  methods: {
    handleRowClick() {
      alert('Говнооо')
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
