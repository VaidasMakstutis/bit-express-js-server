import axios from "axios";

// axios.get('http://127.0.0.1:5500/public/data.txt').
// then(res => {
//     console.log(res);
// })

// axios.get('http://localhost:3003/hello/vaidas').
// then(res => {
//     console.log(res);
//     // document.querySelector('body').innerHTML = res.data
// });


//Calculator

// window.addEventListener("DOMContentLoaded", () => {
//   const alert = document.querySelector('.alert-danger');
//   const result = document.querySelector('.alert-success');

//   document.querySelector("button").addEventListener("click", () => {
//     const data = {};
//     data.d1 = document.querySelector("#d1").value || 0;
//     data.d2 = document.querySelector("#d2").value || 0;
//     data.action = document.querySelector("#action").value;

//     axios.post("http://localhost:3003/calculator", data).then(res => {
//       console.log(res);
//       if (res.data.errMsg) {
//           alert.style.display = 'block';
//           result.style.display = 'none';
//           alert.innerHTML = res.data.errMsg;
//       }
//       else {
//           alert.style.display = 'none';
//           result.style.display = 'block';
//           result.innerHTML = res.data.answer;
//       }
//     })
//   })
// });

//DOMINOS




window.addEventListener('DOMContentLoaded', () => {

  // Geting dominos
  const getDominos = () => {
      axios.
      get('http://localhost:3003/dominos').
      then(res => {
          console.log(res.data);
          let dominosHtml = '';
          res.data.dominos.forEach(d => {
              dominosHtml = dominosHtml + `
              <div class="domino">

              <div class="left-side">
                  ${d.left_side}
              </div>

              <div class="right-side">
                  ${d.right_side}
              </div>
              
              </div>
              `;
          })
          document.querySelector('.dominos').innerHTML = dominosHtml;

      });
  }


  const alert = document.querySelector('.alert-danger');
  const success = document.querySelector('.alert-success');
  document.querySelector('#add-new').addEventListener('click', () => {
      const data = {};
      data.left = document.querySelector('#left').value || 0;
      data.right = document.querySelector('#right').value || 0;
      axios.
      post('http://localhost:3003/dominos/add', data).
      then(res => {
          console.log(res);
          if (res.data.errMsg) {
              alert.style.display = 'block';
              success.style.display = 'none';
              alert.innerHTML = res.data.errMsg;
          } else {
              alert.style.display = 'none';
              success.style.display = 'block';
              success.innerHTML = 'New domino has been added.';
              getDominos();
          }

      })
  })

  getDominos();

})