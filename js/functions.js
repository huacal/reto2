var btnConsultaBicicltas = $('#btnConsultaBicicletas')

btnConsultaBicicltas.click(function() {
    $("#boxElementsBicicletas").css('display', 'block')
});

var btnConsultaClientes = $('#btnConsultaClientes')

btnConsultaClientes.click(function() {
    $("#boxElementsClientes").css('display', 'block')
});

var btnConsultaMensaje = $('#btnConsultaMensajes')

btnConsultaMensaje.click(function() {
    $("#boxElementsMensajes").css('display', 'block')
});


/* Consulta Biciletas */

/*Metodo GET se trae la información almacenada en la Base de Datos*/
function consultarBicicleta() {
    $.ajax({

        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
        type: 'GET',
        dateType: 'json',

        success: function(json) {
            var itemsBicicletas = json.items;

            for (i = 0; i < json.items.length; i++) {
                $("#ConsultaBicicletas").append("<tr>");
                $("#ConsultaBicicletas").append("<td>" + itemsBicicletas[i].brand + "</td>");
                $("#ConsultaBicicletas").append("<td>" + itemsBicicletas[i].model + "</td>");
                $("#ConsultaBicicletas").append("<td>" + itemsBicicletas[i].category_id + "</td>");
                $("#ConsultaBicicletas").append("<td>" + itemsBicicletas[i].name + "</td>");
                $("#ConsultaBicicletas").append('<td><button onclick="itemEspecificoBicicleta(' + itemsBicicletas[i].id + ')" class="green">Detalles</button></td>');
                $("#ConsultaBicicletas").append('<td><button onclick="borrarBicicleta(' + itemsBicicletas[i].id + ')" class="red">Borrar</button></td>');
                $("#ConsultaBicicletas").append("</tr>");
            }

        },

        error: function() {
            console.log(json);
        }

    });
}

/* Se utiliza el metodo POST para ingresar un nuevo producto en la Base de Datos */

function insertarBicicleta() {
    var bike;

    bike = { "id": $("#myId").val(), "brand": $("#brand").val(), "model": $("#model").val(), "category_id": $("#category").val(), "name": $("#name").val() };
    $.ajax({
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
        type: 'POST',
        data: bike,

        success: function(response) {
            $("#myId").val('');
            $("#brand").val('');
            $("#model").val('');
            $("#category").val('');
            $("#name").val('');
        },
        error: function(xhr, status) {

        }

    });
}

/* Se Seleciona un itme especifico para hacer la actualizacion de los datos */
function itemEspecificoBicicleta(idItem) {
    $.ajax({
        dateType: 'json',
        url: ' https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike/' + idItem,
        type: 'GET',
        success: function(response) {
            console.log(response);
            var item = response.items[0];

            $("#myId").val(item.id);
            $("#brand").val(item.brand);
            $("#model").val(item.model);
            $("#category").val(item.category_id);
            $("#name").val(item.name);
        },
        error: function(xhr, status) {
            console.log(xhr);

        }
    });
}

/* Se utiliza el metodo PUT para actualizar el elemento seleccionado en Base de Datos */
function actualizarBicicleta() {
    var objsBikes = {
        id: $("#myId").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category").val(),
        name: $("#name").val()
    }

    var dataToSend = JSON.stringify(objsBikes);
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        contentType: "application/json",
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
        type: 'PUT',
        dateType: 'json',

        success: function(response) {
            $("#myId").val('');
            $("#brand").val('');
            $("#model").val('');
            $("#category").val('');
            $("#name").val('');
        },

        error: function(xhr, status) {

        }
    });

}

/* Se utiliza el metodo DELETE para borrar un producto de la Base de Datos */

function borrarBicicleta(idObjBike) {
    var objBike = {
        id: idObjBike
    }
    var dataToSend = JSON.stringify(objBike);
    $.ajax({
        dateType: 'json',
        data: dataToSend,
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
        type: 'DELETE',
        contentType: "application/json",
        success: function(response) {


        },
        error: function(xhr, status) {

        }

    });

}

/* Consulta Clientes */

/*Metodo GET se trae la información almacenada en la Base de Datos*/

function consultarCliente() {
    $.ajax({

        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dateType: 'json',

        success: function(json) {
            var itemsCliente = json.items;

            for (i = 0; i < json.items.length; i++) {
                $("#consultaClientes").append("<tr>");
                $("#consultaClientes").append("<td>" + itemsCliente[i].name + "</td>");
                $("#consultaClientes").append("<td>" + itemsCliente[i].email + "</td>");
                $("#consultaClientes").append("<td>" + itemsCliente[i].age + "</td>");
                $("#consultaClientes").append('<td><button onclick="itemEspecificoClient(' + itemsCliente[i].id + ')" class="green">Detalles</button></td>');
                /*  $("#consultaClientes").append('<td><button onclick="borrarCliente(' + itemsCliente[i].id + ')" class="red">Borrar</button></td>'); */
                $("#consultaClientes").append("</tr>");
            }
        },

        error: function() {
            console.log(json);
        }

    });
}

