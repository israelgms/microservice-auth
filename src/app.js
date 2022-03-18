import express from "express";
import cors from "cors";
import routes from "./routes.js"
import "./database/index.js"

class App {
    constructor() {
        this.server = express();   
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
        this.server.use(cors())
    }
    routes() {
        this.server.use(routes)
    }
}

export default App;
// export default new App().server;