import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShoppingBag
} from '@fortawesome/free-solid-svg-icons';
import SearchEngine from '../search/searchEngine';

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header'>

                <div className="header__left">
                    <div className="header__left__logo">
                        <img src="https://www.thedojo.com/images/logo_2.png" />
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__right__btns">
                        <SearchEngine/>
                        <div className="small-btn">
                        <FontAwesomeIcon icon={faShoppingBag} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
