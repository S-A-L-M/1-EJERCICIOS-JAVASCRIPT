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
    var newrow;
    function agregar(){
        baseDatos.push(nuevoSujeto);
        console.log(baseDatos);
        <td>${descripcion.value}</td>
              
        newrow += `<td>${ nuevoSujeto.nombre}</td>
        <td>${nuevoSujeto.id}</td>
        <td><a class="btn btn-primary">actualizar</a></td>
              <td><a class="btn btn-danger">Eliminar</a></td>`;
        
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
function addfila(){
    const
}

