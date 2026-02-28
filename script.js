// let count = 0;
// const updateCount = (number) => {
//   if (count + number < 0){
//     document.querySelector('.count-number').innerHTML = 0;
//   }else{
//     count += number;
//     document.querySelector('.count-number').innerHTML = count;
//   }
// }
// 
let count = 0
const counter = document.querySelector('.count-number');
const decreaseBtn = document.getElementById('reduce-btn');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document. getElementById('reset-btn');

decreaseBtn.addEventListener('click', () => {
 if (count < 1){
  count = 0;
  counter.textContent = count;
 } else {
  count--
  counter.textContent = count;
 }
})

increaseBtn.addEventListener('click', () => {
  count++
  counter.textContent =count;
});

resetBtn.addEventListener('click', () => {
count = 0
counter.textContent = count;
})


//

const usersButton = document.getElementById('load-btn');
const usersContainer = document.getElementById('users-container');

usersButton.addEventListener("click", async () => {
  usersContainer.innerHTML = 'Loading...';

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  usersContainer.innerHTML = "";
  
  users.forEach (user => {
  const userCard = document.createElement("div");
   userCard.classList.add('users-card');
   
   userCard.innerHTML = `
   <h4>${user.name}</h4>
   <p><span>Email:</span> ${user.email}</p>
   <p><span>Phone:</span> ${user.phone}</p>
   <p><span>Company:</span> ${user.company.name}</p>
   `;
   usersContainer.appendChild(userCard);
  })

})

const themeToggle = document.getElementById('toggle-button');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if( document.body.classList.contains('dark-theme')){
    themeToggle.textContent = '🌙';
  } else{
    themeToggle.textContent = '☀️';
  }

});