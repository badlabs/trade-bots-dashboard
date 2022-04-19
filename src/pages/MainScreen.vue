<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" href="#/robots" label="Robots"/>
      <q-btn color="primary" href="#/algorithms" label="Algorithms"/>
    </div>
  </div>
  <div class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <div style="text-align: center; font-size: 16px; font-weight: bold">Connected robots: Info</div>
    <div class="q-pa-md">
      <q-virtual-scroll
        type="table"
        style="max-height: 150px"
        :virtual-scroll-item-size="48"
        :virtual-scroll-sticky-size-start="48"
        :virtual-scroll-sticky-size-end="32"
        :items="heavyList">
        <template v-slot="{ item: row, index }">
          <tr :key="index">
            <td v-for="col in columns" :key="index + '-' + col">
              {{ row[col] }}
            </td>
          </tr>
        </template>
      </q-virtual-scroll>
    </div>
    <div>
      <q-btn color="primary" href="#/robots" label="More" style="font-size: 12px"/>
    </div>
  </div>

  <div class="q-px-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightgray; border-radius: 5px">
    <div class="q-pa-md">
      <div class="q-pt-md" style="font-size: 16px; font-weight: bold">Total Currencies: $100</div>
      <div style="font-size: 14px">↑1,23 $ (1,23 %)</div>
    </div>
    <div class="q-pa-md">
      <q-virtual-scroll
        type="table"
        style="max-height: 300px"
        :virtual-scroll-item-size="48"
        :virtual-scroll-sticky-size-start="48"
        :virtual-scroll-sticky-size-end="32"
        :items="heavyList">
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label style="font-size: 18px; font-weight: bold">AAA</q-item-label>
            <q-item-label caption style="font-size: 14px">x5</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption style="font-size: 16px; font-weight: bold">12,34 $</q-item-label>
            <q-item-label caption style="font-size: 14px">↓1,23 $ (1,23 %)</q-item-label>
          </q-item-section>

        </q-item>
      </q-virtual-scroll>
    </div>
  </div>

  <div class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <q-virtual-scroll
      style="max-height: 300px;"
      :items="list"
    >
      <template v-slot="{ item, index }">
        <q-item
          :key="index"
          dense
        >
          <q-item-section class="q-pa-sm q-my-sm">
            <q-card class="my-card" style="max-height: 300px;">
              <q-card-section>
                fffffff
              </q-card-section>
            </q-card>
          </q-item-section>
        </q-item>
      </template>
    </q-virtual-scroll>
  </div>
</template>

<script>
const rows = [
  {
    id: 1,
    name: 'Robot 1234',
    algorithm: 'algorithm in use',
    status: 'active'
  }, {
    id: 2,
    name: 'Robot 1235',
    algorithm: 'algorithm in use',
    status: 'active'
  }, {
    id: 3,
    name: 'Robot 1235',
    algorithm: 'algorithm in use',
    status: 'active'
  }, {
    id: 4,
    name: 'Robot 1236',
    algorithm: 'algorithm in use',
    status: 'active'
  }, {
    id: 5,
    name: 'Robot 1237',
    algorithm: 'algorithm in use',
    status: 'active'
  }
]

const columns = [
  'name',
  'algorithm',
  'status'
]

const heavyList = []

// adding same data multiple times to
// create a huge list
for (let i = 0; i <= 50; i++) {
  Array.prototype.push.apply(heavyList, rows)
}

const maxSize = 100
const list = []

for (let i = 0; i < maxSize; i++) {
  list.push({
    label: 'Option ' + (i + 1)
  })
}


export default {
  name: "MainScreen",
  data(){
    return{
      heavyList,
      list,
      columns
    }
  }
}
</script>

<style scoped>

</style>
