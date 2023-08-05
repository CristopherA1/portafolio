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
  
    if (!validarListAsunto(listAsunto.value)) {
      if (!index.includes("listAsunto")) {
        alertValidacionesListAsunto.insertAdjacentHTML("afterbegin", `Selecciona un <strong> Asunto </strong> por favor. <br/> `);
        alertValidacionesListAsunto.style.color = "red";
        listAsunto.style.border = "solid thin red";
        index.push("listAsunto");
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