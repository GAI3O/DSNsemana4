// En app.js se va a instaciar exprees
import express from "express";
// import user from "./user/network.js";
import network from "./network.js";

// por ende por ahora esta archivo solo va a exportar app
export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", network);
app.use("/cliente", network);
app.use("/producto", network);