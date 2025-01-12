document.addEventListener("DOMContentLoaded", () => {
    const cart = [];

    function updateCart() {
        console.log("Current Cart:", cart);
        alert("Items in Cart: \n" + cart.join("\n"));
    }

    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const item = button.getAttribute("data-item");
            cart.push(item);
            alert(`${item} has been added to your cart!`);
            updateCart();
        });
    });
});
