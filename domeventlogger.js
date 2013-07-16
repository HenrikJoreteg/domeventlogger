module.exports = function (element) {
    Object.getOwnPropertyNames(element).forEach(function (item) {
        var eventName;
        if (item.indexOf('on') === 0) {
            eventName = item.slice(2);
            element.addEventListener(eventName, function (event) {
                var label = element.tagName;
                if (element.id) label += '#' + element.id;
                if (element.className) label += element.className.split(' ').map(function (cls) {
                    return '.' + cls;
                }).join('');
                console.log(label, 'name: ' + item.slice(2), event);
            }, false);
        }
    });

    return element;
};
