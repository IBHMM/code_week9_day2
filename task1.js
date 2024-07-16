function buildFunction() {
    var arr = [];

    for (let index = 0; index < 3; index++) {
        arr.push(
            function () {
                console.log(index);
            }
        )
    }

    return arr;
}



const fs = buildFunction();

fs[0]();
fs[1]();
fs[2]();