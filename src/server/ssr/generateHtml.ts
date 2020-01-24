interface HtmlAssets {
  markup: string
  js: string
  css: {
    client: string
    mui: string
  }
}

export const generateHtml = (htmlAssets: HtmlAssets) => `
<!doctype html>
  <html lang="">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <title>Welcome to Razzle</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style id="jss-server-side">${htmlAssets.css.mui}</style>
    ${htmlAssets.css.client ? `<link rel="stylesheet" href="${htmlAssets.css.client}">` : ''}
    <script src="${htmlAssets.js}" defer ${process.env.NODE_ENV !== 'production' ? 'crossorigin': ''}></script>
  </head>
  <body>
    <div id="root">${htmlAssets.markup}</div>
  </body>
</html>`