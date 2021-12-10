import React, { useState} from 'react';
import Layout from '../components/layout/Layout';

import { makeStyles, Grid, Container, IconButton, Paper, InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import SearchResultList from './SearchResultList';
import { post } from "../utils/api"

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
  const { searchResult, search } = useSearch()
  const [sendText, setSendText] = useState('');

  const classes = useStyles();

  const onPressQuery = async (event) => {
    event.preventDefault();
    search(sendText)
  }

  return (
    <Layout>
      <form onSubmit={(e)=>{onPressQuery(e)}}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="ex: チョコレート"
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
      { searchResult && 
          <div style={style}>
          <SearchResultList list={searchResult.items}/>
        </div> }
    </Layout>
  )
}

export default Top; 

const useSearch = () => {
  const [searchResult, setSearchResults] = useState(undefined)
  const search = async (keyword) => {
    if(!keyword) return
    const searchResults = await post("discovery/search", {searchText: keyword})
    setSearchResults(searchResults)
  }
  return {search, searchResult}
}