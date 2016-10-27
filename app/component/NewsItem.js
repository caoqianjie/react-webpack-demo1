import React from 'react';
import url from 'url';
import '../src/css/NewsItem.css';
import Moment from 'moment';
import ImageGrayArrow from '../grayarrow.gif';
class NewsItem extends React.Component {
    getDomain() {
        return url.parse(this.props.item.url).hostname;
    }
    getTitle() {
        return (
            <div className="newsItem-title">
                <a className="newsItem-titleLink" href={this.props.item.url ? this.props.item.title : 'https://news.ycombinator.com/item?id=' + this.props.item.id}>{this.props.item.title}</a>
                {
                    this.props.item.url && <span className="newsItem-domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
                }
            </div>
        )
    }
    getCommentLink() {
        var commentText = 'discuss';
        if(this.props.item.kids && this.props.item.kids.length) {
            commentText = this.props.item.kids.length + ' comments';
        }
        return (
            <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
        );
    }
    getSubtext() {
        return(
            <div className="newsItem-subtext">
                {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {Moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
            </div>
        )
    }
    getRank() {
        return (
            <div className="newsItem-rank">
                {this.props.rank}.
            </div>
        );
    }
    getVote() {
        return (
            <div className="newsItem-vote">
                <a href={'https://news.ycombinator.com/vote?for='+ this.props.item.id + '&dir=up&goto=news'}>
                    <img src={ImageGrayArrow} width="10" />
                </a>
            </div>
        );
    }
    render() {
        return (
            <div className="newsItem">
                {this.getRank()}
                {this.getVote()}
                <div className="newsItem-itemText">
                    {this.getTitle()}
                    {this.getSubtext()}
                </div>
            </div>
        );
    }
}
export default NewsItem;