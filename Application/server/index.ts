import express from 'express';
import apiRoutes from './routes';

const app = express();
const port = process.env.PORT || 3069;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});