 // Problem 4: Leaderboard Filter
function getTopScorers(playerList) {

    // Filter players with score > 8
    const topPlayers = playerList
        .filter(player => player.score > 8)
        .map(player => player.name) 
        .join(", ");                

    return topPlayers;
}