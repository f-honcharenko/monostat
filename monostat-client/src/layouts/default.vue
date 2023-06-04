<template>
  <div class="wrapper">
    <Nav class="nav"/>
    <Header class="header"/>
    <main class="main">
      <RouterView v-slot="{ Component }">
        <transition name="fade-fast" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style>

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 100px 1fr;
}

.nav {
  grid-column: 1 / 2;
  grid-row: 1 / -1;
}

.header {
  grid-column: 2 / -1;
  grid-row: 1 / 2;
}

.main {
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  padding-left: 50px;
  padding-bottom: 20px;
  overflow-y: scroll;
}
</style>