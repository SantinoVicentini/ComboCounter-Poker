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
    

    


    return combosFiltrados;
}

// CHEQUEAR EL CASO DONDE ALL CARDS QUEDA EMPAREJADO en el medio Y A2345 
function straight() {
  var straightCombos = [];
  var selectedCards = Object.keys(boardSeleccionado);

  for (var hand in combosPorMano) {
    if (combosPorMano.hasOwnProperty(hand)) {
      var combos = combosPorMano[hand][0];
      for (var i = 0; i < combos.length; i++) {
        var combo = combos[i];
        var allCards = combo.concat(selectedCards).sort(function(a, b) {
          var cardValueA = getCardValue(a);
          var cardValueB = getCardValue(b);
          return cardValueA - cardValueB;
        });
        
        var countConsecutive = 1;
        var prevCardValue = -1;
        var lowStraightCount = 0; // To track the count of cards in the low straight

        for (var j = 0; j < allCards.length; j++) {
          var cardValue = getCardValue(allCards[j]);
          
          if (prevCardValue !== -1 && cardValue === prevCardValue) {
            // Skip the card if it's the same value as the previous one
            continue;
          }
          
          if (prevCardValue !== -1 && cardValue === prevCardValue + 1) {
            countConsecutive++;
            
            // Check for the low straight (A-2-3-4-5)
            if (countConsecutive === 4 && cardValue === 5 && getCardValue(allCards[allCards.length - 1]) === 14) {
              lowStraightCount = countConsecutive;
              countConsecutive = 1;
            }

            if (countConsecutive === 5 || lowStraightCount === 4) {
              straightCombos.push(combo);
              break;
            }
          } else {
            countConsecutive = 1;
            lowStraightCount = 0;
          }

          prevCardValue = cardValue;
        }
      }
    }
  }


  console.log(straightCombos);

  return straightCombos.length;
}







function getCardValue(card) {
  var cardValueMap = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "T": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
  };

  var rank = card.slice(0, -1); // Eliminar el último carácter (el palo) para obtener solo el rango de la carta
  return cardValueMap[rank];
}

function twoPair(){
  var twoPairCombos = [];
  var selectedCards = Object.keys(boardSeleccionado);

  for (var hand in combosPorMano) {
    if (combosPorMano.hasOwnProperty(hand)) {
      var combos = combosPorMano[hand][0];
      for (var i = 0; i < combos.length; i++) {
        var combo = combos[i];
        var allCards = combo.concat(selectedCards).sort(function(a, b) {
          var cardValueA = getCardValue(a);
          var cardValueB = getCardValue(b);
          return cardValueA - cardValueB;
        });


        var cardFrequencies = {}; // Objeto para almacenar la frecuencia de cada valor de carta
        for (var j = 0; j < allCards.length; j++) {
          var cardValue = getCardValue(allCards[j]);
          cardFrequencies[cardValue] = (cardFrequencies[cardValue] || 0) + 1;
        }


        var countTwo = 0;
        for (var value in cardFrequencies) {
          if (cardFrequencies.hasOwnProperty(value) && cardFrequencies[value] === 2) {
            countTwo++;
          }
        }

        if(countTwo === 2 || countTwo === 3){
          twoPairCombos.push(combo);
        }

      }
    }
  }

  return twoPairCombos.length;

}

function overpair() {
  var overPairCombos = [];
  var selectedCards = Object.keys(boardSeleccionado);

  for (var hand in combosPorMano) {
    if (combosPorMano.hasOwnProperty(hand)) {
      var combos = combosPorMano[hand][0];
      for (var i = 0; i < combos.length; i++) {
        var combo = combos[i];
        var allCards = combo.concat(selectedCards).sort(function(a, b) {
          var cardValueA = getCardValue(a);
          var cardValueB = getCardValue(b);
          return cardValueA - cardValueB;
        });

        var cardFrequencies = {}; // Objeto para almacenar la frecuencia de cada valor de carta
        for (var j = 0; j < allCards.length; j++) {
          var cardValue = getCardValue(allCards[j]);
          cardFrequencies[cardValue] = (cardFrequencies[cardValue] || 0) + 1;
        }
        console.log(cardFrequencies)
        var countTwo = 0;
        for (var value in cardFrequencies) {
          if (cardFrequencies.hasOwnProperty(value) && cardFrequencies[value] === 2) {
            countTwo++;
          }
        }

        if (countTwo === 1 && hasOverPair(combo, selectedCards)) {
          overPairCombos.push(combo);
        }
      }
    }
  }

  return overPairCombos.length;
}

