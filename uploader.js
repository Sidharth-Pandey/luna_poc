/**https://medium.com/@0xVaccaro/hashing-big-file-with-filereader-js-e0a5c898fc98 */
const uploader = function () {
    function Uploader() {
        this.chunkSize = 1024 * 1024;
        this.threadsQuantity = 2;

        this.file = null;
        this.aborted = false;
        this.uploadedSize = 0;
        this.progressCache = {};
        this.activeConnections = {};
        this.uploadId = '';
        this.downloadItemId
        this.token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2NzNBMjQ0QzNENUJBNDIyOUM4RTYyQzkxNjk3NUI0IiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5Lmh5cGVyYnJpZGdlLXhwYW5zZS5jbWRkZXYudGhlcm1vZmlzaGVyLmNvbSIsIm5iZiI6MTY1ODc0MTU2OCwiaWF0IjoxNjU4NzQxNTY4LCJleHAiOjE2NTg3NDUxNjgsImF1ZCI6WyJJZGVudGl0eVNlcnZlckFwaSIsIkRhdGFTZXJ2ZXJBcGkiLCJodHRwczovL2lkZW50aXR5Lmh5cGVyYnJpZGdlLXhwYW5zZS5jbWRkZXYudGhlcm1vZmlzaGVyLmNvbS9yZXNvdXJjZXMiXSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIklkZW50aXR5U2VydmVyQXBpIiwiRGF0YVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJleHRlcm5hbCJdLCJjbGllbnRfaWQiOiJMdW5hVUlfRGV2Iiwic3ViIjoiOTkxMWI4Y2QtYzA5Ni00NmFlLWFmMDgtODc1NTMyODAxY2FlIiwiYXV0aF90aW1lIjoxNjU4NzIzODcyLCJpZHAiOiJvaWRjLWNocm9tZWxlb24iLCJsdW5hX3Blcm1pc3Npb24iOlsiUGVybWlzc2lvbnMuUG9saWN5Lk1hbmFnZSIsIlBlcm1pc3Npb25zLlJvbGUuQXNzaWduIiwiUGVybWlzc2lvbnMuVXNlci5BZGQiLCJQZXJtaXNzaW9ucy5DbGllbnQuTWFuYWdlIiwiUGVybWlzc2lvbnMuR2xvYmFsU2V0dGluZ3MuTWFuYWdlIiwiUGVybWlzc2lvbnMuQXR0cmlidXRlLk1hbmFnZSIsIlBlcm1pc3Npb25zLlJvbGUuQWRkIiwiUGVybWlzc2lvbnMuQXBwbGljYXRpb24uVW5sb2NrIiwiUGVybWlzc2lvbnMuSURQLk1hbmFnZSJdLCJsdW5hX3JvbGVpZCI6IjlmMDYwZjhkLTUzMGEtNDMwYS1iN2Y1LWI2ZDc3MzU5YWM1MSIsImx1bmFfcm9sZW5hbWUiOiJTdXBlciBBZG1pbiIsImx1bmFfaWQiOiI5OTExYjhjZC1jMDk2LTQ2YWUtYWYwOC04NzU1MzI4MDFjYWUiLCJsdW5hX3RlbmFudGlkIjoiMjAxRkFBMDlCQ0ZGNDk4MDlGNkY3NzRDODJFRjE0Q0UiLCJsdW5hX2lkZW50aXR5cHJvdmlkZXJpZCI6IjEiLCJsdW5hX2Z1bGxuYW1lIjoiICIsImx1bmFfbmFtZSI6InNpZGRoYXJ0aC5wYW5kZXkiLCJsdW5hX2V4dGVybmFsaWQiOiIwM2U2ZGM3ZC1mMWIwLTQ4YTMtODllNy0zOTY0ODM3NmE1Y2UiLCJuYW1lIjoic2lkZGhhcnRoLnBhbmRleSIsImFwcGxpY2F0aW9uIjoiSHlwZXJCcmlkZ2UiLCJhcHBsaWNhdGlvblZlcnNpb24iOiIxLjAuMCIsImhvc3ROYW1lIjoiMTIyLjE3MS4yMS43MCIsInNpZCI6IjFBNDVGQjAwQzFGMzlEQkY3NDUzQjA5QUYyQThGQTI5IiwianRpIjoiRTg2MzE1RTk4MDgxQ0U2RTMwMzI4Njk3QjE3ODM5NkYifQ.pcTWF7DUwzAk5gub45GPyELu27Y9qNN76PcnoD8O3Wf9BnCI9U0j6pDq7bdS6Gc4f57TtXDA0plAS19I_GcwjEI_DllBiCoKvjeO2AMk8fCsmnDrnHXS7bpIDsxfb_lwWT57k4kKpviutnsqGGN5iqXSFRsB-M8LWnclFojpHKnpRxbIk_j9lab0Vk7ACI2T7E9FcjA12hb1iRgpEQ_H27V45M-vxX8gY9UAJm-IKwjJDuwd0ny-FVTTRr76053tGYKuor-EriehcsbwQNhahp0QIdQCxOUPj6P0tPtNM5_gocxbTziOuWcbbKUrekRlMNH2LLuGLoCBasGLRqksig';
    }

    Uploader.prototype.setOptions = function (options = {}) {
        this.chunkSize = options.chunkSize;
        this.threadsQuantity = options.threadsQuantity;
    }

    Uploader.prototype.setupFile = function (file) {
        if (!file) {
            return;
        }

        this.file = file;
    }

    Uploader.prototype.createHash = function (str) {
        return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
            return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
        });
    }

    Uploader.prototype.start = function () {
        if (!this.file) {
            throw new Error("Can't start uploading: file have not chosen");
        }

        const chunksQuantity = Math.ceil(this.file.size / this.chunkSize);
        this.chunksQueue = new Array(chunksQuantity).fill().map((_, index) => index).reverse();

        const xhr = new XMLHttpRequest();

        xhr.open("post", "/upload/init");

        xhr.setRequestHeader("X-Content-Length", this.file.size);
        xhr.setRequestHeader("X-Content-Name", this.file.name);
        xhr.setRequestHeader("X-Chunks-Quantity", chunksQuantity);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);

                if (!response.fileId || response.status !== 200) {
                    this.complete(new Error("Can't create file id"));
                    return;
                }

                this.fileId = response.fileId;
                this.sendNext();
            }
        };

        xhr.onerror = (error) => {
            this.complete(error);
        };

        xhr.send();
    }

    Uploader.prototype.uploadToluna = function(hashedFile){
        const xhr = new XMLHttpRequest();
        xhr.open("post", "https://api.hyperbridge-xpanse.cmddev.thermofisher.com/document/api/v1/documents");

        xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.setRequestHeader("Accept", "application/json");
        // const body = {
        //     "documentAttributes": {
        //         "additionalProp1": "string",
        //         "additionalProp2": "string",
        //         "additionalProp3": "string"
        //     },
        //     "extendedAttributes": {
        //         "additionalProp1": "string",
        //         "additionalProp2": "string",
        //         "additionalProp3": "string"
        //     },
        //     "fileName": this.file.name,
        //     "filePath": "/Sid_Upload_test",
        //     "size": this.file.size,
        //     "createdOn": this.file.lastModifiedDate,
        //     "updatedOn": this.file.lastModifiedDate,
        //     "asDraft": true,
        //     "comments": "this is my first upload",
        //     "uploadId": this.uploadId,
        //     "hash": hashedFile
        // }

       const body =  {

            "filePath": "/",
        
            "documentName": "my document1",
        
            "extendedAttributes": {
        
                "DemoName": "testName",
        
                "DemoType": "testType"
        
            },
        
            "uploadId": this.uploadId,
        
            "fileName": this.file.name,
        
            "fileType": this.file.type,
        
            "hash": "hash",
        
            "size": this.file.size,
        
            "isMultiPart": false
        
        };

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 201)) {
                const response = JSON.parse(xhr.responseText);
                console.log("sidd document api-------done here", response);
                this.downloadItemId = response.documentId;    
                this.complete(null);         
            }
        };

        xhr.onerror = (error) => {
            this.complete(error);
        };
        xhr.send(JSON.stringify(body));    

    }

    Uploader.prototype.linkTolLuna = function () {
        var reader = new FileReader();
        var that = this;
        reader.onload = function (event) {
            var fileData = event.target.result;
            //const hashedFile = CryptoJS.SHA512(fileData);
            that.createHash(fileData).then(
                data => that.uploadToluna(data)
            )
           
        };
        reader.readAsBinaryString(this.file);
    }

    Uploader.prototype.uploadSingleDoc = function (data, id) {
        const presignUrl = data[0]?.presignedUrls?.[0];
        const xhr = new XMLHttpRequest();
        const progressListener = this.handleProgress.bind(this, id);
        xhr.upload.addEventListener("progress", progressListener);

        xhr.addEventListener("error", progressListener);
        xhr.addEventListener("abort", progressListener);
        xhr.addEventListener("loadend", progressListener);

        xhr.open("put", presignUrl);

        xhr.onreadystatechange = (event) => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                //resolve(xhr.responseText);
                console.log("sidd---presign url", xhr.responseText);
                // delete this.activeConnections[id];
                this.linkTolLuna();
            }
        };

        xhr.onerror = (error) => {
            reject(error);
            // delete this.activeConnections[id];
        };

        xhr.onabort = () => {
            reject(new Error("Upload canceled by user"));
            //delete this.activeConnections[id];
        };

        const fileData = this.file.slice(0, this.file.size);
        xhr.send(fileData);

    }

    Uploader.prototype.startSingleDoc = function () {
        if (!this.file) {
            throw new Error("Can't start uploading: file have not chosen");
        }
        const xhr = new XMLHttpRequest();

        xhr.open("post", "https://api.hyperbridge-xpanse.cmddev.thermofisher.com/document/api/v1/stagedDocuments");

        xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");

        // xhr.setRequestHeader("X-Chunks-Quantity", chunksQuantity);
        const body = {
            "pieces": [
                {
                    "isMultiPart": false,
                    "partSize": 0,
                    "pieceName": "[SingleDocument]",
                    "piecePath": null,
                    "size": this.file.size
                }
            ]
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                console.log("sidd-------", response);

                this.uploadSingleDoc(response.pieces, 1);
                this.uploadId = response.uploadId
                //this.sendNext();
            }
        };

        xhr.onerror = (error) => {
            this.complete(error);
        };

        xhr.send(JSON.stringify(body));
    }

    Uploader.prototype.sendNext = function () {
        const activeConnections = Object.keys(this.activeConnections).length;

        if (activeConnections >= this.threadsQuantity) {
            return;
        }

        if (!this.chunksQueue.length) {
            if (!activeConnections) {
                this.complete(null);
            }

            return;
        }

        const chunkId = this.chunksQueue.pop();
        const sentSize = chunkId * this.chunkSize;
        const chunk = this.file.slice(sentSize, sentSize + this.chunkSize);

        this.sendChunk(chunk, chunkId)
            .then(() => {
                this.sendNext();
            })
            .catch((error) => {
                this.chunksQueue.push(chunkId);

                this.complete(error);
            });

        this.sendNext();
    }

    Uploader.prototype.complete = function (error) {
        if (error && !this.aborted) {
            this.end(error);
            return;
        }

        setTimeout(() => init());

        this.end(error);
    }

    Uploader.prototype.sendChunk = function (chunk, id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.upload(chunk, id);
                const { status, size } = JSON.parse(response);

                if (status !== 200 || size !== chunk.size) {
                    reject(new Error("Failed chunk upload"));
                    return;
                }
            } catch (error) {
                reject(error);
                return;
            }

            resolve();
        })
    }

    Uploader.prototype.handleProgress = function (chunkId, event) {
        if (event.type === "progress" || event.type === "error" || event.type === "abort") {
            this.progressCache[chunkId] = event.loaded;
        }

        if (event.type === "loadend") {
            this.uploadedSize += this.progressCache[chunkId] || 0;
            delete this.progressCache[chunkId];
        }

        const inProgress = Object.keys(this.progressCache).reduce((memo, id) => memo += this.progressCache[id], 0);

        const sendedLength = Math.min(this.uploadedSize + inProgress, this.file.size);

        this.onProgress({
            loaded: sendedLength,
            total: this.file.size
        })
    }

    Uploader.prototype.upload = function (file, id) {
        return new Promise((resolve, reject) => {
            const xhr = this.activeConnections[id] = new XMLHttpRequest();
            const progressListener = this.handleProgress.bind(this, id);

            xhr.upload.addEventListener("progress", progressListener);

            xhr.addEventListener("error", progressListener);
            xhr.addEventListener("abort", progressListener);
            xhr.addEventListener("loadend", progressListener);

            xhr.open("post", "/upload");

            xhr.setRequestHeader("Content-Type", "application/octet-stream");
            xhr.setRequestHeader("Content-Length", file.size);
            xhr.setRequestHeader("X-Content-Id", this.fileId);
            xhr.setRequestHeader("X-Chunk-Id", id);

            xhr.onreadystatechange = (event) => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                    delete this.activeConnections[id];
                }
            };

            xhr.onerror = (error) => {
                reject(error);
                delete this.activeConnections[id];
            };

            xhr.onabort = () => {
                reject(new Error("Upload canceled by user"));
                delete this.activeConnections[id];
            };

            xhr.send(file);
        })
    }

    Uploader.prototype.on = function (method, callback) {
        if (typeof callback !== "function") {
            callback = () => { };
        }

        this[method] = callback;
    }

    Uploader.prototype.abort = function () {
        Object.keys(this.activeConnections).forEach((id) => {
            this.activeConnections[id].abort();
        });

        this.aborted = true;
    }

    Uploader.prototype.getRequestHeaders = function (){
        return {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        };
      };


    Uploader.prototype.downloadPresignUrl = async function (presignUrl) {   
        return fetch(presignUrl, {
         method: "get",
       }).then(async (res) => {
         return res.ok ? await res.json() : {};
       });
     }  

    
    Uploader.prototype.download = async function () {
       const downloadApi = 'https://api.hyperbridge-xpanse.cmddev.thermofisher.com/document/api/v1/documents/'+this.downloadItemId
       return fetch(downloadApi, {
        method: "get",
        headers: this.getRequestHeaders()
      }).then(async (res) => {
        return res.ok ? await res.json() : {};
      });
    }
    
    const multithreadedUploader = new Uploader();

    return {
        options: function (options) {
            multithreadedUploader.setOptions(options);

            return this;
        },
        send: function (file) {
            multithreadedUploader.setupFile(file);

            return this;
        },
        continue: function () {
            multithreadedUploader.sendNext();
        },
        onProgress: function (callback) {
            multithreadedUploader.on("onProgress", callback);

            return this;
        },
        end: function (callback) {
            multithreadedUploader.on("end", callback);
            multithreadedUploader.startSingleDoc();

            return this;
        },
        abort: function () {
            multithreadedUploader.abort();
        },
        downloadFile : async function(){
          const res =  await multithreadedUploader.download();
          console.log("sidd", res);
          if (res.presignedUrls[0]){
            return res.presignedUrls[0];
          }
          console.log("dowload completed");
        }
    }
};