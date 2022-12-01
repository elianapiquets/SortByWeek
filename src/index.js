export default class OrdersAnalyzer {
  constructor() {
    this.weekdays = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
  }

  getDaySum(day, data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].key === day) {
        total = total + data[i].sum;
      }
    }
    return total;
  }

  totalQuantity(productId, orders) {
    // TODO: Implement

    const productByDay = orders.map((o) => {
      const date = new Date(o.creationDate);
      const key = this.weekdays[date.getDay()];

      let sum = 0;

      for (let i = 0; i < o.orderLines.length; i++) {
        if (o.orderLines[i].productId === productId) {
          sum = sum + o.orderLines[i].quantity;
        }
      }

      return {
        key,
        sum,
      };
    });

    return {
      SUNDAY: this.getDaySum("SUNDAY", productByDay),
      MONDAY: this.getDaySum("MONDAY", productByDay),
      TUESDAY: this.getDaySum("TUESDAY", productByDay),
      WEDNESDAY: this.getDaySum("WEDNESDAY", productByDay),
      THURSDAY: this.getDaySum("THURSDAY", productByDay),
      FRIDAY: this.getDaySum("FRIDAY", productByDay),
      SATURDAY: this.getDaySum("SATURDAY", productByDay),
    };
  }
}
