const trestolper = document.getElementById('anttrestolper'),
    dipp = document.getElementById('dipp'),
    wood = document.getElementById('wood'),
    regnut = document.getElementById('regnut'),
    pris = document.getElementById('pris'),
    plussD = document.getElementById('plussd'),
    minusD = document.getElementById('minusd'),
    plussW = document.getElementById('plussw'),
    minusW = document.getElementById('minusw'),
    numberInput = [trestolper, dipp, wood];
let antDipp, antWood;

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

for (inp of numberInput) {
    inp.addEventListener('input', checkInput)
}


//regnut.addEventListener('click', prisutregning)