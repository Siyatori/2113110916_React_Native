var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "OutOfStock";
    ProductStatus["Discountinued"] = "Discountinued";
})(ProductStatus || (ProductStatus = {}));
var product = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discountinued, price: 300 }
];
function displayProductDetail(products) {
    products.forEach(function (product) {
        console.log("Product:".concat(product.name, ",Status:").concat(product.status, ",Price:").concat(product.price));
    });
}
displayProductDetail(product);
