import logger from "morgan";
import express from "express";

const app = express();
const PORT = 4000;
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello World from home");
const handleProfile = (req, res) => res.send("You are on my profile");
app.use(logger("dev"));
app.listen(PORT, handleListening);
app.get("/profile", handleProfile);
app.get("/", handleHome);