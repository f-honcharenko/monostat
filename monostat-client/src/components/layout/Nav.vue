<template>
    <nav class="side">
        <div class="side_navigation">
            <RouterLink class="side_link" active-class="active" to="/">
                <Button>Головна</Button>
            </RouterLink>
            <RouterLink class="side_link" active-class="active" to="/monitor">
                <Button>Моніторинг</Button>
            </RouterLink>
            <RouterLink class="side_link" active-class="active" to="/report">
                <Button>Звіти</Button>
            </RouterLink>
            <RouterLink class="side_link" active-class="active" to="/budget">
                <Button>Бюджет</Button>
            </RouterLink>
        </div>
        
        <RouterLink class="side_link" :to="{ name: '' }">
            <Button>Вийти</Button>
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