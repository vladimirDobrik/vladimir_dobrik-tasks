function commonRequest(method, url, data) {
    var requestURL = url;

    if(data) {
        var params = data.params;

        requestURL = requestURL + '?';

        for (var key in params) {
            requestURL = requestURL + `${key}=${params[key]}&`;
        }

        requestURL = requestURL.substring(0, requestURL.length - 1);
    }

    var promise = new Promise(
        (resolve, reject) => {
            var xhr = new XMLHttpRequest();

            xhr.open(method, requestURL, true);

            if(method === 'post' || method === 'POST') {
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            }

            xhr.onreadystatechange = reqListener;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(data);

            function reqListener() {
                if (xhr.readyState !== 4 && xhr.status !== 200) {
                    reject(this.responseText);
                } else {
                    resolve(this.responseText);
                }
            };
        }
    );

    return promise;
}

