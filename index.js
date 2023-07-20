const deck = ['Ah', 'As', 'Ad', 'Ac',
              'Kh', 'Ks', 'Kd', 'Kc',
              'Qh', 'Qs', 'Qd', 'Qc',
              'Jh', 'Js', 'Jd', 'Jc',
              'Th', 'Ts', 'Td', 'Tc',
              '9h', '9s', '9d', '9c',
              '8h', '8s', '8d', '8c',
              '7h', '7s', '7d', '7c',
              '6h', '6s', '6d', '6c',
              '5h', '5s', '5d', '5c',
              '4h', '4s', '4d', '4c',
              '3h', '3s', '3d', '3c',
              '2h', '2s', '2d', '2c'];

const clubs = ['Ac', 'Kc', 'Qc','Jc','Tc','9c','8c','7c','6c','5c','4c','3c','2c'];
const diamonds = ['Ad', 'Kd', 'Qd','Jd','Td','9d','8d','7d','6d','5d','4d','3d','2d'];
const spades = ['As', 'Ks', 'Qs','Js','Ts','9s','8s','7s','6s','5s','4s','3s','2s'];
const hearts = ['Ah', 'Kh', 'Qh','Jh','Th','9h','8h','7h','6h','5h','4h','3h','2h'];

function combos(hand){
    var combos = [];

    // Si la mano es suited
    if(hand.includes('s')){
        for(let i = 0; i < clubs.length ; i++){
        let actualHand = [];
        if(hand[0] == clubs[i][0]){
            for(let j = 0; j < clubs.length; j++){
                if(hand[1] == clubs[j][0]){
                    actualHand.push(clubs[i]);
                    actualHand.push(clubs[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(diamonds[i]);
                    actualHand.push(diamonds[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(spades[i]);
                    actualHand.push(spades[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(hearts[i]);
                    actualHand.push(hearts[j]);
                    combos.push(actualHand);
                    actualHand = [];
                }
            }
        }
        }
    }

    // si la mano es off
    if(hand.includes('o')){
        for(let i = 0; i < clubs.length ; i++){
        let actualHand = [];
        if(hand[0] == clubs[i][0]){
            for(let j = 0; j < clubs.length; j++){
                if(hand[1] == clubs[j][0]){
                    actualHand.push(clubs[i]);
                    actualHand.push(diamonds[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(clubs[i]);
                    actualHand.push(spades[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(clubs[i]);
                    actualHand.push(hearts[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(diamonds[i]);
                    actualHand.push(clubs[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(diamonds[i]);
                    actualHand.push(spades[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(diamonds[i]);
                    actualHand.push(hearts[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(spades[i]);
                    actualHand.push(clubs[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(spades[i]);
                    actualHand.push(diamonds[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(spades[i]);
                    actualHand.push(hearts[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(hearts[i]);
                    actualHand.push(clubs[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(hearts[i]);
                    actualHand.push(spades[j]);
                    combos.push(actualHand);
                    actualHand = [];

                    actualHand.push(hearts[i]);
                    actualHand.push(diamonds[j]);
                    combos.push(actualHand);
                    actualHand = [];
                }
            }
        }
        }
    }

    // si la mano es pocket pair
    if(hand.length == 2){
        for(let i = 0; i < clubs.length ; i++){
        let actualHand = [];
        if(hand[0] == clubs[i][0]){
            actualHand.push(clubs[i]);
            actualHand.push(hearts[i]);
            combos.push(actualHand);
            actualHand = [];

            actualHand.push(clubs[i]);
            actualHand.push(diamonds[i]);
            combos.push(actualHand);
            actualHand = [];

            actualHand.push(clubs[i]);
            actualHand.push(spades[i]);
            combos.push(actualHand);
            actualHand = [];

            actualHand.push(hearts[i]);
            actualHand.push(diamonds[i]);
            combos.push(actualHand);
            actualHand = [];

            actualHand.push(hearts[i]);
            actualHand.push(spades[i]);
            combos.push(actualHand);
            actualHand = [];

            actualHand.push(spades[i]);
            actualHand.push(diamonds[i]);
            combos.push(actualHand);
            actualHand = [];
        }
        }
    }

    return combos;
}

var combosSeleccionados = {};
var combosPorMano = {};

function sumCombos(hand){
    var total = 0;
    var count = combos(hand);
    for(let i = 0; i < count.length; i++){
        total++;
    }
    return total
}

function toggleCombo(hand) {
    if (combosSeleccionados.hasOwnProperty(hand)) {
      delete combosSeleccionados[hand];
      delete combosPorMano[hand];
    } else {
      combosSeleccionados[hand] = true;
      combosPerHand(hand);
    }
    actualizarTotal();
}

function combosPerHand(hand){
    var count = combos(hand);
    combosPorMano[hand] = [count];
    for(hand in combosSeleccionados){
        if(!combosPorMano.hasOwnProperty(hand)){
            combosPorMano[hand] = [count];
        }
    }
    return combosPorMano;
}


function actualizarTotal() {
    var totalElement = document.getElementById("total");
    var filterBox = document.getElementById("filterTotal");

    var total = 0;
  
    for (var hand in combosPorMano) {
      if (combosPorMano.hasOwnProperty(hand)) {
        var combos = combosPorMano[hand][0];
        total += combos.length;
      }
    }
  
    totalElement.innerHTML = total + ' Combos in preflop range';
    filterBox.innerHTML = 'Total number of combos: ' + total
    return total;
}

var flopDivs = {
    flop1: document.querySelector(".flop1"),
    flop2: document.querySelector(".flop2"),
    flop3: document.querySelector(".flop3"),
    turn: document.querySelector(".turn"),
    river: document.querySelector(".river")
};

function toggleImage(element, imagePath) {
    var nextDivId = getNextAvailableDivId();

    if (nextDivId) {
        var nextDiv = flopDivs[nextDivId];
        var currentImage = nextDiv.querySelector("img");

        // Eliminar cualquier imagen existente en el div de destino
        if (currentImage) {
            nextDiv.removeChild(currentImage);
        }

        // Agregar una nueva imagen al div de destino
        var cardImage = document.createElement("img");
        cardImage.src = imagePath;
        nextDiv.appendChild(cardImage);

        // Cambiar la clase "selected" en la celda
        element.classList.toggle("selected");
    }
}


function getNextAvailableDivId() {
    var divIds = Object.keys(flopDivs);

    for (var i = 0; i < divIds.length; i++) {
        var divId = divIds[i];
        if (!flopDivs[divId].querySelector("img")) {
            return divId;
        }
    }

    return null;
}

function clearSelectionAndUpdateTotal() {
    var cellsPairs = document.querySelectorAll("#table td.selected-pairs");
    var cellsSuited = document.querySelectorAll("#table td.selected-suited");
    var cellsOffsuited = document.querySelectorAll("#table td.selected-offsuited");

    var cells = [...cellsPairs, ...cellsSuited, ...cellsOffsuited];

    for (var i = 0; i < cells.length; i++) {
        var hand = cells[i].innerHTML;
        var cellClass = cells[i].className;

        // Eliminar la clase "selected" de la celda
        cells[i].classList.remove("selected");

        // Eliminar todas las clases seleccionadas
        cells[i].classList.remove("selected-pairs", "selected-suited", "selected-offsuited");

        toggleCombo(hand);
    }
}

var boardSeleccionado = {};

function addBoard(card){
    if (boardSeleccionado.hasOwnProperty(card)) {
        delete boardSeleccionado[card];
      } else {
        boardSeleccionado[card] = true;
      }
}

function clearSelectionAndImages() {
    var selectedCells = document.querySelectorAll("#table td.selected-heart, #table td.selected-club, #table td.selected-diamond, #table td.selected-spade");
    var passFilter = document.getElementById("passFilter");
    for (var i = 0; i < selectedCells.length; i++) {
      var cell = selectedCells[i];
      cell.classList.remove("selected-heart", "selected-club", "selected-diamond", "selected-spade");
    }
  
    var flopDivIds = Object.keys(flopDivs);
  
    for (var j = 0; j < flopDivIds.length; j++) {
      var divId = flopDivIds[j];
      var div = flopDivs[divId];
      var currentImage = div.querySelector("img");
  
      if (currentImage) {
        div.removeChild(currentImage);
      }
    }
  
    Object.keys(boardSeleccionado).forEach(function(card) {
      delete boardSeleccionado[card];
    });

    passFilter.innerHTML = 'Combos that pass the filters: 0'

  }
  
// combos por mano
function discountCombos() {
    var totalElement = document.getElementById("total");
    var filterBox = document.getElementById("filterTotal");

    var total = 0;
  
    // Obtener la suma de combos seleccionados por mano
    // Eliminar combos que contengan cartas del board
    for (var card in boardSeleccionado) {
        if (boardSeleccionado.hasOwnProperty(card) && boardSeleccionado[card]) {
          for (var hand in combosPorMano) {
            if (combosPorMano.hasOwnProperty(hand)) {
              var combos = combosPorMano[hand][0];
              var filteredCombos = [];
      
              for (var i = 0; i < combos.length; i++) {
                var combo = combos[i];
                if (!combo.includes(card)) {
                  filteredCombos.push(combo);
                }
              }
              combosPorMano[hand] = [filteredCombos]; // Asignar el nuevo array modificado a combosPorMano[hand]
            }
          }
        }
      }
      
      
    
  
    // Calcular el total de combos modificados por mano
    for (var hand in combosPorMano) {
      if (combosPorMano.hasOwnProperty(hand)) {
        var combos = combosPorMano[hand][0];
        total += combos.length;
      }
    }
  
    totalElement.innerHTML = total + ' combos en rango preflop';
    filterBox.innerHTML = 'Total number of combos: ' + total

  }

// FALTA FILTRAR LOS FULLES de los combos que no son pares
function set() {
    var trioCombos = [];
    var selectedCards = Object.keys(boardSeleccionado);
    var combosFiltrados = 0;
  
    // Iterar por cada conjunto de combos
    for (var hand in combosPorMano) {
      if (combosPorMano.hasOwnProperty(hand)) {
        var combos = combosPorMano[hand][0];
        var matchingCount = 0;
  
        // Verificar cuántas cartas del combo tienen el primer carácter coincidente con alguna clave en boardSeleccionado
        for (var i = 0; i < combos.length; i++) {
          if (selectedCards.some(function(card) {
            let count = 0;
            let set = false;
            for(var j in boardSeleccionado){
              if(boardSeleccionado.hasOwnProperty(j)){
                if(j[0] === card[0]){
                  count++;
                  if(card[0] === combos[i][0][0] && combos[i][0][0] === combos[i][1][0]){
                      set = true; 
                  }
                }
                //console.log(set)
                //console.log(count)
                //console.log(full)

                //if(set && pairBoard == -1){
                  //full = pairBoard
                //}
                //console.log(count)
                //console.log(pairBoard)
              }
            }
            return ((card[0] === combos[i][0][0] || card[0] === combos[i][1][0]) && count == 2) || set // Comparar primer carácter
          })) {
            matchingCount++;

          }
        }
        
        if (matchingCount >= 2) {
          trioCombos.push(combos);
        }
      }
    }
    //console.log(selectedCards)
    console.log(trioCombos)

    var full = 0;
    var fullso = 0
    
    for(let z = 0; z < trioCombos.length; z++){
      if(trioCombos[z][0][0][0] === trioCombos[z][0][1][0]){
        for(let x = 0; x < selectedCards.length; x++){
          for(let c = 0; c < selectedCards.length; c++){
            if(selectedCards[x][0] === selectedCards[c][0] && x !== c){
              full++;
              if(full >= 1){
                trioCombos.splice(z);
              }
            }
          }
        }
      }
      /*
      else if((trioCombos[z][0][0][0] !== trioCombos[z][0][1][0])){
        var primero = trioCombos[z][0][0][0];
        var segundo = trioCombos[z][0][1][0];

        for(let x = 0; x < selectedCards.length; x++){
          for(let c = 0; c < selectedCards.length; c++){
            
            if(((selectedCards[x][0] === selectedCards[c][0]) && (x !== c))){
              fullso++;
              console.log(fullso)
              if(fullso >= 3){
                trioCombos.splice(z);
              }
            }
          }
        }
      }
      */
    }

    for(var v = 0; v < trioCombos.length; v++){
      combosFiltrados = combosFiltrados + trioCombos[v].length;
    }

    console.log(trioCombos)
    
    console.log(combosFiltrados)

    


    return combosFiltrados;
}
  
function filters(){
  var totalCombos = actualizarTotal();
  var setCombos = set();

  var actualPercent = 0;
  var actualSumOfCombos = 0;

  var passFilter = document.getElementById("passFilter");
  actualPercent = setCombos/totalCombos;
  actualSumOfCombos = setCombos;

  passFilter.innerHTML = 'Combos that pass the filters: ' + actualSumOfCombos + ' (' + (actualPercent*100).toFixed(2) + '%)';

}

var isButtonActive = false;

function toggleSet(){
  var iconElement = document.getElementById('icon');
  var passFilter = document.getElementById("passFilter");


  if (isButtonActive) {
    // Si el botón está activo, restaurar el color original
    iconElement.style.color = '';
    passFilter.innerHTML = 'Combos that pass the filters: 0';
  // Esto restablecerá el color a su valor predeterminado (normalmente negro)
  } else {
    // Si el botón está inactivo, cambiar el color a uno específico
    iconElement.style.color = '#5484FF'; // Cambia 'red' por el color deseado al hacer clic
  }

  // Alternar el estado del botón
  isButtonActive = !isButtonActive;
}
  // Ejemplo de uso:
  
  

// disenio

function toggleColor(element) {
    if (element.classList.contains("pairs")) {
        element.classList.toggle("selected-pairs");
    } else if (element.classList.contains("suited")) {
        element.classList.toggle("selected-suited");
    } else if (element.classList.contains("offsuited")) {
        element.classList.toggle("selected-offsuited");
    }
}

function toggleColorCard(element) {
    if (element.classList.contains("heart")) {
        element.classList.toggle("selected-heart");
    } else if (element.classList.contains("club")) {
        element.classList.toggle("selected-club");
    } else if (element.classList.contains("diamond")) {
        element.classList.toggle("selected-diamond");
    } else if (element.classList.contains('spade')) {
        element.classList.toggle('selected-spade');
    }
}

