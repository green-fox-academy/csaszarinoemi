'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {

  listForBookingCode: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'J', 'H', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  getDowBooking(): string {
    return this.days[Math.floor(Math.random() * this.days.length)]
  }

  getCodeBooking(): string {
    let generatedCodeArray = [];
    let generatedCode = '';
    for (let i = 0; i <= 8; i++) {
      generatedCodeArray.push(this.listForBookingCode[Math.floor(Math.random() * this.listForBookingCode.length)]);
      generatedCode = generatedCodeArray.join('');
    } 
    return `Booking# ${generatedCode} for ${this.getDowBooking()}`;
  } 
}
let testReservations = new Reservation;
console.log(testReservations.getCodeBooking())