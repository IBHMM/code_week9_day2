function buildFunction() {
    var arr = [];

    for (var index = 0; index < 3; index++) {    
        (function (index) {
            // global this 
            console.log(this)
            arr.push(
                function () {
                    /*
                        [Function (anonymous)],
                        [Function (anonymous)],
                        [Function (anonymous)]
                    */
                    console.log(this)
                    console.log(index);
                }
            )
        }(index))
    }

    return arr;
}



const fs = buildFunction();

fs[0]();
fs[1]();
fs[2]();