import $ from 'jquery';
import NewsList from './NewsList'
import React from 'react';
import { render } from 'react-dom';
import '../src/css/app.css';
function get(url) {
    return Promise.resolve($.get(url));
}
get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(function (stories) {
        return Promise.all(stories.slice(0,30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/'+itemId+'.json')));
    })
    .then(function (items) {
        render(<NewsList items={items}/>,$('#app')[0]);
    })
    .catch(function (err) {
        console.log('err occur', err);
    });