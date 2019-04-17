let guidHelper = {
    newGuid: newGuid
}
export default guidHelper;
function newGuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x1000)
        .toString()
        .substring(1);
    }
    return s4() + s4() + "-" + s4() + "-" + s4()+ "-" + s4()+ "-" + s4()+ s4()+ s4();
}