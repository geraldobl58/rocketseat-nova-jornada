import { Request, Response } from 'express';
import  createUser from './services/CreateUser';

export function helloWord(request: Request, response: Response) {
  const user = createUser({ 
    email: 'john@email.com', 
    password: '123345',
    techs: ['Node.js', 'ReactJS', 'React Native', { title: 'Javascript', experience: 100 }],
  });

  return response.json({ message: 'Heelo World' });
}