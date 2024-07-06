//กำหนดตัวแปล enum
var OrderStatue;
(function (OrderStatue) {
    OrderStatue["Pending"] = "Pending";
    OrderStatue["Shipped"] = "Shipped";
    OrderStatue["Cancelled"] = "Cancelled";
})(OrderStatue || (OrderStatue = {}));
//สร้าง function
function displayOrderStatus(status) {
    switch (status) {
        case OrderStatue.Pending:
            console.log("Your order is pending.");
            break;
        case OrderStatue.Shipped:
            console.log("Your order has been shipped.");
            break;
        case OrderStatue.Cancelled:
            console.log("Your order has been Cancelled.");
            break;
        default:
            console.log("Unknown order status.");
    }
}
//testing the function
displayOrderStatus(OrderStatue.Shipped);
displayOrderStatus(OrderStatue.Cancelled);
