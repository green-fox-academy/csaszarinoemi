public class Aircraft {
  protected int ammoMax;
  protected int currentAmo = 0;
  protected int baseDamage;
  protected boolean isPriority;

  Aircraft(int ammoMax, int baseDamage, boolean isPriority) {
    this.isPriority = isPriority;
    this.ammoMax = ammoMax;
    this.baseDamage = baseDamage;
  }

  int fight(){
    this.currentAmo=0;
    return this.baseDamage* this.currentAmo;
  }

  int refill(int input){
    int missingAmo = 0;
    int remainingAmmo = 0;
    if (input + this.currentAmo > this.ammoMax){
      missingAmo = this.ammoMax - this.currentAmo;
      this.currentAmo = this.ammoMax;
      remainingAmmo = input - missingAmo;
    } else {
      this.currentAmo += input;
      remainingAmmo = input - missingAmo;
    } return missingAmo;

  }

  String getType(){
    return this.getClass().getName();
  }

  int getCurrentAmo(){
    return this.currentAmo;
  }

  int getBaseDamage(){
    return this.baseDamage;
  }

  int getAllDamage(){
    return this.currentAmo*this.baseDamage;
  }

  boolean getIsPriority(){
    return this.isPriority;
  }

  String getStatus(){
    return "Type " + this.getType() + ", Ammo" + this.getCurrentAmo() +", Base Damage: " + this.getBaseDamage() + ", All Damage: " + this.getAllDamage();
  }
}

