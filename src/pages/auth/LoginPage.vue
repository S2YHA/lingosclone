<template>
  <q-page>
    <p class="text-h2">Login</p>
    <div class="row flex flex-space-between">
      <q-input outlined v-model="loginForm.email" label="email" />
      <q-input outlined v-model="loginForm.password" label="hasło" />
      <q-btn @click="login">Zaloguj</q-btn>
      <q-btn @click="forgotPassword">Nie pamiętasz hasła?</q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useUserStore } from "src/stores/user";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const userStore = useUserStore();
    const loginForm = ref({});

    const login = () => {
      userStore.login(loginForm.value);
    };

    const forgotPassword = () => {
      userStore.forgotPassword(loginForm.value);
    };

    return { loginForm, login, forgotPassword };
  },
});
</script>

<style lang="scss" scoped></style>
