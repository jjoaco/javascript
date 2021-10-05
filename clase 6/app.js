class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
let listaTarea6 = [];
listaTarea6.push(new Productos("Campera Adidas", 4000))
listaTarea6.push(new Productos("Medias Adidas", 600))
listaTarea6.push(new Productos("Zapatos Adidas", 9000))
listaTarea6.push(new Productos("Pantalon Adidas", 5000))

listaTarea6.sort((a, b) => {
    if (a.precio > b.precio) {
        return -1
    }
    if (a.precio < b.precio) {
        return 1
    }
    return 0
})


console.log(listaTarea6);
