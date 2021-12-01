<template>
	<div class="home">

		<TheNavigation/>
		
		<h1>Home</h1>

	</div>
</template>

<script>
// @ is an alias to /src
import TheNavigation from '../components/TheNavigation.vue'

export default {
	name: 'Home',
	components: {
		TheNavigation,
	}
}
</script>

<style lang="less" scoped>

.home {
	background-color: white;
}

</style>