/* Se utiliza el metodo POST para ingresar un nuevo cliente en la Base de Datos */

function insertarCliente() {
    var client;

    client = { "id": $("#idClient").val(), "name": $("#nameClient").val(), "email": $("#emailClient").val(), "age": $("#ageClient").val() };
    $.ajax({
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        data: client,

        success: function(response) {

        },
        error: function(xhr, status) {

        }

    });
}


/* Se Seleciona un item especifico para hacer la actualizacion de los datos */
function itemEspecificoClient(idItem) {
    $.ajax({
        dateType: 'json',
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + idItem,
        type: 'GET',
        success: function(response) {
            console.log(response);
            var item = response.items[0];

            $("#idClient").val(item.id);
            $("#nameClient").val(item.name);
            $("#emailClient").val(item.email);
            $("#ageClient").val(item.age);
        },
        error: function(xhr, status) {
            console.log(xhr);

        }
    });
}

/* Se utiliza el metodo PUT para actualizar el elemento seleccionado en Base de Datos */
function actualizarCliente() {
    var objsClients = {
        id: $("#idClient").val(),
        name: $("#nameClient").val(),
        email: $("#emailClient").val(),
        age: $("#ageClient").val()
    }

    var dataToSend = JSON.stringify(objsClients);
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        contentType: "application/json",
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',
        dateType: 'json',

        success: function(response) {

            console.log(response);
        },

        error: function(xhr, status) {

        }
    });

}

/* Se utiliza el metodo DELETE para borrar un producto de la Base de Datos */

/* function borrarCliente(idObjClient) {
    var objClient = {
        id: idObjClient
    }
    var dataToSend = JSON.stringify(objClient);
    $.ajax({
        dateType: 'json',
        data: dataToSend,
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        contentType: "application/json",
        success: function(response) {
            console.log(response);

        },
        error: function(xhr, status) {
            console.log(xhr);
        }

    });

} */


/* Consulta Mensajes */

/*Metodo GET se trae la información almacenada en la Base de Datos*/
function consultarMensajes() {
    $.ajax({

        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dateType: 'json',

        success: function(json) {
            var itemsMensaje = json.items;
            for (i = 0; i < json.items.length; i++) {
                $("#consultaMensajes").append("<tr>");
                $("#consultaMensajes").append("<td>" + itemsMensaje[i].messagetext + "</td>");
                $("#consultaMensajes").append('<td><button onclick="itemEspecificoMessage(' + itemsMensaje[i].id + ')" class="green">Detalles</button></td>');
                $("#consultaMensajes").append('<td><button onclick="borrarMessage(' + itemsMensaje[i].id + ')" class="red">Borrar</button></td>');
                $("#consultaMensajes").append("</tr>");
            }
        },

        error: function() {
            console.log(json);
        }

    });
}

/* Se utiliza el metodo POST para ingresar un nuevo mensaje en la Base de Datos */
function insertarMensaje() {
    var message;

    message = { "id": $("#idMessage").val(), "messagetext": $("#messageText").val() };
    $.ajax({
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'POST',
        data: message,

        success: function(response) {
            $("#idMessage").val(' ');
            $("#messageText").val(' ');
            console.log(response);
        },
        error: function(xhr, status) {
            console.log(xhr);
        }

    });
}


/* Se Seleciona un item especifico para hacer la actualizacion de los datos */
function itemEspecificoMessage(idItem) {
    $.ajax({
        dateType: 'json',
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + idItem,
        type: 'GET',
        success: function(response) {
            console.log(response);
            var item = response.items[0];
            $("#idMessage").val(item.id);
            $("#messageText").val(item.messagetext);
        },
        error: function(xhr, status) {
            console.log(xhr);

        }
    });
}

/* Se utiliza el metodo DELETE para borrar un mensaje de la Base de Datos */
function borrarMessage(idObjMessage) {
    var objMessage = {
        id: idObjMessage
    }
    var dataToSend = JSON.stringify(objMessage);
    $.ajax({
        dateType: 'json',
        data: dataToSend,
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'DELETE',
        contentType: "application/json",
        success: function(response) {
            console.log(response);

        },
        error: function(xhr, status) {
            console.log(xhr);
        }

    });

}


/* Se utiliza el metodo PUT para actualizar el elemento seleccionado en Base de Datos */
function actualizarMessage() {

    var objsMessage = {
        id: $("#idMessage").val(),
        messagetext: $("#messageText").val()
    }

    var dataToSend = JSON.stringify(objsMessage);
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        contentType: "application/json",
        url: 'https://gee3537beb50da5-databasemt.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'PUT',
        dateType: 'json',

        success: function(response) {

            $("#idMessage").val(' ');
            $("#messageText").val(' ');


        },

        error: function(xhr, status) {

        }
    });

}