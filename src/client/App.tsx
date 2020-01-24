import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContainer from './containers/MainContainer/MainContainer'
import Home from './containers/Home/Home'

export default () => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <MainContainer>
      <Switch>
        <Route exact path='/' component={Home} />        
      </Switch>
    </MainContainer>
  )
}
