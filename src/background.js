import { db } from "./modules/Services/DataBase";

chrome.action.onClicked.addListener(async (tab) => {
     chrome.scripting.executeScript({
          target: {tabId: tab.id},
          files:["scrapper.js"]
     })

});

chrome.runtime.onConnect.addListener(port=>{
     if (port.name==="safePort"){
          port.onMessage.addListener(mensaje=>{
               console.log(mensaje)
               db.products.add(mensaje)
                    .then(response=>{console.log(response)})
                    .catch(error => console.log(error)) 
          })
             
     }
})