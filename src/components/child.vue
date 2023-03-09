<template>
	<h2>{{getData()}}</h2>
</template>

<script>
	export default{
		name: 'child',
		props:{
			name: String,
			user: Object,
			getData: Function
		}
	}
</script>