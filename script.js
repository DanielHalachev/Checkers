// flags and universally used variables
//#region common variables
// indicates whether automatic rotation is enabled
rotationEnabled = false;
// indicates whose turn it is - used in automatic rotation
isWhiteTurn = true;
// predefined colors
red = [1, 0, 0];
// a reference to the selected figure
selectedFigure = null;
// the parameters for mouse rotation
lookA = radians(-90);
lookB = 0;
// the approximate distance between [3.5, -10, 10] and [3.5, 3.5, 0]
lookD = 17;
// all possible figures are stored in this array in order to have O(1) checks and access by coordinates (x,y)
// I preferred it to a map, because maps in JS are tedious
figures = [];
// options are the color fields, used to represent the possible movements
// when a figure is clicked, this is filled with the possible squares to click
// when a movement is chosen, the options are hidden
options = [];
// initialization of the arrays, "null" = "no figure/square" at given coordinates
for (var i = 0; i < 8; i++) {
    figures[i] = [];
    options[i] = [];
    for (var j = 0; j < 8; j++) {
        figures[i][j] = null;
        options[i][j] = null;
    }
}
// the idea of this array is to traverse only the currently visible options and toggle them, 
// instead of traversing all 64 options
possibleOptions = [];
//#endregion

//function to toggle automatic rotation checkbox
function toggleRotation() {
    var checkbox = document.getElementById("check");
    if (checkbox.checked) {
        rotationEnabled = true;
    }
    else {
        rotationEnabled = false;
    }
}

//#region initial setup
// function to generate the board
function board() {
    var isBlack = 0;
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            var color = isBlack == 0 ? 0.2 : 1;
            cuboid([x, y, -0.25], [1, 1, 0.5]).custom({ color: [color, color, color] });
            isBlack = 1 - isBlack;
        }
        isBlack = 1 - isBlack;
    }
    cuboid([3.5, 3.5, -0.3], [9, 9, 0.5]).custom({ color: [0, 0, 0] });
}

// function to generate the figures
function checkers() {
    var isBlack = 0;
    for (var y = 0; y < 3; y++) {
        for (var x = 0; x < 8; x++) {
            if (isBlack == 0) {
                figures[x][y] = cylinder([x, y, 0], 0.35, 0.15).custom({ color: [1, 1, 1], interactive: false });
            }
            isBlack = 1 - isBlack;
        }
        isBlack = 1 - isBlack;
    }
    for (var y = 5; y < 8; y++) {
        for (var x = 0; x < 8; x++) {
            if (isBlack == 0) {
                figures[x][y] = cylinder([x, y, 0], 0.35, 0.15).custom({ color: [0, 0, 0], interactive: false });
            }
            isBlack = 1 - isBlack;
        }
        isBlack = 1 - isBlack;
    }
}

// function to generate the options
function ops() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            options[i][j] = square([i, j, 0.001], 1).custom({ visible: false, interactive: true, color: [1, 0, 0] });
        }
    }
}
//#endregion

//#region main() and event handlers()
function main() {
    p = new Suica();
    background([0.9, 0.8, 0.8]);
    alpha = radians(-90);
    lookAt([3.5 + Math.cos(alpha), -10 + Math.sin(alpha), 10], [3.5, 3.5, 0], [0, 0, 1]);

    p.gl.canvas.addEventListener('mousedown', mouseDown, false);
    p.gl.canvas.addEventListener('mousemove', mouseMove, false);
    p.gl.canvas.addEventListener('contextmenu', function (e) { e.preventDefault(); }, false);

    board();
    checkers();
    ops();
}

