const slider = document.getElementById('slider');
const imgs = document.querySelectorAll('img');

let currentIndex = 0;
let intervalId;

function showNextImg(){
    imgs[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % imgs.length;
    imgs[currentIndex].classList.add('active');
}

function startSliding(){
    intervalId = setInterval(showNextImg ,2000);
}

function stopSliding(){
    clearInterval(intervalId);
    imgs[currentIndex].classList.remove('active');
    currentIndex = 0;
    imgs[currentIndex].classList.add('active');
}

slider.addEventListener('mouseenter', startSliding);
slider.addEventListener('mouseleave', stopSliding);













let peopleData = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    peopleData = data;
    dropdown();
  })
  .catch(error => console.error('Error loading JSON data:', error));

function dropdown(){
    const select = document.getElementById('personSelect');
    peopleData.forEach(person => {
        const option = document.createElement('option');
        option.value = person.name;
        option.textContent = person.name;
        select.appendChild(option);
    });
}

function displayPersonDetails(name){
    const person = peopleData.find(p => p.name === name);

    if(person){
        document.getElementById('age').textContent = person.age;
        document.getElementById('email').textContent = person.email
    } else {
        document.getElementById('age').textContent = '';
        document.getElementById('email').textContent = '';
    }
}

//if changed
document.getElementById('personSelect').addEventListener('change', function(){
    const selectedName = this.value;
    displayPersonDetails(selectedName);
});

dropdown();