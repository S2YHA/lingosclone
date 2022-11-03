<template>
  <q-dialog :model-value="isVisible">
    <q-card>
      <q-card-section class="row items-center">
        <!-- <q-avatar icon="delete" color="secondary" text-color="white" /> -->
        <span class="q-ml-sm">Czy na pewno chcesz usunąć ten element?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Zamknij" color="secondary" v-close-popup />
        <q-btn flat label="Usuń" color="secondary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeleteModal",
  props: { isVisible: Boolean },
});
</script>
