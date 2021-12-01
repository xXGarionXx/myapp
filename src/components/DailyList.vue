<template>
    <section class="DailyList">

        <ul class="list-group" v-for="(list, index) in currentList" :key="index">
            <li class="list-group-item" v-bind:class="{'finishedTask':list.finished}">
                <p>{{ index }} - {{ list.Tasks }}</p>

                <button class="finishedSwitch" @click="toggleListItem(list)">✔</button>
                <button class="deleteObject" @click="deleteItem(index)">✖</button>
            </li>
        </ul>

    </section>
</template>

<script>
export default {
    name: 'DailyList',
    data() {
        return {

        }
    },

    computed: {
        currentList() {
            return this.$store.getters.getListName;
        }
    },

    methods: {
        toggleListItem(list) {
            this.$store.commit('toggleListItem', list)
        },

        deleteItem(index) {
            this.$store.commit('deleteItem', index);
        }
    }
}
</script>

<style lang="less" scoped>

.DailyList {
    margin: 1rem;
    background: white;
}

li {
    display: flex;
    margin: 0.2rem 0;
    border: 0.2rem solid green;
    align-items: center;
}

li p {
    font-weight: bold;
    margin: 0;
}

.finishedSwitch {
    width: 1.5rem;
    margin-left: auto;
    background-color: #ff4112;
}

.deleteObject {
    width: 1.5rem;
    background-color: orange;
}

.finishedTask p {
    text-decoration: line-through;
    color: #1c89ff;
}

</style>