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

Object.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this));
}