import 'reflect-metadata' // Import first
import express from 'express';
import { router } from './api/routes/routes';

const app = express();

app.use(express.json());

app.use(router);

export { app }