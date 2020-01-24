import React from 'react'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles'
import { StaticRouter, StaticRouterContext } from 'react-router'
import App from '../../client/App'
import theme from '../../common/theme'

export default ({ sheets, context, url }: Props) => sheets.collect(
  <ThemeProvider theme={theme}>
    <StaticRouter context={context} location={url}>
      <App />
    </StaticRouter>
  </ThemeProvider>
)

interface Props {
  sheets: ServerStyleSheets
  context: StaticRouterContext
  url: string
}