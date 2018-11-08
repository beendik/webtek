const tre = document.getElementById('tre'),
    dipp = document.getElementById('dipp'),
    wood = document.getElementById('wood'),
    regnut = document.getElementById('regnut'),
    plussD = document.getElementById('plussd'),
    minusD = document.getElementById('minusd'),
    plussW = document.getElementById('plussw'),
    minusW = document.getElementById('minusw'),
    plussT = document.getElementById('plusst'),
    minusT = document.getElementById('minust'),
    prisElem = document.getElementById('monthlyprice'),
    engangspris = document.getElementById('engangspris');

let antTre, antDipp, antWood;

function checkInput(inputelement) {
  if (inputelement.value < 1) {
    inputelement.value = 1;
  } else if (inputelement.value > 99) {
    inputelement.value = 99;
  }
}

function prisutregning() {
  prisElem.innerHTML = parseInt(tre.value) * 5;
  engangspris.innerHTML = parseInt(dipp.value) * 5000 + parseInt(wood.value) * 10000;
}

plussW.addEventListener('click', function() {
  antWood = parseInt(wood.value);
  antWood += 1;
  wood.value = antWood;
  checkInput(wood);
});

minusW.addEventListener('click', function() {
  antWood = parseInt(wood.value);
  antWood -= 1;
  wood.value = antWood;
  checkInput(wood);
});

plussD.addEventListener('click', function() {
  antDipp = parseInt(dipp.value);
  antDipp += 1;
  dipp.value = antDipp;
  checkInput(dipp);
});

minusD.addEventListener('click', function() {
  antDipp = parseInt(dipp.value);
  antDipp -= 1;
  dipp.value = antDipp;
  checkInput(dipp);
});

plussT.addEventListener('click', function() {
  antTre = parseInt(tre.value);
  antTre += 10000;
  tre.value = antTre;
});

minusT.addEventListener('click', function() {
  antTre = parseInt(tre.value);
  antTre -= 10000;

  tre.value = antTre;
  if (tre.value < 10000) {
    tre.value = 10000;
  }
});

tre.addEventListener('change', function() {
  if (tre.value < 10000) {
    tre.value = 10000;
  }
});

regnut.addEventListener('click', function() {
  prisutregning();
  scroll();
});


