const fs = require('fs');
const mkdirp = require('mkdirp');

(function main() {
    // Создаем логи
    mkdirp('dist/logs', function (err) {
        if (err) {
            console.log(err);
        }
        // Создаем необходимые файлы
        for (let fileName of ['debug', 'error', 'info', 'warn']) {
            fs.writeFile(`dist/logs/${fileName}.log`, "", function (err) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log(`dist/logs/${fileName}.log - OK`);
                }
            });
        }
    });
})();
