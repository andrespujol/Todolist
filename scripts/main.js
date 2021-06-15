var pantallaCarga = new bootstrap.Modal(document.getElementById('pantallaCarga'), {})
let pantallaListadoLista = document.getElementById('pantallaListadoLista')
let pantallaVacio = document.getElementById('pantallaVacio')
let pantallaListado = document.getElementById('pantallaListado')
let pantallaDetalle = document.getElementById('pantallaDetalle')





let guardar = document.getElementById('pantallaCargaAdd').addEventListener('click', function (){
    let producto = document.getElementById('pantallaCargaProducto').value
    let categoria = document.getElementById ('pantallaCargaIcono').value
    let detalle = document.getElementById('pantallaCargaInfo').value
    document.getElementById('pantallaCargaProducto').value = ""
    document.getElementById ('pantallaCargaIcono').value = ""
    document.getElementById('pantallaCargaInfo').value = ""
    let modelo = `<li class="list-group-item" data-producto = "${producto}" data-icono = "${categoria}" data-info = "${detalle}"><img src="${categoria}" class="pantallaListado__icono" alt="${producto}">${producto}</li>`

    pantallaListadoLista.innerHTML += modelo
    pantallaCarga.hide()
    pantallaVacio.style.display = 'none'
    pantallaListado.style.display = 'block'
})

let verDetalle = document.getElementById('pantallaListadoLista').addEventListener('click', function(e){
    document.getElementById('pantallaDetalle__producto').innerHTML = e.target.getAttribute('data-producto')
    document.getElementById('pantallaDetalle__icono').src = e.target.getAttribute('data-icono')
    document.getElementById('pantallaDetalle__info').innerHTML = e.target.getAttribute('data-info')

    pantallaListado.style.display = 'none'
    pantallaDetalle.style.display = 'block'



})

let pantallaDetalle__cerrar = document.getElementById('pantallaDetalle__cerrar').addEventListener('click', function(){
    pantallaListado.style.display = 'block'
    pantallaDetalle.style.display = 'none'

})
