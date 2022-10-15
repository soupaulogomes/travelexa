function cadastrarCliente() {

    document.getElementById("cadastrarUsuario").disabled = true;

    var cadastro = new Object();
    
    cadastro.cpf = cpfCliente.value;
    cadastro.nome = nomeCompleto.value;
    cadastro.email = emailContato.value;
    cadastro.ddd = dddCliente.value;
    cadastro.telefone = telefoneContato.value;
    cadastro.codigo_contrato = numeroContrato.value;


  //Cria a empresa
  $.ajax({type: 'post',url: 'https://promocaotravelexa.com.br/cadastros/',data: JSON.stringify(cadastro),contentType: "application/json; charset=utf-8", success: function (data) {
   if (confirm("cadastro realizado com sucesso")) document.location = "sucesso/";

  }});

}