function hasOverPair(combo, boardCards) {
  var maxBoardCardValue = Math.max(...boardCards.map(getCardValue));
  return combo.some(card => getCardValue(card) > maxBoardCardValue);
}

function topPair() {
  var topPairCombosList = [];
  var selectedCards = Object.keys(boardSeleccionado);

  for (var hand in combosPorMano) {
    if (combosPorMano.hasOwnProperty(hand)) {
      var combos = combosPorMano[hand][0];
      for (var i = 0; i < combos.length; i++) {
        var combo = combos[i];
        var allCards = combo.concat(selectedCards).sort(function(a, b) {
          var cardValueA = getCardValue(a);
          var cardValueB = getCardValue(b);
          return cardValueA - cardValueB;
        });

        var cardFrequencies = {}; // Objeto para almacenar la frecuencia de cada valor de carta
        for (var j = 0; j < allCards.length; j++) {
          var cardValue = getCardValue(allCards[j]);
          cardFrequencies[cardValue] = (cardFrequencies[cardValue] || 0) + 1;
        }

        var maxBoardCardValue = Math.max(...selectedCards.map(getCardValue));
        if (cardFrequencies[maxBoardCardValue] === 2) {
          var hasOtherHighCard = false;
          for (var j = 0; j < allCards.length; j++) {
            var cardValue = getCardValue(allCards[j]);
            if (cardValue !== maxBoardCardValue && cardFrequencies[cardValue] >= 2) {
              hasOtherHighCard = true;
              break;
            }
          }

          if (!hasOtherHighCard) {
            topPairCombosList.push(combo);
          }
        }
      }
    }
  }

  console.log(topPairCombosList)

  return topPairCombosList.length;
}

function isBoardPaired(selectedCards) {
  var cardFrequencies = {}; // Objeto para almacenar la frecuencia de cada valor de carta

  for (var j = 0; j < selectedCards.length; j++) {
    var cardValue = getCardValue(selectedCards[j]);
    cardFrequencies[cardValue] = (cardFrequencies[cardValue] || 0) + 1;
  }

  // Verificar si hay algún valor de carta con frecuencia mayor o igual a 2 (está emparejado)
  for (var value in cardFrequencies) {
    if (cardFrequencies.hasOwnProperty(value) && cardFrequencies[value] >= 2) {
      return true;
    }
  }

  return false; // No está emparejado
}


function ppTopCard() {
  var ppTopCardCombos = [];
  var selectedCards = Object.keys(boardSeleccionado);

  if (isBoardPaired(selectedCards)) {
    return ppTopCardCombos.length; // Si el board está emparejado, no hay pocket pairs posibles
  }

  for (var hand in combosPorMano) {
    if (combosPorMano.hasOwnProperty(hand)) {
      var combos = combosPorMano[hand][0];
      for (var i = 0; i < combos.length; i++) {
        var combo = combos[i];
        var allCards = combo.concat(selectedCards).sort(function(a, b) {
          var cardValueA = getCardValue(a);
          var cardValueB = getCardValue(b);
          return cardValueA - cardValueB;
        });

        var cardFrequencies = {}; // Objeto para almacenar la frecuencia de cada valor de carta
        for (var j = 0; j < allCards.length; j++) {
          var cardValue = getCardValue(allCards[j]);
          cardFrequencies[cardValue] = (cardFrequencies[cardValue] || 0) + 1;
        }
        
        if (getCardValue(combo[0]) === getCardValue(combo[1])) {
          var pocketPairValue = getCardValue(combo[0]);
          var isTopPair = true;
          var maxBoardCardValue = Math.max(...selectedCards.map(getCardValue));
          var cardValue = 0;

        
          for (var j = 0; j < selectedCards.length; j++) {
            if(getCardValue(selectedCards[j]) !== maxBoardCardValue){
              cardValue = getCardValue(selectedCards[j]);
            }
            if (pocketPairValue <= cardValue || pocketPairValue >= maxBoardCardValue) {
              isTopPair = false;
              break;
            }
          }
        
          if (isTopPair) {
            ppTopCardCombos.push(combo);
          }
        }
        

      }
    }
  }

  console.log(ppTopCardCombos);

  return ppTopCardCombos.length;
}

