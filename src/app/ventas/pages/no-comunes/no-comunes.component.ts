import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre:string='Susana';
  genero:string='femenino';
  invitacionMap={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  cliente:string[] =['Maria','Pedro','Juan','Diego'];
  clientesMapa = {
    '=0':'No tenemos ningun clientes esperando',
    '=1':'Tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }
  borrarCliente(){
    this.cliente.shift()

  }
  cambiarPersona(){
    if(this.nombre==="Susana"){
      this.nombre="Pedro";
      this.genero = "masculino";
    }else{
      this.nombre="Susana";
      this.genero = "femenino";
    }
  }
  persona = {
    nombre:'Evelyn',
    edad:37,
    direccion:'El Carmen,Chile'
  }

  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Batman',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ];

  miObservable = interval(1000);

  // valorPromesa = new Promise(resolve,reject)=>{
  //   setTimeout(() => {
  //     resolve('Tenemos datos en resolve');
  //   }, 3500);}
}
