let gameStart = confirm("Let's start a Snake, Water & Gun game?");

if (gameStart) {

  let playerName = prompt("What's your Name?", "Owais");
  let chances = 0;

  let playerSC = 0;
  let matchTie = 0;
  let newLine = "\r\n"

  alert(`
    'S' means 'Snake'. ${newLine}
    'W' means 'Water'. ${newLine} 
    'G' means 'Gun'.`)

  let s = "S";
  let w = "W";
  let g = "G";

  const gameCharacters = 'SWG';

  while (chances < 10) {


    function generateCharacterForComp(length) {
      let resultComp = ' ';
      const charactersLengthComp = gameCharacters.length;
      for (let i = 0; i < length; i++) {
        resultComp = gameCharacters.charAt(Math.floor(Math.random() * charactersLengthComp));
      }

      return resultComp;
    }

    const computer = generateCharacterForComp(1);
    console.log(computer);

    //Player Two
    function generateCharacterForP2(length) {
      let resultP2 = ' ';
      const charactersLengthP2 = gameCharacters.length;
      for (let i = 0; i < length; i++) {
        resultP2 = gameCharacters.charAt(Math.floor(Math.random() * charactersLengthP2));
      }

      return resultP2;
    }

    const playerTwo = generateCharacterForP2(1);
    console.log(playerTwo);

    // console.log(resultP2)
    alert(`Computer have a ${computer} and ${playerName} have a ${playerTwo} `)

    if (computer.localeCompare(s) == 0 && playerTwo.localeCompare(w) == 0) {
      alert("So, The Computer has WON!")
    } else
      if (computer.localeCompare(w) == 0 && playerTwo.localeCompare(g) == 0) {
        alert("So, The Computer has WON!")
      } else
        if (computer.localeCompare(g) == 0 && playerTwo.localeCompare(s) == 0) {
          alert("So, The Computer has WON!")
        } else
          if (computer === playerTwo || playerTwo === computer) {
            alert("So, The Match has been Tied")
            matchTie++;
          }
          else {
            alert(`So, The ${playerName} has WON!`)
            playerSC++;
          }
    chances++;
  }

  let compWon = 10 - (matchTie + playerSC);

  let playerScCalc = playerSC * 10
  alert(`${playerName} you have won ${playerSC} times.${newLine}
       The match has tied ${matchTie} times.${newLine}
       Computer has won ${compWon} times.${newLine}
       So, Your SCORE is ${playerScCalc}`);


} else {
  alert("As you wish")
}
