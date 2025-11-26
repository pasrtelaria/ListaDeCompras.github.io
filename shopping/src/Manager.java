public class Manager {
    private Cart cart;

    public Manager(Cart cart) {
        this.cart = cart;
    }

    public void addItem(Item item) {
        cart.getItems().add(item);
    }

    public void removeItemByName(String name) {
        cart.getItems().removeIf(item -> item.getName().equals(name));
    }
}
