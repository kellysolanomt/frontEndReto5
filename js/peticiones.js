

function peticionGetAjax() {
    $.ajax({
        url: pagina,
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            items = data;
            CRUDAnswer(arg);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('ERROR AL OBTENER DATOS. STATUS: ' + jqXHR.status);
        }
    })
}

function peticionGetByIdAjax(complemento) {

    $.ajax({
        url: host + complemento,
        type: 'GET',
        dataType: 'JSON',
        
        success: function (data) {
            validacion(data==null ? false :true);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Id es campo obligatorio');
        }
        
    })

}

function peticionPostAjax() {
    $.ajax({
        url: pagina,
        type: 'POST',
        data: datos,
        contentType: 'application/json',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        success: function (data) {
            CRUDAnswer(arg);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('ERROR AL REGISTRAR. STATUS: ' + jqXHR.status);
        }
    })
}

function peticionPutAjax() {
    $.ajax({
        url: pagina,
        type: 'PUT',
        data: datos,
        contentType: 'application/json',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        success: function (data) {
            CRUDAnswer(arg);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('ERROR AL MODIFICAR. STATUS: ' + jqXHR.status);
        }
    })
}

function peticionDeleteAjax() {
    $.ajax({
        url: pagina.replace(':id', datosDel),
        type: 'DELETE',
        dataType: "json",
        success: function (data) {
            CRUDAnswer(arg);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('ERROR AL ELIMINAR. STATUS: ' + jqXHR.status);
        }
    })
}



