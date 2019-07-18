function AsyncRequest() {
    this.loaded = false
}
AsyncRequest.prototype.get = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('resolved promise');
        }, 3000);
    })
}

var test = new AsyncRequest();
var p = test.get();
p.then(function (data) {
    console.log(data)
});