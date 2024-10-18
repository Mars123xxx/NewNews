// const rootURL = "https://bream-magical-scorpion.ngrok-free.app/"
// const rootURL = 'http://cuc-llm-f-1.natapp1.cc/'
const rootURL = "http://127.0.0.1:8000"

const rootChildren = (path) => {
    return rootURL + path
}

const url = {
    audioUploadURL:rootChildren('speechRecognition'),
    uploadBaseURL:rootChildren('upload'),

    // backend url
    imagesTextMatchs:rootChildren('imagesTextMatchs'),
    textGeneration:rootChildren('textGeneration'),
    imgProcessFast:rootChildren('imgProcessFast'),
    imgProcess:rootChildren('imgProcess')
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
