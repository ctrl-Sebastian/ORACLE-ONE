import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (event)=>{
  event.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value
  const email = document.querySelector("[data-email]").value
  
  clientService
  .crearCliente(nombre, email)
  .then(() => {
    window.location.href = "/screens/registro_completado.html"
  })
  .catch((error) => console.log(error));
})