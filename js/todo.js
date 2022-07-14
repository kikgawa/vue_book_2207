const vm = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
    ]
  },
  methods: {
    addTask() {
      this.todos.push(this.newTodo)
      this.newTodo = ''
    },
    deleteTask(index) {
      this.todos.splice(index, 1);
    }
  }
})