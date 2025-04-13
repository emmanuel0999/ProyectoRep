/*Opteniendo campos de formulario*/
const nombre = document.querySelector('#IName');
const categoria = document.querySelector('#ICategoria');
const stock = document.querySelector('#IStock');
const proveedor = document.querySelector('#IProveedor');
const precio = document.querySelector('#IPrecio');
const fingreso = document.querySelector('#IFIngreso');
const estado = document.querySelector('#IEstado');

//Creando selector de boton submit
let form = document.querySelector('#formulario');

/*Creando eventos para validacion de formulario */

nombre.addEventListener('change', asignarValor);
categoria.addEventListener('change', asignarValor);
stock.addEventListener('change', asignarValor);
proveedor.addEventListener('change', asignarValor);
precio.addEventListener('change', asignarValor);
fingreso.addEventListener('change', asignarValor);
estado.addEventListener('change', asignarValor);

form.addEventListener('submit', validarFormulario);

//Creando formulariode objetos

const objFormulario ={
    IName: '',
    ICategoria:'',
    IStock:'',
    IProveedor:'',
    IPrecio:'',
    IFIngreso:'',
    IEstado:''
}

// Clase para creacion de UI

class Inventario{
    
    alertaError(mensaje, referencia){
        this.eliminarAlerta(referencia);

        const camposVacios = document.createElement('div');
        camposVacios.classList.add('contenedorMsjVacio');
        camposVacios.innerHTML = mensaje;
        referencia.appendChild(camposVacios);

    setTimeout(() => {
        camposVacios.remove();
    }, 3000);

    }

    eliminarAlerta(referencia){
        const camposVacios = referencia.querySelector('.contenedorMsjVacio');

        if (camposVacios){
            camposVacios.remove();
        }
    }
}

//Llamada de clase Inventario

const inventario = new Inventario();

//Asignando valores al objeto
function asignarValor(e){
    objFormulario[e.target.id] = e.target.value;

    console.log(objFormulario)
}

//Metodos a usar para validacion
function validarFormulario(e){
   e.preventDefault();

   const {IName, ICategoria,IStock ,IProveedor , IPrecio, IFIngreso, IEstado } = objFormulario;

   if(IName.trim() == ''|| ICategoria.trim() == '' || IProveedor.trim() == '' || IFIngreso.trim() == '' || IEstado.trim() == '')
   {
     //Limpiando duplicados de alertas
     inventario.eliminarAlerta(e.target.parentElement);

     //Agregando alertas
     inventario.alertaError('Debe completar todos los campos', e.target);
     return;
   }
   if(IStock <= 0 || IStock === null || IPrecio <=0 || IPrecio === null ){
    //Limpiando duplicados de alertas
    inventario.eliminarAlerta(e.target.parentElement);

     //Agregando alertas
    inventario.alertaError('El valor del stock y el precio deben ser mayor que cero', e.target);
    return;
   }
    
  
   console.log('Despues del if');
}

