import {test} from 'tape';
import {countLetters} from './countLetters';

test('', t => {
  const testObject = {
    'a': 2,
    'l': 1,
    'm': 1,
  }
  t.plan(2)
  t.deepEqual(countLetters('alma'), testObject);
  t.notDeepEqual(countLetters('alma'), 'alma');
})