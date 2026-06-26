const products = [

    // کاسه‌ها
    {
        id: 1,
        name: "کاسه چوبی 1",
        price: 2800000,
        image: "image/bowl1.jpg"
    },

    {
        id: 2,
        name: "کاسه چوبی 2",
        price: 2500000,
        image: "image/bowl2.jpg"
    },

    {
        id: 3,
        name: "کاسه چوبی 3",
        price: 2400000,
        image: "image/bowl3.jpg"
    },

    {
        id: 4,
        name: "کاسه چوبی 4",
        price: 2300000,
        image: "image/bowl4.jpg"
    },

    {
        id: 5,
        name: "کاسه چوبی 5",
        price: 2900000,
        image: "image/bowl6.jpg"
    },

    {
        id: 6,
        name: "کاسه چوبی 6",
        price: 2700000,
        image: "image/bowl7.jpg"
    },

    {
        id: 7,
        name: "کاسه چوبی 7",
        price: 2600000,
        image: "image/bowl8.jpg"
    },

    {
        id: 8,
        name: "کاسه چوبی 8",
        price: 2550000,
        image: "image/bowl9.jpg"
    },

    // تخته سروها
    {
        id: 9,
        name: "تخته سرو 1",
        price: 1000000,
        image: "image/servingboard1.jpg"
    },

    {
        id: 10,
        name: "تخته سرو 2",
        price: 1100000,
        image: "image/servingboard3.jpg"
    },

    {
        id: 11,
        name: "تخته سرو 3",
        price: 1200000,
        image: "image/servingboard4.jpg"
    },

    {
        id: 12,
        name: "تخته سرو 4",
        price: 1300000,
        image: "image/servingboard5.jpg"
    },

    // ماگ‌ها
    {
        id: 13,
        name: "ماگ چوبی 5",
        price: 1100000,
        image: "image/mug1.jpg"
    },

    {
        id: 14,
        name: "ماگ چوبی 6",
        price: 1150000,
        image: "image/mug6.jpg"
    },

    {
        id: 15,
        name: "ماگ چوبی 7",
        price: 1200000,
        image: "image/mug7.jpg"
    },

    {
        id: 16,
        name: "ماگ چوبی 8",
        price: 1250000,
        image: "image/mug8.jpg"
    },

    // گلدان‌ها
    {
        id: 17,
        name: "گلدان چوبی 1",
        price: 2000000,
        image: "image/vase.jpg"
    },

    {
        id: 18,
        name: "گلدان چوبی 2",
        price: 2100000,
        image: "image/vase2.jpg"
    },

    {
        id: 19,
        name: "گلدان چوبی 3",
        price: 2200000,
        image: "image/vase3.jpg"
    },

    {
        id: 20,
        name: "گلدان چوبی 4",
        price: 2300000,
        image: "image/vase4.jpg"
    }

];





// سبد خرید

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// افزودن محصول به سبد

function addToCart(id) {

    const product = products.find( item => item.id === id);

    cart.push(product);

    localStorage.setItem( "cart",JSON.stringify(cart));

    updateCartCount();

    alert("محصول به سبد خرید اضافه شد 🛒");
}


// بروزرسانی تعداد سبد خرید

function updateCartCount() {

    const cartIcon =
        document.querySelector(".cart");

    if (!cartIcon) return;

    cartIcon.innerHTML = cart.length;
}


// اجرای اولیه هنگام باز شدن صفحه

updateCartCount();
