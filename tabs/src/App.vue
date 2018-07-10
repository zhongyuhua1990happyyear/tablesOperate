<template>
	<div id='app'>
		<Add v-show='flag==0'></Add>
		<Modify @cancel="handleAction" v-show='flag==1'></Modify>
		<Show @finish="handleAction" v-show='flag==2'></Show>
		<List></List>
		
	</div>
</template>

<script>
	
	import Add from './components/Add.vue';
	
	import List from './components/List.vue';
	
	import Modify from './components/Modify.vue';
	
	import Show from './components/Show.vue';
	
	export default{
		components:{
			Add,
			List,
			Modify,
			Show
		},
		data(){
			return{
				flag:0
			}
		},
		methods:{
			handleAction(){
            //查看完成事件，需要展示回新增组件
            this.flag = 0
        }
		},
		mounted(){
			this.$center.$on('changeModify',()=>{
				this.flag = 1;
			});
			this.$center.$on('changeShow',()=>{
				this.flag = 2;
//				console.log(val)
			});
			this.$center.$on('finishModify',()=>{
				this.flag = 0;
//				console.log(val);
			});
			
		}
		
		
	}
	
</script>

<style>
	#app{
		height:100%;
		width:100%;
		background:#ccc;
	}
</style>