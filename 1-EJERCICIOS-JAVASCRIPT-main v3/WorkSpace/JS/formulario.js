function capturar(){
    console.log("Capturado");
    function Persona(id, nombre){
        this.id=id;
        this.nombre=nombre;
        
    }
    var nombreCapturar = document.getElementById("nombre").value;
    var idCapturar = document.getElementById("id").value;

    nuevoSujeto = new Persona(nombreCapturar, idCapturar);
    console.log(nuevoSujeto);
    agregar();
}
    var baseDatos= [];
    function agregar(){
        baseDatos.push(nuevoSujeto);
        console.log(baseDatos);
        document.getElementById("tabla").innerHTML += '<tbody><td>'+ nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.id+'</td></tbody>';
    }
function buscar(){
    console.log("Buscado");
    function Persona(id, nombre){
        this.id=id;
        this.nombre=nombre;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    var idCapturar = document.getElementById("id").value;

    baseDatos.forEach(element => {
        console.log(element)
        element == nuevoSujeto ? console.log("lo encontre") : console.log("no lo encontro");
    })


}

