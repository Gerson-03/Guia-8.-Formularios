var contenidos = [
    get_element("inp_nombre"),
    get_element("inp_apellido"),
    get_element("inp_carreras"),
    get_element("inp_masculino"),
    get_element("inp_femenino"),
    get_element("inp_egresado"),
];
var datos = [], index = 0;
visible(true);


contenidos[3].addEventListener("click",function(){
    contenidos[3].checked = true;
    contenidos[4].checked = false;
});
contenidos[4].addEventListener("click", function () {
    contenidos[3].checked = false;
    contenidos[4].checked = true;
});

function Nuevo(){
    clear();
    visible(false);
}
function Guardar(){
    let arr = [];
    for (let i = 0; i < contenidos.length; i++) {
        if (i < 3)
            arr.push(contenidos[i].value);
        else
            arr.push(contenidos[i].checked);
    }
    datos.splice(0, 0, arr);
    visible(true);
}
function Cancelar(){
    clear()
    mostrar(datos[index]);
    visible(true);
}
function Eliminar() {
    datos.splice(index, 1);
    index = (datos.length - 1);
    clear()
    mostrar(datos[index]);
}

function clear(){
    for (let i = 0; i < contenidos.length; i++)
        contenidos[i].value = "";
    contenidos[3].checked = false;
    contenidos[4].checked = false;
    contenidos[5].checked = false;
}

function visible(value){
    for(let i = 0; i < contenidos.length; i++)
        contenidos[i].disabled = value;
}

function position(num,p){
    if ((index - num) >= 0 && p == 1){
        index -= num;
        mostrar(datos[index]);
    }
    else if((index +num) < datos.length && p == 0){
        index += num;
        mostrar(datos[index]);
    }
}
function mostrar(data = []){
    visible(true);
    for (let i = 0; i < (data.length-3); i++)
        contenidos[i].value = data[i];
    contenidos[3].checked = data[3];
    contenidos[4].checked = data[4];
    contenidos[5].checked = data[5];
}

function get_element(x) {
    return document.getElementById(x);
}