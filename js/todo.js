const vm = new Vue({
  el: '#app',
  data() {
    return {
      newTodo: '',
      todos: [],
    }
  },
  methods: {
    addTask() {
      if (this.newTodo === '') return
      let todo = {
        item: this.newTodo,
        isActive: false
      }
      this.todos.push(todo)
      this.newTodo = ''
    },
    deleteTask(index) {
      this.todos.splice(index, 1);
    },
    editTask(index) {
      this.todos[index].isActive = true
      this.todos[index].item = this.todos[index].item
    },
    updateTask(index) {
      this.todos[index].isActive = false
    }
  }
})