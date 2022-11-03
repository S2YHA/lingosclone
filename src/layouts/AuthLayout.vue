<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container class="bg-grey-1">
      <q-page>
        <div class="row">
          <div class="col-4 bg-secondary"></div>
          <div class="col-8"><router-view /></div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthLayout",
});
</script>
