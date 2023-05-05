const form = document.querySelector('#form');
const floor = document.querySelector('#floor');
const room = document.querySelector('#room');

function floorOptions(){
    for(let i=3; i <= 27; i++){
        const option = document.createElement('option');
        option.textContent = `${i}`;
        floor.appendChild(option);
    }
}

floorOptions();

function roomOptions(){
    for(let i=1; i <= 10; i++){
        const option = document.createElement('option');
        option.textContent = `${i}`;
        room.appendChild(option);
    }
}

roomOptions();

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const data ={
        tower: form.tower.value,
        floor: form.floor.value,
        room: form.room.value,
        comment: form.comment.value
    }
    console.log(JSON.stringify(data));

    form.reset();
})

