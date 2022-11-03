<template>
  <q-page-container class="q-mx-auto">
    <q-page class="row flex justify-center items-center full-height">
      <q-form @submit="register" @reset="onReset" class="col-6 q-gutter-y-md">
        <div class="text-h4">Rejestracja</div>
        <BasicInput outlined v-model="registerForm.email" label="email" />
        <BasicInput outlined v-model="registerForm.password" label="hasło" />
        <q-btn color="secondary" type="submit" class="fit">Zarejestruj</q-btn>
      </q-form>
    </q-page>
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useUserStore } from "../../stores/user";
import BasicInput from "src/components/BasicInput.vue";

export default defineComponent({
  name: "RegisterPage",
  components: {
    BasicInput,
  },
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
