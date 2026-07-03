import { forca, destreza, constituicao, inteligencia, sabedoria, carisma } from "./classes";
const valDes = document.getElementById("valDes").addEventListener("input", (e) => {
    const modDes = document.getElementById("modDes")
    if(valDes <= 8){
    modDes.textContent = "0";
    }
});



