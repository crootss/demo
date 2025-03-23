import {addJS,renderHTML,onClick,container} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.6/element.js";
import {getQueryString} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.6/url.js";

//add tailwindcss
await addJS("https://unpkg.com/@tailwindcss/browser@4");

//ambilparametergetdulu
const param=getQueryString();

console.log(param);

param.header && renderHTML('header',decodeURIComponent(param.header),afterHeaderLoad);
param.main && renderHTML('main',decodeURIComponent(param.main),afterMainLoad);
param.footer && renderHTML('footer',decodeURIComponent(param.footer),afterFooterLoad);


function afterHeaderLoad(){
    console.log("Header terload");
}

function afterMainLoad(){
    console.log("Main terload");
}

function afterFooterLoad(){
    console.log("footer terload");
}