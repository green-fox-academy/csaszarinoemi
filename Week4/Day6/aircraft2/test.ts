import { Aircraft } from './aircraft2'
import { F16 } from './f16_2'
import { F35 } from './f35_2'
import { Carrier, ferihegy, ferihegy2 } from './carrierr_2'
import {test} from 'tape';


'use strict'

test('Testing refill', t => {

  let testf35 = new F35;
  t.plan(2)
  t.equal(testf35.refill(100), 88)
  t.equal(testf35.refill(2), 0)
})

