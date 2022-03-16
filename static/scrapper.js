(() => {
  // src/modules/Configurations/Selectors.js
  var SELECTORS = {
    productName: ".vtex-store-components-3-x-productBrand",
    productBrand: ".vtex-store-components-3-x-productBrandName",
    productDes: "vtex-store-components-3-x-productBrand",
    prodcutPrice: ".vtex-store-components-3-x-sellingPrice"
  };

  // src/modules/models/Producto.js
  var Producto = class {
    constructor(name, price, description, brand) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.brand = brand;
    }
  };

  // src/modules/Scripts/scrapper.js
  var getInnerText = (selector) => {
    return document.querySelector(selector)?.innerText;
  };
  var port = chrome.runtime.connect({ name: "safePort" });
  port.postMessage(new Producto(getInnerText(SELECTORS.productName), getInnerText(SELECTORS.prodcutPrice), getInnerText(SELECTORS.productDes), getInnerText(SELECTORS.productBrand)));
})();
