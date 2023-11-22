import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { propertyRoute } from "./routes/propertyRoute.js";
import { BrokerRoute } from "./routes/brokerRoute.js";
import { offerRoute } from "./routes/offerRoute.js";
import {adminRoute} from "./routes/adminRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});

app.use("/api/user", userRoute);
app.use("/api/property", propertyRoute);
app.use("/api/broker", BrokerRoute);
app.use("/api/offer", offerRoute);
app.use("/api/admin", adminRoute);

