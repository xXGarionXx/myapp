<template>
    <section class="AddTask">
        <header class="row">
            <div>
                <h3 class="mt-5">Tasks</h3>
            </div>
        </header>

        <div class="row">
            <div class="col-md-12">
                <div class="input-group">
                    <span class="input-group-text" id="taskInput">New Task</span>
                    <input type="text" class="form-control inputborder" placeholder="gives a new task" aria-label="Task" aria-describedby="basic-addon1" v-model="newTask" >
                </div>
            </div>
        </div>

        <div class="row">
            <div class="mt-2">
                <button class="btn btn-primary addButtonSettings" type="button" @click="setNewTask">Add Task</button>
            </div>
        </div>



    </section>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            newTask: '',
        }
    },
    methods: {
        setNewTask() {
            this.$store.commit('setNewTask', this.newTask);
            this.newTask = '';
        }
    }

}
</script>

<style lang="less" scoped>

.AddTask {
    margin: 1rem;
}

.addButtonSettings {
    display: block;
    width: 100%;
    background-color: green;
}
.addButtonSettings:hover {
    background-color: darkolivegreen;
}

.addButtonSettings:focus {
    background-color: green;
}


</style>