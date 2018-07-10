<template>
	<div id='add'>
		<h1>新增</h1>
		<p>姓名：<input type="text" v-model='name'/></p>
		<p>性别：<label v-for='(item,index) in sexArr' :key='index'>
			<input type="radio" name='sex' v-model='sex'  :value='item'/>{{item}}
		</label></p>
		<p>培训方向：<label v-for='(item,index) in courseArr' :key='index'>
			<input type="checkbox" v-model='course' :value='item'/>{{item}}</label></p>
		<p>毕业时间：<select v-model='year'>
			<option v-for='(item,index) in yearArr' :key='index' :value='item'>{{item}}年</option></select></p>
		<p><h5>宣言：</h5><textarea cols="50" rows="10" v-model='sign'></textarea></p>
		<p><button @click='addAction'>新增</button>&nbsp;&nbsp;<button @click='cancelAction'>取消</button></p>
	</div>
</template>
<script>
	
	export default{
		data(){
			return{
				name:'',
				sex:'',
				course:[],
				year:'',
				sign:'',
				sexArr:['男','女'],
				courseArr:['HTML5','PHP','Python','JAVA','UI'],
				dataSource:[]
			
			}
		},
		computed:{
			yearArr(){
				let arr = [];
				for(var i = 0;i<10;i++){
					
					arr.push(i+2008);
				}
				return arr;
			}
		},
		methods:{
			addAction(){
				this.dataSource.push(
					{
						name:this.name,
						sex:this.sex,
						course:this.course,
						year:this.year,
						sign:this.sign
					}
				),
				this.$center.$emit('listShow',this.dataSource);
				this.cancelAction();
//				console.log(this.dataSource);
			},
			cancelAction(){
				this.name='';
				this.sex='';
				this.course=[];
				this.year='';
				this.sign='';
			}
		}
	}
	
</script>
<style scoped>
	#add{
		
		min-height: 300px;
		background: palegreen;
	}
	
</style>