function mouseDown(event) {
  clX = event.clientX;
  clY = event.clientY;
  fig = p.objectAtPoint(event.clientX, event.clientY);
  console.log("mouseDown, pressed object=", fig);
  if (fig) {
    // we have selected either a figure or a square to move it to
    // if it's a figure
    if (selectedFigure == null) {
      console.log(fig.color);
      if(fig.color[0]==1/2 && fig.color[1]==1/2 && fig.color[2] == 1){
        console.log("We have pressed a figure");
        selectedFigure = fig;
        prepareMovement(selectedFigure);
      } else {
        selectedFigure = null;
        fig = null;
        alert("Моля изберете акцентираната фигура");
      }
    }
    // do something only if we have pressed an object, not an empty space
    else {
      // we haven't pressed the figure we have intially selected, but a square to move to
      if (fig != selectedFigure && isPossibleOption(fig)) {
        switch (instructionCounter) {
          case 1:
            if(fig!=options[5][3]){
              alert("Моля изберете дясната опция");
              hideOptions();
            } else {
              move(selectedFigure, fig);
              instructionButton.disabled = false;
              setTimeout(disableCanvas, 750);
            }
            break;
          case 2:
            if(fig!=options[3][3]){
              alert("Моля изберете дясната опция");
              hideOptions();
            } else {
              move(selectedFigure, fig);
              instructionButton.disabled = false;
              setTimeout(disableCanvas, 750);
            }
            break;
          case 3:
            if(fig!=options[3][5]){
              alert("Моля изберете дясната опция");
              hideOptions();
            } else {
              move(selectedFigure, fig);
              instructionButton.disabled = false;
              setTimeout(disableCanvas, 750);
            }
            break;
          case 4:
            if(fig!=options[5][5]){
              alert("Моля изберете дясната опция");
              hideOptions();
            } else {
              move(selectedFigure, fig);
              instructionButton.disabled = false;
              setTimeout(disableCanvas, 750);
            }
            break;
          case 5:
            if(fig!=options[3][7]){
              alert("Моля изберете дясната опция");
              hideOptions();
            } else {
              move(selectedFigure, fig);
              instructionButton.disabled = false;
              setTimeout(disableCanvas, 750);
            }
            break;
          case 6:
            if(fig!=options[7][3]){
              alert("Моля изберете дясната опция");
              hideOptions();
            } else {
              move(selectedFigure, fig);
              instructionButton.disabled = false;
              setTimeout(disableCanvas, 750);
            }
            break;
          case 7:
            if(fig!=options[5][3]){
              alert("Моля изберете дясната опция");
              hideOptions();
            } else {
              move(selectedFigure, fig);
              instructionButton.disabled = false;
              setTimeout(disableCanvas, 750);
            }
            break;
          case 7:
            if(fig!=options[4][4]){
              alert("Моля изберете дясната опция");
              hideOptions();
            } else {
              move(selectedFigure, fig);
              instructionButton.disabled = false;
              setTimeout(disableCanvas, 750);
              alert("Поздравления! Успешно преминахте наръчника и спечелихте играта!");
            }
            break;
          default:
            break;
        }
      }
      // we haven't pressed the figure we have intially selected, but another figure
      else if (fig != selectedFigure && isFigure(fig)) {
        console.log("We have selected another figure");
        hideOptions();
      }
      // we have pressed the figure we had selected initially
      else {
        console.log("We haven't pressed neither another figure, nor a square");
        hideOptions();
      }
      selectedFigure = null;
    }
  }
}

// function to handle dragging with the mouse
function mouseMove(event) {
    // drag movements
    if (event.buttons == 1) {
        lookA -= (event.clientX - clX) / 200;
        lookB += (event.clientY - clY) / 200;
        if (lookB > +1.5) lookB = +1.5;
        if (lookB < -1.5) lookB = -1.5;
        lookAt([
            3.5 + lookD * Math.cos(lookA) * Math.cos(lookB),
            3.5 + lookD * Math.sin(lookA) * Math.cos(lookB),
            10 + lookD * Math.sin(lookB)],
            [3.5, 3.5, 0], [0, 0, 1]);
        clX = event.clientX;
        clY = event.clientY;
    }

    // drag scaling
    if (event.buttons == 2) {
        lookD *= Math.pow(1.01, event.clientY - clY);
        if (lookD < 10) lookD = 10;
        if (lookD > 17) lookD = 17;
        lookAt([
            3.5 + lookD * Math.cos(lookA) * Math.cos(lookB),
            3.5 + lookD * Math.sin(lookA) * Math.cos(lookB),
            10 + lookD * Math.sin(lookB)], [4, 4, 0], [0, 0, 1]);
        clX = event.clientX;
        clY = event.clientY;
    }
}
//#endregion

