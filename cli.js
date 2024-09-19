#!/usr/bin/env/ node
const {Command} = require('commander');
const fs = require('fs');
const program =new Command();
program
    .name("my_cli_tool")
    .description("a simple cli tool example")
    .version("1.0.0");

program
    .command("fileName <name>")
    .description("couting the number of words in a file")
    .action((name)=>{
        fs.readFile(name,"utf-8",(err,data)=>{
            let numWords=0;
            for(let i=0;i<data.length;i++){
                if(data[i]==" "){
                    numWords++;
                }
            }
            console.log(numWords+1);
        });
        
    })

program.parse(process.argv);
