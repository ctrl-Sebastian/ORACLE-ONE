const inputNacimiento = document.querySelector('#birth');

inputNacimiento.addEventListener("blur", (e) =>{
  console.log(e.target);
})

function validarNacimiento(input){
  const fechaCliente = new Date(input.value);
  mayorDeEdad(fechaCliente);
}

function mayorDeEdad(fecha){
  const fechaActual = new Date();

  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(), 
    fecha.getUTCFullDate()
  );

  return diferenciaFechas <= fechaActual;


}