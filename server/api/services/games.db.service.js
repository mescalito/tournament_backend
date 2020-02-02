class GamesDatabase {
  constructor() {
    this._data = [];
    this._counter = 0;

    this.insert('game 0');
    this.insert('game 1');
  }

  insert(game) {
    const record = {
      id: this._counter,
      ...game,
    };

    this._counter += 1;
    this._data.push(record);

    return Promise.resolve(record);
  }
}

export default new GamesDatabase();
