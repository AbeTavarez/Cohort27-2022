console.log('working...');
//================ Task 1 ==============================
        // Create a function (rollDice)
        // Roll Two "dice" one for the player and one for the computer
        // Use one variables for the (player) and one for the (computer)
        // (use a random number from 1-6 to represent a dice)

        // If the player's dice roll is higher than the computer dice roll,
        // console.log("PLAYER WINS")
        // otherwise, log ("COMPUTER WINS")
        // Use a ternary to check for the winner
        // ----- After testing it, remove the console.log()
        // leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
        // FINALLY: return all three variables using an array
        // return [VALUE1, VALUE2, VALUE3]

        const rollDice = () => {
            const player = Math.ceil(Math.random() * 6)
            const computer = Math.floor(Math.random() * 6) + 1
            console.log('Player:', player);
            console.log('Computer', computer);
            // console.log(player > computer ? "PLAYER WINS" : "COMPUTER WINS")
            let winner = '';
            if (player > computer){
                winner = 'Player Wins'
            } else if (player === computer){
                winner = 'Tied'
            } else {
                winner = 'Computer Wins'
            }
           return [player, computer, winner]
        }

      // ============ Task 2 ==============================
      // Let's update our UI (User Interface)
      // Create a function (displayScore)
      // Create a new a div displaying:
      // Computer Score: , Player Score:  & the Winner:
      // so there is a running record of game data.
      // Append the new div to the parent div on the HTML.
        
      const displayScore = (results) => {
        // const results = rollDice()
        const div = document.createElement('div')
        div.innerHTML = `<p>Computer Score: ${results[1]},</p>
        <p>Player Score: ${results[0]},</p><p>Winner: ${results[2]}</p>`
        const winnerDiv = document.querySelector('#winner')
        winnerDiv.appendChild(div)
        console.log(div);
      }

      const resetBtn = document.querySelector('#reset')
      const playGameBtn = document.querySelector('#play-game')

      // Create a Reset Function (resetGame)
      // REMOVE the div with the game score, leaving just the parent div
      // creating a clean slate for a new set of games :)
      const resetGame = () => {
        // console.log(document.querySelector('#winner').firstElementChild)
        document.querySelector('#winner').firstElementChild.remove()
      }

      // ==== Final Step =====================
      // Create a new function (playGame):
      // Call the rollDice and the displayScore function inside this function

      const playGame = () => {
        const results = rollDice() // gets the array
        displayScore(results)
      }

      // ========= Don't forget to add your events listeners
      // Attach the (playGame) function to the play game button
      // Attach the (resetGame) function to the reset button
      resetBtn.addEventListener('click', resetGame)
      playGameBtn.addEventListener('click', displayScore)

      // ===== Now let's host this game in GITHUB PAGES and style it !!!