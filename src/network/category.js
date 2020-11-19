import {request} from "./request";

export function getCategorydata(){
  return request({
    url:'/home/categorydata'
  })
}
