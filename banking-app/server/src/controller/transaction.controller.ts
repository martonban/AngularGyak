import { AppDataSource } from "../data-source"
import { BankTransfer } from "../entity/BankTransfer"
import { Controller } from "./base.controller"

export class TransactionController extends Controller {
    repository = AppDataSource.getRepository(BankTransfer);

    create = async(req, res) => {
        try {
          const entity = this.repository.create(req.body as object);
          delete entity.id;
          delete entity.timestamp;
          
          const entityInserted =  await this.repository.save(entity);
          res.json(entityInserted);
        } catch(err) {
          this.handleError(res, err);
        }
      };

}