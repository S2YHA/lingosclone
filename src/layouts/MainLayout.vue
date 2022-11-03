<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered class="bg-secondary text-white" height-hint="98">
      <q-toolbar class="q-mx-auto view-width">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Lingos Clone
        </q-toolbar-title>
        <!-- <q-btn flat round dense icon="o_account_circle" class="q-mr-xs" /> -->
        <q-btn unelevated icon="power_settings_new" color="secondary">
          <q-menu anchor="bottom right" self="top right">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section @click="logout">Wyloguj</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>

      <q-tabs class="q-mx-auto view-width" align="left">
        <q-route-tab to="/teacher/groups" label="Klasy" />
        <q-route-tab to="/teacher/wordsets" label="Zestawy słów" />
        <q-route-tab to="/teacher/folders" label="Foldery" />
        <q-route-tab to="/teacher/tests" label="Testy" />
      </q-tabs>
    </q-header>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useUserStore } from "src/stores/user";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const userStore = useUserStore();

    const logout = () => {
      userStore.logout();
    };
    return { logout };
  },
});
</script>
