/**
 * Created by guang on 2016/7/25.
 */
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}
alert([1, 2, 3].contains(2));// => true