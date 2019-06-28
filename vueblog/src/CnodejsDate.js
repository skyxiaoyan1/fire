import axios from 'axios'


/* 
 page Number 页数
 tab String 主题分类。目前有 ask share job good
 limit Number 每一页的主题数量
*/
export const getTitles = (data) => {
    return (axios.get('https://cnodejs.org/api/v1/topics', {
        params: data
      })
      );

}
//获取指定id的博客内容
export const getBlog = (data) => {
    return (axios.get('https://cnodejs.org/api/v1/topic/'+data, {
        params: null
      })

      );


}

//获取指定id的博客内容
export const getAuthor = (data) => {
    return (axios.get('https://cnodejs.org/api/v1/user/'+data, {
        params: null
      })

      );


}
  
