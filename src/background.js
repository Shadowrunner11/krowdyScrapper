import axios from "axios";
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
               if (!db.isOpen()) db.open();
               db.products.add(mensaje)
                    .then(response=>{
                         console.log(response, "aniadido con exito");
                         console.log(db.products.toArray());
                         
               })
                    .catch(error => console.log(error)) 
               db.close()
          })
             
     }
})