<template>
  <TeacherMainView title="Testy" :rows="rows" :columns="columns">
    <template #HeaderButtons>
      <IconTextButton class="q-mb-lg" to="tests/add" @click="showAddDialog"
        ><q-icon name="add" />Dodaj test</IconTextButton
      >
    </template>
  </TeacherMainView>
</template>

<script>
import TeacherMainView from "src/components/TeacherMainView.vue";
import IconTextButton from "src/components/IconTextButton.vue";
import { defineComponent, ref } from "vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "Nazwa",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "action",
    label: "Akcje",
    field: "action",
  },
];

const rows = [
  {
    name: "1B",
  },
  {
    name: "2B",
  },
  {
    name: "3B",
  },
];

export default defineComponent({
  components: {
    IconTextButton,
    TeacherMainView,
  },
  name: "TestsPage",
  setup() {
    const isAddDialogVisible = ref(false);

    const showAddDialog = () => {
      isAddDialogVisible.value = true;
    };
    const editRow = (row) => {
      console.log(row);
    };
    const deleteRow = (row) => {
      console.log(row);
    };

    return {
      isAddDialogVisible,
      rows,
      columns,
      showAddDialog,
      editRow,
      deleteRow,
    };
  },
});
</script>
