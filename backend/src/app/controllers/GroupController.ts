import { Request, Response } from 'express';
import { Group } from 'app/models/Group';
import { Exception } from 'app/utilities';

class GroupController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { name } = req.body;

      const groupExists = await Group.findOne({ where: { name } });
      if (groupExists) throw new Exception('Groupo já cadastrado', 400);

      const groupToCreate = new Group();
      Object.assign(groupToCreate, req.body);
      await groupToCreate.save();

      return res.json(groupToCreate);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async update(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { name, description, image } = req.body

      const groupToUpdate = await Group.findOne({ where: { id } });
      if (!groupToUpdate) throw new Exception('Grupo não encontrado', 400);

      groupToUpdate.name = name;
      groupToUpdate.description = description;
      groupToUpdate.image = image;
      await groupToUpdate.save();

      return res.json(groupToUpdate);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async find(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const groupToFind = await Group.findOne({ where: { id } });
      if (!groupToFind) throw new Exception('Grupo não encontrado', 400);

      return res.json(groupToFind);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async delete(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const groupToDelete = await Group.findOne({ where: { id } });
      if (!groupToDelete) throw new Exception('Grupo não encontrado', 400);

      const isDeleted = await groupToDelete.remove();
      if (!isDeleted) throw new Exception('Falha ao remover grupo', 500);

      return res.json({ message: 'Grupo deletado com sucesso' })
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }
}

export default new GroupController();