import React, {useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
    button: {
      margin: 1,
    },
    input: {
      display: 'none',
    },
  }),
);

export default () => {
  const classes = useStyles();
  const [progressVisible, setprogressVisible] = React.useState(false);
  const [completed, setCompleted] = React.useState(0);

  
  const [files,setFiles] = useState()

  const fileUploadHandler = () => {
    setprogressVisible(true)
    const fd = new FormData()
    fd.append('image',files,files.name)
    axios.post('http://localhost:3000/upload',fd,{
      onUploadProgress: progressEvent => {
        console.log(`Upload progress: ${Math.round((progressEvent.loaded / progressEvent.total)*100)}%`)
        setCompleted(Math.round((progressEvent.loaded / progressEvent.total)*100))
      } 
    })
  }
  
  const fileSelectedHandler = (event: any ) =>{
    setFiles(event.target.files[0])
  }

  return (
    <Paper className={classes.root}>
      <div>
        <input type="file" onChange={fileSelectedHandler}/>
        <button onClick={fileUploadHandler}>Upload</button>
      </div>
      <input
        accept="image/*"
        className={classes.input}
        id="raised-button-file"
        multiple
        type="file"
      />
      <div className={classes.root}>
        {progressVisible === true ? <LinearProgress variant="determinate" value={completed} />:<div></div>}
      </div>
    </Paper>

  );
}