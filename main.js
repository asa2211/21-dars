var age = prompt("yoshingizni kiriting?")
age = Number(age)
if(0 < age && age <= 18){
    alert("Yoshsiz. O'qishingiz kerak")
}else if(18 < age && age <= 50){
    alert("Ishlashingiz kerak")
}else if(50 < age && age <= 59){
    alert("Yaqinda pensiyaga chiqasiz")
}else if(59 < age && age <= 150){
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz :)")
}else{
    if(isNaN(age)){
        alert("Iltimos son kiriting!!!")
    }else{
        alert("Nimadir notog'ri ketib qoldi")
    }
}

var bossName = "sarvar"
var name = prompt("Ismni kiriting?")
if(bossName === name){
    alert("hello boss")
}else{
    alert("hello guest")
}