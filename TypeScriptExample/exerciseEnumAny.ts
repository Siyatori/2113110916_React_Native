enum ProductStatus {
    Available = "Available",
    OutOfStock = "OutOfStock",
    Discountinued = "Discountinued"
}

let product: any[] = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discountinued, price: 300 }
]

function displayProductDetail(products: any[]) {
    products.forEach(product => {
        console.log(`Product:${product.name},Status:${product.status},Price:${product.price}`)
    }

    );
}

displayProductDetail(product)