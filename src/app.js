const express = require("express");
const companyRoutes = require("./routes/companyRouter");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("express").json();

const app = express();
app.use(bodyParser);

app.use("/api/companies", companyRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
