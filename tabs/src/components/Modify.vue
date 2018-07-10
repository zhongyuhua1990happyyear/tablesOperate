<template>
	<div id='modify'>
		<h1>修改</h1>
		<p>姓名：<input type="text" v-model='newInfo.name'/></p>
		<p>性别：<label v-for='(item,index) in sexArr' :key='index'>
			<input type="radio" name='sex' v-model='newInfo.sex'  :value='item'/>{{item}}
		</label></p>
		<p>培训方向：<label v-for='(item,index) in courseArr' :key='index'>
			<input type="checkbox" v-model='newInfo.course' :value='item'/>{{item}}</label></p>
		<p>毕业时间：<select v-model='newInfo.year'>
			<option v-for='(item,index) in yearArr' :key='index' :value='item'>{{item}}年</option></select></p>
		<p><h5>宣言：</h5><textarea cols="50" rows="10" v-model='newInfo.sign'></textarea></p>
		<p><button @click='modiFinish'>修改完成</button><button @click='modiCancel'>取消</button></p>
	</div>
</template>

<script>
	export default{
		
		data(){
			return{
				newInfo:{},
				sexArr:['男','女'],
				courseArr:['HTML5','PHP','Python','JAVA','UI'],
				yearArr:[2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
				id:0,
				'newInfo.course':[]
			
			}	
		},
		methods:{
			modiFinish(){
				this.$center.$emit('finishModify',{info:this.newInfo});
				this.newInfo = {};
			},
			modiCancel(){
				this.$emit('cancel');
				this.newInfo = {};
			}
		},
		mounted(){
			this.$center.$on('modiTake',val=>{
//				console.log(val);
//				this.newInfo = JSON.parse(JSON.stringify(val));
				this.newInfo = Object.assign({},val.info);
//				console.log(val.info.course)
				// this.id = val.id;
				
			});
			
		}
		
	}
</script>

<style scoped>
	#modify{
		min-height: 300px;
		background:lightpink;
	}
	
</style>