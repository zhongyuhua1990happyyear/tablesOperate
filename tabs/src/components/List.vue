<template>
	<div id='list'>
		<h1>列表展示</h1>
		<li v-for='(item,index) in showData' :key='index'>
			<p>姓名：{{item.name}}</p>
			<p>性别：{{item.sex}}</p>
			<p>培训方向：{{item.course | array}}</p>
			<p>毕业时间：{{item.year}}</p>
			<p>宣言：{{item.sign}}</p>
			<p><button @click='modiAction(index)'>修改</button>&nbsp;&nbsp;<button @click='delAction(index)'>删除</button>&nbsp;&nbsp;<button @click='showAction(index)'>查看</button></p>
		</li>
		
	</div>
</template>

<script>
	export default{
		
		data(){
			return{
				showData:[],
				Index: -1,
				flag:-1
				
			}
		},
		methods:{
			modiAction(i){
				this.flag=1;
				this.Index = i ;
//				console.log(this.showData[i]);
				this.$center.$emit('modiTake',
					{
						info:this.showData[i],
						id:this.Index
					}		
				);
				this.$center.$emit('changeModify',this.flag);
			},
			delAction(i){
				this.showData.splice(i,1);
			},
			showAction(i){
				this.flag=2;
//				console.log(this.showData[i]);
				this.$center.$emit('showDetail',this.showData[i]);
//				this.flag = SHOW_DOM.SHOW;
				this.$center.$emit('changeShow',this.flag);
			}
		},
		mounted(){
			
			this.$center.$on('listShow',val=>{
//				console.log(val);
				this.showData = val;
//				console.log(this.showData[0].name);
			});
			this.$center.$on('finishModify',val=>{
//				console.log(val);
//				console.log(this.Index)
				this.showData.splice(this.Index,1,val.info);
//				console.log(this.showData[this.Index]);
//				console.log(val.info);
				this.Index=-1;
			})
		}
	}
	
</script>
<style scoped>
	#list{
		min-height: 300px;
		background:paleturquoise;
	}
	
</style>