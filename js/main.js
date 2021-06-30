        //****** RESULTADO DE CONDIÇÃO DAS DATAS PARA VACINA *****/
function resultado(){
    var select_group = document.getElementById("select_group").value;
    var formulario = document.getElementById("formulario");
    
    validaFormulario(formulario);
    if (validaFormulario != true){
        if (select_group == "1"){
        var result = document.getElementById("resultado1"); 
        result.innerHTML = "vacina em junho";
    }
}
    
    // }
    // if  (select_group= "2")
    // {

    // }
    // if  (select_group= "3")
    // {
        
    // }
    // if  (select_group= "4")
    // {
        
    // }
    // if  (select_group = "5")
    // {
        
    // }
    // if (select_group = "6")
    // {

    // }
    // if  (select_group = "7")
    // {

    // }
    // if  (select_group = "8")
    // {
        
    // }
    // if  (select_group = "9")
    // {
        
    // }
    // if  (select_group = "10")
    // {
        
    // }
    // if (select_group= "11")
    // {

    // }
    // if  (select_group= "12")
    // {

    // }
    // if  (select_group = "13")
    // {
        
    // }
    // if  (select_group= "14")
    // {
        
    // }
    // if  (select_group= "15")
    // {
        
    // }
    // if (select_group.value = "16")
    // {

    // }
    // if  (select_group.value = "17")
    // {

    // }
    // if  (select_group.value = "18")
    // {
        
    // }
    // if  (select_group.value = "19")
    // {

}; 

//****** PARTE DE VALIDAÇÃO DOS CAMPOS *****/
    function validaFormulario(formulario) {
    //     //Verifica se o campo nome foi preenchido e
    //     //contém no mínimo três caracteres.
        if (formulario.primeiroNome.value == "" || formulario.primeiroNome.value == null || formulario.primeiroNome.value.lenght < 2) {
            //É mostrado um alerta, caso o campo esteja vazio.
            alert("Por favor, indique o seu nome.");
            //Foi definido um focus no campo.
            formulario.primeiroNome.focus();
            //o form não é enviado.
            return false;
        }

        if (formulario.sobreNome.value == "" || formulario.sobreNome.value == null || formulario.sobreNome.value.lenght < 2) {
            //É mostrado um alerta, caso o campo esteja vazio.
            alert("Por favor, indique o seu sobrenome.");
            //Foi definido um focus no campo.
            formulario.sobreNome.focus();
            //o form não é enviado.
            return false;
        }

        if (formulario.sobreNome.value == "" || formulario.sobreNome.value == null || formulario.sobreNome.value.lenght < 2) {
            //É mostrado um alerta, caso o campo esteja vazio.
            alert("Por favor, indique o seu sobrenome.");
            //Foi definido um focus no campo.
            formulario.sobreNome.focus();
            //o form não é enviado.
            return false;
        }


        if (formulario.cpf.value == "" || formulario.cpf.value == null || formulario.cpf.value.lenght < 2) {
            //É mostrado um alerta, caso o campo esteja vazio.
            alert("Por favor, indique o seu CPF.");
            //Foi definido um focus no campo.
            formulario.cpf.focus();
            //o form não é enviado.
            return false;
        }

        //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
        if (formulario.email.value.indexOf("@") == -1 ||
            formulario.email.valueOf.indexOf(".") == -1 ||
            formulario.email.value == "" ||
            formulario.email.value == null) {
            alert("Por favor, indique um e-mail válido.");
            formulario.email.focus();
            return false;
        }
        // // O utilizador necessita de selecionar um dos dois
        // //radio buttons: Masculino ou Feminino.
        // genero = -1; //valor negativo default (padrão) que significa que nada foi escolhido ainda.
        // //No bloco de código abaixo foi criado um ciclo entre
        // //os radios button com o mesmo nome (sexo)
        // for (x = formulario.genero.lenght - 1; x > -1; x--) {
        //     /*
        //     x = frm.sexo.lenght -1 é a mesma coisa que: x = 2-
        //     1, que resulta em 1.
        //     x > -1 significa que o valor de x não pode ser igual a -1 e
        //     sim maior, porque -1 significa que nada foi escolhido.
        //     x-- significa que há um decremento no valor x, é algo como:
        //     x = 1, x= 0 e pára pois x não pode ser -1.
        //     */
        //     if (formulario.genero[x].checked) { //checked quer dizer selecionado,
        //         //então verifica se o primeiro (0) ou o
        //         //segundo (1) radio button foi selecionado (checked).
        //         genero = x; //atribui à variável escolhaSexo o valor X.
        //     }
        // }
        // //se nenhuma das opções (masculino ou feminino) forem
        // //escolhidas, mostra um alerta e cancela o envio.
        // if (genero == -1) {
        //     alert("Qual o seu sexo?");
        //     formulario.genero[0].focus();
        //     return false;
        // }

        //****** FIM DA PARTE DE VALIDAÇÃO DOS CAMPOS *****/
    }