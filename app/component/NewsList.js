import React from 'react';
import '../src/css/NewsList.css';
import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';
class NewsList extends React.Component {
    render(){
        return (
            <div className="newsList">
                <NewsHeader/>
                <div className="newsList-newsItem">
                    {
                        this.props.items.map((item,index) => {
                            return <NewsItem item={item} rank={++index} key={index}/>
                        })
                    }
                </div>

            </div>
        );
    }
}
export default NewsList;