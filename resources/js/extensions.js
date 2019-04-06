Array.prototype.firstOrDefault = function(predicate) {
    predicate = predicate || function() {
        return true;
    }

    let self = this;
    for (var index = 0; index < self.length; index++) {
        if (!predicate(self[index])) {
            continue;
        }

        return self[index];
    }
}

Object.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this));
}

String.prototype.format = function() {
    var args = arguments;
    this.replace(/{(\d+)}/g, function(match, number) {
        return typeof(args[number] != 'undefined') ? args[number] : match;
    });
}