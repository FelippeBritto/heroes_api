import { app } from "./app";
import { application } from './common/config/configuration';

const PORT = process.env.PORT || application.port;

app.listen(PORT, ()=> console.log(`Server running at port ${PORT}`));