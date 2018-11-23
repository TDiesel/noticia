const valueItem = document.getElementById('itemValue')
const valueAutor = document.getElementById('itemAutor')
const valueDescricao = document.getElementById('itemDescricao')
const divLista = document.getElementById('lista')
const itensRenderizados = document.getElementById('itensRenderizados')

let lista = new Todo()

let componentList_v2 = (items) => {
    itensRenderizados.innerHTML = '' // apago tudo que existe dentro da div
    items.forEach((i, idx) => {
        let item = {
            titulo: i.titulo,
            autor: i.autor,
            descricao: i.descricao,
            idx: idx // poderia ser enxugado somente para -> idx
        }
        itensRenderizados.appendChild(lista.renderItem(item))
    })
}

valueDescricao.addEventListener('keyup', (e) => {
   if (e.keyCode === 13) {
        lista.novoItem = {
            titulo: valueItem.value,
            autor: valueAutor.value,
            descricao: valueDescricao.value,
        }
        componentList_v2(lista.todos)
        valueItem.value = ''
        valueAutor.value = ''
        valueDescricao.value =''
        valueItem.focus()
    }
})

window.onload = () => { 
    console.log('página carregada com sucesso')
    componentList_v2(lista.todos)
}
