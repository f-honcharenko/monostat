<template>
    <button class="wrapper" :class="{ 'wrapper--active': active }"><slot /></button>
</template>

<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    active?: boolean;
  }>(),
  {
    active: false,
  }
);

</script>

<style scoped>
.wrapper {
    padding: 10px 15px;
    border-radius: 5px;
    display: flex;
    /* font-family: 'Inter', sans-serif;  */
    font-weight: 500;
    justify-content: center;
    align-content: center;
    transition: all 250ms ease;
    background: none;
    cursor: pointer;
}

.wrapper:hover {
    background-color: #F2F2F2;
}

</style>