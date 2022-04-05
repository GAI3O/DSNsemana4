let dataC = [{
    nombre:"Gabriel",
    apellido:"Herrera"
},{
    nombre:"Julie",
    apellido:"Garcia"
},{
    nombre:"Mafer",
    apellido:"Laime"
}]
let dataP = [{
    nombre:"Teclado Gamer",
    precio:150
},{
    nombre:"Laptop Lenovo",
    precio:3500
},{
    nombre:"Silla Gamer",
    precio:850
}]
export const index = (req,res)=>{
    res.json({
        data:"API working"
    })
}
export const cliente = (req,res)=>{
    res.json({
        data:dataC
    })
}
export const producto = (req,res)=>{
    res.json({
        data:dataP
    })
}