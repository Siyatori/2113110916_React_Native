type Product = {
    name: string;
    price: number;
    category: string; 
}

//กำหนด array ของ Product
let products : Product[] = [
    {name: 'Laptop',price:50000,category:'Electronics'},
    {name: 'Shirt',price:1200,category:'Apparel'},
    {name: 'Coffee',price:2500,category:'Appliances'}
]

//สร้าง function
function filterProductByPrice(products:Product[],minPrice:number) {
    return products.filter(product=>product.price>minPrice);

}

//สร้าง function discountProduct
function discountProduct(product:Product[]):Product[]{
    return products.map(product=>({...product,price:product.price * 0.9}));

}

//เรัยกใช้ function
let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

//console.log(filterProduct);
console.log(discountProducts);