import { Client, Context } from "@aragon/sdk-client";

const ctx = new Context();
const client = new Client(ctx);

client.methods.getDaos({}).then((daos) => {
  console.log(daos);
});
