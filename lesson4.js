/**
 * Created by Brandon Roy on 01/10/2016.
 */


var printNumF = function (req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text-plain' });

    for (printNumF= i = 1; i <= 20; i++) {
        res.write(i + ' /n');

        console.log(i);
    }

    res.end();

};

app.use('server', 'app');