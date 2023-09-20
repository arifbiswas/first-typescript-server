import express, { Application} from 'express';
import cors from "cors";
import userRoute from "./app/modules/user/user.route"



const app : Application = express()

// using cors 
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({extended : true})); 

// routing 
app.use('/api/v1/user', userRoute)

export default app;