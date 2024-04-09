import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import motorcycle.Ammunition;

public class Motorcyclist {
    private List<Ammunition> ammunitionList = new ArrayList<>();

    public void addAmmunition(Ammunition ammunition) {
        ammunitionList.add(ammunition);
    }

    public void removeAmmunition(Ammunition ammunition) {
        ammunitionList.remove(ammunition);
    }

    public double calculateTotalPrice() {
        double totalPrice = 0;
        for (Ammunition ammunition : ammunitionList) {
            totalPrice += ammunition.getPrice();
        }
        return totalPrice;
    }

    public void sortByWeight() {
        Collections.sort(ammunitionList, (a1, a2) -> Double.compare(a1.getWeight(), a2.getWeight()));
    }

    public List<Ammunition> findAmmunitionByPriceRange(double minPrice, double maxPrice) {
        List<Ammunition> result = new ArrayList<>();
        for (Ammunition ammunition : ammunitionList) {
            if (ammunition.getPrice() >= minPrice && ammunition.getPrice() <= maxPrice) {
                result.add(ammunition);
            }
        }
        return result;
    }
}
