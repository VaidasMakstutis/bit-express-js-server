import axios from "axios";

// axios.get('http://127.0.0.1:5500/public/data.txt').
// then(res => {
//     console.log(res);
// })

axios.get('http://localhost:3003/hello/vaidas').
then(res => {
    console.log(res);
    document.querySelector('body').innerHMTL = res.data;
})