//#region figure movements
// function which analyzes the figure type
function prepareMovement(figure) {
    var x = figure.center[0];
    var y = figure.center[1];
    // black
    if (isBlack(x, y)) {
        // standard
        if (figure.height == 0.15) {
            console.log("Black pool")
            prepareBlack(x, y);
        }
        // king
        else {
            console.log("Black king");
            prepareBlackKing(x, y);
        }
    }
    // white
    else if (isWhite(x, y)) {
        // standard
        if (figure.height == 0.15) {
            console.log("White pool")
            prepareWhite(x, y);
        }
        // king
        else {
            console.log("White king")
            prepareWhiteKing(x, y);
        }
    }
    if (possibleOptions.length == 0) {
        selectedFigure = null;
    }
}

// function to move a figure
function move(figure, square) {
    var oldX = figure.center[0];
    var oldY = figure.center[1];
    var newX = square.center[0];
    var newY = square.center[1];

    // perform movement
    figure.center[0] = newX;
    figure.center[1] = newY;

    // array updating
    figures[newX][newY] = figure;
    figures[oldX][oldY] = null;

    // erasing the swiped figures
    deleteInPath(oldX, oldY, newX, newY);

    // hidind the options
    hideOptions();

    // change to king, if needed
    if (figure.center[1] == 0){
      figure.visible = false;
      figure = cone([newX, newY, 0], 0.35, 1).custom({ color: [0, 0, 0], interactive: true });  
      figures[newX][newY] = figure;
    } else if (figure.center[1] == 7){
      figure.visible = false;
      figure = cone([newX, newY, 0], 0.35, 1).custom({ color: [1, 1, 1], interactive: true });  
      figures[newX][newY] = figure;
    }

    // automatic rotation
    isWhiteTurn = !isWhiteTurn;
    if (rotationEnabled) {
        if (isWhiteTurn) {
            lookAt([3.5, -10, 10], [3.5, 3.5, 0], [0, 0, 1]);
        }
        else {
            lookAt([3.5, 17, 10], [3.5, 3.5, 0], [0, 0, 1]);
        }
    }
}

// function to delete a specific figure
function erase(x, y) {
    if (figures[x][y]) {
        figures[x][y].visible = false;
    }
    figures[x][y] = null;
}

// function to delete all figures, when jumping over them
function deleteInPath(oldX, oldY, newX, newY) {
  var stepX = (newX > oldX) ? 1 : -1;
  var stepY = (newY > oldY) ? 1 : -1;

  // // Iterate over the positions on the path
  for (var x = oldX + stepX, y = oldY + stepY; x !== newX || y !== newY; x += stepX, y += stepY) {
    // Delete the figure at the current position (x, y)
    erase(x, y);
  }
}

// function to toggle an option at (X,Y)
function enableOption(x, y) {
    options[x][y].visible = true;
}

// function to hide the visible options
function hideOptions() {
    for (var i = 0; i < possibleOptions.length; i++) {
        possibleOptions[i].visible = false;
    }
    possibleOptions = [];
}

// guide for all prepare* functions below:
// there are several possibilities
// the neighbouring cell is empty               -> we can move there
// the neighbouring cell has a friendly figure  -> ignore it
// the neighbouring cell has an enemy figure    -> analyse the possible jumps

// function to toggle options when selecting a black figure
function prepareBlack(x, y) {
    if (isValid(x - 1, y - 1)) {
        if (isEmpty(x - 1, y - 1)) {
            enableOption(x - 1, y - 1);
            possibleOptions.push(options[x - 1][y - 1]);
        }
        var k = 1;
        while (isWhite(x - k, y - k) && isValid(x - k - 1, y - k - 1) && isEmpty(x - k - 1, y - k - 1)) {
            enableOption(x - k - 1, y - k - 1);
            possibleOptions.push(options[x - k - 1][y - k - 1]);
            k += 2;
        }

    }
    if (isValid(x + 1, y - 1)) {
        if (isEmpty(x + 1, y - 1)) {
            enableOption(x + 1, y - 1);
            possibleOptions.push(options[x + 1][y - 1]);
        }
        var k = 1;
        while (isWhite(x + k, y - k) && isValid(x + k + 1, y - k - 1) && isEmpty(x + k + 1, y - k - 1)) {
            enableOption(x + k + 1, y - k - 1);
            possibleOptions.push(options[x + k + 1][y - k - 1]);
            k += 2;
        }
    }
}

