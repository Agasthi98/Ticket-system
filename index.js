import express  from 'express';
const app = express();

import tasksRouter from'./backend/routes/userRoutes.js';

app.use(express.json());


app.use('/api', tasksRouter);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

export default app
