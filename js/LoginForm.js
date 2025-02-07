document.addEventListener('DOMContentLoaded', function(){

    const arrayValidacion  ={
        user: '',
        pass: ''
   }

   let txtUser = document.querySelector('#txtUser');
   let txtPass = document.querySelector('#txtPass');
   let form = document.querySelector("#formulario");
   let btnSubmit = document.querySelector('#formulario input[type="submit"]');
 

   txtUser.addEventListener('input', validar);
   txtPass.addEventListener('input', validar);

  
    
   //Validando si los campos estan vacios
    function validar(e){

        console.log(e.target);

        if (e.target.value.trim() === ''){

            mostrarInfo(`El campo ${e.target.id} esta vacio`,e.target.parentElement);
            arrayValidacion[e.target.name] = '';
            comprobandoValidacion();
            return
        }
        
        LimpiarAlerta(e.target.parentElement);

        //Asignando valores
        arrayValidacion[e.target.name] = e.target.value.trim();

        comprobandoValidacion();
    }

    function mostrarInfo(mensaje,referencia){

        LimpiarAlerta(referencia);
        
        //creando un elemento de alerta
       let p = document.createElement('P');
       //agregando texto al elemento
       p.textContent = mensaje;
        //asignado clase de estilos
       p.classList.add('pError');
        //agregandolo al formulario
       referencia.appendChild(p);

    }

    function LimpiarAlerta(referencia){
        //Buscando clase de alerta
        let alerta = referencia.querySelector('.pError');
        //Remueve contenedor existente
        if(alerta){
            alerta.remove();
        }

    }

    function comprobandoValidacion(){
        if(Object.values(arrayValidacion).includes('')){
            btnSubmit.classList.add('opacity');
            btnSubmit.setAttribute('disabled');
        }
        else{
            btnSubmit.classList.remove('opacity');
            btnSubmit.removeAttribute('disabled');
        }
    }

});