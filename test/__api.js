var expect = require('expect');
var server = require('../src/server.js');
var request = require('supertest');


describe('API', function() {

    beforeEach(function (){
        server = require('../src/server.js');
    });

    afterEach(function(){
        server.close();
    });

    it('/ should return specified object', function testHealth(done) {
       request(server)
        .get('/api/')
        .set('Accept', 'application/json')
        .expect(200, done)

    });
    it('/ should return specified healthy:true', function testHealth(done) {
        request(server)
            .get('/api/status')
            .set('Accept', 'application/json')
            .expect(200, done)

    });
  });


