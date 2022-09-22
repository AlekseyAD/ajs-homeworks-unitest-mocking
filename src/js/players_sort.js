export default function sortPlayers(players) {
    return players.sort((a, b) => b.health - a.health);
  }