<template>
  <q-page>
    <p class="text-h2">Rejestracja</p>
    <div class="row flex flex-space-between">
      <q-input outlined v-model="registerForm.email" label="email" />
      <q-input outlined v-model="registerForm.password" label="hasło" />
      <q-btn @click="register"></q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useUserStore } from "../../stores/user";

export default defineComponent({
  name: "RegisterPage",
  setup() {
    const registerForm = ref({});
    const userStore = useUserStore();

    const register = () => {
      userStore.register(registerForm.value);
    };
    return { registerForm, register };
  },
});
</script>

<style lang="scss" scoped></style>
