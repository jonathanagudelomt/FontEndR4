////////////////////////////////////////////////CATEGORY/////////////////////////////////////////////////////////////
function traerInformacionCategorias(){
    $.ajax({
        url:"http://150.230.86.51:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategorias(respuesta);
        }
    });
}

function pintarRespuestaCategorias(respuesta){

    let myTable="<table style='width:100%'>";
    myTable+="<tr>";
    myTable+="<th>Nombre</th>";
    myTable+="<th>Descripción</th>";
    myTable+="<th>Actualizar</th>";  
    myTable+="<th>Borrar</th>";    
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td><strong>"+respuesta[i].name+"</strong></td>";
        myTable+="<td><strong>"+respuesta[i].description+"</strong></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='actualizarInformacionCategoria("+respuesta[i].id+")'>Actualizar Categoria</button></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='borrarElementoCategoria("+respuesta[i].id+")'>Borrar Categoria</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://150.230.86.51:8080/api/Category/save",
       
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");    
        }
        });
}

function actualizarInformacionCategoria(idCategoria){
    let myData={
        id:idCategoria,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado1").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("Se ha actualizado")
        }
    });
}
function borrarElementoCategoria(idCategoria){
    let myData={
        id:idCategoria
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Category/"+idCategoria,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado1").empty();
            traerInformacionCategorias();
            alert("Se ha eliminado")
        }
    });
}

////////////////////////////////////////////////AUDIENCES/////////////////////////////////////////////////////////////
function traerInformacionAuditorios(){
    $.ajax({
        url:"http://150.230.86.51:8080/api/Audience/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaAuditorios(respuesta);
        }
    });
}

function pintarRespuestaAuditorios(respuesta){

    let myTable="<table style='width:100%'>";
    myTable+="<tr>";
    myTable+="<th>Dueño</th>";
    myTable+="<th>Capacidad</th>";
    myTable+="<th>Nombre</th>";
    myTable+="<th>Descripción</th>";
    myTable+="<th>Actualizar</th>";  
    myTable+="<th>Borrar</th>";    
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td><strong>"+respuesta[i].owner+"</strong></td>";
        myTable+="<td><strong>"+respuesta[i].capacity+"</strong></td>";
        myTable+="<td><strong>"+respuesta[i].name+"</strong></td>";
        myTable+="<td><strong>"+respuesta[i].description+"</strong></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='actualizarInformacionAuditorios("+respuesta[i].id+")'>Actualizar Auditorio</button></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='borrarElementoAuditorios("+respuesta[i].id+")'>Borrar Auditorio</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionAuditorios(){
    let var3 = {
        owner:$("#Aowner").val(),
        capacity:$("#Acapacity").val(),
        name:$("#Aname").val(),
        description:$("#Adescription").val()     
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://150.230.86.51:8080/api/Audience/save",
       
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");    
        }
        });
}

function actualizarInformacionAuditorios(idAuditorios){
    let myData={
        id:idAuditorios,
        owner:$("#Aowner").val(),
        capacity:$("#Acapacity").val(),
        name:$("#Aname").val(),
        description:$("#Adescription").val()  
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Audience/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado2").empty();
            $("#id").val("");
            $("#Aowner").val("");
            $("#Acapacity").val("");
            $("#Aname").val("");
            $("#Adescription").val("");
            traerInformacionAuditorios();
            alert("Se ha actualizado")
        }
    });
}

function borrarElementoAuditorios(idAuditorios){
    let myData2={
        id:idAuditorios
    };
    let dataToSend=JSON.stringify(myData2);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Audience/"+idAuditorios,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado2").empty();
            traerInformacionAuditorios();
            alert("Se ha borrado correctamente")
        }
    });
}
////////////////////////////////////////////////CLIENTS/////////////////////////////////////////////////////////////
function traerInformacionClientes(){
    $.ajax({
        url:"http://150.230.86.51:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table style='width:100%'>";
    myTable+="<tr>";
    myTable+="<th>E-mail</th>";
    myTable+="<th>Contraseña</th>";
    myTable+="<th>Nombre</th>";
    myTable+="<th>Edad</th>";
    myTable+="<th>Actualizar</th>";  
    myTable+="<th>Borrar</th>";    
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td><strong>"+respuesta[i].email+"</strong></td>";
        myTable+="<td><strong>"+respuesta[i].password+"</strong></td>";
        myTable+="<td><strong>"+respuesta[i].name+"</strong></td>";
        myTable+="<td><strong>"+respuesta[i].age+"</strong></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='actualizarInformacionClientes("+respuesta[i].idClient+")'>Actualizar Cliente</button></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='borrarElementoClientes("+respuesta[i].idClient+")'>BorrarCliente</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),   
        age:$("#CLage").val()   
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://150.230.86.51:8080/api/Client/save",
       
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");    
        }
        });
}

