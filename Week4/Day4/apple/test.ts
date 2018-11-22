import {test} from 'tape';
import {TestApple} from './getApple';

test('Is it equal', t => {

  let apple = new TestApple
  
  t.equal(apple.getApple(), 'apple')
  t.end();
})