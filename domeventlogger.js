module.exports = function (element) {
    Object.getOwnPropertyNames(element).forEach(function (item) {
        if (item.indexOf('on') === 0) {
            var existing = element[item];
            element[item] = function (event) {
                var label = element.tagName;
                if (element.id) label += '#' + element.id;
                if (element.className) label += element.className.split(' ').map(function (cls) {
                    return '.' + cls;
                }).join('');
                console.log(label, 'name: ' + item.slice(2), event);
                if (existing) existing();
            };
        }
    });

    return element;
};
