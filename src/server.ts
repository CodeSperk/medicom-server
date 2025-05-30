import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
    try{
        await mongoose.connect(config.database_url as string);

        app.listen(config.port, () => {
            console.log(`MediCom app is listening on the port ${config.port}`);
        });
    }catch(err){
        console.log(err);
    }
}

main();