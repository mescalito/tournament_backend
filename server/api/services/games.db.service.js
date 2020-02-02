import l from '../../common/logger';
import db from '../../config/dbconfig';
import Game from './domain/game';
import util from 'util';

class GamesDatabase {
  constructor() {
    this._data = [];
  }

  insert(data) {
    let game = new Game(
      data.firstPlayer,
      data.secondPlayer,
      data.firstPlayerScore,
      data.secondPlayerScore
    );

    /*
    let dbQueryPromise = (...args) => {
      return new Promise((resolve, reject) => {
        db.query(...args, (err, newGame) => {
          if (err) return reject(err);
          resolve(newGame);
        });
      });
    };
    */
    const dbQueryPromise = util.promisify(db.query);
    return Promise.resolve(
      dbQueryPromise(game.getAddGameSQL())
        .then(newGame => {
          return newGame.insertId;
        })
        .then(insertId => {
          return dbQueryPromise(Game.getGameByIdSQL(insertId))
            .then(newGameData => {
              this._data.push(newGameData[0]);
              return newGameData[0];
            })
            .catch(e =>
              l.info(
                `${this.constructor.name}.dbQueryPromise().getGameByIdSQL: ${e}`
              )
            );
        })
        .catch(e =>
          l.info(
            `${this.constructor.name}.dbQueryPromise().getAddGameSQL: ${e}`
          )
        )
    );
  }
}

export default new GamesDatabase();
