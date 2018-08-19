import styled  from 'styled-components';
import logoImg  from '../../Static/logo.jpg';

export const HeaderContainer=styled.div`
width:100px;
height:60px;
border-bottom:1px solid #999;
`
export const Logo=styled.a.attrs({
  href:'/'
})`
float:left;
top:5px;
left:50px;
display:inline-block;
width:100px;
height:60px;
background:url(${logoImg});
background-size:cover;
`
export const Nav=styled.div`
width:960px;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin:0 auto;
`

export const MenuItem=styled.div`
padding:5px;
line-height:50px;
cursor: pointer;
font-size:16px;
&.left{float:left}
&.right{float:right;color:#666;}
&.active{color:green}
`
export const SearchWrap=styled.div`
position:relative;float:left;

overflow:hidden;
.iconfont{position:absolute;right:10px;width:10px;text-align:center;
line-height:60px; font-size:18px;
&.focused{background:#777;color:#fff;}
}
`

export const MenuSearch=styled.input.attrs({
  placeholder:'请输入搜索内容'
})`

&.slide-enter{transition:all .3s ease-out}
&.slide-enter-active{width:220px;}
&.slide-exit{transition:all .3s ease-out}
&.slide-exit-active{width:150px;}
width:150px;height:40px;border:1px solid ;border-radius:10px;
line-height:56px;  margin-top:10px;padding-left:10px;
&.focused{
width:200px;
.iconfont{}
}
`
export const Addiction=styled.div`
position:absolute;
right:0;top:0;height:50px;
`
export const Button=styled.div`
float:right:
margin-top:10px;
border:1px solid #eee;
margin-right:10px;
line-height:38px;
border:1px solid #000;
right:0;top:0;height:50px;
&.login{color:red;}
&.write{color:#aaa;background:orange;}
`

export const SearchInfo=styled.div`
position:absolute;
left:0;border:1px solid;
top:50px;width:240px;padding:0 20px;background:green;

`
export const SearchInfoTitle=styled.div`
margin-top:20px;margin-bottom:15px;
color:#969696;
`

export const SearchInfoSwitch=styled.div`
float:right;font-size:14px;
`

export const SearchInfoList=styled.div`
overflow:hidden;
`

export const SearchInfoItem=styled.div`
line-height:20px;padding:0 5px;font-size:14px;
border:1px solid red;border-radius:4px;float:left;
display:inline-block;margin-right:10px;
margin-bottom:4px;
`
