<template>
	<h1>Java</h1>
</template>

<script>
	export default{
		name: 'Java',
		beforeUnmount(){
			console.log('before');
		},
		unmounted(){
			console.log('after');
		},
		created(){
			console.log('created');
		},
		updated(){
			console.log('updated');
		}
	}
</script>