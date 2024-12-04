import { config } from "dotenv";
import { cleanEnv, str } from "envalid";

await config({ export: true });

export default cleanEnv(Deno.env.toObject(), {
  BOT_TOKEN: "8025293689:AAFyf6smxuifoKtYeFvXhcOWiSPLBUfbJ2c",
  OWNERS: 7951987150,
  MONGO_URL: "mongodb+srv://expertreal1:LFx7Xa8fvmRTIPkM@cluster0.tza0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
});
