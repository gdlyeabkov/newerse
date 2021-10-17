const axios = require('axios')
const express = require('express')
const path = require('path')
const app = express()
const serveStatic = require('serve-static')

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get('/data', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    axios.get(`https://serpapi.com/search.json?q=${req.query.title}&tbm=isch&ijn=0&api_key=40b83165cf64850ef67c706e34f3351c5d37fc9c9e2ad8f1b9fac993cf96b949`).then(response => {
        return res.json({ source: response.data.suggested_searches[0].thumbnail, error: "none" })
    }).catch(e => {
        return res.json({ source: 'https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400', error: "error" })
    })
})

app.get('/data/item', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    axios.get(`https://serpapi.com/search.json?q=${req.query.title}&tbm=isch&ijn=0&api_key=40b83165cf64850ef67c706e34f3351c5d37fc9c9e2ad8f1b9fac993cf96b949`).then(response => {
        return res.json({ source: response.data.suggested_searches[Number(req.query.index)].thumbnail, error: "none" })
    }).catch(e => {
        return res.json({ source: 'https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400', error: "error" })
    })
})

app.get('**', (req, res) => {
    return res.redirect(`/?redirectroute=${req.path}`)
})

const port = process.env.PORT || 8080 
// const port = 4000

app.listen(port)