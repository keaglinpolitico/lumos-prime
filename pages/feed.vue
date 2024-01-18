o<script setup lang="ts">
import * as data from '~/data.json'
const cards = ref(data.cards)
// https://politico.com/spring/cms-api/v1/live-updates/congress/2024_01_18?datetime=1705611600000
// const apiUrl = `https://politico.com/spring/cms-api/v1/live-updates/congress/${new Date().toISOString().split('T')[0].replace(/\-/gi, '_')}`
// const test = await fetch('https://politico.com/spring/cms-api/v1/live-updates/congress/2024_01_18?datetime=1705611600000')
// console.log('test', test)


</script>

<template>
  <UContainer>
    <h1>Feed</h1>
    <ul>
      <li v-for="card in cards" :key="card.publishedDate" class="my-6">
        <div class="p-1 bg-red-600 text-white rounded-sm max-w-fit text-xs uppercase">Jan 2024</div>
        <UCard>
          <template #header>
            <div>Header</div>
          </template>


          Article body with images and stuff


          <template #footer>
            <!-- https://www.politico.com/news/2024/01/18/senate-passes-funding-patch-00136326 -->
            <div>
              <nuxt-link to="https://www.politico.com/news/2024/01/18/senate-passes-funding-patch-00136326">{{ card.titleNav }}</nuxt-link>
            </div>
          </template>
        </UCard>
      </li>
    </ul>
  </UContainer>
</template>

<style scoped lang="scss">
li {
  list-style: none;
  min-height: 200px;

}
</style>
