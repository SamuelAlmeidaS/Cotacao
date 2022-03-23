const request = require('request');

const coins = 'USD-BRL,EUR-BRL,BCT-BRL';

const options = {
    url: `https://economia.awesomeapi.com.br/last/${coins}`,
    method: 'GET',
    header: {
        'Accept':'aplication/json',
        'Accept-Charset': 'utf-8'
    }
}