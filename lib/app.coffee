window.addEventListener 'load', ->
  el = $ "#app"

  # Compile Handlebar Templates
  errorTemplate = Handlebars.compile $ "#error-template"
    .html()
  ratesTemplate = Handlebars.compile $ "#rates-template"
    .html()
  exchangeTemplate = Handlebars.compile $ "#exchange-template"
    .html()
  historicalTemplate = Handlebars.compile $ "#historical-template"
    .html()

  html = ratesTemplate()
  el.html html 
