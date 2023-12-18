let szamok = []
let s = "";
function szamInput() {
    var szam = document.getElementById("bemenet").value;
    szamok.push(szam);
    kiirat();
    legkisebb();
}

function kiirat() {
    for(var i = 0; i < szamok.length; i++)
    {
        s += szamok[i]+", ";
    }
    document.getElementById("text").innerHTML = s;
}

function legkisebb() {
    var a = 0;
    for(var i = 0; i < szamok.length; i++)
    {
        if(szamok[i] > a)
        {
            a = szamok[i];
        }
    }
    document.getElementById("lk").innerHTML = a;
}