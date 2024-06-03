–- I node.js använder man callback-funktioner hela tiden.
-- Det är viktigt att använda oss av asynk och då använder man readFile()
-- för att använda oss av asynk så skriver man på så sätt med 3-argument

fs.readFile('./files/start.txt', 'utf-8', (error, data) => {
    if(error){
    return console.error(error)
    }else{
        console.log(data);
        
    }
});


** Denna kod komer att köras först
console.log('Reading file');