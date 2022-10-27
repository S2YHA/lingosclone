<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="flex flex-center content-center">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthLayout",
});
</script>
