it('should calculate the monthly rate correctly', function() {
    const values = {amount: 100000, years: 10, rate: 10.0};
    expect(calculateMonthlyPayment(values)).toEqual("1321.51");
});
  
  
it("should return a result with 2 decimal places", function() {
    const values = {amount: 12345, years: 5, rate: 4.6};
    expect(calculateMonthlyPayment(values)).toEqual("230.71");
});
  
it("should handle high interest rates", function() {
    const values = {amount: 50000, years: 20, rate: 90};
    expect(calculateMonthlyPayment(values)).toEqual("3750.00");
});

it("should handle low interest rates", function() {
    const values = {amount: 10000, years: 10, rate: 0.1};
    expect(calculateMonthlyPayment(values)).toEqual("83.75")
});

it("should handle very big loans", function() {
    const values = {amount: 1000000, years: 30, rate: 8.8};
    expect(calculateMonthlyPayment(values)).toEqual("7902.74")
});