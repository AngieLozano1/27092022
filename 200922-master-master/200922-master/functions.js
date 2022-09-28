function transformtext() {
  let text=document.querySelector("#text").value;
  console.log(text)

  let container=document.querySelector("#container");
  container.innerHTML=mayusculas(text);

  console.log("longitud",contarlongitud(text));
  console.log("tercer caracter",obtenercaracter(text,2));
  console.log("extraccion",extraer(text));
  console.log("reemplazar",reemplazar(text));
  console.log("palabras",dividir(text));
}
function mayusculas(txt) {
  return txt.toUpperCase();
}
function contarlongitud(text){
    return text.length;
}
function obtenercaracter(txt,position){
    if (txt.charAt(position)=="") {
        return "no existe"
    }
    else {
        return txt.charAt(position);
    }

}
function extraer(txt){
    return txt.substring(2,5)
}
function reemplazar(txt){
    return txt.replace("o","i")
}
function dividir(txt){
    return txt.split(" ")
}