module.exports = function (element) {
    var item;

    Object.getOwnPropertyNames(element).forEach(function (item) {
        if (item.indexOf('on') === 0) {
            element[item] = function (event) {
                var label = element.tagName;
                if (element.id) label += '#' + element.id;
                if (element.className) label += element.className.split(' ').map(function (cls) {
                    return '.' + cls;
                }).join('');
                console.log(label, 'name: ' + item.slice(2), event);
            };
        }
    });

    return element;
};
