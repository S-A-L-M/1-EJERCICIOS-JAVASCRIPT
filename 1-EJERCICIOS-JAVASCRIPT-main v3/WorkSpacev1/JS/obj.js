const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };
  function fullname() {
    return this.firtstName + " " + this.lastName;
  
  }
  function nombrecompleto() {
    document.getElementById('example').innerHTML = person.fullName();
  }
  const Silla = {
    firstName1: "Silla",
    lastName1: "Sentar",
    id: 5567,
    fullName1: function () {
      return this.firstName1 + " " + this.lastName1;
    }
  };
  function fullname1() {
    return this.firtstName1 + " " + this.lastName1;
  
  }
  function nombrecompleto1() {
    document.getElementById('example1').innerHTML = Silla.fullName1();
  }

  const myObj = {
    name:"Jhon",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat",
        fullnamecar2: function (){
            return this.car2;

        }
    }
    };
    function fullnamecar2(){
        return this.car2;
    }
    function obtenercarro2(){
        document.getElementById('example2').innerHTML = myObj.cars.car2();
    }
   
  

 