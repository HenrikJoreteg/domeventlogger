var bundle = require('browserify')(),
    fs = require('fs');


bundle.add('./domeventlogger');
bundle.bundle({standalone: 'domEventLogger'}).pipe(fs.createWriteStream('domeventlogger.bundle.js'));
