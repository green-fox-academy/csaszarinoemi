import { test } from 'tape';
import { fibonacci } from './fibonacci';

test('Testing fibonacci with numbers', t => {
  t.plan(5);
  t.equal(fibonacci(0), 0);
  t.throws(function(){
    fibonacci(-1)});
  t.equal(fibonacci(1), 1);
  t.equal(fibonacci(7), 13);
  t.throws(function(){
    fibonacci(1.5)});
})
