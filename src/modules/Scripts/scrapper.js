import { SELECTORS } from "../Configurations/Selectors"
import { Producto } from "../models/Producto"

const getInnerText = selector =>{
    return document.querySelector(selector)?.innerText
}

let port = chrome.runtime.connect({name:"safePort"})

port.postMessage(
new Producto(
    getInnerText(SELECTORS.productName),
    getInnerText(SELECTORS.prodcutPrice),
    getInnerText(SELECTORS.productDes),
    getInnerText(SELECTORS.productBrand)
)
)