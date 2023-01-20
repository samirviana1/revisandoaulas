"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const services_1 = require("./services");
const middlewares_1 = require("./middlewares");
const middlewares_2 = require("./middlewares");
//import  router  from "./router"
const app = (0, express_1.default)();
const port = process.env.PORT || 8081;
app.use((0, cors_1.default)());
app.use(express_1.default.json()); //router)
app.get("/users", services_1.user.searchUser);
app.get("/usersLogon/:id", middlewares_1.buscarUser, services_1.user.logUser);
app.post("/users", middlewares_1.validaUser, middlewares_1.userExiste, services_1.user.createUser);
app.post("/notes", middlewares_2.validaStickynotes, services_1.stickynotes.createStickynotes);
app.get("/notes", services_1.stickynotes.searchStickynotes);
app.get("/notes/:id", middlewares_2.stickynotesExiste, services_1.stickynotes.searchStickynotesForId);
app.put("/notes/:id", middlewares_2.stickynotesExiste, services_1.stickynotes.updateStickynotes);
app.delete("/notes/:id", middlewares_2.stickynotesExiste, services_1.stickynotes.deleteStickynotes);
app.listen(port, () => console.log("server estatus: positivo e operante!"));
