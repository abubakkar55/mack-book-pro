// DOM Selection
const memoryDefault = document.getElementById("memory-default");
const memoryOne = document.getElementById("memory-one");
const storageDefault = document.getElementById("storage-default");
const storageOne = document.getElementById("storage-one");
const storageTwo = document.getElementById("storage-two");
const deliveryDefault = document.getElementById("delivery-default");
const deliveryOne = document.getElementById("delivery-one");
const mackPrice = document.getElementById("mack-price");
const memoryPrice = document.getElementById("memory-price");
const storagePrice = document.getElementById("storage-price");
const deliveryPrice = document.getElementById("delivery-price");
const totalPrice = document.getElementById("total-price");
const promoCode = document.getElementById("promo-code");
const submitCode = document.getElementById("submit-code");
const overallTotal = document.getElementById("overall-total");
const error = document.getElementById("error");

// common function for Memory, Storage Price & Delivery Charge 
function common(btn, costField, price, isDefault) {
    btn.addEventListener("click", function () {
        if (isDefault == true) {
            costField.innerText = price;
        } else if (isDefault == false) {
            costField.innerText = price;
        } else if (isDefault == "third") {
            costField.innerText = price;
        }
        const total = parseFloat(mackPrice.innerText) + parseFloat(memoryPrice.innerText) + parseFloat(storagePrice.innerText) + parseFloat(deliveryPrice.innerText)
        totalPrice.innerText = total;
        overallTotal.innerText = total;
    });
}

// calling for Memory
common(memoryDefault, memoryPrice, 0, true);
common(memoryOne, memoryPrice, 180, false);

// calling for Storage
common(storageDefault, storagePrice, 0, true);
common(storageOne, storagePrice, 100, false);
common(storageTwo, storagePrice, 180, "third");

// calling for Delivery
common(deliveryDefault, deliveryPrice, 0, true);
common(deliveryOne, deliveryPrice, 20, false);

// Apply promo coupon code with validation
submitCode.addEventListener("click", function () {
    if (promoCode.value == "stevekaku" && isNaN(promoCode.value)) {
        const percentage = (20 / 100) * parseFloat(overallTotal.innerText);
        overallTotal.innerText -= percentage;
        //validation
        error.style.visibility = "hidden";

        // disabled the Apply btn if user code is true. as if he couldn't try again.
        submitCode.disabled = true;

    } else if (promoCode.value == "" || promoCode.value != "stevekaku") {
        //validation
        error.style.visibility = "visible";
    }

    // clear the input field
    promoCode.value = "";
});