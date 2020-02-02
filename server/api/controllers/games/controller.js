import l from '../../../common/logger';
import GamesService from '../../services/games.service';

export class Controller {
  create(req, res) {
    l.info(JSON.stringify(req.body));
    GamesService.create(req.body).then(r =>
      res
        .status(201)
        .location(`/api/v1/games/${r.id}`)
        .json(r)
    );
  }
}
export default new Controller();
