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
    // Funzione Inserimento elemento
    insertItem : function(){
      if (!this.todo) { // se todo è undefined
        alert('Inserisci una parola!')
      } else if (this.todoList.includes(this.todo)) { // se è già in todoList
        alert('Parola già inserita precedentemente')
      } else { // altrimenti
        this.todoList.push(this.todo); // entra in todoList
        this.todo = ''; // todo torna vuoto
      }
      /* Metodo Abbreviato *
        return (this.todo && !this.todoList.includes(this.todo)) ?
          this.todoList.push(this.todo) : alert('Non valido')
      */
    },
    // Funzione Rimuovi elemento
    removeItem : function(index) {
      this.todoList.splice(index, 1);
    }
  }
});
