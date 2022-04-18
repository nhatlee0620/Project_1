/*var str='{"Name":"Thư Viện Lập Trình","Age":2}';
var obj=JSON.parse(str);
obj.Name="ABC";
var str2=JSON.stringify(obj);
alert(str2);
*/

/*var str='{"Name":"Thư Viện Lập Trình","Age":2, "More_infor":{"id":"123","message":"Hello World"}}';
var obj=JSON.parse(str);
alert(obj.More_infor.message);
*/

var str='{"Name":"Thư Viện Lập Trình","Age":2, "More_infor":[124,"ABC",{"id":"Đây là ID"}]}';
var obj=JSON.parse(str);
alert(obj.More_infor[2].id);