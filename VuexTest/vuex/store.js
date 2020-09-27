import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 0
}

/**
 * 这里面放置的是操作state的方法
 */
const mutations = {
	mutationsAddCount(state, n = 0) {
		return state.count += n
	},
	mutationsReduceCount(state, n = 0) {
		return state.count -= n
	}
}

/**
 * 异步方式
 */
const actions = {
	actionsAddCount(context, n = 0) {
		return context.commit('mutationsAddCount', n)
	},
	actionsReduceCount({ commit }, n = 0) {
		return commit('mutationsReduceCount', n)
	}
}

/**
 * 通过getters获取state
 */
const getters = {
	getterCount(state) {
		return state.count
	}
}

var store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

export default store