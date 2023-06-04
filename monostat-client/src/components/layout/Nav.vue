<template>
    <nav class="side">
        <div class="side_navigation">
            <RouterLink class="side_link" active-class="active" to="/">
                <nav-button>Головна</nav-button>
            </RouterLink>
            <RouterLink class="side_link" active-class="active" to="/monitor">
                <nav-button>Моніторинг</nav-button>
            </RouterLink>
            <RouterLink class="side_link" active-class="active" to="/report">
                <nav-button>Звіти</nav-button>
            </RouterLink>
            <RouterLink class="side_link" active-class="active" to="/budget">
                <nav-button>Бюджет</nav-button>
            </RouterLink>
        </div>
        
        <RouterLink class="side_link" :to="{ name: '' }">
            <nav-button>Вийти</nav-button>
        </RouterLink>
    </nav>
</template>

<script setup lang="ts">

</script>
  
<style lang="scss" scoped>
.side {
    padding: 100px 50px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.side_navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
}

.side_link {
    text-decoration: none;
}
</style>