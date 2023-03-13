import {createStore} from 'vuex'

export default createStore({
	state:{
		name: 'Niladri',
		title: 'no title'
	},
	mutations:{
		changeTitle(state,payload){
			setTimeout(function(){
				state.title = 'Yes there is a title' + " " + payload.gender + " " + payload.name;
			},2000)
		}
	},
	action:{

	}
})