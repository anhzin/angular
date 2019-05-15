Array.prototype.firstOrDefault = function(predicate) {
    predicate = predicate || function() {
        return true;
    }
    let self = this;
    for (let index = 0; index < self.length; index++) {
        if (!predicate(self[index])) {
            continue;
        }
        return self[index];
    }
}

Array.prototype.isEmpty = function() {
    return this.length == 0;
}

Array.prototype.removeIf = function(callback) {
    var i = 0;
    while (i < this.length) {
        if (callback(this[i], i)) {
            this.splice(i, 1);
        } else {
            ++i;
        }
    }
};

Array.prototype.remove = function(item) {
    var index = this.indexOf(item);
    if (index !== -1) this.splice(index, 1);
    return this;
};

// Object.prototype.clone = function() {
//     return JSON.parse(JSON.stringify(this));
// }

String.prototype.format = function() {
    var args = arguments;
    this.replace(/{(\d+)}/g, function(match, number) {
        return typeof(args[number] != 'undefined') ? args[number] : match;
    });
}

String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ?
            args[number] :
            match;
    });
};