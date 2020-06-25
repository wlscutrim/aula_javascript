//lert("meu primeiro JS"); //para comentar a linha
/* para comentar várias linha
var nome = "Wilson Santos";
var idade = 37;
alert(nome + " tem " + idade + "anos");
*/
//var idade1 = 37;
//var idade2 = 23;
//var frase = "Japão é o melhor do mundo!"
//var lista = ["maçã","pêra","laranja"];
//lista.push("uva"); //insere na lista
//lista.pop(); //remove o ultimo
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//alert(idade1 + idade2);
//console.log(nome);
//console.log(idade);
//console.log(frase.replace("Japão","Brasil"))
//alert(frase.replace("Japão","Brasil"))
// var dicionario = {nome:"mação", cor:"vermelha"}
// console.log(dicionario.nome);
// alert(dicionario.cor);

/*
var idade = prompt("Qual sua idade? ");
if(idade > 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/

/*
var d = new Date();
alert(d);
alert(d.getMonth());
*/

/*
function soma(n1,n2){
    return n1 + n2;
}

var validar = 0;
function validarIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar  =false
    }
    return validar;
}

//alert(soma(5,10));
var idade = prompt("Qual sua idade:");
validarIdade(idade)
console.log(validar);
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}
    
function redirecionar(){
    window.open("https://google.com.br");
    //window.location.href = "https://google.com.br";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}