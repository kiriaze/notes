var example1 = [
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
];

var example2 = [
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8],
    [4, 6, 2, 9, 3],
];

function carrots(m) {
    var currentCoordinates = getStartingPoint(m);

    var result = m[currentCoordinates.row][currentCoordinates.column];
    var nextOptions = calculateOptions();

    while (nextOptions.length) {
        var next = nextOptions.reduce((total, n) => total.carrots >= n.carrots ? total : n, nextOptions[0]);
        result += next.carrots;
        currentCoordinates.row = next.row;
        currentCoordinates.column = next.column;
        nextOptions = calculateOptions();
    }

    return result;
}

function calculateOptions(currentCoordinates, m) {
    var result = [];
    // top
    if (currentCoordinates.row && m[currentCoordinates.row - 1][currentCoordinates.column]) {
        result.push({
            row: currentCoordinates.row - 1,
            column: currentCoordinates.column,
            carrots: m[currentCoordinates.row - 1][currentCoordinates.column],
        });
    }

    // bottom
    if (currentCoordinates.row < m.length - 1 && m[currentCoordinates.row + 1][currentCoordinates.column]) {
        result.push({
            row: currentCoordinates.row + 1,
            column: currentCoordinates.column,
            carrots: m[currentCoordinates.row + 1][currentCoordinates.column],
        });
    }

    // left
    if (currentCoordinates.column && m[currentCoordinates.row][currentCoordinates.column - 1]) {
        result.push({
            row: currentCoordinates.row,
            column: currentCoordinates.column - 1,
            carrots: m[currentCoordinates.row][currentCoordinates.column - 1],
        });
    }

    // right
    if (currentCoordinates.column < m[0].length - 1 && m[currentCoordinates.row][currentCoordinates.column + 1]) {
        result.push({
            row: currentCoordinates.row,
            column: currentCoordinates.column + 1,
            carrots: m[currentCoordinates.row][currentCoordinates.column + 1],
        });
    }

    return result;
}

function getStartingPoint(m) {
    var result = {
        row: 0,
        column: 0,
    };

    var hasMiddleRow = m.length % 2 !== 0;
    var hasMiddleColumn = m[0].length % 2 !== 0;

    if (hasMiddleRow && hasMiddleColumn) {
        result.row = Math.ceil(m.length / 2);
        result.column = Math.ceil(m[0].length / 2);
    }
    else if (!hasMiddleRow && !hasMiddleColumn) {
        var possibleStartingPoints = [
            {
                row: m.length / 2,
                column: m[0].length / 2,
                carrots: m[m.length / 2][m[0].length / 2],
            },
            {
                row: (m.length / 2) - 1,
                column: m[0].length / 2,
                carrots: m[(m.length / 2) - 1][m[0].length / 2],
            },
            {
                row: m.length / 2,
                column: (m[0].length / 2) - 1,
                carrots: m[m.length / 2][(m[0].length / 2) - 1],
            },
            {
                row: (m.length / 2) - 1,
                column: (m[0].length / 2) - 1,
                carrots: m[(m.length / 2) - 1][(m[0].length / 2) - 1],
            },
        ];
        
        var max = possibleStartingPoints.reduce((total, n) => 
                total.carrots >= n.carrots ? total : n, possibleStartingPoints[0]);
        
        result.row = max.row;
        result.column = max.column;
    }
    else {
        if (hasMiddleRow) {
            result.row = Math.ceil(m.length / 2);
            result.column = m[result.row][(m[0].length + 1) / 2] > m[result.row][(m[0].length - 1) / 2] 
                ? (m[0].length + 1) / 2 
                : (m[0].length - 1) / 2;
        }
        else { // hasMiddleColumn
            result.column = Math.ceil(m[0].length / 2);
            result.row = m[(m.length + 1) / 2][result.column] > m[(m.length - 1) / 2][result.column]
                ? (m.length + 1) / 2
                : (m.length - 1) / 2;
        }
    }
}

var result1 = carrots(example1);
var result2 = carrots(example2);

console.log('result1: ', result1);
console.log('result2: ', result2);
