<template>
	<div class="home">
		<header>
			<TheNavigation/>
		
			<h1>Home</h1>
		</header>

		<main>
			<Date/>
		</main>

		<footer>

		</footer>



	</div>
</template>

<script>
// @ is an alias to /src
import TheNavigation 	from '../components/TheNavigation.vue'
import Date				from '../components/Date.vue'

export default {
	name: 'Home',
	components: {
		TheNavigation,
		Date
	}
}
</script>

<style lang="less" scoped>



</style>
