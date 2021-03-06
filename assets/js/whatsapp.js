/* 
* Author: Gabriel Chávez
* Website: https://gabrielchavez.me
*/

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '59163511638';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let Nombre = document.querySelector('#Nombre').value
        let Celular = document.querySelector('#Celular').value
        let Cedula = document.querySelector('#Cedula').value
        let Edad = document.querySelector('#Edad').value
        let Sexo = document.getElementById('Sexo').options[document.getElementById('Sexo').selectedIndex].text
        let Zona = document.querySelector('#Zona').value
        let Direccion = document.querySelector('#Direccion').value
        let Servicio1 = document.getElementById('Servicio1').options[document.getElementById('Servicio1').selectedIndex].text
        let Servicio2 = document.querySelector('#Servicio2').value
   
        let message = 'send?phone=' + phone + '&text=*_SOLICITUD DE REGISTRO DE NUEVO PERSONAL_*%0A*(Datos del Solicitante)*%0A%0A*¿Nombre Del Solicitante?*%0A' 
        + Nombre + '%0A*¿Celular de Contacto?*%0A' + Celular + '%0A*¿Cedula de Identidad?*%0A' + Cedula + '%0A*¿Edad?*%0A' + Edad + '%0A*¿Sexo del Personal?*%0A' + Sexo+
         '%0A*¿Zona de su Vivienda?*%0A' + Zona + '%0A*¿Direccion de la Vivienda?*%0A' + Direccion + '%0A*¿Tipo de Profesión?*%0A' + Servicio1 +
         ' *:* ' + Servicio2 +'%0A*ENVIAR FOTO DE CARNET DE AMBOS LADOS*%0A' 


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);
});

    var input = document.getElementById('Servicio2');

function carg(elemento) {
  d = elemento.value;
  
  if(d == 1){
    input.disabled = true;
  }else{
    input.disabled = false;
  }
}

       
