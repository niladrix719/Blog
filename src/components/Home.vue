<template>
	<h3>Hello World</h3>
	<ul>
		<li v-for="item in users" :key="item.name">
			<User :data="item" :getData="getData" />
		</li>
	</ul>
	<user />
</template>
 
<script>
	import User from './User.vue'
	export default {
		name: 'Home',
		data: function(){
		    return{
			    users:[
			       {
			       	name:'Niladri',
			       	email:'rick@gmail.com'
			       },
			       {
			       	name:'Mouma',
			       	email:'mou@gmail.com'
			       },
			       {
			       	name:'Jemmy',
			       	email:'jem@gmail.com'
			       },
			    ]
		    }
	    },
	    methods:{
            getData(name){
				alert(name)
			}
	    },
	    components:{
	    	User
	    }
	}
</script>

<style scoped>
	h3{
		color: orange;
	}
</style>