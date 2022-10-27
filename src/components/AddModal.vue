<template>
  <q-dialog :model-value="isVisible" @hide="$emit('close')">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Your address</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="className" autofocus />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Zamknij" v-close-popup />
        <q-btn flat label="Dodaj" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AddModal",
  props: { isVisible: Boolean },
  setup() {
    const className = ref("");
    return { className };
  },
});
</script>
