<template>
  <div class="todoList">
          <img alt="Vue logo" src="../assets/logo.png">
          <div class="title"> TODO LIST 一共<span class="count">{{count}}</span>条</div>
          <div>
            <ul>
              <li v-for="(item, index) in todoList">{{ item }} <span class="remove" @click="remove(index)">删除</span>
              </li>
            </ul>
          </div>
          <input type="text" class="input" v-model="inputVal" placeholder="请输入todo"/>
          <div class="btn" @click="addTodo(inputVal)">增加</div>
        </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';
import axios from 'axios';

export default {
  name: "TodoList",
  data() {
    return {
      inputVal: ''
    }
  },
  methods: {
    remove(index) {
      this.$store.commit('removeTodo', index);
    },
    ...mapMutations([
      'addTodo',
      'removeTodo'
    ]),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    ...mapState(['todoList']),
    ...mapGetters(['count'])
  },
  mounted() {
    axios.get('http://localhost:3000').then(res => {
      console.log(res.data);
    })
  }
}
</script>

<style scoped>
ul {
  border: 1px solid gray;
}

li {
  padding: 15px;
}

.count {
  font-size: 30px;
  color: red;
  font-weight: bold;
}

.btn {
  padding: 5px;
  margin: 20px;
  border: 1px solid #42b983;
  color: #2c3e50;
}

.input {
  width: 80%;
  margin: 40px 40px 0 40px;
  font-size: 20px;
  padding: 20px 0;
}

.remove {
  color: red;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 0 10px;
}
</style>