<template>
    <div class="DailyTodo">
        <header>
            <TheNavigation />

            <h1>DailyTodo</h1>
        </header>

        <main>
            <SelectList />
        </main>

        <footer>

        </footer>
        
    </div>
</template>

<script>

import TheNavigation from '../components/TheNavigation.vue'
import SelectList from '../components/SelectList.vue'

export default {
    name: 'DailyTodo',
    components: {
        TheNavigation,
        SelectList
    }
}
</script>

<style lang="less" scoped>

</style>