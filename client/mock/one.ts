import { Request, Response } from 'express';

const getOne = (req: Request, res: Response) => {
  res.json({
    data: '调取成功',
  });
};

export default {
  'POST /api/getOne': getOne,
};
