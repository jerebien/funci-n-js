function changeClass () {
    let box1 = document.getElementById("box1");
    if (box1.className === "class1") {
        box1.className = "class2";
    }
    else {
        box1.className = "class1";
    }
}

document.getElementById("box1").onclick = changeClass;

function secondChangeClass () {
    let box2 = document.getElementById("box2");
    if (box2.className === "class3") {
        box2.className = "class4";
    }
    else {
        box2.className = "class3";
    }
}

document.getElementById("box2").onclick = secondChangeClass;
