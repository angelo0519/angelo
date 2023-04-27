const URL_API ='data/data.txt'
// Referencia boton carga Data
const loadDataBtn= document.querySelector('#cargarData');

loadDataBtn.addEventListener("click", getData);

function getData (){
    fetch(URL_API)
        .then(response=> {
            return response.text();
        })
        .then((datos )=> {
            console.log(datos);
        })
        .catch((err)=> {
            console.log(err);
        })
}