<template>
  <TeacherMainView title="[Nazwa klasy]" :rows="rows" :columns="columns">
    <!-- <template #HeaderButtons>
      <IconTextButton class="q-mb-lg" @click="showAddDialog"
        ><q-icon name="add" />Dodaj klasę</IconTextButton
      >
    </template> -->
    <template #TableShortcutButtons>
      <q-btn
        flat
        to="/teacher/groupView"
        size="sm"
        icon="groups"
        label="Użytkownicy"
      />
      <q-btn flat size="sm" icon="format_list_bulleted" label="Słowa" />
      <q-btn flat size="sm" icon="description" label="Raporty" />
    </template>
  </TeacherMainView>
</template>

<script>
import TeacherMainView from "src/components/TeacherMainView.vue";

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

export default {
  name: "GroupView",
  components: {
    TeacherMainView,
  },
  setup() {
    return { columns, rows };
  },
};
</script>

<style lang="scss" scoped></style>
