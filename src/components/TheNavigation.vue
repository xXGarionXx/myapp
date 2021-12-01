<template>
    <section class="TheNavigation">
        <div class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TodoApp</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav" class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>  
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/DailyTodo">DailyTodo</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>

.TheNavigation {
    .navbar {
        padding: 0;
        .container-fluid {
            padding: .5rem 1rem;
            background-color: gray;
        }
    }
}
</style>