// the tips, displayed by clicking on the Next button
instructionCounter = 0;
instructions = [
  "Играта шашки се играе от двама играчи. Всички фигури в началото на играта са шашки и могат да се движат само напред по диагонал. Първи на ход са белите фигури.",
  "Натиснете с мишката акцентираната фигура. Възможните полета за преместване на фигурата ще се оцветят в червено. Преместете фигурата надясно.",
  "Противникът също направи ход. Сега отново е Ваш ред. Преместете акцентираната фигура надясно.",
  "Целта на играта е да вземете всички фигури на противника или да ги блокирате, при което не могат да се движат. Можете да вземете вражеска фигура, ако я \"прескочите\" по диагонал. За целта преместете акцентираната фигура в празното поле зад вражеската. ",
  "О, не. Отнеха ни шашка. Нека и ние отнемем още една на противника! Преместете акцентираната фигура надясно, прескачайки черната шашка.",
  "Когато Ваша фигура достигне до края на дъската, тя се превръща в цар, който може да се движи по диагонал и назад.",
  "Ако по пътя Ви напред има множество вражески фигури, разполежени през една, с един ход можете да прескочите всички. ",
  "Играта завършва, когато унищожите всички вражески фигури. Вземете последната фигура на противника и спечелете играта!"];

// function to show next tip
function next() {
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

function one() {
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
  selectedFigure = figures[5][5];
  move(selectedFigure, options[6][4]); 
  figures[2][2].color = [1/2, 1/2, 1];
  selectedFigure = null;
}

function three() {
  figures[3][3].color = [1,1,1];
  selectedFigure = figures[3][5];
  move(selectedFigure, options[4][4]);
  figures[5][3].color = [1/2, 1/2, 1];
  selectedFigure = null;
}

function four() {
  figures[3][5].color = [1,1,1];
  selectedFigure = figures[2][6];
  move(selectedFigure, options[4][4]);
  figures[3][3].color = [1/2, 1/2, 1];
  selectedFigure = null;
}

function five() {
  figures[5][5].color = [1,1,1];
  selectedFigure = figures[3][7];
  move(selectedFigure, options[2][6]);
  figures[5][5].color = [1/2, 1/2, 1];
  selectedFigure = null;
}

function six() {
  figures[3][7].color = [1,1,1];
  selectedFigure = figures[5][7];
  move(selectedFigure, options[4][6]);
  figures[3][7].color = [1/2, 1/2, 1];
  selectedFigure = null;
}

function seven() {
  figures[7][3].color = [1,1,1];
  selectedFigure = null;
}
