class Axios {
    constructor(config) {
        this.method = config.method;
        this.baseURL = config.baseURL;
        this.data = config.data;
    }

    static get(url, params) {
        const promise = new Promise(
            (resolve, reject) => {

                let xhr = new XMLHttpRequest();

                xhr.onload = reqListener;

                if (params) {
                    xhr.open("GET", `${this.baseURL}${url}?${params}`, true);
                } else {
                    xhr.open("GET", `${this.baseURL}${url}`, true);
                }

                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                xhr.send();

                function reqListener() {
                    if (xhr.status != 200) {
                        reject(this.responseText);
                    } else {
                        resolve(this.responseText);
                    }
                };
            }
        );

        return promise;
    }

    static post(url, params, data = this.data) {
        let promise = new Promise(
            (resolve, reject) => {

                let json = JSON.stringify(data);
                let xhr = new XMLHttpRequest();

                xhr.onload = reqListener;

                if (params) {
                    xhr.open("GET", `${this.baseURL}${url}?${params}`, true);
                } else {
                    xhr.open("GET", `${this.baseURL}${url}`, true);
                }

                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                xhr.send(json);

                function reqListener() {
                    if (xhr.status != 200) {
                        reject(this.responseText);
                    } else {
                        resolve(this.responseText);
                    }
                };
            }
        );

        return promise;
    }

    static delete(url, params) {
        const promise = new Promise(
            (resolve, reject) => {

                let xhr = new XMLHttpRequest();

                xhr.onload = reqListener;

                if (params) {
                    xhr.open("GET", `${this.baseURL}${url}?${params}`, true);
                } else {
                    xhr.open("GET", `${this.baseURL}${url}`, true);
                }

                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                xhr.send();

                function reqListener() {
                    if (xhr.status != 200) {
                        reject(this.responseText);
                    } else {
                        resolve(this.responseText);
                    }
                };
            });

        return promise;
    }

    static put(url, params, data = this.data) {
        let promise = new Promise(
            (resolve, reject) => {

                let json = JSON.stringify(data);
                let xhr = new XMLHttpRequest();

                xhr.onload = reqListener;

                if (params) {
                    xhr.open("GET", `${this.baseURL}${url}?${params}`, true);
                } else {
                    xhr.open("GET", `${this.baseURL}${url}`, true);
                }

                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                xhr.send(json);

                function reqListener() {
                    if (xhr.status != 200) {
                        reject(this.responseText);
                    } else {
                        resolve(this.responseText);
                    }
                };
            }
        );

        return promise;
    }

    get(url, params) {
        Axios.get(url, params);
    }

    post(url, params, data = this.data) {
        Axios.get(url, params, data);
    }

    put(url, params, data = this.data) {
        Axios.get(url, params);
    }

    delete(url, params) {
        Axios.get(url, params);
    }
}

var axios = new Axios();



