<template>
  <TeacherMainView title="Klasy" :rows="rows" :columns="columns">
    <template #HeaderButtons>
      <IconTextButton class="q-mb-lg" @click="showAddDialog"
        ><q-icon name="add" />Dodaj klasę</IconTextButton
      >
    </template>
    <template #TableShortcutButtons>
      <q-btn flat size="sm" icon="groups" label="Użytkownicy" />
      <q-btn flat size="sm" icon="format_list_bulleted" label="Słowa" />
      <q-btn flat size="sm" icon="description" label="Raporty" />
    </template>
  </TeacherMainView>
  <AddModal
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
  name: "ClassesPage",
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
