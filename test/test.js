const expect = require('chai').expect;
const request = require('request');

it('should return a status code of 200', function(done) {
    request('http://localhost:3001/api/products', function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
});

it('should return an object', function(done) {
    request ('http://localhost:3001/api/contacts', function(err, res, body) {
        expect(res).to.be.a('object');
        done();
    });
});

it('should be null', function(done) {
    request ('http://localhost:3001/api/productprice/lowprice', function(err, res, body) {
        expect(err).to.be.a('null');
        done();
    });
});

it('should not be a array', function(done) {
    request ('http://localhost:3001/api/productfilter/telescopes', function(err, res, body) {
        expect(body).to.not.be.a('array');
        done();
    });
});