const URL_API='data/campers.json';

const loadDataBtn = document.querySelector('#cargarData')

loadDataBtn= addEventListener('click', loadData );

function loadData (){
    fetch(URL_API)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            viewHTML(data);
            console.log(data);
        })
}
function viewHTML(myData){
    const { id,nombre,edad,ingles}= myData;
}
