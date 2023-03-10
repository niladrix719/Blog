<template>
    <h1>Form</h1>
    <form>
    	<p>{{form}}</p>
        <label>Email : </label>
        <input type="email" placeholder="enter email" v-model="form.email"/><br><br>
        <label>Password : </label>
        <input type="password" placeholder="enter password" v-model="form.password"/><br><br>
        <select v-model="form.country">
        	<option>India</option>
        	<option>USA</option>
        	<option>China</option>
        </select><br><br>
        <h3>Technology</h3>
        <label>java : </label>
        <input type="checkbox" v-model="form.technology" value="java" /><br><br>
        <label>Cpp : </label>
        <input type="checkbox" v-model="form.technology" value="cpp" /><br><br>
        <h3>Gender</h3>
        <label>Male : </label>
        <input type="radio" v-model="form.gender" value="male" name="gender" /><br><br>
        <label>Female : </label>
        <input type="radio" v-model="form.gender" value="female" name="gender" /><br><br>
        <button v-on:click="login()">Log In</button>
    </form>
</template>
 
<script>
	export default {
		name: 'Home',
		data: function(){
		    return{
			    form:{
			    	email: '',
			    	password: '',
			    	country: '',
			    	technology: [],
			    	gender: ''
			    }
		    }
	    },
	    methods:{
            login(){
            	console.log(this.form);
            }
        },
	    components:{
            
	    },
	    computed: {
	    	
	    }
	}
</script>

<style scoped>

</style>