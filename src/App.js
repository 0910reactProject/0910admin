import React,{Component} from 'react';

import "style/test.less";

import {Button} from "antd"

class App extends Component{
    render(){
        return(
            <div className="App">
                {this.props.children}
            </div>
        )
    }
}

export default App;
