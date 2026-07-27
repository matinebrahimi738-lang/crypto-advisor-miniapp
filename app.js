function analyze(){

let coin = document.getElementById("coin").value.toUpperCase();

let price = document.getElementById("price").value;

let result = document.getElementById("result");


if(coin==""){

result.innerHTML="❌ نام ارز را وارد کن";

return;

}


if(price==""){

result.innerHTML="❌ قیمت ارز را وارد کن";

return;

}



if(price < 100){

result.innerHTML =
"🟢 "+coin+"<br><br>قیمت پایین است<br>برای بررسی خرید مناسب‌تر است";

}

else if(price < 1000){

result.innerHTML =
"🟡 "+coin+"<br><br>نیاز به بررسی بیشتر دارد";

}

else{

result.innerHTML =
"🔴 "+coin+"<br><br>قیمت بالا است<br>فعلاً صبر کن";

}


}

