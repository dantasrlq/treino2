console.log("funcionando..");

$("#nome").keyup(function(event) {
    console.log(event.key);
    var nome = $("#nome").val();
    var regex = /[^(a-zA-Z\u00c0-\u00FF )]+/i;

    nome = nome.replace(regex, '').trim();
    $("#nome").val(nome);
    $("#nome").focus();
});

