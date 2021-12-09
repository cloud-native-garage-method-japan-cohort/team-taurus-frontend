import React, {useState} from 'react';
import Layout from '../components/layout/Layout';

import { makeStyles, Grid, Container, IconButton, Paper, InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import { queryDiscovery }from '../utils/index';
import Sample from './Sample';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '60px',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    width: '100%',
    margin: 4,
  },
  grid: {
    marginTop: '48px',
    width: '100',
  }
}));

const style = {
  width: "50%",
  margin: "0 auto",
  marginTop: 150,
};


const Top = () => {
  const [sendText, setSendText] = useState('');
  const [recvText, setRecvText] = useState('');

  const classes = useStyles();

  const onPressQuery = async (event) => {
    event.preventDefault();
    // const res = await queryDiscovery(sendText);
    const res = {
      "total": 20,
      "items": [
        {
          "id": 1,
          "name": "ザバス ホエイプロテイン100 リッチショコラ味 1050g (約50食分)",
          "flavor": "リッチショコラ味"
        },
        {
          "id": 2,
          "name": "ザバス ホエイプロテイン200 リッチショコラ味 1050g (約50食分)",
          "flavor": "バニラ味"
        },
        {
          "id": 3,
          "name": "ザバス ホエイプロテイン300 リッチショコラ味 1050g (約50食分)",
          "flavor": "ストロベリー味"
        }                    
      ]
    }
    // setRecvText(res.data.responseText);
    console.log("RES");
    console.log(res);
    // setSendText('');
  }

  return (
    <Layout>
      <form onSubmit={(e)=>{onPressQuery(e)}}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Watson Discovery で検索"
            inputProps={{ 'aria-label': 'search watson discovery' }}
            onChange={(e)=>{setSendText(e.target.value)}}
          />
          <IconButton 
            type="button"
            className={classes.iconButton}
            aria-label="search"
            onClick={(e) => onPressQuery(e)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>
      <div style={style}>
        <Sample></Sample>
      </div>
      <Grid className={classes.grid}>
        <Container>
          <Grid>
            {recvText}
          </Grid>
        </Container>
      </Grid>
    </Layout>
  )
}

export default Top; 