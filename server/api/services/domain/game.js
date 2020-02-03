class Game {
  constructor(firstPlayer, secondPlayer, firstPlayerScore, secondPlayerScore) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.firstPlayerScore = firstPlayerScore;
    this.secondPlayerScore = secondPlayerScore;
  }

  getAddGameSQL() {
    let sql = `CALL resultsGame('${this.firstPlayer}','${this.secondPlayer}', ${this.firstPlayerScore}, ${this.secondPlayerScore});`;
    return sql;
  }

  static getGameByIdSQL(game_id) {
    let sql = `SELECT g.id, p1.name, p2.name, g.player1Score, g.player2Score, g.date \
                from games g \
                inner join players p1 on g.player1id = p1.id \
                inner join players p2 on g.player2id = p2.id \
                WHERE g.id = ${game_id}`;

    // select g.id, p1.name, p2.name, g.player1Score, g.player2Score, g.date
    // from games g
    // inner join players p1 on g.player1id = p1.id
    // inner join players p2 on g.player2id = p2.id
    // where g.id = 1
    return sql;
  }
}

export default Game;
