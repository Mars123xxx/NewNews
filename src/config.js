// const rootURL = "https://bream-magical-scorpion.ngrok-free.app/"
const rootURL = 'http://cuc-llm-f-1.natapp1.cc/'
// const rootURL = ""

const rootChidren = (path) => {
    return rootURL + path
}

const url = {
    audioUploadURL:rootChidren('speechRecognition'),
    uploadBaseURL:rootChidren('upload'),

    // backend url
    imagesTextMatchs:rootChidren('imagesTextMatchs'),
    imagesTextMatch:rootChidren('imagesTextMatch'),
    textGeneration:rootChidren('textGeneration'),
    imgProcessFast:rootChidren('imgProcessFast'),
    imgProcess:rootChidren('imgProcess'),
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
