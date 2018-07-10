import Vue from 'vue';

import App from './App.vue';

Vue.prototype.$center = new Vue();


Vue.filter('array',function(val){
	var temp = '';
	val.map(function(item,index){
		temp += item;
		if(index != val.length-1){
			temp +='、';
		}
	})
	return temp;
})



const vm = new Vue({
	el:'#app',
	components:{
		App
	},
	render: h=>h(App)
//	render:function(func){
//		return func(App);
//	}
//	
})
