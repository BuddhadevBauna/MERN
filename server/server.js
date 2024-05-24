import 'dotenv/config';
import express from "express";
import authRoute from "./router/auth-router.js";
import contactRoute from "./router/contact-router.js";
import connectDB from "./utils/db.js";
import errorMiddleware from "./middleware/error-middleware.js";
import cors from "cors";


const app = express();

//middleware
//handaling cors poicy issue
//(that create when client request to server in differnt route(differnt route of client and server))
var corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}
app.use(cors(corsOptions));
//for use request body data as json
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

