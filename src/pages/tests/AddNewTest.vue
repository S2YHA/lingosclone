<template>
  <q-page class="q-mx-auto q-mt-md view-width">
    <p class="text-h4 text-weight-medium">Dodaj test</p>
    <GoBackButton @click="goBack" />
    <div class="row">
      <div class="col-12 q-pa-lg bg-white shadow-1">
        <q-form @submit="onSubmit" @reset="onReset" class="col-6 q-gutter-y-md">
          <BasicInput outlined v-model="testForm.name" label="Nazwa testu" />
          <q-select
            v-model="modelMultiple"
            outlined
            multiple
            :options="options"
            use-chips
            stack-label
            label="Zestawy"
          />
          <div class="row">
            <q-toggle color="secondary" v-model="value" label="Dopasowanie" />
          </div>
          <div class="row">
            <q-toggle color="secondary" v-model="value" label="Słuchanie" />
          </div>
          <div class="row">
            <q-toggle color="secondary" v-model="value" label="A/B/C/D" />
          </div>
          <div class="row">
            <q-toggle color="secondary" v-model="value" label="Tłumaczenie" />
          </div>
          <div class="row">
            <q-toggle
              color="secondary"
              v-model="value"
              label="Prawda czy fałsz"
            />
          </div>
          <BasicInput outlined v-model="testForm.name" label="Liczba zadań" />

          <!-- <q-btn @click="forgotPassword">Nie pamiętasz hasła?</q-btn> -->
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import GoBackButton from "src/components/GoBackButton.vue";
import BasicInput from "src/components/BasicInput.vue";

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

export default {
  name: "AddNewTest",
  components: {
    GoBackButton,
    BasicInput,
  },
  setup() {
    const router = useRouter();

    const modelMultiple = ref([]);
    const testForm = ref({});

    const goBack = () => {
      router.push("/teacher/tests");
    };
    return { goBack, testForm, modelMultiple, options, value: ref(true) };
  },
};
</script>

<style lang="scss" scoped></style>