function ppSecondCard() {
  var ppSecondCardCombos = [];
  var selectedCards = Object.keys(boardSeleccionado);

  if (isBoardPaired(selectedCards)) {
    return ppSecondCardCombos.length; // Si el board está emparejado, no hay pocket pairs posibles
  }

  // Obtener la segunda carta más alta del board
  var boardCardValues = selectedCards.map(getCardValue);
  boardCardValues.sort(function(a, b) {
    return b - a;
  });

  var secondHighestCardValue = boardCardValues[1]; // El índice 1 contiene la segunda carta más alta

  for (var hand in combosPorMano) {
    if (combosPorMano.hasOwnProperty(hand)) {
      var combos = combosPorMano[hand][0];
      for (var i = 0; i < combos.length; i++) {
        var combo = combos[i];
        var allCards = combo.concat(selectedCards).sort(function(a, b) {
          var cardValueA = getCardValue(a);
          var cardValueB = getCardValue(b);
          return cardValueA - cardValueB;
        });

        var cardFrequencies = {}; // Objeto para almacenar la frecuencia de cada valor de carta
        for (var j = 0; j < allCards.length; j++) {
          var cardValue = getCardValue(allCards[j]);
          cardFrequencies[cardValue] = (cardFrequencies[cardValue] || 0) + 1;
        }
        
        if (getCardValue(combo[0]) === getCardValue(combo[1])) {
          var pocketPairValue = getCardValue(combo[0]);
          var isSecondPair = true;
          var maxBoardCardValue = Math.max(...selectedCards.map(getCardValue));
          var cardValue = 0;

          for (var j = 0; j < selectedCards.length; j++) {
            var currentCardValue = getCardValue(selectedCards[j]);
            if (currentCardValue !== maxBoardCardValue && currentCardValue !== secondHighestCardValue) {
              cardValue = currentCardValue;
            }
            console.log(cardValue)
            if (pocketPairValue <= cardValue || pocketPairValue >= maxBoardCardValue || pocketPairValue >= secondHighestCardValue) {
              isSecondPair = false;
              break;
            }
          }
        
          if (isSecondPair) {
            ppSecondCardCombos.push(combo);
          }
        }
      }
    }
  }

  console.log(ppSecondCardCombos);

  return ppSecondCardCombos.length;
}

// ME FALTA CHEQUEAR CUANDO PP ES MENOR A MINCARDBOARD
function weakPair() {
  var weakPairCombosList = [];
  var selectedCards = Object.keys(boardSeleccionado);

  for (var hand in combosPorMano) {
    if (combosPorMano.hasOwnProperty(hand)) {
      var combos = combosPorMano[hand][0];
      for (var i = 0; i < combos.length; i++) {
        var combo = combos[i];
        var allCards = combo.concat(selectedCards).sort(function(a, b) {
          var cardValueA = getCardValue(a);
          var cardValueB = getCardValue(b);
          return cardValueA - cardValueB;
        });

        var cardFrequencies = {}; // Objeto para almacenar la frecuencia de cada valor de carta
        for (var j = 0; j < allCards.length; j++) {
          var cardValue = getCardValue(allCards[j]);
          cardFrequencies[cardValue] = (cardFrequencies[cardValue] || 0) + 1;
        }

        var minBoardCardValue = Math.min(...selectedCards.map(getCardValue));
        if (cardFrequencies[minBoardCardValue] === 2) {
          var hasOtherminCard = false;
          for (var j = 0; j < allCards.length; j++) {
            var cardValue = getCardValue(allCards[j]);
            if (cardValue !== minBoardCardValue && cardFrequencies[cardValue] >= 2) {
              hasOtherminCard = true;
              break;
            }
          }
          if (!hasOtherminCard) {
            weakPairCombosList.push(combo);
          }
        }
      }
    }
  }

  console.log(weakPairCombosList)

  return weakPairCombosList.length;
}


var isButtonActive1 = false;
var isButtonActive2 = false;
var isButtonActive3 = false;
var isButtonActive4 = false;
var isButtonActive5 = false;
var isButtonActive6 = false;
var isButtonActive7 = false;
var isButtonActive8 = false;
var isButtonActive9 = false;






