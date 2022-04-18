/*function hocsinh(name, age, grade)
{
    this.Name=name;
    this.Age=age;
    this.Grade=grade;
    this.FULL_INFORMATION =  function()
    {
        return this.Name + ', '+ this.Age + ' tuôi, Học lớp '+ this.Grade;
    }
}


var nguyenvana = new hocsinh("Nguyễn Văn A",17,"12");
var nguyenvanb = new hocsinh("Nguyễn Văn B",18,"ĐH");
var full_A=nguyenvana.FULL_INFORMATION(); 
alert(full_A);
var full_B=nguyenvanb.FULL_INFORMATION()
alert(full_B);*/

/*function Truong_phong(name,age)
{
    this.Name = name;
    this.Age = age;
    this.Hello = function()
    {
        alert('Chào sếp!');
    }
}
function giamdoc(name,age)
{
    this.Name = name;
    this.Age = age;
    this.Truong_phong_ky_thuat = new Truong_phong("Le Anh Nhat", 30);
}

var GD = new giamdoc("Nguyễn Văn A",30);
GD.Truong_phong_ky_thuat.Hello();*/


// Hàm này được gọi khi HTML tải xong
function SetupEventForDiv()
{
    var obj = document.getElementById("div1");
    //obj.onclick=Div_1_Clicked;
    obj.onmouseover=F1;
    obj.onmouseout=F2;
    
}

/* Hàm này được gọi khi click lên thẻ div1
function Div_1_Clicked()
{
    var obj = document.getElementById("div1");
    obj.innerHTML = (new Date()).getSeconds();
    obj.setAttribute('style','background-color:green');

}*/

// Hàm này được gọi khi rê chuột lên div1
function F1()
{
    var obj = document.getElementById("div1");
    obj.innerHTML = (new Date()).getSeconds();
    obj.setAttribute('style','background-color:green');
}

function F2()
{
    var obj = document.getElementById("div1");
    obj.innerHTML = "OUT";
    obj.setAttribute('style','background-color:blue');
}

