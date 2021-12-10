import React from 'react'
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"

const SearchResultList = ({ list }) => {
    return (
        list.length > 0 ? <ReactFlexyTable data={list} /> : "検索結果が存在しません"
    )
  }

  export default SearchResultList