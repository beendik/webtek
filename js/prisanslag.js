const trestolpe = document.getElementById('trestolper'),
    dipperInput = document.getElementById('dipper-input'),
    woodpeckerInput = document.getElementById('woodpecker-input'),
    regnut = document.getElementById('regnut'),
    plussDipper = document.getElementById('pluss-dipper'),
    minusDipper = document.getElementById('minus-dipper'),
    plussWoodpecker = document.getElementById('pluss-woodpecker'),
    minusWoodpecker = document.getElementById('minus-woodpecker'),
    plussTrestolper = document.getElementById('pluss-trestolper'),
    minusTrestolper = document.getElementById('minus-trestolper'),
    prisElem = document.getElementById('monthlyprice'),
    engangspris = document.getElementById('engangspris');

let antallTrestolper, antallDippers, antallWoodpeckers;

function checkInput(inputelement) {
  if (inputelement.value < 1) {
    inputelement.value = 1;
  } else if (inputelement.value > 99) {
    inputelement.value = 99;
  }
}

function prisutregning() {
  prisElem.innerHTML = parseInt(trestolpe.value) * 5;
  engangspris.innerHTML = parseInt(dipperInput.value) * 5000 + parseInt(woodpeckerInput.value) * 10000;
}

plussWoodpecker.addEventListener('click', function() {
  antallWoodpeckers = parseInt(woodpeckerInput.value);
  antallWoodpeckers += 1;
  woodpeckerInput.value = antallWoodpeckers;
  checkInput(woodpeckerInput);
});

minusWoodpecker.addEventListener('click', function() {
  antallWoodpeckers = parseInt(woodpeckerInput.value);
  antallWoodpeckers -= 1;
  woodpeckerInput.value = antallWoodpeckers;
  checkInput(woodpeckerInput);
});

plussDipper.addEventListener('click', function() {
  antallDippers = parseInt(dipperInput.value);
  antallDippers += 1;
  dipperInput.value = antallDippers;
  checkInput(dipperInput);
});

minusDipper.addEventListener('click', function() {
  antallDippers = parseInt(dipperInput.value);
  antallDippers -= 1;
  dipperInput.value = antallDippers;
  checkInput(dipperInput);
});

plussTrestolper.addEventListener('click', function() {
  antallTrestolper = parseInt(trestolpe.value);
  antallTrestolper += 10000;
  trestolpe.value = antallTrestolper;
});

minusTrestolper.addEventListener('click', function() {
  antallTrestolper = parseInt(trestolpe.value);
  antallTrestolper -= 10000;
  trestolpe.value = antallTrestolper;
  
  if (trestolpe.value < 10000) {
    trestolpe.value = 10000;
  }
});

trestolpe.addEventListener('change', function() {
  if (trestolpe.value < 10000) {
    trestolpe.value = 10000;
  }
});

regnut.addEventListener('click', function() {
  prisutregning();
  scroll();
});


