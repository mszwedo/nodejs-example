

var exec = require("child_process").exec;
var querystring = require("querystring");

exports.start = function(response, postData)
{
    console.log("Request handler 'start' was called.");
    console.log("");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(body);
    response.end();

}


exports.upload = function(response, postData)
{
    console.log("Request handler 'upload' was called.");
    console.log("");

    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("You've sent the text: " + querystring.parse(postData).text);
    response.end();
}

