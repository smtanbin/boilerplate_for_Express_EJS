import { MODULE_CONST } from "./src/app/script/test_module"
import * as express from "express"
import { resolve } from "path"

var app = express()
app.set("view engine", "ejs")
app.set("views", resolve(__dirname, "./src/app/view"))

app.get("/", function (req, res) {
  res.send("Hello world!")
})

app.get("/test-module", function (req, res) {
  res.send(MODULE_CONST)
})

app.get("/template", function (req, res) {
  res.render("template")
})

app.listen(3000)
