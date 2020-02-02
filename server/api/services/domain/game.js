class Game {
  constructor(firstPlayer, secondPlayer, firstPlayerScore, secondPlayerScore) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.firstPlayerScore = firstPlayerScore;
    this.secondPlayerScore = secondPlayerScore;
  }

  getAddGameSQL() {
    let sql = `INSERT INTO games(firstPlayer, secondPlayer, firstPlayerScore, secondPlayerScore) \
                VALUES('${this.firstPlayer}','${this.secondPlayer}',${this.firstPlayerScore},${this.secondPlayerScore})`;
    //INSERT INTO `tournament`.`games` (`firstPlayer`, `secondPlayer`, `firstPlayerScore`, `secondPlayerScore`) VALUES ('aa', 'ss', '1', '1');
    return sql;
  }

  static getGameByIdSQL(game_id) {
    let sql = `SELECT * FROM games WHERE id = ${game_id}`;
    return sql;
  }
}

export default Game;
