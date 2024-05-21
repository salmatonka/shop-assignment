// getting-started.js
import mongoose from"mongoose";
import config from "./app/config";
import app from "./app";


async function main() {

try{
    // console.log(config.database_url)
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
}
catch (error) {
    console.log(error);
  }
 
}
main();


