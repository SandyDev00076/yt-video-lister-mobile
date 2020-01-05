import React from 'react';
import './Directory.css';
import SearchWidget from '../../components/SearchVideos/SearchVideos';

const DirectoryPage = (props) => {
    return (
        <section className="dircontainer">
            <SearchWidget />
        </section>
    )
}

export default DirectoryPage;
