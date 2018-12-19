    var commonRequest = (method, url, data) => {
        var requestURL = url;

        if (this.baseURL) {
            requestURL = `${this.baseURL}${url}`;
        }

        if (data) {
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

                if (method === 'post' || method === 'POST') {
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

    function axios(config) {
        if (config && typeof config === 'string') {
            commonRequest('GET', config);
        }

        if (config && typeof config === 'object') {
            commonRequest(config.method, config.url, config.data);
        }

        this.get = function (url, data) {
            commonRequest('GET', url, data);
        }

        this.post = function (url, data) {
            commonRequest('POST', url, data);
        }

        this.put = function (url, data) {
            commonRequest('PUT', url, data);
        }

        this.delete = function (url, data) {
            commonRequest('DELETE', url, data);
        }
    }

    axios.create = function (config) {
        var instance = new axios();

        instance.baseURL = config.baseURL;

        return instance;
    }

    axios.get = function (url, data) {
        commonRequest('GET', url, data);
    }

    axios.post = function (url, data) {
        commonRequest('POST', url, data);
    }

    axios.put = function (url, data) {
        commonRequest('PUT', url, data);
    }

    axios.delete = function (url, data) {
        commonRequest('DELETE', url, data);
    }