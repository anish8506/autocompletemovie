
import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';



const API_KEY  = 'process.env.API_KEY'
const API_URL = 'http://www.omdbapi.com/'
let options =[]

type State = {
  inputValue: string,
  error: false,
};


 const getInfo = (inputValue: string) => {
   return axios.get(`${API_URL}?s=${inputValue}&apikey=${API_KEY}&page=1`)
      .then(({ data }) => {
       let movies = []
      //setState({
      	if (data.Search) {
      	   console.log('data = ', data.Search[0])

      	   for (let i = 0; i < data.Search.length; i++) { 
             movies.push({value: data.Search[i].Title, 
              	     label: data.Search[i].Title});          
           }
           console.log('movies = ', movies)
           options = movies;
           return (options)
        }
     
      })
      .catch(() => this.setState({ error: true }))
}



const indicatorSeparatorStyle = {
  alignSelf: 'stretch',
//  backgroundColor: colourOptions[0].color,
  marginBottom: 8,
  marginTop: 8,
  width: 1,
};

const IndicatorsContainer = props => {
  return (
    <div>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

const IndicatorSeparator = ({ innerProps }) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};



export default class AsyncMulti extends Component<*, State> {
  state = { inputValue: '', error: false };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue});
    return inputValue;
  };
  render() {
    return (

      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={getInfo}
      />
    );
  }
}


