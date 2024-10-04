import "dotenv/config"
import express from "express"
import userRoutes from "./routes/userRoutes"
import movieRoutes from "./routes"

const app = express();

app.use(express.json());

app.use("/user", userRoutes)

app.use("/movie", movieRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}`)
});