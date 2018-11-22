import {test} from 'tape';
import {anagram} from './anagram';

test('', t =>{
  t.plan(2)
  t.ok(anagram('Alma', 'lama'), true, 'This should be true');
  t.ok(anagram('Alma', 'körte'), false, 'This should be false');
})