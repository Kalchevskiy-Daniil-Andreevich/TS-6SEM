import java.util.List;

import motorcycle.Ammunition;
import motorcycle.Gloves;
import motorcycle.Helmet;

public class Main {
    public static void main(String[] args) {
        Motorcyclist motorcyclist = new Motorcyclist();

        motorcyclist.addAmmunition(new Helmet("Helmet A", 100, 1.5));
        motorcyclist.addAmmunition(new Gloves("Gloves B", 50, 0.5));

        double totalPrice = motorcyclist.calculateTotalPrice();
        System.out.println("Total cost of ammunition: " + totalPrice);

        motorcyclist.sortByWeight();
        System.out.println("Ammunition after sorting by weight:");
        List<Ammunition> sortedList = motorcyclist.findAmmunitionByPriceRange(50, 150);
        for (Ammunition ammunition : sortedList) {
            System.out.println(
                    ammunition.getName() + " - Price: " + ammunition.getPrice() + ", Weight: "
                            + ammunition.getWeight());
        }
    }
}
