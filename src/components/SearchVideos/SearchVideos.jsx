import React, { useContext } from 'react';
import './SearchVideos.css';
import { AppContext } from '../../data/appContext';

const SearchWidget = (props) => {

    const data = useContext(AppContext);

    return (
        <section>
            <input className="searchfield" placeholder={`Search among ${data.folders.length} videos`}/>
        </section>
    )
}

export default SearchWidget;
