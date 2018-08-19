import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderContainer, Addiction, SearchInfo, SearchInfoTitle,
  Logo, SearchInfoList, Nav, SearchInfoItem, MenuItem, SearchInfoSwitch, MenuSearch, Button, SearchWrap
} from './style'

class Header extends Component {
  constructor() {
    super ()
  }
  
  getListArea() {
    const {focused, list, page, totalPage, mouseIn, mouseLeave, changePage} = this.props;
    const newList = list.toJS ();
    const pageList = [];
   if(newList.length){
     for (let i = ( page - 1) * 10, b = page * 10; i < b; i++) {
       pageList.push (
         <SearchInfoItem key={newList[i]}>
           {newList[i]}
         </SearchInfoItem>
       )
     }
   }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={mouseIn}
          onMouseLeave={mouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onclick={() => changePage (page, totalPage)}
            >
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  
  render() {
    const {focused, inputFocus, list,inputBlur} = this.props;
    return (
      <HeaderContainer>
        <Logo/>
        <Nav>
          <MenuItem className="left active">首页</MenuItem>
          <MenuItem className="left">归档</MenuItem>
          <MenuItem className="left">关于博客</MenuItem>
          <MenuItem className="right">
            <i className="iconfont">&#xe636;</i>
          </MenuItem>
          <MenuItem className="right">注册</MenuItem>
          <SearchWrap>
            <CSSTransition
              timeout={300}
              in={focused}
              classNames="slide"
            >
              <MenuSearch
                className={focused ? 'focused' : ''}
                onFocus={()=>inputFocus(list)}
                onBlur={inputBlur}
              ></MenuSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe614;</i>
            {this.getListArea}
          </SearchWrap>
        </Nav>
        <Addiction>
          <Button className="login">登录</Button>
          <Button className="write"><i className="iconfont">&#xe601;</i>写文章</Button>
        </Addiction>
      </HeaderContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn (['header', 'focused']),
    list: state.getIn (['header', 'list']),
    page: state.getIn (['header', 'page']),
    mouseIn: state.getIn (['header', 'mouseIn']),
    totalPage: state.getIn (['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus(list) {
      (list.size===0)&&dispatch (actionCreators.getList ());
      dispatch (actionCreators.searchFocus ())
    },
    inputBlur() {
      dispatch (actionCreators.searchBlur ())
    },
    mouseIn() {
      dispatch (actionCreators.mouseIn ())
    },
    mouseLeave() {
      dispatch (actionCreators.mouseLeave ())
    },
    mouseLeave(page, totalPage) {
      if (page < totalPage) {
        dispatch (actionCreators.changePage (page + 1))
      } else {
        dispatch (actionCreators.changePage (1))
      }
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Header);
