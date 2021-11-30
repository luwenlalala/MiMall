import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
      "id|10001-11000": 0, // 生成在此区间的随机数
      "username": "@cname",// @name生成英文名字 @cname为中文名字
      "email":"admin@qq.com",
      "phone": null,
      "role": 0,
      "creatTime": 0,
      "updateTime": 1
    }
})