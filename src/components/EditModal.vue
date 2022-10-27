<template>
  <q-dialog :model-value="isVisible" @hide="$emit('close')">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Edytuj nazwę</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <BasicInput label="Nowa nazwa" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Zamknij" color="primary" v-close-popup />
        <q-btn flat label="Edytuj" color="positive" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import BasicInput from "src/components/BasicInput.vue";

export default defineComponent({
  name: "EditModal",
  components: { BasicInput },
  props: { isVisible: Boolean },
});
</script>
