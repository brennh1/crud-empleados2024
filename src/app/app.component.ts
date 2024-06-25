import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-empleados';

  empleados=[
    {name:'Hugo', position:'Programador Jr.',salary:10000,age:15,sex:'M',email:'hun@gmail.com'},
    {name:'Paco', position:'Programador Sr.',salary:15000,age:18,sex:'M',email:'pac@gmail.com'},
    {name:'Luis', position:'Administrador Red',salary:40000,age:21,sex:'M',email:'lu@gmail.com'}
  ]
  
  modelo:any={}
  modelo2:any={}
  index: number=0; 

  addEmpleado():void{
    //Permite agregar un empleado al arreglo de empleados
    this.empleados.push(this.modelo);
    this.modelo={};
    console.log(this.empleados);

  }
  
  
  deleteEmpleado(i:number):void{
    //Permite eliminar un empleado del arreglo de empleados
    this.empleados.splice(i,1);


  }
  myValue:number=0;
  editEmpleado():void{
    //Permite seleccionar un empleado del arreglo de empleados para su actualizacion
    this.modelo2.name=this.empleados[1].name;
    this.modelo2.position=this.empleados[1].position;
    this.modelo2.salary=this.empleados[1].salary;
    this.modelo2.sex=this.empleados[1].sex;
    this.modelo2.email=this.empleados[1].email;
  }
  updateEmpleado():void{
    //Permite actualizar un empleado en el arreglo de empleados
    let i=this.myValue;
    this.empleados[i]=this.modelo2;
    this.modelo2={};
  }
   

  

}
