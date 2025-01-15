import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path, { dirname } from "path";
import mainRoute from "./routes/index";

dotenv.config();

const serve = express();

serve.set('view engine', 'mustache');
serve.set('views', path.join(__dirname, 'views'));
serve.engine('mustache', mustache());

serve.use(express.static(path.join(__dirname, '../public')));

//ROTAS
serve.use(mainRoute);

serve.use((req,res)=>{
    res.send("Pagina não encontrada!");
});

serve.listen(process.env.PORT);
