class Ajax {
    static get(url) {
        let promise = new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();

            req.onload = () => {
                if(req.status === 200) {
                    let res = (typeof req.response === "string") ?
                        JSON.parse(req.response) :
                        req.response;
                    resolve(res);
                } else {
                    reject(req.response);
                }
            }
            
            req.open("GET", url);
            req.responseType = "json";
            req.send();
        });
        return promise;
    }
}

export default Ajax;