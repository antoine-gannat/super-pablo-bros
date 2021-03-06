class HTMLManager {
    // Restart screen //

    // Update the number of lives remaining on the restart screen
    updateLivesRemaining() {
        var lives_remaining_span = document.getElementById("lives_remaining");
        lives_remaining_span.innerHTML = g_game._player._lives;
        if (g_game._player._lives > 1) {
            lives_remaining_span.innerHTML += " lives remaining";
        }
        else {
            lives_remaining_span.innerHTML += " life remaining";
        }
    }

    displayRestartScreen() {
        this.updateLivesRemaining();
        document.getElementById("restart-screen").style.visibility = "visible";
    }

    hideRestartScreen() {
        document.getElementById("restart-screen").style.visibility = "hidden";
    }

    // Display the game over screen
    displayGameOverScreen() {
        document.getElementById("gameover-screen").style.visibility = "visible";
    }

    hideGameOverScreen() {
        document.getElementById("gameover-screen").style.visibility = "hidden";
    }

    // Display the victory screen

    // Update the score of the victory screen
    updateVictoryScore() {
        document.getElementById("victory-score").innerHTML = Number(g_game._player._kill_nb * 10 + g_game._player._coins * 10);
    }

    displayVictoryScreen() {
        this.updateVictoryScore();
        document.getElementById("victory-screen").style.visibility = "visible";
    }

    hideVictoryScreen() {
        document.getElementById("victory-screen").style.visibility = "hidden";
    }


    // Hide every screens
    hideAllScreens() {
        this.hideGameOverScreen();
        this.hideRestartScreen();
        this.hideVictoryScreen();
    }
}