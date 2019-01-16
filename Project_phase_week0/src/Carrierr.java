import java.util.ArrayList;


public class Carrierr {
  int ammoStored;
  int healthPoint;
  ArrayList<Aircraft> storedAircrafts = new ArrayList<>();



  Carrierr(int ammoStored, int healthPoint){
  this.ammoStored = ammoStored;
  this.healthPoint = healthPoint;
  }

  void add(Aircraft aircraft){
    this.storedAircrafts.add(aircraft);
  }


  void fill(){
    if(this.ammoStored == 0){
      System.out.println("Carrier is out of ammo");
    } else {
      for (Aircraft aircraft: storedAircrafts){
        if (aircraft.getIsPriority()&& this.ammoStored> 0){
          this.ammoStored = aircraft.refill(this.ammoStored);
        }
      }
      for (Aircraft aircraft:storedAircrafts){
        if (!aircraft.getIsPriority() && this.ammoStored > 0){
          this.ammoStored = aircraft.refill(this.ammoStored);
        }
      }
    }
  }

  void fight(Carrierr carrierr){
    for (Aircraft aircraft:storedAircrafts){
      carrierr.healthPoint -= aircraft.fight();
    }
  }

  int getTotalDamage(){
    int damage = 0;
    for (Aircraft aircraft:storedAircrafts){
      damage += aircraft.getAllDamage();
    }
    return damage;
  }

  String getStatus(){
    String status = "HP: " + this.healthPoint + ", Aircraft count: " + storedAircrafts.size() + ", Ammo Storage: " + this.ammoStored + ", Total Damage: " + this.getTotalDamage() + "\r\n" + "Aircrafts: ";
    for (Aircraft aircraft: storedAircrafts){
      status = status + "\r\n" + aircraft.getStatus();
    }
    return this.healthPoint > 0 ? status : "It's dead Jim :(";
  }
}
