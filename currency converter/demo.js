function convert() {
  var amount = document.getElementById('amount').value;
  var fromCurrency = document.getElementById('fromCurrency').value;
  var toCurrency = document.getElementById('toCurrency').value;

  var exchangeRates = {
      INR: {
          GBP: 0.0098,
          EUR: 0.0116,
          USD: 0.0136
      },
      GBP: {
          INR: 102.19,
          EUR: 1.1809,
          USD: 1.3866
      },
      EUR: {
          INR: 86.12,
          GBP: 0.8475,
          USD: 1.1742
      },
      USD: {
          INR: 73.43,
          GBP: 0.7212,
          EUR: 0.8518
      }
  };

  var exchangeRate = exchangeRates[fromCurrency][toCurrency];
  var result = amount * exchangeRate;
  document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
