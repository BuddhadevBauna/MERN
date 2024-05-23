import express from "express";
import authRoute from "./router/auth-router.js";
import contactRoute from "./router/contact-router.js";
import connectDB from "./utils/db.js";
import errorMiddleware from "./middleware/error-middleware.js";

const app = express();

//middleware
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);

app.use(errorMiddleware);

connectDB().then(() => {
    const port = 8080;
    app.listen(port, () => {
        console.log(`server is running apt port ${port}...`);
    })
})

