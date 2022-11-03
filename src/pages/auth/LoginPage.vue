<template>
  <q-page-container class="q-mx-auto">
    <q-page class="row flex justify-center items-center full-height">
      <q-form @submit="login" @reset="onReset" class="col-6 q-gutter-y-md">
        <p class="text-h4">Logowanie</p>
        <BasicInput outlined v-model="loginForm.email" label="email" />
        <BasicInput outlined v-model="loginForm.password" label="hasło" />
        <q-btn color="secondary" type="submit" class="fit">Zaloguj</q-btn>
        <p class="btn-forgot-password text-h8 text-secondary">
          Nie pamiętasz hasła?
        </p>
      </q-form>
    </q-page>
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useUserStore } from "src/stores/user";
import BasicInput from "src/components/BasicInput.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    BasicInput,
  },

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

<style lang="scss" scoped>
.btn-forgot-password {
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    opacity: 0.6;
  }
}
</style>
