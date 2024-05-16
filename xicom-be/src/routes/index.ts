import { Request, Response, Router } from 'express';
import { addCandidateFn, deleteCandidateFn, getCandidatesFn, updateCandidateFn } from '../controllers/candidates';

const route = Router();


const getTimeOfDay = (): string => {
  const currentTime = new Date().getHours();
  if (currentTime < 12) {
    return 'Good morning';
  } else if (currentTime < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};

route.get('/', (req: Request, res: Response) => {
  const greeting = getTimeOfDay();
  res.status(200).json(`${greeting}, Welcome to the Xicon MERN Stack Task!`);
});

route.get('/candidates', getCandidatesFn);
route.post('/candidates', addCandidateFn);
route.put('/candidates', updateCandidateFn);
route.delete('/candidates', deleteCandidateFn);

export default route;
