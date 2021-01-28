new Vue({
  // ELEMENTO //
  el: '#app',

  // DATI //
  data: {
    todoList : [], // oggetto con valore array
    todo : '' // oggetto con valore stringa
  },

  // METODI //
  methods: {
    // Funzione Submit
    insertItem : function(){
      if (!this.todo) { // se todo è undefined
        alert('Inserisci una parola!')
      } else if (this.todoList.includes(this.todo)) { // se è già in todoList
        alert('Parola già inserita precedentemente')
      } else { // altrimenti
        this.todoList.push(this.todo); // entra in todoList
        this.todo = ''; // todo torna vuoto
      }

      /*
      { // se todo esiste, e non è uguale a un elemento già in todoList
        x : (this.todo && !this.todoList.includes(this.todo)) ?
        this.todoList.push(this.todo) // todo entra in todoList
        :
        alert('Non valido') // altrimenti parte un alert
      }
      */
      
    },
    // Funzione Rimuovi elemento
    removeItem : function(index) {
      this.todoList.splice(index, 1);
    }
  }
});
