import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu'

import 'components/menu.scss'


class MenuWrap extends Component {
    constructor (props) {
      super(props);
      this.state = {
        hidden: false
      };
    }
  
    componentWillReceiveProps(nextProps) {
      const sideChanged = this.props.children.props.right !== nextProps.children.props.right;
  
      if (sideChanged) {
        this.setState({hidden : true});
  
        setTimeout(() => {
          this.show();
        }, this.props.wait);
      }
    }
  
    show() {
      this.setState({hidden : false});
    }
  
    render() {
      let style;
  
      if (this.state.hidden) {
        style = {display: 'none'};
      }
  
      return (
        <div style={style} className={this.props.side}>
          {this.props.children}
        </div>
      );
    }
}
  

export default class Sidebar extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return (
            <div id="outer-container" style={{height: '70px'}}>
                <MenuWrap>
                    <Menu id={"menu-1"} 
                        pageWrapId={'page-wrap'} 
                        outerContainerId={'outer-container'}>
                        <span className="name">Maximiliano Elias Alvarez</span>
                        <a className="menu-item" href="/"> introduction</a>
                    </Menu>
                </MenuWrap>
            </div>
        )
    }
}
