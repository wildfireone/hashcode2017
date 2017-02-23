/**
 * @Author: John Isaacs <john>
 * @Date:   06-Feb-172017
 * @Filename: index.js
* @Last modified by:   john
* @Last modified time: 23-Feb-172017
 */
var rows, columns, minc, cells;
var firstline = true;
var fullPizza = [];
var slices = [];
var filename;
var lineNo = 0;
var column = 0;
var row = 0; //parseInt(rows)-1;
var tcount = 0;
var mcount = 0;
var startRow =0;
var startColumn =0;
var cellcount =0;


var fs = require('fs')
    // again
process.argv.forEach(function(val, index, array) {
    filename = val;
});


var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader(filename);

lr.on('error', function(err) {
    console.log(error);
    // 'err' contains error object
});

lr.on('line', function(line) {
    processPizzaLine(line);
    // 'line' contains the current line without the trailing newline character.
});

lr.on('end', function() {
    // All lines are read, file is closed now.
    console.log(fullPizza);
    quickSolution();

    writeOutput(slices);
});






function writeOutput(slices) {
    var logger = fs.createWriteStream(filename + ".out", {
        flags: 'a' // 'a' means appending (old data will be preserved)
    });

    logger.write(slices.length.toString().trim()); // append string to your file
    logger.write("\n");
    for (var i = 0; i < slices.length; i++) {
        var str = slices[i].toString();
        str = str.replace(/,/g, '');
        logger.write(str.trim());
        logger.write("\n");
    }
    logger.end();
}

// function checkNeighbourhood(var thisPosX, var thisPosY, var current){
//   int startPosX = thisPosX;
//   int startPosY = thisPosY;
//   int endPosX =   (thisPosX + 1 > rows) ? thisPosX : thisPosX+1;
//   int endPosY =   (thisPosY + 1 > columns) ? thisPosY : thisPosY+1;
//   // See how many are alive
//   for (int rowNum=startPosX; rowNum<=endPosX; rowNum++) {
//       for (int colNum=startPosY; colNum<=endPosY; colNum++) {
//         // All the neighbors will be grid[rowNum][colNum]
//         return current == fullPizza[rowNum][colNum];
//       }
//     }
// }
