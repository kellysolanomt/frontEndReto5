

function valorAtributo(id) {
    var tipo = id.substring(0, 3);
    if (tipo == 'txt') {
        return $('#' + id).val();
    }
}

function limpiarAtributo(id){
    $("#" + id).val('');
}

function mostrarDiv(id1, id2) {
    $('[name="formulario"]').hide();
    if (id2 == undefined){
        $('div [name="formulario"]').hide();
        $('#'+id1).show();
    }else{
        $('div [name="formulario"]').hide();
        $('#'+id1).show();
        $('#'+id2).show();
    }
 
    
}

function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    return Date.parse(yyyy + '-' + mm + '-' + dd);

}

function getParseDate(day){
    
    var dd = String(day.getDate()).padStart(2, '0');
    var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    return yyyy + '-' + mm + '-' + dd;

}