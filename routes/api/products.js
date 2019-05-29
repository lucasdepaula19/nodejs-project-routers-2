var express = require('express');
var router = express.Router();

let prodList = { items: [] }

router.post('/', (req, res) => {
    prodList.items.push(req.body)
    console.log(prodList.items)
    res.end('Produto criado!');
});

let lista = prodList.items;

router.get('/list', function (req, res) {
    res.json(prodList);
});

router.delete('/:id', function (req, res) {
    /*let lista = prodList.items;*/
    let param_id = req.params.id;

    for (let i = 0; i < lista.length; i++) {
        if(lista[i].id == param_id){
            lista.splice(i,1);
            i--;
            res.end('Produto excluído!');
        }
    }
});

router.put('/:id', function (req, res) {
    /*let lista = prodList.items;*/
    let param_id = req.params.id;
    let param_body = req.body;
    
    for (let x = 0; x < lista.length; x++) {
        if(lista[x].id == param_id){
            lista[x].name = param_body.name;
            res.end('Produto atualizado!');
        }
    }
});

module.exports = router;