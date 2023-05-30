// the tips, displayed by clicking on the Next button

document.addEventListener("DOMContentLoaded", function() {
  instructionButton = document.querySelector('#tutorial-view button');
  canvas = document.querySelector('#tutorial-view canvas');
});

function enableCanvas(){
  canvas.classList.remove('disabled');
}

function disableCanvas(){
  canvas.classList.add('disabled');
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

instructionCounter = 0;
instructions = [
  "Играта шашки се играе от двама играчи. Всички фигури в началото на играта са шашки и могат да се движат само напред по диагонал. Първи на ход са белите фигури.",
  "Натиснете с мишката акцентираната фигура. Възможните полета за преместване на фигурата ще се оцветят в червено. Преместете фигурата надясно.",
  "Противникът също направи ход. Сега отново е Ваш ред. Преместете акцентираната фигура надясно.",
  "Целта на играта е да вземете всички фигури на противника или да ги блокирате, при което не могат да се движат. Можете да вземете вражеска фигура, ако я \"прескочите\" по диагонал. За целта преместете акцентираната фигура в празното поле зад вражеската. ",
  "О, не, отнеха ни шашка! Нека и ние отнемем още една на противника! Преместете акцентираната фигура надясно, прескачайки черната шашка.",
  "Когато Ваша фигура достигне до края на дъската, тя се превръща в цар, който може да се движи по диагонал и назад.\nПротивникът направи грешка и освободи позиция на последния ред. Преместете акцентираната фигура там, за да се превърне в цар!",
  "Ако по пътя Ви напред има множество вражески фигури, разполежени през една, с един ход можете да прескочите всички. \nПреместете акцентираната фигура така, че да прескочите две шашки на противника едновременно!",
  "Играта завършва, когато унищожите всички вражески фигури. Вземете последната фигура на противника и спечелете играта!", 
"Поздравления. Успешно преминахте наръчника и спечелихте играта! \nПосетете секцията \"Игра с приятел\", за да играете с друг човек."];

// function to show next tip
function next() {
  if(instructionCounter < 7){
  enableCanvas();
  instructionCounter = (instructionCounter + 1) % (instructions.length);
  document.getElementById("instruction").innerHTML = instructions[instructionCounter];
  selectedFigure = null;
  fig = null;
  switch (instructionCounter) {
    case 1:
      one(); break;
    case 2: 
      two(); break;
    case 3:
      three(); break;
    case 4: 
      four(); break;
    case 5:
      five(); break;
    case 6:
      six(); break;
    case 7:
      seven(); break;
    case 8:
      eight(); break;
    default:
      break;
  }
  }
  instructionButton.disabled = true;
}

function one() {
  document.querySelector('#tutorial-view canvas').classList.remove('disabled');
  for (let i = 0; i<8; i++){
    for (let j = 0; j<8; j++) {
      if (figures[i][j]){
        figures[i][j].interactive = true;
      }
    }
  }
  figures[4][2].color = [1/2,1/2,1];
}

function two() {
  figures[5][3].color = [1,1,1];
  setTimeout(() => {
    selectedFigure = figures[5][5];
    move(selectedFigure, options[6][4]); 
  }, 750);
  setTimeout(() => {
    figures[2][2].color = [1/2, 1/2, 1];
  }, 1300);
  selectedFigure = null;
}

function three() {
  figures[3][3].color = [1,1,1];
  setTimeout(() => {
    selectedFigure = figures[3][5];
    move(selectedFigure, options[4][4]);
  }, 750);
  setTimeout(() => {
    figures[5][3].color = [1/2, 1/2, 1];
  }, 1300);
  selectedFigure = null;
}

function four() {
  figures[3][5].color = [1,1,1];
  setTimeout(() => {
    selectedFigure = figures[2][6];
    move(selectedFigure, options[4][4]);
  }, 750);
  setTimeout(() => {
    figures[3][3].color = [1/2, 1/2, 1];
  }, 1300);
  selectedFigure = null;
}

function five() {
  figures[5][5].color = [1,1,1];
  setTimeout(() => {
    selectedFigure = figures[3][7];
    move(selectedFigure, options[2][6]);
  }, 750);
  setTimeout(() => {
    figures[5][5].color = [1/2, 1/2, 1];
  }, 1300);
  selectedFigure = null;
}

function six() {
  figures[3][7].color = [1,1,1];
  setTimeout(() => {
    selectedFigure = figures[5][7];
    move(selectedFigure, options[4][6]);
  }, 750);
  setTimeout(() => {
    figures[3][7].color = [1/2, 1/2, 1];
  }, 1300);
  selectedFigure = null;
}

async function seven() {
  figures[7][3].color = [1,1,1];

  selectedFigure = figures[7][5];
  move(selectedFigure, options[6][4]);
  selectedFigure = figures[7][3];
  move(selectedFigure, options[5][5]);

  await delay(300);
  selectedFigure = figures[1][5];
  move(selectedFigure, options[2][4]);
  selectedFigure = figures[0][2];
  move(selectedFigure, options[1][3]);
  await delay(300);
  
  figures[0][6].visible = false;
  
  selectedFigure = figures[2][6];
  move(selectedFigure, options[3][5]);
  selectedFigure = figures[5][5];
  move(selectedFigure, options[6][4]);
  await delay(300);
  
  selectedFigure = figures[6][6];
  move(selectedFigure, options[5][5]);
  selectedFigure = figures[6][4];
  move(selectedFigure, options[4][6]);
  await delay(300);

  selectedFigure = figures[1][7];
  move(selectedFigure, options[2][6]);
  figures[7][7].visible = false;
  await delay(300);
  // selectedFigure = figures[3][3];
  // move(selectedFigure, options[4][4])
  //
  selectedFigure = figures[0][6];
  move(selectedFigure, options[1][5]);
  selectedFigure = figures[1][1];
  move(selectedFigure, options[2][2]);
  await delay(300);

  selectedFigure = figures[3][5];
  move(selectedFigure, options[4][4]);
  selectedFigure = figures[1][3];
  move(selectedFigure, options[3][5]);
  await delay(300);

  selectedFigure = figures[3][5];
  move(selectedFigure, options[1][7]);
  selectedFigure = figures[4][4];
  move(selectedFigure, options[3][3]);
  await delay(300);
  
  // selectedFigure = figures[2][4];
  // move(selectedFigure, options[0][2]);
  // selectedFigure = figures[1][1];
  // move(selectedFigure, options[2][2]);

  // selectedFigure = figures[0][2];
  // move(selectedFigure, options[1][1]);
  // selectedFigure = figures[2][0];
  // move(selectedFigure, options[1][1]);

  figures[2][2].color = [1/2, 1/2, 1];
  selectedFigure = null;
}
