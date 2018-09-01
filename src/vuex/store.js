import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 1.state在vuex中存储数据
var state={
	count:1,
	List:[]
}

// 2.mutations 里面放方法，主要改变state里面的数据
var mutations={
	incCount(){
		state.count++;
	},
	addList(state,data){
		state.List=data;
	}
}

// 3.类似于计算属性
var getters={
	computedCount:(state)=>{
		return state.count*2
	}
}

// 4. 类似mutations 
// action 提交的事mutation，而不是直接变更状态
//action可以包含任意异步操作
var actions={
	incMutationCount(context){
		context.commit('incCount');//执行mutation里面的incCount方法
	}
}

// 实例化 vuex.store
const store = new Vuex.Store({
	state,
	mutations:mutations,
	getters,
	actions
})

export default store