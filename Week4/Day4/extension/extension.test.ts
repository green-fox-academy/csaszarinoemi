'use strict';

import { test } from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 3 and 3 is 6', function (t: any): any {
  t.equal(add(3, 3), 6);
  t.end();
});

test('add: 2 and 4 is 6', function (t: any): any {
  t.equal(add(2, 4), 6);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(2, 3, 1), 3);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 2), 4);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([8, 4, 3, 5]), 5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([9, 2, 3, 6, 5]), 5);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('A'));
  t.end();
});

test('is vowel: o', function (t: any): any {
  t.ok(isVowel('O'));
  t.end();
});

test("is vowel: o", function(t: any): any {
  t.notOk(isVowel("o"));
  t.end();
});

test('translate: sarkany', function (t: any): any {
  t.equal(translate('sarkany'), 'savarkavany');
  t.end();
});

test('translate: elme', function (t: any): any {
  t.equal(translate('elme'), 'evelmeve');
  t.end();
});