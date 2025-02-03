document.addEventListener("DOMContentLoaded", function () {
    let orderForm = document.getElementById("orderForm"); // Correct ID
    let orderNowBtn = document.getElementById("orderBtn"); // Correct ID
    let closeFormBtn = document.querySelector(".close"); // Correct selector

    // Ensure form is hidden on load
    orderForm.style.display = "none";

    // Show form when clicking "Order Now"
    orderNowBtn.addEventListener("click", function () {
        orderForm.style.display = "block";
    });

    // Hide form when clicking close button
    closeFormBtn.addEventListener("click", function () {
        orderForm.style.display = "none";
    });

    // Hide form when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === orderForm) {
            orderForm.style.display = "none";
        }
    });
});
