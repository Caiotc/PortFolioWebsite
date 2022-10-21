import express  from 'express'
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use('/',
    express.static(        
    path.resolve(
        __dirname,
        './dist'
    )
));

app
    .listen(process.env.PORT ||  3000,(err)=>{
        console.log("!@# process env PORTA",process.env.PORT);
        if(err){
        return console.log(err);
    }
    console.log('Tudo funciona');
})