function toggleSet(){
  var iconElement = document.getElementById('icon2');
  var passFilter = document.getElementById("passFilter");

  var totalCombos = actualizarTotal();
  var setCombos = set();

  var actualPercent = 0;
  var actualSumOfCombos = 0;

  actualPercent = setCombos/totalCombos;
  actualSumOfCombos = setCombos;


  if (isButtonActive2) {
    // Si el botón está activo, restaurar el color original
    iconElement.style.color = '';
    passFilter.innerHTML = 'Combos that pass the filters: 0';
  // Esto restablecerá el color a su valor predeterminado (normalmente negro)
  } else {
    // Si el botón está inactivo, cambiar el color a uno específico
    iconElement.style.color = '#5484FF'; // Cambia 'red' por el color deseado al hacer clic
    passFilter.innerHTML = 'Combos that pass the filters: ' + actualSumOfCombos + ' (' + (actualPercent*100).toFixed(2) + '%)';
  }

  // Alternar el estado del botón
  isButtonActive2 = !isButtonActive2;
}


function toggleStraight(){
  var iconElement = document.getElementById('icon1');
  var passFilter = document.getElementById("passFilter");

  var totalCombos = actualizarTotal();
  var straightCombos = straight();

  var actualPercent = 0;
  var actualSumOfCombos = 0;

  actualPercent = straightCombos/totalCombos;
  actualSumOfCombos = straightCombos;


  if (isButtonActive1) {
    // Si el botón está activo, restaurar el color original
    iconElement.style.color = '';
    passFilter.innerHTML = 'Combos that pass the filters: 0';
  // Esto restablecerá el color a su valor predeterminado (normalmente negro)
  } else {
    // Si el botón está inactivo, cambiar el color a uno específico
    iconElement.style.color = '#5484FF'; // Cambia 'red' por el color deseado al hacer clic
    passFilter.innerHTML = 'Combos that pass the filters: ' + actualSumOfCombos + ' (' + (actualPercent*100).toFixed(2) + '%)';
  }

  // Alternar el estado del botón
  isButtonActive1 = !isButtonActive1;
}

function toggleTwoPairs(){
  var iconElement = document.getElementById('icon3');
  var passFilter = document.getElementById("passFilter");

  var totalCombos = actualizarTotal();
  var twoPairCombo = twoPair();

  var actualPercent = 0;
  var actualSumOfCombos = 0;

  actualPercent = twoPairCombo/totalCombos;
  actualSumOfCombos = twoPairCombo;


  if (isButtonActive3) {
    // Si el botón está activo, restaurar el color original
    iconElement.style.color = '';
    passFilter.innerHTML = 'Combos that pass the filters: 0';
  // Esto restablecerá el color a su valor predeterminado (normalmente negro)
  } else {
    // Si el botón está inactivo, cambiar el color a uno específico
    iconElement.style.color = '#5484FF'; // Cambia 'red' por el color deseado al hacer clic
    passFilter.innerHTML = 'Combos that pass the filters: ' + actualSumOfCombos + ' (' + (actualPercent*100).toFixed(2) + '%)';
  }

  // Alternar el estado del botón
  isButtonActive3 = !isButtonActive3;
}

function toggleOverpair(){
  var iconElement = document.getElementById('icon4');
  var passFilter = document.getElementById("passFilter");

  var totalCombos = actualizarTotal();
  var overpairCombo = overpair();

  var actualPercent = 0;
  var actualSumOfCombos = 0;

  actualPercent = overpairCombo/totalCombos;
  actualSumOfCombos = overpairCombo;


  if (isButtonActive4) {
    // Si el botón está activo, restaurar el color original
    iconElement.style.color = '';
    passFilter.innerHTML = 'Combos that pass the filters: 0';
  // Esto restablecerá el color a su valor predeterminado (normalmente negro)
  } else {
    // Si el botón está inactivo, cambiar el color a uno específico
    iconElement.style.color = '#5484FF'; // Cambia 'red' por el color deseado al hacer clic
    passFilter.innerHTML = 'Combos that pass the filters: ' + actualSumOfCombos + ' (' + (actualPercent*100).toFixed(2) + '%)';
  }

  // Alternar el estado del botón
  isButtonActive4 = !isButtonActive4;
}


