function analyze(){

let coin = document.getElementById("coin").value.toUpperCase();

let price = document.getElementById("price").value;

let result = document.getElementById("result");

let time = document.getElementById("time");


if(coin==""){

result.innerHTML="❌ نام ارز را وارد کن";
return;

}


if(price==""){

result.innerHTML="❌ قیمت ارز را وارد کن";
return;

}


let score;


if(price < 100){

result.innerHTML =
"🟢 "+coin+"<br><br>شرایط مثبت<br>مناسب برای بررسی خرید";

score = "8/10";

}

else if(price < 1000){

result.innerHTML =
"🟡 "+coin+"<br><br>نیاز به بررسی بیشتر";

score = "5/10";

}

else{

result.innerHTML =
"🔴 "+coin+"<br><br>ریسک بالا، فعلاً صبر کن";

score = "3/10";

}


result.innerHTML +=
"<br><br>⭐ امتیاز بازار: "+score;


let now = new Date();

time.innerHTML =
"⏰ آخرین تحلیل: " + now.toLocaleString("fa-IR");


}



function clearData(){

document.getElementById("coin").value="";

document.getElementById("price").value="";

document.getElementById("result").innerHTML=
"نتیجه تحلیل اینجا نمایش داده می‌شود";

document.getElementById("time").innerHTML="";

}
