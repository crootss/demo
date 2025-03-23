import {addJS,renderHTML,onClick,container} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.6/element.js";
import {getQueryString} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.6/url.js";

//add tailwindcss
await addJS("https://unpkg.com/@tailwindcss/browser@4");

//ambilparametergetdulu
const param=getQueryString();

console.log(param);

renderHTML('header',param.header,afterHeaderLoad);
renderHTML('main',param.main,afterMainLoad);
renderHTML('footer',param.footer,afterMainLoad);


function afterHeaderLoad(){

}

function afterMainLoad(){

}