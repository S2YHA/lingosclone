<template>
  <IconTextButton class="q-mb-lg"
    ><q-icon name="arrow_back" />
    Powrót
  </IconTextButton>
</template>

<script>
import IconTextButton from "src/components/IconTextButton.vue";

export default {
  name: "GoBackButton",
  components: {
    IconTextButton,
  },
  setup() {
    return {};
  },
};
</script>
