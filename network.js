import { Router } from "express";
import { index, cliente,producto } from "./controller.js"

const rou = Router();

rou.route("/").get(index)
rou.route("/cliente").get(cliente)
rou.route("/producto").get(producto)
export default rou