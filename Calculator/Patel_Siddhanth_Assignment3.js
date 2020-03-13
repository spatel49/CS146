/**
 * Resets the state of the calculator and the display
 */
 var result;
 var currentOp;
 var buffer;
 setDisplay('0');
function resetCalc() {
   // implement
   result=0;
   currentOp='';
   buffer=0;
   setDisplay(0);
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
document.getElementById("output").innerHTML = str;
   // implement
   
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
return result;
   // implement

   }

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
     //string concatenation
    result = result.toString();
    result = result + num;

    //turns result into an integer
    result = parseInt(result, 10);

    //result must be within -999999999 and 999999999
    result = Math.min(999999999, Math.max(-999999999, result));

    setDisplay(result);
   // implement
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
  if (buffer === 0) { //if operation not pressed previously
    buffer = result;
    result = 0;
    currentOp = op;
    setDisplay(result);}
    else { //if operation was already pressed, only change operation
        currentOp = op;}}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
 if (currentOp === '+') { //add
        result = result + buffer;
    }
    if (currentOp === '-') { //subtract
        result = buffer - result;
    }
    if (currentOp === '*') { //multiply
        result = result*buffer;
    }
    if (currentOp === '/') { //divide
        if (result === 0) { //ERROR, if dividing by 0
            setDisplay('ERROR');
            return;
        }
        result = Math.floor(buffer/result); //result contains no decimals
    }
    result = Math.min(999999999, Math.max(-999999999, result)); //result must be in range
    setDisplay(result);
}