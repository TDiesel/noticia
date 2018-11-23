
class Todo extends Store {
    constructor() {
        super();
    }

    renderItem(item) {

        let template = `
        
        <div class="field is-grouped" >
        <p class="subtitle">Título
            <input id="itemValue" class="input enter" type="text" disabled value="${item.titulo}">
        </p>
        <p class="subtitle" style="margin-left: 1%">Autor
            <input  id="itemAutor" class="input enter" type="text" disabled value="${item.autor}">
        </p>
        <p class="subtitle" style="min-width: 60%; margin-left: 1%; margin-right: 1%">Descrição       
            <input id="itemDescricao" class="input enter" type="text" disabled value="${item.descricao}">
        </p>
        <div style="margin-top:2%; margin-right: 0.2%">
        <p class="control" >
            <a class="button is-info editar">
                <span class="icon is-small">
                    <i class="fas fa-edit"></i>
                </span>
            </a>
        </p>
        </div>
        <div style="margin-top:2%;>
            <p class="control">
                <a class="button is-danger deletar">
                    <span class="icon is-small">
                        <i class="fas fa-times"></i>
                    </span>
                </a>
            </p>
        </div>
    </div>`

        const itemHTML = document.createRange().createContextualFragment(template)

        itemHTML.querySelector('.deletar').addEventListener('click', () => {
            lista.excluirIndex = item.idx
            componentList_v2(lista.todos)
        })

        const inputDesc = itemHTML.querySelector('#itemValue')
        const itemAutor = itemHTML.querySelector('#itemAutor')
        const itemDescricao = itemHTML.querySelector('#itemDescricao')
        const inputs = itemHTML.querySelectorAll('.enter')

        itemHTML.querySelector('.editar').addEventListener('click', (e) => {
            inputDesc.removeAttribute('disabled')
            itemAutor.removeAttribute('disabled')
            itemDescricao.removeAttribute('disabled')
            inputDesc.focus()

            inputs.forEach(element => {
                element.addEventListener('keyup', (e) => {
                    if (e.keyCode === 13) {
                        lista.editarIndex(item.idx, {
                            titulo: inputDesc.value,
                            autor: itemAutor.value,
                            descricao: itemDescricao.value,
                        })
                        componentList_v2(lista.todos)
                        valueItem.value = ''
                        valueAutor.value = ''
                        valueDescricao.value = ''
                        valueItem.focus()
                    }
                })
            })
        })

        return itemHTML
    }
}
