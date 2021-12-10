import React from 'react'
import { Link} from 'react-router-dom';
import Style from './Header.module.css';


const Header = () => {
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to='/'> プロテインフレーバー検索くん </Link>      
      </div>
    </div>
  )
}

export default Header