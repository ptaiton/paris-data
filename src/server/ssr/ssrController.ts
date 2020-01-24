import { NextFunction, Request, Response } from 'express'
import { createElement } from 'react'
import { StaticRouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { generateHtml } from './generateHtml'
import SSRApp from './SSRApp'

export const handleRenderingRequest = async (req: Request, res: Response, next: NextFunction) => {
  const context: StaticRouterContext = {}
  const sheets = new ServerStyleSheets();
  const assets = require(process.env.RAZZLE_ASSETS_MANIFEST!)
  const markup = renderToString(createElement(SSRApp, { sheets, context, url: req.url }))

  const htmlAssets = {
    markup,
    js: assets.client.js,
    css: {
      client: assets.client.css,
      mui: sheets.toString(),
    },
  }
  
  res.send(generateHtml(htmlAssets))
}