  function validateM(_evt){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        var nombre = document.getElementById("name").value;
        var apellido = document.getElementById("lastname").value;
        
        var nombreArray = nombre.split("");
        var primeraLetra = nombreArray[0];
        var primeraMayus = primeraLetra.toUpperCase();
        var cortePalabra = false;
      
        for(var i=1;i<nombreArray.length;i++){
            if(cortePalabra)
            {    
                primeraMayus += nombreArray[i].toUpperCase();
                cortePalabra = false;
            }
            else
                primeraMayus+=nombreArray[i];
            if(nombreArray[i] == " ")
                cortePalabra = true;
            
        }
       
       document.getElementById("name").value = primeraMayus; 
}


  function validateT(_evt){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        palabra = window.event.keyCode;

        if((palabra>=65 && palabra<=90)||palabra==8||palabra==32){
            
        } else {
            // = "";
            //alert("Este campo solo permite caracteres de la A-Z");
            _evt.preventDefault();
        }
      
} 

  function validateEmail(_evt){
    
      var correos="yahoo hotmail gmail live";
      var dominio=document.getElementById("email-input").value;
      var server=dominio[1].split("."); 
      var res=correos.match(server[0]);
      
       
        if (dominio.indexOf("@") == -1){
         alert ("error no tiene arroba");
         document.getElementById("email-input").focus();
        } else {
             if (dominio.indexOf('.') == -1){
             alert ("falta el punto");
             document.getElementById("email-input").focus();
            } else {
                 if (res==null){
                 alert ("no pusiste nada");
                
        }}}
       
    } 

  //El campo password debe tener al menos 6 caracteres
  //El campo password no puede ser igual a "password" ó "123456" ó "098754"    
  function validatePass(_evt){
      
      var pass = document.getElementById("input-password").value;
      var msg = document.getElementById("mensaje");
      
      
      if((pass != "123456" || pass != "098754" || pass.toLowerCase() != "password") && (pass.length < 6) ) {
       msg.innerHTML = "<h5 style='color:#8A2BE2';>Contraseña Inválida</h5>"
      } else {
       msg.innerHTML = "";
      }
        
  }

  function validateType(_evt){
      
      var type = document.querySelect("select").value;
      var mensaje = document.getElementById("mensaje2");
      
      if(type == 0){
          mensaje.innerHTML = "<h5 style='color:#8A2BE2';>No seleccionaste ninguna bicicleta</h5>"
          return false;
      } else {
          return true;
      }
  }

