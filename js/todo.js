const vm = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [],
    edit: 0
  },
  methods: {
    addTask() {
      this.todos.push(this.newTodo)
      this.newTodo = ''
    },
    deleteTask(index) {
      this.todos.splice(index, 1);
    },
    editTask(index) {
      this.edit = index
    }
  }
})