const express=require('express');
const wechat=require('wechat');

let config={
    appid:'wx25045214b4b8c3b6',
    token:'weixin'
}

let server=express();
server.listen(8080);

server.get('/',wechat(config,(req,res)=>{
    res.reply('hi ya')
}));

server.post('/',wechat(config,(req,res)=>{
    let msg=req.wexin.Content;
    if(!msg){
        res.reply('excuse me');
        return;
    }
    if(msg.indexOf('hi ya')!==-1){
        res.reply('hi bro')
    }else{
        res.reply('test')
    }
}))