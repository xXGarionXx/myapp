<template>
    <div class="DailyTodo">
        <header>
            <TheNavigation />

            <h1>DailyTodo</h1>
        </header>

        <main>
            <SelectList />
            
            <AddTask/>

            <DailyList/>

        </main>

        <footer>

        </footer>
        
    </div>
</template>

<script>

import TheNavigation    from '../components/TheNavigation.vue'
import SelectList       from '../components/SelectList.vue'
import AddTask          from '../components/AddTask.vue'
import DailyList        from '../components/DailyList.vue'

export default {
    name: 'DailyTodo',
    components: {
        TheNavigation,
        SelectList,
        AddTask,
        DailyList
    }
}
</script>

<style lang="less" scoped>

</style>