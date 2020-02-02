import l from '../../common/logger';
import db from './games.db.service';

class GamesService {
  create(game) {
    l.info(`${this.constructor.name}.create()`);
    return db.insert(game);
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }
}

export default new GamesService();
