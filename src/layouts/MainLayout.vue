<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-dark">
        <q-avatar>
          <img src="/badlabs-icon.svg">
        </q-avatar>
        <q-toolbar-title>
          TradeBots Dashboard
        </q-toolbar-title>
        <q-space />
        <q-btn-dropdown stretch flat label="Links">
          <q-list>
            <q-item v-for="link in links" :href="link.href" target="_blank" :key="link.href" clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar :icon="link.icon" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{link.name}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  data(){
    return {
      links: [
        { icon: 'folder', name: 'Repository', href: 'https://github.com/badlabs/trade-bots-dashboard'}]
    }
  }
});
</script>
<style scoped>
header{
  background-color: #0000001a !important;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
}
</style>
<style>
code{
  background-color: rgba(10, 10, 10, .1);
  padding: .05em .3em;
  border-radius: .1em;
}
.font-monospace{
  font-family: monospace;
}
</style>
