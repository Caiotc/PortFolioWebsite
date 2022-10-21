import express  from 'express'
import resolve from 'path';

const app = express();
app.use('/',
    express.static(        
    resolve(
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
