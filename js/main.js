//VALIDAR NOMBRE
function validateM(_evt){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        var nombre = document.getElementById("name").value;
        
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

//VALIDAR APELLIDOS
function validateMA(_evt){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        var apellido = document.getElementById("lastname").value;
        
        var nombreArray = apellido.split("");
        var primeraLetra = nombreArray[0];
        var primeraMayus = primeraLetra.toUpperCase();
        
        var cortePalabra = false;
      
        for(var i=1;i<nombreArray.length;i++){
            if(cortePalabra)
            {    
                primeraMayus += nombreArray[i].toUpperCase();
                cortePalabra = false;
            }
            else {
                primeraMayus+=nombreArray[i];
                    if(nombreArray[i] == " ")
                       cortePalabra = true;     
            }
            }
       
       document.getElementById("lastname").value = primeraMayus; 
}


  function validateTA(_evt){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        palabra = window.event.keyCode;

        if((palabra>=65 && palabra<=90)||palabra==8||palabra==32){
            
        } else {
            //alert("Este campo solo permite caracteres de la A-Z");
            _evt.preventDefault();
        }
} 

//VALIDAR EMAIL
  function validateEmail(_evt){
    
      var email = document.getElementById("input-email").value;
      var mensaje = document.getElementById("mensaje3");
      
      if(!/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email)){
        mensaje.innerHTML = "<h5 style='color:#FF1493';>Correo Electrónico Inválido, debe contener ejemplo: hola@dominio.com</h5>"
      } else {
        mensaje.innerHTML = "";
      }
      
} 

//VALIDAR CONTRASEÑA
  
  function validatePass(_evt){
      
      var pass = document.getElementById("input-password").value;
      var msg = document.getElementById("mensaje");
      
      
      if((pass != "123456" || pass != "098754" || pass.toLowerCase() != "password") && (pass.length < 6) ) {
       msg.innerHTML = "<h5 style='color:#FF1493';>La contraseña debe contener seis o más caracteres</h5>"
      } else {
       msg.innerHTML = "";
      }
        
  }
    
//TIPO DE BICICLETA
  function validateType(_evt){
      
      var type = document.querySelector("select").value;
      var mensaje = document.getElementById("mensaje2");
      
      
      if(type == 0){
          mensaje.innerHTML = "<h5 style='color:#FF1493';>No seleccionaste ninguna bicicleta</h5>";
      } else {
          mensaje.innerHTML = "";
      }   
  }

//ENVIAR TIPO DE BICICLETA SOLO AL PRESIONAR "REGISTRAR"
 function validateForm(){
    validateType();
 }


