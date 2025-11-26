public class Item {
    private String name;
    private double quantity;

    public Item(String name, double quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString() {
        return "Item{name='" + name + "', quantity=" + quantity + "}";
    }
    
}
