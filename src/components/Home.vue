<template>
    <h1>Parent</h1>

<Child>
	<template v-slot:header>
		<h1>bhfhf</h1>
	</template>
	<template v-slot:main>
		<h3>dfhfrh</h3>
	</template>
	<template v-slot:footer>
		<h6>bhftgjdhf</h6>
	</template>
</Child>

<Child>
	<template v-slot:header>
		<h1>bhfhf</h1>
	</template>
	<template v-slot:main>
		<h3>dfhfrh</h3>
	</template>
	<template v-slot:footer>
		<h6>bhftgjdhf</h6>
	</template>
</Child>

</template>
 
<script>
	import Child from './Child.vue'
	export default {
		name: 'Home',
		data: function(){
		    return{
			    
		    }
	    },
	    watch:{
            
	    },
	    methods:{
            
        },
	    components:{
            Child
	    },
	    computed: {
	    	
	    }
	}
</script>

<style scoped>

</style>