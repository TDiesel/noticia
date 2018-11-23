
class Store {

    constructor() {
        this.store = "todos";
    }

    _parse(string) {
        return JSON.parse(string); // retorna um objeto
    }

    _stringify(objeto) {
        return JSON.stringify(objeto); // retorna uma string
    }

    get todos() {
        return this._parse(localStorage.getItem(this.store)) || [];
    }

    set novoItem(item) {
        let todos = this.todos
        let res = todos.push(item);
        localStorage.setItem(this.store, this._stringify(todos));
        return res;
    }

    editarIndex(idx, value) { //value = {nome: '', telefone: ''}
        let todos = this.todos
        let res = (todos[idx] = value);
        localStorage.setItem(this.store, this._stringify(todos));
        return res;
    }

    set excluirIndex(idx) {
        let todos = this.todos
        let res = todos.splice(idx, 1);
        localStorage.setItem("todos", this._stringify(todos));
        return res;
    }
}
