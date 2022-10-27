<script setup></script>

<template>
  <q-btn size="md" class="text-primary custom-button" @click="$emit('click')"
    ><slot
  /></q-btn>
</template>

<style lang="scss" scoped>
.custom-button::before {
  background-color: $primary;
  opacity: 0.2;
}
</style>
