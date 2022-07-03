// Code js viet o day
var x;
x = 10;// number
x = "hello world";
x = true;
var y;
y = y + 5;// number
y = y + "hello";//string --> 25hello
y = y + 10; // string -->25hello10
y = y + "tt2204M"; // string -->25hello10t2204M

if(x==true){
    y = y + "hello";
}else{
    y = y + "xin chao";
}
for (var i=0;i<10;i++){
    console.log("i="+i);
}

//khai bao mang
var arr = [];
arr[0] = 2;
arr[1] = 'hello';
arr[2] = true;
arr[3] = [1,2,3,4];
arr[3][4] = ["hello","abc"];


var ary = [];
for(var i=0;i<10;i++) {
    ary[i] = 2 * i + 1
}
//muon them so 21 vao cuoi danh sach
//ary[10] = 21;
ary.push(21);//ary.push[21] them phan tu 21 vao cuoi danh sach
ary.push(23);
ary.push(25);
//ary.length la chieu dai mang
//for(var i=0;i<13;i++)
for(var i=0;i<ary.length;i++){
    console.log(ary[i]);
}

tinhtong(5,7);
function tinhtong(a,b) {
    console.log(a+b);
    return a+b;
}


function checkPrime(n) {
    if(n<2) return false;
    if(n==2 ||n==3) return true;
    for(var i=2;i<=n/2;i++){
        if(n%i==0) return false;
    }
    return true;
}

//mot so ham hay su dung
//1 Dua ra mot thong bao
alert("Phai nguoi tren 18 tuoi moi co the tham gia");
//2 ham boolean
var kq = confirm("Ban chac chan muon nop bai");
console.log(kq);
//3 ham string: tao o nhap cho nguoi dung nhap vao tra ve chuoi nguoi dung da nhap
var name = prompt("Vui long nhap ten cua ban");
console.log(name);

//Nhap ten 5 nguoi sau do in ra danh sach vua nhap
// var str = [];
// for(var i=1;i<6;i++){
//      str = prompt("Vui long nhap ten cua ban " + i );
//     console.log(str);
// }

// 4 ham bien chuoi thanh so
// str = parseInt(str);
// console.log(str+10);
//18-->18
//18abc-->18
//18abc2-->18
//abc18-->NaN (not a number)

//Viet chuong trinh yc nguoi dung nhap vao mot so duong

var x;
do{
    x = prompt("Vui long nhap so nguyen duong");
    x = parseInt(x);
}while(isNaN(x));
    console.log(x);

//5 lam cham trễ cac lenh ( sau 5000 mili giay mới chạy) tham so cua no la mot ham
// setTimeout(function (){
//     alert("Demo time out1");
//     alert("Demo time out2");
// },5000);

//6. hàm đặt lịch (cu sau 3s lai chay 1 lan làm vĩnh viễn)
// var t=0;
// setInterval(function () {
//     alert("t="+t);
//     t++;
// },3000);

// var t=0;
// var xyz = setInterval(function () {
//     console.log("t="+t);
//     t++;
//     if(t>=5){
//         clearInterval(xyz); //hủy hàm đặt lịch
//     }
// },1000);
//viết đồng hồ số đếm ngược 10p

var s = 0;
var m = 10;
// console.log(p +":"+ s);
var time = setInterval(function () {
            var min = m>=10?m:"0"+m;
            var sec = s>=10?s:"0"+s;
            console.log(min+":"+sec)
            s--;
            if(s<0){
                s=59;
                m--;
        }
        if(m<0){
            clearInterval(time);
        }
    },1000);
