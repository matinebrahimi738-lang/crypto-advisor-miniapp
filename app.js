function analyze(){

let price =
document.getElementById("price").value;

let result =
document.getElementById("result");

if(price==""){

result.innerHTML="❌ اول قیمت را وارد کن";

return;

}

if(price<100){

result.innerHTML="🟢 قیمت پایین است";

}

else if(price<1000){

result.innerHTML="🟡 نیاز به بررسی بیشتر";

}

else{

result.innerHTML="🔴 قیمت بالا است، فعلاً صبر کن";

}

}

