import l from '../../../common/logger';
import GamesService from '../../services/games.service';

export class Controller {
  create(req, res) {
    GamesService.create(req.body)
      .then(r => {
        res
          .status(201)
          .location(`/api/v1/games/${r.id}`)
          .json(r);
      })
      .catch(e => l.info(`${this.constructor.name}.create: ${e}`));
  }

  all(req, res) {
    GamesService.all().then(r => res.json(r));
  }

  byId(req, res) {
    GamesService.byId(req.params.id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }
}
export default new Controller();
