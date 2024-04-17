import express, { Express } from "express";

import mongoose from "mongoose";

import filmRouter from "./routes/film";
const mongo = mongoose;
mongo.connect(`mongodb+srv://kenuhn:test@crudtp.wceh81t.mongodb.net/`);

const app: Express = express();

const PORT = 3001;

app.use(express.json());

/* app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
}); */

/* app.use("/api/livres", livreRoutes); */

app.use("/api/v1/film", filmRouter);
/* app.use("/api/v1/realisateur", realisateurRouter); */

app.listen(PORT, () => {
  console.log(`Server running on port  ${PORT}`);
});
