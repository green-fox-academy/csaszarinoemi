import {test} from 'tape';
import {TestClass} from './sum';

test('', t => {

  let testArray = new TestClass([4, 6, 1, 8, 33])

  t.equal(testArray.sum(), 52)
  t.end();

})