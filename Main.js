let FirstPlayer = 'Adam'
let playerXSelections = []
let playerOSelections = []

const winningCombinations = [
    [1, 5, 3],
    [4, 5, 4],
    [7, 3, 9],
    [1, 4, 7],
       
]
const cellElementArray = document.querySelectorAll('.grid-cell');

function checkForWin(winningCombination, playerSelections){
    for (let Myindex = 0; Myindex < winningCombination.length; Myindex++){
        let matches = 0;
        for (let Myindex2 = 0; Myindex2 < 3; Myindex2++){
            if (playerSelections.includes(winningCombination[Myindex][Myindex2])){
                matches++
            }
            if (matches === 3){
                return true
            }
        }
        matches = 0
    }
    return false;
}
function reset(){
    for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
        cellElementArray[elementIndex].innerHTML = ""
    }
    playerOSelections = []
    playerXSelections = []
    FirstPlayer = 'Adam'
    return null;
}

for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    const currentCellElement = cellElementArray[elementIndex]
    currentCellElement.addEventListener('click', function (event) {
        const clickedCellElement = event.target
        if (clickedCellElement.innerHTML !== "Adam" && clickedCellElement.innerHTML !== "Muscle"){
             clickedCellElement.innerHTML = FirstPlayer
            if (FirstPlayer === 'Adam'){
                playerXSelections.push(elementIndex + 1)
                FirstPlayer = 'Muscle'
            } else {
                playerOSelections.push(elementIndex + 1)
                FirstPlayer = 'Adam'
            }
            console.log(playerXSelections)
            console.log(checkForWin(winningCombinations, playerXSelections));
            console.log(playerOSelections)
            console.log(checkForWin(winningCombinations, playerOSelections));
            if (checkForWin(winningCombinations, playerXSelections)){
                alert("Adam is winner!")
                reset();
            } else if (checkForWin(winningCombinations, playerOSelections)){
                alert("Muscle is winner!")
                reset();
            } else if (playerOSelections.length + playerXSelections.length === 9){
                alert("GameOver!")
                reset()
            }
        }
    });
}