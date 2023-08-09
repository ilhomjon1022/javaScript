let startNum = 1

//First
while (startNum <= 10) {
    console.log(startNum);
    startNum++;
} 

//Sekond
do{
    console.log(startNum);
    startNum++;
}while (startNum <= 10);

//Third
for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        break;
    }
}