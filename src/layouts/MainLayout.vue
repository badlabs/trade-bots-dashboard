<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          TradeBot Dashboard by Badlabs
        </q-toolbar-title>
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
  name: 'MainLayout'
});
</script>

<style>
code{
  background-color: rgba(10, 10, 10, .1);
  padding: .05em .3em;
  border-radius: .1em;
}
</style>
