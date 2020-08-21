import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:['你好么么哒']
  },
  getters: {
    count: (state) => {
        return state.todoList.length;
    }
  },
  mutations: {
    addTodo(store, val) {
      store.todoList.push(val || '默认值')
    },
    removeTodo(store, index) {
      store.todoList.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
