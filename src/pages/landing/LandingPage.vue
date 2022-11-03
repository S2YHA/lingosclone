<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-secondary text-white">
      <q-toolbar class="q-mx-auto no-wrap items-center landing-page-width">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Lingos Clone
        </q-toolbar-title>
        <div class="landing-page-navbar-btn-wrapper">
          <q-btn flat>Strona główna</q-btn>
          <q-btn flat>Blog</q-btn>
          <q-btn-dropdown flat color="white" label="Strefa nauczyciela">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Baza wiedzy</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Bezpłatne materiały</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>FAQ / Kontakt</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown flat color="white" label="Strefa Ucznia / Rodzica">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Baza wiedzy</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Lingos Premium</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>FAQ / Kontakt</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn flat>Rejestracja</q-btn>
          <q-btn flat>Logowanie</q-btn>
        </div>
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm landing-page-collapsed-menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      overlay
      show-if-above
      elevated
      v-model="leftDrawerOpen"
      side="left"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple>
            <q-item-section> Strona główna </q-item-section>
          </q-item>
          <q-item active clickable v-ripple>
            <q-item-section> Blog </q-item-section>
          </q-item>
          <q-expansion-item expand-separator label="Strefa nauczyciela">
            <q-item active clickable v-ripple>
              <q-item-section> Baza wiedzy </q-item-section>
            </q-item>
            <q-item active clickable v-ripple>
              <q-item-section> Bezpłatne materiały </q-item-section>
            </q-item>
            <q-item active clickable v-ripple>
              <q-item-section> FAQ / Kontakt </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator label="Strefa Ucznia / Rodzica">
            <q-item active clickable v-ripple>
              <q-item-section> Baza wiedzy </q-item-section>
            </q-item>
            <q-item active clickable v-ripple>
              <q-item-section> Lingos Premium </q-item-section>
            </q-item>
            <q-item active clickable v-ripple>
              <q-item-section> FAQ / Kontakt </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-item clickable v-ripple>
            <q-item-section> Rejestracja </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section> Logowanie </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page></q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    return { leftDrawerOpen, toggleLeftDrawer };
  },
};
</script>

<style lang="scss" scoped>
.q-item.q-router-link--active,
.q-item--active {
  color: unset;
}
</style>
