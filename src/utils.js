export const parseCurrency = (value)=>{
    return Number(value).toLocaleString('es-AR',{
        style:"currency",
        currency:"ARS"
    })
}