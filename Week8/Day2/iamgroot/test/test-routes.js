'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint WITHOUT QUERY', (t) => {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(500)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {error: 'I am Groot!'}, 'without query test');
      t.end();
    });
});

test('TESTING GET / ENDPOINT WITH QUERY', (t) => {
  request(app)
    .get('/groot/?message=valami')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        "received": "valami",
      "translated": "I am Groot!"
    }, 'with query test');
      t.end();
    });
});

test('TESTING GET / ENDPOINT WITH QUERY', (t) => {
  request(app)
    .get('/groot/?valami=valami')
    .expect(500)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {error: 'I am Groot!'}, 'without query test');
      t.end();
    });
});