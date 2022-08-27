
let side_nav = document.getElementById("side-nav");
let full_prev = document.getElementById("full_image_prev");
let img_thumb_list = document.querySelectorAll(".small_preview_grid > img");

for (let img of img_thumb_list) {
    img.addEventListener('click', () => {
        for (let img of img_thumb_list) {
            img.classList.remove('active');
        }
        img.classList.add('active');
    });
}

console.log(img_thumb_list);
const openNav = () => {
    side_nav.style.left = "0";
}

const closeNav = () => {
    side_nav.style.left = "-60%";
}

const getImage = (e) => {
    console.log(e.src);
    console.log(full_prev.src);
    full_prev.src = e.src;
}



let quantity = parseInt(document.getElementById('quantity').innerText);

document.getElementById('decrease_quantity').addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        document.getElementById('quantity').innerText = quantity;
    }
}
);
document.getElementById('increase_quantity').addEventListener('click', () => {
    if (quantity < 4) {
        quantity++;
        document.getElementById('quantity').innerText = quantity;
    }
});

let quantity_of_product = parseInt(document.getElementById('quantity_of_product').innerText);
let total_amount = document.querySelector('.product_bill_desc p:last-child span:last-child');

function addProduct()
{
    document.getElementById('quantity_of_product').innerText = quantity;
    document.getElementById('quantity_display_bill').innerText = quantity;
    total_amount.innerText = `$${eval(quantity * 125)}`;
}


let show_cart = true;
let cart = document.getElementById('cart');
let empty_cart = document.getElementById('empty_cart');
let product_in_cart = document.getElementById('product_in_cart');

function showCart()
{
    if(quantity === 0)
    {
        empty_cart.style.display = "block";
        product_in_cart.style.display = "none";
    }
    else
    {
        product_in_cart.style.display = "grid";
        empty_cart.style.display = "none";
    }

    if(show_cart)
    {
        cart.style.display = "block"
        show_cart = false;
        return;
    }

    cart.style.display = "none"
    show_cart = true;
    return;
}

