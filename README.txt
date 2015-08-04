
创建
post http://10.32.22.103:3000/pages
   title:标题
   descr:描述
返回
  {code:'' , data:'appid' , message}

修改
put http://10.32.22.103:3000/pages
 参数
   id appid
   content:数据
{code:'' , data:'appid' , message}


get http://10.32.22.103:3000/pages/id  得到某个app信息
get http://10.32.22.103:3000/pages  得到所有数据