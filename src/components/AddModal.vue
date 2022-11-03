<template>
  <q-dialog :model-value="isVisible" @hide="$emit('close')">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">{{ label }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <BasicInput dense v-model="className" autofocus />
      </q-card-section>

      <q-card-actions align="right" class="text-secondary">
        <q-btn flat label="Zamknij" v-close-popup />
        <q-btn flat label="Dodaj" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import BasicInput from "src/components/BasicInput.vue";

export default defineComponent({
  name: "AddModal",
  components: { BasicInput },
  props: { label: String, isVisible: Boolean },
  setup() {
    const className = ref("");
    return { className };
  },
});
</script>
