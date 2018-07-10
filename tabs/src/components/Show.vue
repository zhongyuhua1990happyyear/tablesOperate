<template>
	<div id='show'>
		<h1>查看</h1>
			<p>姓名：{{detailMSG.name}}</p>
			<p>性别：{{detailMSG.sex}}</p>
			<p>培训方向：{{detailMSG.course | array}}</p>
			<p>毕业时间：{{detailMSG.year}}</p>
			<p>宣言：{{detailMSG.sign}}</p>
			<p><button @click='showFinish'>查看完成</button></p>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				detailMSG:{},
				
			}
		},
		methods:{
			showFinish(){
				this.$emit('finish');
				this.detailMSG = {};
				
			}
		},
		mounted(){
			this.$center.$on('showDetail',val=>{
//				console.log(val);
				this.detailMSG = val;
			})
		}
	}
</script>

<style scoped>
	#show{
		min-height: 300px;
		background:khaki;
	}
	
</style>