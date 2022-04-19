<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" href="#/" label="< Main"/>
    </div>
    <div class="row justify-between">
      <h4>List of Robots</h4>
      <div>
        <q-btn round color="primary" icon="add" />
      </div>
    </div>
    <q-card style="max-width: 600px" class="q-mx-auto">
      <q-card-section>
        <div class="row justify-between">
          <div class="text-h6">Robot 123</div>
          <q-chip dense dark color="blue">active</q-chip>
        </div>

        <div>
          <q-item-label caption style="font-size: 16px; font-weight: bold">12,34 $</q-item-label>
          <q-item-label caption style="font-size: 14px">↓1,23 $ (1,23 %)</q-item-label>
        </div>

      </q-card-section>

      <q-card-section>
        For logs
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="blue" dark>
          More
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "RobotsListScreen"
}
</script>

<style scoped>

</style>
