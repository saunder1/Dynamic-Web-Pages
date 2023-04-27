const earthContainer = document.getElementById('earth-container');

const createAstronautElement = (name, craft) => {
    const astronautOuterContainer = document.createElement('div');
    astronautOuterContainer.classList.add('astronaut-outer-container');
    astronautOuterContainer.style.position = 'absolute';

    const astronautInnerContainer = document.createElement('div');
    astronautInnerContainer.classList.add('astronaut-inner-container');

    const astronaut = document.createElement('div');
    astronaut.classList.add('astronaut');
    astronaut.setAttribute('data-name', name);
    astronaut.setAttribute('data-craft', craft);

    astronaut.style.width = '50px';
    astronaut.style.height = '50px';
    astronaut.style.backgroundImage = 'url(images/astro.png)';
    astronaut.style.backgroundSize = 'contain';
    astronaut.style.backgroundRepeat = 'no-repeat';

    const astronautInfo = document.createElement('div');
    astronautInfo.classList.add('astronaut-info');
    astronautInfo.innerHTML = `
        <p>This is ${name} and they are on the ${craft}.</p>
    `;
    astronautInfo.style.position = 'absolute';
    astronautInfo.style.left = '60px';
    astronautInfo.style.top = '0';
    astronautInfo.style.width = '150px';
    astronautInfo.style.padding = '5px';
    astronautInfo.style.border = '1px solid #000';
    astronautInfo.style.backgroundColor = '#FFF';
    astronautInfo.style.display = 'none';

    astronautOuterContainer.appendChild(astronaut);
    astronautOuterContainer.appendChild(astronautInfo);
    astronautOuterContainer.appendChild(astronautInnerContainer);
    return astronautOuterContainer;
};

const rotateAstronauts = (numAstronauts, rotationAngle, angleStep) => {
    rotationAngle += 0.05;
    for (let i = 0; i < numAstronauts; i++) {
        const astronautOuterContainer = earthContainer.getElementsByClassName('astronaut-outer-container')[i];
        const angle = angleStep * i + rotationAngle;
        const radius = 300;
        const x = radius * Math.cos(angle * Math.PI / 180);
        const y = radius * Math.sin(angle * Math.PI / 180);
        astronautOuterContainer.style.transform = `translate(${x}px, ${y}px)`;
    }
    requestAnimationFrame(() => rotateAstronauts(numAstronauts, rotationAngle, angleStep));
};

const rotateAstronautAroundAxis = (astronaut) => {
    let astronautRotationAngle = 0;
    const rotate = () => {
        astronautRotationAngle += 0.5;
        astronaut.style.transform = `rotate(${astronautRotationAngle}deg)`;
        requestAnimationFrame(rotate);
    };
    rotate();
};

const createNumberOfAstronautsElement = (numAstronauts) => {
    const numberOfAstronauts = document.createElement('div');
    numberOfAstronauts.classList.add('number-of-astronauts');
    numberOfAstronauts.style.position = 'absolute';
    numberOfAstronauts.style.top = '50%';
    numberOfAstronauts.style.left = '50%';
    numberOfAstronauts.style.transform = 'translate(-50%, -50%)';
    numberOfAstronauts.style.fontFamily = '"Bruno Ace SC", Arial, sans-serif';
    numberOfAstronauts.style.textAlign = 'center';

    const count = document.createElement('div');
    count.textContent = numAstronauts;
    count.style.fontSize = '150px';
    count.style.fontWeight = 'bold';
    count.style.color = 'aqua';
    count.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';

    const label = document.createElement('div');
    label.textContent = 'people in space';
    label.style.fontSize = '40px';
    count.style.fontWeight = 'bold';
    label.style.color = 'aqua';
    label.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';

    numberOfAstronauts.appendChild(count);
    numberOfAstronauts.appendChild(label);

    return numberOfAstronauts;
};

const displayAstronautName = (astronaut) => {
    astronaut.addEventListener('click', () => {
        const astronautInfo = astronaut.nextElementSibling;
        if (astronautInfo.style.display === 'none') {
            astronautInfo.style.display = 'block';
        } else {
            astronautInfo.style.display = 'none';
        }
    });
};

// this is the data from the people in space api as of 4/27/23
const astrosJSON = `
    {
        "message": "success", 
        "number": 10, 
        "people": [
            {"craft": "ISS", "name": "Sergey Prokopyev"}, 
            {"craft": "ISS", "name": "Dmitry Petelin"}, 
            {"craft": "ISS", "name": "Frank Rubio"}, 
            {"craft": "Shenzhou 15", "name": "Fei Junlong"}, 
            {"craft": "Shenzhou 15", "name": "Deng Qingming"}, 
            {"craft": "Shenzhou 15", "name": "Zhang Lu"}, 
            {"craft": "ISS", "name": "Stephen Bowen"}, 
            {"craft": "ISS", "name": "Warren Hoburg"}, 
            {"craft": "ISS", "name": "Sultan Alneyadi"}, 
            {"craft": "ISS", "name": "Andrey Fedyaev"}
        ]
    }
`;

const astrosData = JSON.parse(astrosJSON);

const numAstronauts = astrosData.number;
const astronauts = astrosData.people;
const rotationAngle = 0;
const angleStep = 360 / numAstronauts;

const numberOfAstronautsElement = createNumberOfAstronautsElement(numAstronauts);
earthContainer.appendChild(numberOfAstronautsElement);

// Create and position astronaut elements around the Earth image
for (let i = 0; i < numAstronauts; i++) {
    const astronautName = astronauts[i].name;
    const astronautCraft = astronauts[i].craft;
    const astronautOuterContainer = createAstronautElement(astronautName, astronautCraft);
    earthContainer.appendChild(astronautOuterContainer);
    const astronautElement = astronautOuterContainer.querySelector('.astronaut');
    rotateAstronautAroundAxis(astronautElement);
    displayAstronautName(astronautElement);
}

// Start rotating astronauts around the Earth image
rotateAstronauts(numAstronauts, rotationAngle, angleStep);