<template>
    <section class="selectstyle">
        
        <!-- Dropdown -->
        <div class="row">
            <div class="col-md-12">
                <select class="form-select inputborder" aria-label="Default select example" id="listItems" name="listItems">
                    <option v-for="(item, index) in ListItem" :key="index">{{item.listname}}</option>
                </select>
            </div>
        </div>

        <!-- Button -->
        <div class="row mt-2">
            <div class="btn-group">
                <!-- Button for Motal -->
                <div class="d-grid gap-2 col-6 mx-auto ">
                    <button type="button" class="btn btn-secondary buttonright" data-bs-toggle="modal" data-bs-target="#listModal">Add new List</button>
                </div>

                <!-- Button for delete -->
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-danger buttonleft" @click="deleteList()">Delete</button>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="listModal" tabindex="-1" aria-labelledby="listModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-header" id="listModalHeader">New List</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="">Name</span>
                        </div>
                        <input type="text" class="form-control" v-model="newList">
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Save List</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'SelectList.vue',
    data() {
        return {
            newList: ''
        }
    },
    computed: {
        ListItem() {
            return this.$store.state.DailyTodos.list;
        }
    }
}
</script>

<style lang="less" scoped>

.selectstyle {
    margin: 1rem;
}

.buttonright {
    margin-right: 0.5rem;
}

.buttonleft {
    margin-left: 0.5rem;
}

</style>