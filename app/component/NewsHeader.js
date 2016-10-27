import React from 'react';
import imgLogo from '../logo.png';
import '../src/css/NewsHeader.css';
class NewsHeader extends React.Component {
    getLogo() {
        return (
          <div className="newsHeader-logo">
              <a href="https://news.ycombinator.com/"><img src={imgLogo}/></a>
          </div>
        );
    }
    getTitle(){
        return (
            <div className="newsHeader-title">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com/">Hacker News</a>
            </div>
        );
    }
    getNav() {
        let navLinks = [
            {
                name: 'new',
                url: 'newest'
            },
            {
                name: 'components',
                url: 'components'
            },
            {
                name: 'show',
                url: 'show'
            },
            {
                name: 'ask',
                url: 'ask'
            },
            {
                name: 'jobs',
                url: 'jobs'
            },
            {
                name: 'submit',
                url: 'submit'
            }
        ];
        return (
            <div className="newsHeader-nav">
                {
                    navLinks.map( navLink => {
                        return (
                            <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"https://news.ycombinator.com/" + navLink.url} >
                                {navLink.name}
                            </a>
                        );
                    })
                }
            </div>
        )
    }
    getLogin() {
        return (
            <div className="newsHeader-login">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
            </div>
        )
    }
    render() {
        return (
            <div className="newsHeader">
                {this.getLogo()}
                {this.getTitle()}
                {this.getNav()}
                {this.getLogin()}
            </div>
        );
    }
}
export default NewsHeader;