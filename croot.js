import {addJS,replaceTag,addCSS,container} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.7/element.js";
import {getQueryString} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.6/url.js";

//add tailwindcss
await addJS("https://unpkg.com/@tailwindcss/browser@4");

//ambilparametergetdulu
const param=getQueryString();

console.log(param);

param.header && replaceTag('header',decodeURIComponent(param.header),afterHeaderLoad);
param.main && replaceTag('main',decodeURIComponent(param.main),afterMainLoad);
param.footer && replaceTag('footer',decodeURIComponent(param.footer),afterFooterLoad);


function afterHeaderLoad(){
    param.headerjs && addJS(param.headerjs);
    param.headercss && addCSS(param.headercss);
    console.log("Header terload");
}

function afterMainLoad(){
    console.log("Main terload");
}

function afterFooterLoad(){
    console.log("footer terload");
}