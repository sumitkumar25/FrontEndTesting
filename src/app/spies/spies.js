function SpyTestClass() {
    this.parameter = 'Jasmine spies'
}
SpyTestClass.prototype.SpySyncFunction = function () {
    return this.parameter;
}

SpyTestClass.prototype.AsyncResolveFunction = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Asyn jasmine spies');
        }, 300);
    })
};

SpyTestClass.prototype.AsyncRejectFunction = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Asyn jasmine spies Reject');
        }, 300);
    })
};
