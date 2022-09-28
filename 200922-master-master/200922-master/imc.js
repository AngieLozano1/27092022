function imc(){

    let altura =document.querySelector("#altura").value;
    let peso=document.querySelector("#peso").value;
    let indice= Number(peso)/(Number(altura)*Number(altura));
    let contenedor=document.querySelector("#resultado");
    contenedor.innerHTML=indice;

}
