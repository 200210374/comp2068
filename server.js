/**
 * Created by Brandon Roy on 01/10/2016.
 */

var connect = require('connect');


var url = require('url');
var accounting = require('accounting');

var app = connect();
var hello = function(req, res, next) {
    res.end('Hello world');
};

var goodbye = function(req, res, next) {
    res.end('Goodbye world');
};

var generic = function(req, res, next) {
}

var calculateTax = function(req, res, next) {
    var qs = url.parse(req.url, true).query;
    var subTotal = qs.subtotal;
    var tax = parseFloat(subTotal) * 0.14;
    var total = tax + parseFloat(subTotal);


    res.end('SubTotal: ' + accounting.formatMoney(subTotal) + '/n' +
            'Tax: ' + accounting.formatMoney(tax) + '/n' +
            'Total: ' + accounting.formatMoney(total));
};
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/calculatetax', calculateTax);
app.use(generic);
app.listen(3000);
console.log('Port 3000 connected');
