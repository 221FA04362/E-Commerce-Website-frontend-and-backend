// index.js

document.body.style.fontFamily = "BookmanOldStyle";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "navajowhite";

// Create header
const header = document.createElement("header");
header.style.backgroundColor = "purple";
header.style.padding = "1em";
header.style.display = "flex";
header.style.alignItems = "center";

// Logo
const logoImg = document.createElement("img");
logoImg.src = "https://img-cdn.thepublive.com/fit-in/580x348/filters:format(webp)/tice-news-prod/media/post_attachments/6e77b763-742.jpg";
logoImg.alt = "Meesho Logo";
logoImg.style.width = "50px";
logoImg.style.height = "auto";
logoImg.style.marginRight = "20px";
header.appendChild(logoImg);

// Header content
const headerContent = document.createElement("div");
headerContent.className = "header-content";
headerContent.style.flexGrow = "1";
headerContent.style.textAlign = "center";

const title = document.createElement("h1");
title.textContent = "Meesho";
title.style.margin = "0";
title.style.color = "white";
headerContent.appendChild(title);

// Navigation links
const nav = document.createElement("nav");
const links = [
    { href: "#kids", text: "Kids" },
    { href: "#men", text: "Men" },
    { href: "#women", text: "Women" },
    { href: "#homeandliving", text: "Home and Living" },
    { href: "#beauty", text: "Beauty Products" },
    { href: "register.html", text: "Register" },
    { href: "login.html", text: "Login" },
    { href: "cart.html", text: "Cart" }
];

links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.style.margin = "0 15px";
    a.style.textDecoration = "none";
    a.style.color = "white";
    nav.appendChild(a);
});
headerContent.appendChild(nav);
header.appendChild(headerContent);
document.body.appendChild(header);

// Main banner
const mainBanner = document.createElement("section");
mainBanner.className = "main-banner";

const bannerImg = document.createElement("img");
bannerImg.src = "https://i.ytimg.com/vi/cOqqdA-JbU0/maxresdefault.jpg";
bannerImg.alt = "Sale Banner";
bannerImg.style.width = "100%";
bannerImg.style.height = "auto";
bannerImg.className = "banner-img";

mainBanner.appendChild(bannerImg);
document.body.appendChild(mainBanner);

// Main content section
const main = document.createElement("main");
main.style.padding = "20px";

// Function to create product sections
const createSection = (id, titleText, products) => {
    const section = document.createElement("section");
    section.id = id;

    const title = document.createElement("h1");
    title.innerHTML = `<center>${titleText}</center>`;
    section.appendChild(title);

    const productRow = document.createElement("div");
    productRow.className = "product-row";
    productRow.style.display = "flex";
    productRow.style.justifyContent = "space-around";
    productRow.style.flexWrap = "wrap";
    productRow.style.marginBottom = "20px";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.style.padding = "10px";
        productCard.style.width = "23%";
        productCard.style.textAlign = "center";
        productCard.style.backgroundColor = "white";
        productCard.style.borderRadius = "10px";
        productCard.style.marginBottom = "20px";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.style.width = "200px";
        img.style.height = "300px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "10px";
        productCard.appendChild(img);

        const name = document.createElement("p");
        name.className = "product-name";
        name.textContent = product.name;
        productCard.appendChild(name);

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = `₹${product.price}`;
        productCard.appendChild(price);

        const button = document.createElement("button");
        button.className = "add-to-cart";
        button.textContent = "Add to Cart";
        productCard.appendChild(button);

        productRow.appendChild(productCard);
    });

    section.appendChild(productRow);
    return section;
};

// Product data for Kids, Men, and Women sections
const kidsProducts = [
    { image: "https://www.printmate.in/media/catalog/product/cache/1/thumbnail/384x500/9df78eab33525d08d6e5fb8d27136e95/5/_/5_9_2.png", name: "Kids' T-Shirt", price: 499 },
    { image: "https://liandli.in/cdn/shop/files/LIDG198_1_-min_600x.jpg?v=1701411393", name: "Kids' Dress", price: 1199 },
    { image: "https://assets0.mirraw.com/images/11655979/Pink_Blue_Front___Final_front_11_long_webp.webp?1696930980", name: "Silk Skirt", price: 799 },
    { image: "https://images-cdn.ubuy.co.in/64e817cd570b2640d95f4764-yunicus-toddler-light-up-shoes-boys.jpg", name: "Kids' Shoes", price: 899 }
];

// Add sections
main.appendChild(createSection("kids", "Kids", kidsProducts));
document.body.appendChild(main);
