import React, { useState, useEffect, useReducer } from 'react';
import { Paginator } from './components/Paginator';
import TableData from './components/TableData';

function App() {
  // const [items, setItems] = useState([]);
  let initialState = [];
  let urlState = 'https://api.hnpwa.com/v0/news/1.json';
  let reducer = (state, action) => action;
  const [items, changeItems] = useReducer(reducer, initialState);

  // let reducer1 = (state, action) => {
  //   switch (action) {
  //     case 'newest': {
  //       state = 'https://api.hnpwa.com/v0/newest/1.json';
  //       return state;
  //     };
  //     case 'ask': {
  //       state = 'https://api.hnpwa.com/v0/ask/1.json';
  //       return state;
  //     };
  //     case 'news': {
  //       state =  'https://api.hnpwa.com/v0/news/1.json';
  //       return state;
  //     };
  //     default: throw new Error('Unexpected action');
  //   }
  // }

  // let [baseURL, dispatch] = useReducer(reducer1, urlState);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  let [baseURL] = useState('https://api.hnpwa.com/v0/news/1.json');
  let [width, setWidth] = useState(1080);
  
  const changeWidth = (widthScreen) => {
    setWidth(widthScreen);
    return width;
  }
//get current items on page
const indexOfLastItems = currentPage * itemsPerPage;
const IndexOfFirstItems = indexOfLastItems - itemsPerPage;
const currentItems = items.slice(IndexOfFirstItems, indexOfLastItems);

//change page
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
}
//get data from baseURL

  useEffect(() => {
    fetch(baseURL)
    .then(response => response.json())
    .then(items => {
      changeItems(items)
    }) 
  }, []);
  
  async function sortedTimeUp() {
    fetch(baseURL)
    .then(response => response.json())
    .then(
      items => {changeItems(items.sort((a, b) => a.time > b.time ? 1 : -1))} 
    )
    console.log(items)
  }
  async function sortedTimeDown() {
    fetch(baseURL)
    .then(response => response.json())
    .then(
      items => {changeItems(items.sort((a, b) => b.time - a.time ))} 
    )
    console.log(items)
  }
  async function sortedTitleUp() {
    fetch(baseURL)
    .then(response => response.json())
    .then(
      items => {changeItems(items.sort((a, b) => a.title > b.title ? 1 : -1))} 
    )
    console.log(items)
  }
  async function sortedTitleDown() {
    fetch(baseURL)
    .then(response => response.json())
    .then(
      items => {changeItems(items.sort((a, b) => a.title > b.title ? 1 : -1).reverse())} 
    )
    console.log(items)
  }
  async function sortedDomainUp() {
    fetch(baseURL)
    .then(response => response.json())
    .then(
      items => {changeItems(items.sort((a, b) => a.domain > b.domain ? 1 : -1))} 
    )
    console.log(items)
  }
  async function sortedDomainDown() {
    fetch(baseURL)
    .then(response => response.json())
    .then(
      items => {changeItems(items.sort((a, b) => a.domain > b.domain ? 1 : -1).reverse())} 
    )
    console.log(items)
  }

  useEffect(() => sortedTimeUp, sortedTimeDown, sortedTitleUp, sortedTitleDown, sortedDomainDown, sortedDomainUp, []);


  return (
    <>
    <h1><a href="https://news.ycombinator.com/newcomments" target="_blank">Hacker News </a></h1>
   
    {items.length ? <TableData sortedTimeUp={sortedTimeUp} sortedTimeDown={sortedTimeDown}
    sortedTitleUp={sortedTitleUp} sortedTitleDown={sortedTitleDown}
    items={currentItems} sortedDomainUp={sortedDomainUp} sortedDomainDown={sortedDomainDown} changeWidth={changeWidth}/> : <p>no datas</p>}
    <Paginator itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
    </>
   )
}

export default App;
