//모듈을 추출합니다.
var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

//서버를 생성합니다.
var app = express();

//미들웨어를 설정합니다.
//업로드를 할 파일을 지정합니다.
app.use(multipart({uploadDir: __dirname+'/public'}));

//라우터를 설정합니다.
app.get('/', function (req, res) {
    fs.readFile('HTMLPage.html',function (err, data) {
        res.send(data.toString);
    });
});

app.post('/',function (req,res) {
    console.log(req.body);
    console.log(req.files);

    res.redirect('/');
});

//서버를 실행합니다.
app.listen(52273,function () {
    console.log("서버 시작");
});
