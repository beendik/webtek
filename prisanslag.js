const trestolper = document.getElementById('tre'),
    dipp = document.getElementById('dipp'),
    wood = document.getElementById('wood'),
    regnut = document.getElementById('regnut'),
    pris = document.getElementById('pris'),
    plussD = document.getElementById('plussd'),
    minusD = document.getElementById('minusd'),
    plussW = document.getElementById('plussw'),
    minusW = document.getElementById('minusw'),
    plussT = document.getElementById('plusst'),
    minusT = document.getElementById('minust'),
    numberInput = [dipp, wood];
let antTre, antDipp, antWood;

const prisElem = document.getElementById('monthlyprice');
const engangspris = document.getElementById('engangspris');

function checkInput() {
    console.log(this.value);
    if (this.value == '') {
        this.value = '0';
    }
    else {
        let n = parseInt(this.value);
        if (n < 0) {
            n = 0;
        }
        if (n > 99) {
            n = 99;
        }
        this.value = n;
    }
}


function prisutregning() {
    prisElem.innerHTML = parseInt(tre.value)*5;
    engangspris.innerHTML = parseInt(dipp.value)*5000 + parseInt(wood.value)*10000;
}

//function checkInputTre() {
//    if (this.value == '') {
//        this.value = '10000';
//    }
//    else {
//        let n = parseInt(this.value);
//        if (n < 10000) {
//            n = 10000;
//        }
//        this.value = n;
//    }
//}


plussW.addEventListener('click', function() {
    antWood = parseInt(wood.value);
    antWood += 1;
    wood.value = antWood;
    checkInput.call(wood);
})

minusW.addEventListener('click', function() {
    antWood = parseInt(wood.value);
    antWood -= 1;
    wood.value = antWood;
    checkInput.call(wood);
})

plussD.addEventListener('click', function() {
    antDipp = parseInt(dipp.value);
    antDipp += 1;
    dipp.value = antDipp;
    checkInput.call(dipp);
})

minusD.addEventListener('click', function() {
    antDipp = parseInt(dipp.value);
    antDipp -= 1;
    dipp.value = antDipp;
    checkInput.call(dipp);
})

plussT.addEventListener('click', function() {
    antTre = parseInt(tre.value);
    antTre += 10000;
    tre.value = antTre;
    checkInputTre.call(tre);
})

minusT.addEventListener('click', function() {
    antTre = parseInt(tre.value);
    antTre -= 10000;
    tre.value = antTre;
    checkInputTre.call(tre);
})

for (inp of numberInput) {
    inp.addEventListener('input', checkInput);
}


//wood 10 000, dipper 5 000, minst 10 000 stolper, øker med 10 000




regnut.addEventListener('click', prisutregning)