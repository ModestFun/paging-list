const express = require('express');
const path = require('path');
const app = express();
const Mock = require('mockjs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const userList = (pageNum, pageSize) =>
  Mock.mock({
    total: 55,
    [`list|${pageSize}`]: [
      {
        id: '@guid',
        name: '@name',
        email: '@email',
      },
    ],
  });

async function getUserList (params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userList(params.current, params.pageSize));
    }, 1000);
  });
}

app.listen(8080, () => console.log('server run at 8080!'));

app.post('/list', async (req, res) => {
  res.send({
    data: (await getUserList(req.body)),
    success: true,
    message: ''
  });
});