// function to toggle options when selecting a black king
function prepareBlackKing(x, y) {
    console.log("Preparing black king");
    if (isValid(x - 1, y - 1)) {
        if (isEmpty(x - 1, y - 1)) {
            enableOption(x - 1, y - 1);
            possibleOptions.push(options[x - 1][y - 1]);
        }
        var k = 1;
        while (isWhite(x - k, y - k) && isValid(x - k - 1, y - k - 1) && isEmpty(x - k - 1, y - k - 1)) {
            enableOption(x - k - 1, y - k - 1);
            possibleOptions.push(options[x - k - 1][y - k - 1]);
            k += 2;
        }

    }
    if (isValid(x + 1, y - 1)) {
        if (isEmpty(x + 1, y - 1)) {
            enableOption(x + 1, y - 1);
            possibleOptions.push(options[x + 1][y - 1]);
        }
        var k = 1;
        while (isWhite(x + k, y - k) && isValid(x + k + 1, y - k - 1) && isEmpty(x + k + 1, y - k - 1)) {
            enableOption(x + k + 1, y - k - 1);
            possibleOptions.push(options[x + k + 1][y - k - 1]);
            k += 2;
        }
    }
    if (isValid(x - 1, y + 1)) {
        if (isEmpty(x - 1, y + 1)) {
            enableOption(x - 1, y + 1);
            possibleOptions.push(options[x - 1][y + 1]);
        }
        var k = 1;
        while (isWhite(x - k, y + k) && isValid(x - k - 1, y + k + 1) && isEmpty(x - k - 1, y + k + 1)) {
            enableOption(x - k - 1, y + k + 1);
            possibleOptions.push(options[x - k - 1][y + k + 1]);
            k += 2;
        }
    }
    if (isValid(x + 1, y + 1)) {
        if (isEmpty(x + 1, y + 1)) {
            enableOption(x + 1, y + 1);
            possibleOptions.push(options[x + 1][y + 1]);
        }
        var k = 1;
        while (isWhite(x + k, y + k) && isValid(x + k + 1, y + k + 1) && isEmpty(x + k + 1, y + k + 1)) {
            enableOption(x + k + 1, y + k + 1);
            possibleOptions.push(options[x + k + 1][y + k + 1]);
            k += 2;
        }
    }
}

// function to toggle options when selecting a white figure
function prepareWhite(x, y) {
    console.log("Preparing white:", x, y);

    if (isValid(x - 1, y + 1)) {
        if (isEmpty(x - 1, y + 1)) {
            enableOption(x - 1, y + 1);
            possibleOptions.push(options[x - 1][y + 1]);
        }
        var k = 1;
        while (isBlack(x - k, y + k) && isValid(x - k - 1, y + k + 1) && isEmpty(x - k - 1, y + k + 1)) {
            enableOption(x - k - 1, y + k + 1);
            possibleOptions.push(options[x - k - 1][y + k + 1]);
            k += 2;
        }
    }
    if (isValid(x + 1, y + 1)) {
        if (isEmpty(x + 1, y + 1)) {
            enableOption(x + 1, y + 1);
            possibleOptions.push(options[x + 1][y + 1]);
        }
        var k = 1;
        while (isBlack(x + k, y + k) && isValid(x + k + 1, y + k + 1) && isEmpty(x + k + 1, y + k + 1)) {
            enableOption(x + k + 1, y + k + 1);
            possibleOptions.push(options[x + k + 1][y + k + 1]);
            k += 2;
        }
    }
}

