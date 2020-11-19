import {request} from "./request";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomedata(){
  return request({
    url:'/home/tabdata'
  })
}

export function getHomePopdata(){
  return request({
    url:'/home/homedata?type=pop&page=1'
  })
}
export function getHomeExpdata(){
  return request({
    url:'/home/homedata?type=sell&page=3'
  })
}
export function getHomeNewdata(){
  return request({
    url:'/home/homedata?type=new&page=1'
  })
}
