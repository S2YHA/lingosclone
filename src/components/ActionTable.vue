<template>
  <q-table
    bordered
    class="no-shadow custom-table"
    :rows="rows"
    :columns="columns"
    row-key="name"
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          {{ props.row.name }}
        </q-td>
        <q-td key="shortcut" :props="props">
          <slot></slot>
        </q-td>
        <q-td class="text-right" key="action" :props="props">
          <q-btn
            round
            flat
            size="sm"
            icon="edit"
            @click="isEditDialogVisible = true"
          />
          <q-btn
            round
            flat
            size="sm"
            icon="delete"
            @click="isDeleteDialogVisible = true"
          />
        </q-td>
      </q-tr>
    </template>
  </q-table>
  <EditModal
    :isVisible="isEditDialogVisible"
    @close="isEditDialogVisible = false"
  ></EditModal>
  <DeleteModal
    :isVisible="isDeleteDialogVisible"
    @close="isDeleteDialogVisible = false"
  ></DeleteModal>
</template>

<script>
import EditModal from "src/components/EditModal.vue";
import DeleteModal from "src/components/DeleteModal.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ActionTable",
  components: { EditModal, DeleteModal },
  props: {
    rows: Array,
    columns: Array,
  },
  setup() {
    const isEditDialogVisible = ref(false);
    const isDeleteDialogVisible = ref(false);

    return { isEditDialogVisible, isDeleteDialogVisible };
  },
});
</script>

<style lang="scss" scoped>
.custom-table {
  border-color: rgba(0, 0, 0, 0.24);
}
</style>
