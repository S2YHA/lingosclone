<template>
  <q-page class="q-mx-auto q-mt-md view-width">
    <p class="text-h4 text-weight-medium">{{ title }}</p>
    <slot name="HeaderButtons"></slot>
    <div class="row q-mb-sm q-col-gutter-x-lg">
      <div class="col-6">
        <BasicInput label="Wyszukaj" />
      </div>
      <div class="col-6">
        <BasicInput label="Sortuj" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ActionTable :rows="rows" :columns="columns">
          <slot name="TableShortcutButtons"></slot>
        </ActionTable>
      </div>
    </div>
  </q-page>
</template>

<script>
import ActionTable from "src/components/ActionTable.vue";
import BasicInput from "src/components/BasicInput.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "TeacherMainView",
  components: {
    ActionTable,
    BasicInput,
  },
  props: { title: String, rows: Array, columns: Array },
});
</script>