// function to toggle options when selecting a white king
function prepareWhiteKing(x, y) {
    console.log("Preparing white king");
    if (isValid(x - 1, y - 1)) {
        if (isEmpty(x - 1, y - 1)) {
            enableOption(x - 1, y - 1);
            possibleOptions.push(options[x - 1][y - 1]);
        }
        var k = 1;
        while (isBlack(x - k, y - k) && isValid(x - k - 1, y - k - 1) && isEmpty(x - k - 1, y - k - 1)) {
            enableOption(x - k - 1, y - k - 1);
            possibleOptions.push(options[x - k - 1][y - k - 1]);
            k += 2;
        }

    }
    if (isValid(x + 1, y - 1)) {
        if (isEmpty(x + 1, y - 1)) {
            enableOption(x + 1, y - 1);
            possibleOptions.push(options[x + 1][y - 1]);
        }
        var k = 1;
        while (isBlack(x + k, y - k) && isValid(x + k + 1, y - k - 1) && isEmpty(x + k + 1, y - k - 1)) {
            enableOption(x + k + 1, y - k - 1);
            possibleOptions.push(options[x + k + 1][y - k - 1]);
            k += 2;
        }
    }
    if (isValid(x - 1, y + 1)) {
        if (isEmpty(x - 1, y + 1)) {
            enableOption(x - 1, y + 1);
            possibleOptions.push(options[x - 1][y + 1]);
        }
        var k = 1;
        while (isBlack(x - k, y + k) && isValid(x - k - 1, y + k + 1) && isEmpty(x - k - 1, y + k + 1)) {
            enableOption(x - k - 1, y + k + 1);
            possibleOptions.push(options[x - k - 1][y + k + 1]);
            k += 2;
        }
    }
    if (isValid(x + 1, y + 1)) {
        if (isEmpty(x + 1, y + 1)) {
            enableOption(x + 1, y + 1);
            possibleOptions.push(options[x + 1][y + 1]);
        }
        var k = 1;
        while (isBlack(x + k, y + k) && isValid(x + k + 1, y + k + 1) && isEmpty(x + k + 1, y + k + 1)) {
            enableOption(x + k + 1, y + k + 1);
            possibleOptions.push(options[x + k + 1][y + k + 1]);
            k += 2;
        }
    }
}
//#endregion

//#region helpful checks
// function to check if coordinates are inside the board
function isValid(x, y) {
    if (x > 7 || y > 7 || x < 0 || y < 0) {
        return false;
    }
    return true;
}

// function to check if there is a figure at (X, Y)
function isEmpty(x, y) {

    return figures[x][y] == null;
}

// function to check if the figure at (X,Y) is black
function isBlack(x, y) {
    if (figures[x][y] != null) {
        return figures[x][y].color[0] == 0 && figures[x][y].color[1] == 0 && figures[x][y].color[2] == 0;
    }
    return false;
}

// function to check if the figure at (X,Y) is white
function isWhite(x, y) {
    if (figures[x][y]) {
        return (figures[x][y].color[0] == 1 && figures[x][y].color[1] == 1 && figures[x][y].color[2] == 1) || (figures[x][y].color[0] == 1/2 && figures[x][y].color[1] == 1/2 && figures[x][y].color[2] == 1);
    }
    return false;
}

// function to check if the figure at (X,Y) is blue
function isBlue(x, y) {
    if (figures[x][y]) {
        return (figures[x][y].color[0] == 1/2 && figures[x][y].color[1] == 1/2 && figures[x][y].color[2] == 1);
    }
    return false;
}

// function to check if the object is a figure
function isFigure(object) {
  // Check if the object is a king
  if (object instanceof Suica.Cone) {
    return true;
  }

  // Check if the object is a pool
  if (object instanceof Suica.Cylinder) {
    return true;
  }

  // Object is neither a king nor a pool
  return false;
}

// function to check if the object is a square
function isPossibleOption(object) {
  // Check if the object is a square indicating a possible move
  if (object instanceof Suica.Square) {
    return true;
  }

  // Object is not a possible option
  return false;
}
//#endregion
