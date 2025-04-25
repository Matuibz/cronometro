let intervalo;
function iniciarcronometro(){
    clearInterval(intervalo);
    const datafutura = new Date("2025-05-12T23:59:59");
    intervalo = setInterval(()=>{
        const agora= new Date();
        const diferenca = datafutura-agora;
        document.getElementById('timer').textContent = `${diferenca} milisegundos`;
    },100)
}
   
    iniciarcronometro()




