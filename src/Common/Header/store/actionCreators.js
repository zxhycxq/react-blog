import * as constants from './constants';
import axios  from 'axios';
import { fromJS } from 'immutable';

const changelist=(data)=>({
  type:constants.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length/10)
})

export const searchFocus=()=>({
  type:constants.SEARCH_FOCUS
})
export const searchBlur=()=>({
  type:constants.SEARCH_BLUR
})

export const mouseIn=()=>({
  type:constants.MOUSE_IN
})

export const changePage=(page)=>({
  type:constants.change_Page,
  page
})


export const getList=()=>{
  return (dispatch)=>{
    axios.get('./api/headerList.json').then((res)=>{
         const data=res.data;
        dispatch(changelist(data.data))
         console.log(`%c--data-- `, 'color:blue;font-weight:bold', data)
    }).catch(()=>{
     console.log('error')
    })
  }
}
