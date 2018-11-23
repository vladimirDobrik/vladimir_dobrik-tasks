const axios = {
    get(baseUrl, params) {
        const promise = new Promise(
            (resolve, reject) => {

                let xhr = new XMLHttpRequest();

                xhr.onload = reqListener;

                if (params) {
                    xhr.open("GET", `${baseUrl}?${params}`, true);
                } else {
                    xhr.open("GET", baseUrl, true);
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
    },

    post(baseUrl, params, data) {
        let promise = new Promise(
            (resolve, reject) => {

                let json = JSON.stringify(data);
                let xhr = new XMLHttpRequest();

                xhr.onload = reqListener;

                if (params) {
                    xhr.open("GET", `${baseUrl}?${params}`, true);
                } else {
                    xhr.open("GET", baseUrl, true);
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
    },

    delete(baseUrl, params) {
        const promise = new Promise(
            (resolve, reject) => {

                let xhr = new XMLHttpRequest();

                xhr.onload = reqListener;

                if (params) {
                    xhr.open("GET", `${baseUrl}?${params}`, true);
                } else {
                    xhr.open("GET", baseUrl, true);
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
    },

    put(baseUrl, params, data) {
        let promise = new Promise(
            (resolve, reject) => {

                let json = JSON.stringify(data);
                let xhr = new XMLHttpRequest();

                xhr.onload = reqListener;

                if (params) {
                    xhr.open("GET", `${baseUrl}?${params}`, true);
                } else {
                    xhr.open("GET", baseUrl, true);
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
}

axios.get("http://localhost:3000")
    .then(responce => {
        alert(responce);
    })
    .catch(error => {
        alert(error);
    });