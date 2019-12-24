window.addEventListener('load', function() {
  var el, errorTemplate, exchangeTemplate, historicalTemplate, html, ratesTemplate;
  el = $("#app");
  // Compile Handlebar Templates
  errorTemplate = Handlebars.compile($("#error-template")).html();
  ratesTemplate = Handlebars.compile($("#rates-template")).html();
  exchangeTemplate = Handlebars.compile($("#exchange-template")).html();
  historicalTemplate = Handlebars.compile($("#historical-template")).html();
  html = ratesTemplate();
  return el.html(html);
});
