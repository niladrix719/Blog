<template>
	<h1>Child</h1>
	<button v-on:click="getData('nice')">click</button>
</template>

<script>
	export default{
		name: 'Child',
		props:{
			getData: Function
		}
	}
</script>