function actualizarInformacionClientes(idClient){
    let myData3={
        idClient:idClient,
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),   
        age:$("#CLage").val() 
    };
    console.log(myData3);
    let dataToSend=JSON.stringify(myData3);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado3").empty();
            $("#idClient").val("");
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            traerInformacionClientes();
            alert("Se ha actualizado")
        }
    });
}

function borrarElementoClientes(idClient){
    let myData3={
        idClient:idClient
    };
    let dataToSend=JSON.stringify(myData3);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Client/"+idClient,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado3").empty();
            traerInformacionClientes();
            alert("Se ha eliminado")
        }
    });
}
////////////////////////////////////////////////MESSAGE/////////////////////////////////////////////////////////////
function traerInformacionMensajes(){
    $.ajax({
        url:"http://150.230.86.51:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta){

    let myTable="<table style='width:100%'>";
    myTable+="<tr>";
    myTable+="<th>Mensaje</th>";
    myTable+="<th>Actualizar</th>";  
    myTable+="<th>Borrar</th>";    
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td><strong>"+respuesta[i].messageText+"</strong></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='actualizarInformacionMensajes("+respuesta[i].idMessage+")'>Actualizar Mensaje</button></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='borrarElementoMensajes("+respuesta[i].idMessage+")'>Borrar Mensaje</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var5 = {
        messageText:$("#MmessageText").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://150.230.86.51:8080/api/Message/save",
       
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");    
        }
        });
}

function actualizarInformacionMensajes(idMessage){
    let myData4={
        idMessage:idMessage,
        messageText:$("#MmessageText").val(),
    };
    console.log(myData4);
    let dataToSend=JSON.stringify(myData4);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado4").empty();
            $("#idMessage").val("");
            $("#MmessageText").val("");
            traerInformacionMensajes();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarElementoMensajes(idMessage){
    let myData4={
        idMessage:idMessage
    };
    let dataToSend=JSON.stringify(myData4);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Message/"+idMessage,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado4").empty();
            traerInformacionMensajes();
            alert("Se ha borrado correctamente")
        }
    });
}
////////////////////////////////////////////////RESERVATIONES/////////////////////////////////////////////////////////////
function traerInformacionReservaciones(){
    $.ajax({
        url:"http://150.230.86.51:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });
}
function pintarRespuestaReservaciones(respuesta){

    let myTable="<table style='width:100%'>";
    myTable+="<tr>";
    myTable+="<th>Fecha de Inicio</th>";
    myTable+="<th>Fecha de Devolución</th>";
    myTable+="<th>Actualizar</th>";  
    myTable+="<th>Borrar</th>";    
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td><strong>"+respuesta[i].startDate+"</strong></td>";
        myTable+="<td><strong>"+respuesta[i].devolutionDate+"</strong></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='actualizarInformacionReservaciones("+respuesta[i].idReservation+")'>Actualizar Reservación</button></td>";
        myTable+="<td> <button class='btn btn-primary m-1' onclick='borrarElementoReservaciones("+respuesta[i].idReservation+")'>Borrar Reservación</button>"
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservaciones(){
    let var6 = {
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://150.230.86.51:8080/api/Reservation/save",
       
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");    
        }
        });
}

function actualizarInformacionReservaciones(idReservation){
    let myData5={
        idReservation:idReservation,
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
    };
    console.log(myData5);
    let dataToSend=JSON.stringify(myData5);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado5").empty();
            $("#idReservation").val("");
            $("#RstartDate").val("");
            $("#RdevolutionDate").val("");
            traerInformacionReservaciones();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarElementoReservaciones(idReservation){
    let myData5={
        idReservation:idReservation
    };
    let dataToSend=JSON.stringify(myData5);
    $.ajax({
        url:"http://150.230.86.51:8080/api/Reservation/"+idReservation,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado5").empty();
            traerInformacionReservaciones();
            alert("Se ha borrado correctamente")
        }
    });
}