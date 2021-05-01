var fs = require('fs');

const lerArquivo = arquivo => {
    return new Promise((resolve, reject) => {
        fs.readFile(arquivo, 'utf8', (err, contents) => {
            if (err) 
                reject(err);
            else
            resolve(contents);
        });
    })
}

const init = async() => {
const contents1 = await lerArquivo("teste.txt");
const contents2 = await lerArquivo("teste2.txt");
const contents3 = await lerArquivo("teste3.txt");
const contents4 = await lerArquivo("teste4.txt");

console.log(contents1);
console.log(contents2);
console.log(contents3);
console.log(contents4);
}

init();