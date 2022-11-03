<template>
  <TeacherMainView title="Zestawy słów" :rows="rows" :columns="columns">
    <template #HeaderButtons>
      <IconTextButton class="q-mb-lg" @click="showAddDialog"
        ><q-icon name="add" />Dodaj zestaw</IconTextButton
      >
      <IconTextButton class="q-mb-lg q-ml-md" @click="showAddDialog"
        ><q-icon name="search" />Przeglądaj gotowe</IconTextButton
      >
    </template>
    <template #TableShortcutButtons>
      <q-btn flat size="sm" icon="visibility" label="Podgląd" />
      <q-btn flat size="sm" icon="present_to_all" label="Przydział" />
    </template>
  </TeacherMainView>
  <AddModal
    label="Dodaj zestaw"
    :isVisible="isAddDialogVisible"
    @close="isAddDialogVisible = false"
  ></AddModal>
</template>

<script>
import TeacherMainView from "src/components/TeacherMainView.vue";
import AddModal from "src/components/AddModal.vue";
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
    name: "shortcut",
    align: "center",
    label: "Skróty",
    field: "shortcut",
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
    AddModal,
    IconTextButton,
    TeacherMainView,
  },
  name: "WordSetsPage",
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
