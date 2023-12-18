let szamok = []
let s = "";
function szamInput() {
    var szam = document.getElementById("bemenet").value;
    szamok.push(szam);
    kiirat();
}

function kiirat() {
    for(var i = 0; i < szamok.length; i++)
    {
        s += szamok[i]+", ";
    }
    document.getElementById("text").innerHTML = s;
}