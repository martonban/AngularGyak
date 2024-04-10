import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class Controller {
  repository = AppDataSource.getRepository(User);

  getAll = async(req, res) => {
    try {
      const entities = await this.repository.find();
      res.json(entities);
    } catch(err) {
      this.handleError(res, err);
    }
  };

  getOne = async(req, res) => {
    try {
      const id = req.params.id;
      const entity = await this.repository.findOneBy({id: id});

      if(!entity) {
        return this.handleError(res, null, 404, 'Entity is not found.');
      }
      res.json(entity);
    } catch(err) {
      this.handleError(res, err);
    }
  };

  create = async(req, res) => {
    try {
      const entity = this.repository.create(req.body as object);
      delete entity.id;

      const entityInserted =  await this.repository.save(entity);
      res.json(entityInserted);
    } catch(err) {
      this.handleError(res, err);
    }
  };

  update = async(req, res) => {
    try {
      // TODO
    } catch(err) {
      this.handleError(res, err);
    }
  };

  delete = async(req, res) => {
    try {
      // TODO
    } catch(err) {
      this.handleError(res, err);
    }
  };



  handleError = (res, err, status = 500, message = 'Internal server error') => {
    if(err) {
      console.error(err);
    }

    res.status(status).json({error: message});
  };

}
