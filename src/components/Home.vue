<template>
	<button @click="tab = 'Node'">Load Node</button>
	<button @click="tab = 'Java'">Load Java</button>
	<button @click="tab = 'Php'">Load Php</button>
    <component :is="tab" />
</template>
 
<script>
	import Node from './Node.vue'
	import Php from './Php.vue'
	import Java from './Java.vue'
	export default {
		name: 'Home',
		data: function(){
		    return{
			    tab:'java',
		    }
	    },
	    watch:{
            
	    },
	    methods:{
            
        },
	    components:{
            Node,
            Php,
            Java
	    },
	    computed: {
	    	
	    }
	}
</script>

<style scoped>

</style>