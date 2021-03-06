import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import AppBar from '../../components/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default ({ children }: Props) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar/>
      <main className={classes.content}>
        {children}
      </main>
    </React.Fragment>
  )
}

interface Props {
  children: React.ReactElement
}