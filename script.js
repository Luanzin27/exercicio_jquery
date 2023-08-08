function cadastrar(){

    let text = document.getElementById("texto").value;
    let list = document.getElementById("lista").innerHTML;


    list += "<lui>" +text+ "</li>"

    document.getElementById("lista").innerHTML = list;

    document.getElementById("texto").value = null;

}