function toggleTopPair(){
  var iconElement = document.getElementById('icon5');
  var passFilter = document.getElementById("passFilter");

  var totalCombos = actualizarTotal();
  var topPairCombos = topPair();

  var actualPercent = 0;
  var actualSumOfCombos = 0;

  actualPercent = topPairCombos/totalCombos;
  actualSumOfCombos = topPairCombos;


  if (isButtonActive5) {
    // Si el botón está activo, restaurar el color original
    iconElement.style.color = '';
    passFilter.innerHTML = 'Combos that pass the filters: 0';
  // Esto restablecerá el color a su valor predeterminado (normalmente negro)
  } else {
    // Si el botón está inactivo, cambiar el color a uno específico
    iconElement.style.color = '#5484FF'; // Cambia 'red' por el color deseado al hacer clic
    passFilter.innerHTML = 'Combos that pass the filters: ' + actualSumOfCombos + ' (' + (actualPercent*100).toFixed(2) + '%)';
  }

  // Alternar el estado del botón
  isButtonActive5 = !isButtonActive5;
}

function togglePpTopCard(){
  var iconElement = document.getElementById('icon6');
  var passFilter = document.getElementById("passFilter");

  var totalCombos = actualizarTotal();
  var ppTCombos = ppTopCard();

  var actualPercent = 0;
  var actualSumOfCombos = 0;

  actualPercent = ppTCombos/totalCombos;
  actualSumOfCombos = ppTCombos;


  if (isButtonActive6) {
    // Si el botón está activo, restaurar el color original
    iconElement.style.color = '';
    passFilter.innerHTML = 'Combos that pass the filters: 0';
  // Esto restablecerá el color a su valor predeterminado (normalmente negro)
  } else {
    // Si el botón está inactivo, cambiar el color a uno específico
    iconElement.style.color = '#5484FF'; // Cambia 'red' por el color deseado al hacer clic
    passFilter.innerHTML = 'Combos that pass the filters: ' + actualSumOfCombos + ' (' + (actualPercent*100).toFixed(2) + '%)';
  }

  // Alternar el estado del botón
  isButtonActive6 = !isButtonActive6;
}

function togglePpSecondCard(){
  var iconElement = document.getElementById('icon8');
  var passFilter = document.getElementById("passFilter");

  var totalCombos = actualizarTotal();
  var ppSCombos = ppSecondCard();

  var actualPercent = 0;
  var actualSumOfCombos = 0;

  actualPercent = ppSCombos/totalCombos;
  actualSumOfCombos = ppSCombos;


  if (isButtonActive8) {
    // Si el botón está activo, restaurar el color original
    iconElement.style.color = '';
    passFilter.innerHTML = 'Combos that pass the filters: 0';
  // Esto restablecerá el color a su valor predeterminado (normalmente negro)
  } else {
    // Si el botón está inactivo, cambiar el color a uno específico
    iconElement.style.color = '#5484FF'; // Cambia 'red' por el color deseado al hacer clic
    passFilter.innerHTML = 'Combos that pass the filters: ' + actualSumOfCombos + ' (' + (actualPercent*100).toFixed(2) + '%)';
  }

  // Alternar el estado del botón
  isButtonActive8 = !isButtonActive8;
}

function toggleWeakPair(){
  var iconElement = document.getElementById('icon9');
  var passFilter = document.getElementById("passFilter");

  var totalCombos = actualizarTotal();
  var weakPairCombos = weakPair();

  var actualPercent = 0;
  var actualSumOfCombos = 0;

  actualPercent = weakPairCombos/totalCombos;
  actualSumOfCombos = weakPairCombos;


  if (isButtonActive9) {
    // Si el botón está activo, restaurar el color original
    iconElement.style.color = '';
    passFilter.innerHTML = 'Combos that pass the filters: 0';
  // Esto restablecerá el color a su valor predeterminado (normalmente negro)
  } else {
    // Si el botón está inactivo, cambiar el color a uno específico
    iconElement.style.color = '#5484FF'; // Cambia 'red' por el color deseado al hacer clic
    passFilter.innerHTML = 'Combos that pass the filters: ' + actualSumOfCombos + ' (' + (actualPercent*100).toFixed(2) + '%)';
  }

  // Alternar el estado del botón
  isButtonActive9 = !isButtonActive9;
}

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

