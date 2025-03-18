import app from "./app";
import { Server } from "http";

const PORT: string | number = process.env.PORT || 3000;
const NODE_ENV: string = process.env.NODE_ENV || "development";

const server: Server = app.listen(PORT, () => {
  console.log(
    `Server running in development mode on port ${PORT} in ${NODE_ENV} environment`
  );
});

export default server;
