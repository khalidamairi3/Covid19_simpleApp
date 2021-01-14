import axios from "axios";
import "./App.css"
import React, { Component } from 'react'
import Global from "./Global"
import Countries from "./Countries";

export default class App extends Component {
  state = {
    global:{},
    countries : [],
  }
  componentDidMount(){
    axios.get("https://api.covid19api.com/summary").then(res => {
    this.setState({global:res.data.Global});
    let countries = res.data.Countries;
    countries.sort((a,b)=>{
                return (a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1;
            });
    this.setState({countries : countries})
    }).catch(()=>{})
  }
  render() {
    return (
      <div id="app">
        <h1> Covid 19 Information Center</h1>
        <Global global = { this.state.global } > </Global>
        <Countries countries = { this.state.countries } > </Countries>
      </div>
    )
  }
}
