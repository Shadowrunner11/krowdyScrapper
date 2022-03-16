import Dexie from "dexie";

export const db = new Dexie("coolboxProducts")
db.version(1).stores({
    products: '++id, name, price, description, brand'
})