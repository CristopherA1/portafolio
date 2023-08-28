let txtNombre = document.getElementById("txtNombre");
let txtEmail = document.getElementById("txtEmail");
let txtPhone = document.getElementById("txtPhone");
let asunto = document.getElementById("asunto");
let btnEnviar = document.getElementById("btnEnviar");
let txtMensaje = document.getElementById("txtMensaje");
let listAsunto = document.getElementById("listAsunto");
let checkrecibirInfo = document.getElementById("checkrecibirInfo");
let checkPoliticasPriv = document.getElementById("checkPoliticasPriv");

let formContacto = document.getElementById("formContacto");


/* ALERTAS */

// Párrafos de las alertas
let alertNombre = document.getElementById("alertNombre");
let alertEmail = document.getElementById("alertEmail");
let alertPhone = document.getElementById("alertPhone");
let alertMensaje = document.getElementById("alertMensaje");
let alertCheckPriv = document.getElementById("alertCheckPriv");


//Div de la alerta
let alertValidacionesTextoNombre = document.getElementById("alertValidacionesTextoNombre");
let alertValidacionesTextoEmail = document.getElementById("alertValidacionesTextoEmail");
let alertValidacionesTextoPhone = document.getElementById("alertValidacionesTextoPhone");
let alertValidacionesTextoMensaje = document.getElementById("alertValidacionesTextoMensaje");
let alertValidacionesListAsunto = document.getElementById("alertValidacionesListAsunto");
let alertValidacionesCheckPriv = document.getElementById("alertValidacionesCheckPriv");

//Bandera para evitar repetir la alerta de cada campo
let index = [];

// Validación para que el campo nombre solo permita nombres de longitud (3 - 99) caracteres.
function validarNombre(nombre) {
    if (nombre.length >= 3 && nombre.length < 100) {
      return true;
    } else {
      return false;
    }
  }
  
  //Función para validar que lo que se escribe en el campo email cumpla con la regex definida.
  let regexEmail =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  function validarEmail(email) {
    if (email != "") {
      if (regexEmail.test(email)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
  function validarMensaje(mensaje) {
    if (mensaje.length >= 20 && mensaje.length <= 200) {
      return true;
    } else {
      return false;
    }
  }
  
  let regextel = /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/;
  function validarNumTel(numTel) {
    if (numTel != "") {
      if (regextel.test(numTel)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
  
  function validarListAsunto(asunto) {
    if (asunto != "Asunto") {
      return true;
    } else {
      return false;
    }
  }
  
  function politicasPrivIsChecked() {
    if (checkPoliticasPriv.checked) {
      checkPoliticasPriv.value = "Si";
      return true;
    } else {
      return false;
    }
  }
  
  function recibirInfoIsChecked() {
    if (checkrecibirInfo.checked) {
      return true;
    } else {
      return false;
    }
  }
  
  btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    if (!validarNombre(txtNombre.value)) {
      if (!index.includes("nombre")) {
        alertValidacionesTextoNombre.insertAdjacentHTML(
          "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);
        alertValidacionesTextoNombre.style.color = "red";
        txtNombre.style.border = "solid thin red";
        index.push("nombre");
      }
    }
    if (!validarEmail(txtEmail.value)) {
      if (!index.includes("email")) {
        alertValidacionesTextoEmail.insertAdjacentHTML("afterbegin", `El <strong> Correo </strong> no es correcto. <br/> `);
        alertValidacionesTextoEmail.style.color = "red";
        txtEmail.style.border = "solid thin red";
        index.push("email");
      }
  
    }
  
    if (!validarNumTel(txtPhone.value)) {
      if (!index.includes("phone")) {
        alertValidacionesTextoPhone.insertAdjacentHTML("afterbegin", `El <strong> Número telefónico </strong> no es correcto. <br/> `);
        alertValidacionesTextoPhone.style.color = "red";
        txtPhone.style.border = "solid thin red";
        index.push("phone");
      }
  
    }
  
  
    if (!validarMensaje(txtMensaje.value)) {
      if (!index.includes("mensaje")) {
        alertValidacionesTextoMensaje.insertAdjacentHTML("afterbegin", `El <strong> Mensaje</strong> no es correcto. <br/> `);
        alertValidacionesTextoMensaje.style.color = "red";
        txtMensaje.style.border = "solid thin red";
        index.push("mensaje");
      }
    } 
    enviarEmail();
    limpiarTodo();
  }
);
//Remueve todas las instancias de un objeto dado (item) que se encuentre en el arreglo index
function removeAllInstances(arr, item) {
    for (var i = arr.length; i--;) {
      if (arr[i] === item) arr.splice(i, 1);
    }
  }
  
  function limpiarTodo() {
    index = [];
    checkrecibirInfo.checked = false;
    checkPoliticasPriv.checked = false;
    txtNombre.value = "";
    txtEmail.value = "";
    txtPhone.value = "";
    txtMensaje.value = "";
    listAsunto.value = "Asunto";
    removeAllInstances(index, "nombre");
    removeAllInstances(index, "email");
    removeAllInstances(index, "phone");
    removeAllInstances(index, "mensaje");
    removeAllInstances(index, "listAsunto");
    removeAllInstances(index, "checkPriv");
  }
  