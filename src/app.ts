import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api', router);

app.use(globalErrorHandler);
//Not Found

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(notFound);
export default app;
