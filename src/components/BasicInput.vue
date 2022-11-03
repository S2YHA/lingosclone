<template>
  <q-input dense outlined color="secondary" bg-color="white" :label="label" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasicInput",
  props: {
    label: String,
  },
});
</script>
