/**
 * Created by saitama on 15/4/17.
 */

(() => {
    const URI_PREPEND = '/Resources/Scripts/';
    function require(script, callback) {
        let scriptTag = document.createElement('script');

        scriptTag.setAttribute('src', URI_PREPEND + script);
        document.head.appendChild(scriptTag);

        callback();
    }

    window.require = require;
})();
