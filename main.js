const request = require('request');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

app.listen(3333);

const topNew = (top) => {
  
  return ( 
    new Promise( (resolve, reject) => {
      request('https://www.rottentomatoes.com/top/bestofrt/', (err,res,body) => {
        
        const $ = cheerio.load(body);
        let frase = ` Olá o top dos filmes`;
        $('.table > tbody > tr').each(function(index){
          if (index < top){
            let position = $(this).find('td').first().text().replace('.','');
            let score = $(this).find('.tMeterScore').text().trim();
            let name  = $(this).find('.articleLink').text().trim();
          
            frase += `\n o ${position}° filme é ${name} com ${score} `;
          }
        }); 
        resolve(frase);
      });
      
    }))
};

app.get('/', async (req, res) =>{
  const top = req.query.top;

  const resposta = await topNew(top);
  return res.send(resposta);
});

