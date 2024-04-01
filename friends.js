//random number of friend.
let inputNumber = Math.floor(Math.random() * 9) + 1;

//list of friend.
let friendList = [];

addFriend = () => {
    //add input to friendList.
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    if(name !== "" && age !== "") {
        let friend = {name: name, age: age};
        friendList.push(friend);

        document.getElementById("inputCount").innerHTML = "กรอกชื่อและอายุของเพื่อนจำนวน " + --inputNumber + " คน";
        document.getElementById("showFriend").innerHTML = document.getElementById("showFriend").innerHTML + " ชื่อเล่น: " + friend.name + " อายุ: " + friend.age + "<br>";
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";

        //disable button when all input has been received.
        if(inputNumber == 0) document.getElementById("submitBtn").disabled = true;
    } else alert("โปรดกรอกชื่อเล่นและอายุ")
}

reset = () => {
    friendList = [];
    document.getElementById("showFriend").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    inputNumber = Math.floor(Math.random() * 9) + 1;
    document.getElementById("inputCount").innerHTML = "กรอกชื่อและอายุของเพื่อนจำนวน " + inputNumber + " คน";
}

sumAge = () => {
    if(inputNumber == 0) {
        let sum = 0;
        friendList.forEach(element => {
            sum+=Number(element.age);
        });
        document.getElementById("result").innerHTML = sum;
    } else alert("โปรดกรอกข้อมูลเพื่อนให้ครบ");
}

avgAge = () => {
    if(inputNumber == 0) {
        let sum = 0;
        friendList.forEach(element => {
            sum+=Number(element.age);
        });
        let avg = sum/friendList.length;
        document.getElementById("result").innerHTML = avg;
    } else alert("โปรดกรอกข้อมูลเพื่อนให้ครบ");
}

minAge = () => {
    if(inputNumber == 0) {
        let min = 9007199254740992;
        let minName;
        friendList.forEach(element => {
            if(element.age < min) {
                min = element.age;
                minName = element.name;
            } else if(element.age == min) {
                min = null;
                return;
            }
        });
        if(min != null) document.getElementById("result").innerHTML = " ชื่อเล่น: " + minName + " อายุ: " + min;
        else document.getElementById("result").innerHTML = document.getElementById("showFriend").innerHTML;
    } else alert("โปรดกรอกข้อมูลเพื่อนให้ครบ");
}

maxAge = () => {
    if(inputNumber == 0) {
        let max = -1;
        let maxName;
        friendList.forEach(element => {
            if(element.age > max) {
                max = element.age;
                maxName = element.name;
            } else if(element.age == max) {
                max = null;
                return;
            }
        });
        if(max != null) document.getElementById("result").innerHTML = " ชื่อเล่น: " + minName + " อายุ: " + min;
        else document.getElementById("result").innerHTML = document.getElementById("showFriend").innerHTML;
    } else alert("โปรดกรอกข้อมูลเพื่อนให้ครบ");
}

document.getElementById("inputCount").innerHTML = "กรอกชื่อเล่นและอายุของเพื่อนจำนวน " + inputNumber + " คน";
document.getElementById("submitBtn").onclick = addFriend;
document.getElementById("resetBtn").onclick = reset;
document.getElementById("sumBtn").onclick = sumAge;
document.getElementById("avgBtn").onclick = avgAge;
document.getElementById("minBtn").onclick = minAge;
document.getElementById("maxBtn").onclick = maxAge;
