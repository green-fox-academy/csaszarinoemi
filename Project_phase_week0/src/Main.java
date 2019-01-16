public class Main {
  public static void main(String[] args) {
    Carrierr ferihegy = new Carrierr(300, 1000);
    Carrierr ferihegy2 = new Carrierr(100, 500);

    for (int i = 0; i < 5; i++){
      if (i % 2 == 0) {
        ferihegy.add(new F16());
      } else {
        ferihegy.add(new F35());
      }
    }

    for (int i = 0; i < 5; i++){
      if (i % 2 == 0) {
        ferihegy2.add(new F16());
      } else {
        ferihegy2.add(new F35());
      }
    }

    ferihegy.fill();
    ferihegy2.fill();

    System.out.println(ferihegy.getStatus());
    System.out.println(ferihegy2.getStatus());
    ferihegy.fight(ferihegy2);
    System.out.println(ferihegy.getStatus());
    System.out.println(ferihegy2.getStatus());

  }
}
