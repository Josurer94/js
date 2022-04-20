const p = 120;
const d = 0.18;
const pd = 1 - d;
const pcd = p* (pd);

console.log({
    p,
    d,
    pd,
    pcd
});

function pcond(precio,descuento){
    const precios = 120;
    const descuentos = 0.18;
    return precio * (1-descuento);
}

function descontado(){
    const inputp = document.getElementById("precio");
    const pvalue = inputp.value;
    const inputd = document.getElementById("descuento");
    const dvalue = inputd.value;

    const price = pcond(pvalue,dvalue);


    const resultp = document.getElementById("result");
    resultp.innerText = "el precio del descuento es " + price;
}