import oExpress from "express";
let app = oExpress();
const PORT = 3008;

//uppgift 1
app.get("/sum/:number1", (request, response) => {
    //example how to test http://localhost:3008/sum/3?number2=4
    //example how to test http://localhost:3008/sum/2?number2=7
    let number1 = parseInt(request.params.number1);
    let number2 = parseInt(request.query.number2);
    let sum = number1 + number2;
    response.send(`Sum of: ${number1} + ${number2} = ${sum}`);
});

//uppgift 2
app.get("/power/:baseNumber", (request, response) => {
    //example how to test http://localhost:3008/power/3?exponentNumber=4
    //example how to test http://localhost:3008/power/2?exponentNumber=7
    let baseNumber = parseInt(request.params.baseNumber);
    let exponentNumber = parseInt(request.query.exponentNumber);
    let result = Math.pow(baseNumber, exponentNumber);
    response.send(`Power of: ${baseNumber}^${exponentNumber} = ${result}`);
});

//uppgift 3
const textTable = [
    ["komediText1", "komediText2", "komediText3"],
    ["poemText1", "poemText2", "poemText3"],
    ["songText1", "songText2", "songText3"]
];

app.get("/getText/:textTableRow", (request, response) => {
    //example how to test http://localhost:3008/getText/2?textTableColumn=2
    //example how to test http://localhost:3008/getText/2?textTableColumn=2
    let textTableRow = parseInt(request.params.textTableRow);
    let textTableColumn = parseInt(request.query.textTableColumn);
    let textFromTable = textTable[textTableRow][textTableColumn];
    response.send(`Text from textTable: [${textTableRow}, ${textTableColumn}] = ${textFromTable}`);
});

app.listen(PORT, () => {
    //console.log(`Server is running on port ${PORT}. localhost:${PORT}`)
    console.log(`Server is running on port ${PORT}. http://localhost:${PORT}`);
});
