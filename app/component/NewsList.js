import React from 'react';
import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';
class NewsList extends React.Component {
    render(){
        return (
            <div className="newsList">
                <NewsHeader/>
                <NewsItem/>
            </div>
        );
    }
}
export default NewsList;