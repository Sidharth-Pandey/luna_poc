!(function () {
    const form = document.getElementById("form");
    const fileInput = document.getElementById("file");
    const uploadButton = document.getElementById("upload");
    const continueButton = document.getElementById("continue");
    const resetButton = document.getElementById("reset");
    const progressNode = document.getElementById("progress");
    const timeNode = document.getElementById("uploadTime");
    const threadsNode = document.getElementById("threads");
    const chunkSizeNode = document.getElementById("chunkSize");
    const uploadSingle = document.getElementById('uploadSingle');
    const downloadFile =  document.getElementById('download');
    const downloader = document.getElementById('my_iframe_download');
    const uploadMultipart =  document.getElementById('download');
    var chunksUploader;
    downloadFile.setAttribute("disabled", "disabled");


    form.addEventListener("submit", (event) => {
        event.preventDefault();

        fileInput.setAttribute("disabled", "disabled");
        uploadButton.setAttribute("disabled", "disabled");
        
        timeNode.innerText = "";

        const file = fileInput.files[0];
        let aborted = false;
        const endTimer = getTimeCounter();

        chunksUploader = uploader()
            .onProgress(({loaded, total}) => {
                const percent = Math.round(loaded / total * 100 * 100) / 100;

                progressNode.innerText = `${percent}%`;
            })
            .options({
                chunkSize: Number(chunkSizeNode.value) * 1024 * 1024,
                threadsQuantity: Number(threadsNode.value)
            })
            .send(file)
            .end((error, data) => {
                if (error) {
                    if (!aborted) {
                        continueButton.removeAttribute("disabled");
                        continueButton.addEventListener("click", () => {
                            chunksUploader.continue();
                            continueButton.setAttribute("disabled", "disabled");
                        }, {once: true});
                    }

                    console.log("Error", error);
                    return;
                }

                const timeSpent = endTimer();

                fileInput.removeAttribute("disabled");
                uploadButton.removeAttribute("disabled");
                downloadFile.removeAttribute("disabled");
                continueButton.setAttribute("disabled", "disabled");
                timeNode.innerText = `(${timeSpent / 1000} sec)`;
            });

      
        resetButton.addEventListener("click", () => {
            aborted = true;
            chunksUploader.abort();
            fileInput.removeAttribute("disabled");
            uploadButton.removeAttribute("disabled");
            continueButton.setAttribute("disabled", "disabled");
            progressNode.innerText = "";
            timeNode.innerText = "";

        }, {once: true});

       
    });

    downloadFile.addEventListener('click', async (e)=> {   
        var downloadurl =  await chunksUploader.downloadFile(); 
        if(downloadurl){
            downloader.src = downloadurl;  
        }
             
    })

    uploadMultipart.addEventListener('click', async (e)=> {   
         multiPartUploder = uploaderMultiPart()
        
    })
    
    function getTimeCounter() {
        const start = + new Date();

        return () => {
            return + new Date() - start;
        }
    }
})();