<template>
    <header class=".header">
      <div>{{ paths[path] }}</div>
    </header>
</template>

<script setup lang="ts">

import {useRoute} from 'vue-router'
import {computed} from 'vue'

const route = useRoute();
const path = computed(() =>route.path)

const paths = {
    '/': 'Головна',
    '/monitor': 'Моніторинг',
    '/report': 'Звіти',
    '/budget': 'Бюджет',
}

</script>
  
<style lang="scss" scoped>
.header {
    padding-left: 50px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
}
</style>