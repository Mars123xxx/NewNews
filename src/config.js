// const rootURL = "https://bream-magical-scorpion.ngrok-free.app/"
<<<<<<< HEAD
// const rootURL = 'http://cuc-llm-f-1.natapp1.cc/'
const rootURL = "http://127.0.0.1:8000"
=======
const rootURL = 'http://39.106.253.178:8888/'
// const rootURL = ""
>>>>>>> cd5135564ef5d851bf8c00915e3b4a2964a59562

const rootChildren = (path) => {
    return rootURL + path
}

const url = {
    audioUploadURL:rootChildren('speechRecognition'),
    uploadBaseURL:rootChildren('upload'),

    // backend url
<<<<<<< HEAD
    imagesTextMatchs:rootChildren('imagesTextMatchs'),
    textGeneration:rootChildren('textGeneration'),
    imgProcessFast:rootChildren('imgProcessFast'),
    imgProcess:rootChildren('imgProcess')
=======
    imagesTextMatchs:rootChidren('imagesTextMatchs'),
    imagesTextMatch:rootChidren('imagesTextMatch'),
    textGeneration:rootChidren('textGeneration'),
    imgProcessFast:rootChidren('imgProcessFast'),
    imgProcess:rootChidren('imgProcess'),
>>>>>>> cd5135564ef5d851bf8c00915e3b4a2964a59562
}

const src = {
    image:{
        part2:'https://cdn.nzxf.net/v2-fda5ab4414155c0c171ac5f87bc82ded_r.jpg',
        part3:'https://cdn.nzxf.net/v2-fda5ab4414155c0c171ac5f87bc82ded_r.jpg',
    }
}

export {
    url,
    rootURL,
    src
}
