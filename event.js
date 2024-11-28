const technicalEvents = [
    {img: 'img/hackathon.jpg', name: '24-hour Hackathon Challenge'},
    
];

const nonTechnicalEvents = [
    {img: 'img/img.jpg', name: 'Dance Competition'},
    
];

function showEvents(events) {
    const eventsContainer = document.getElementById('events');
    eventsContainer.innerHTML = '';
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
            <img src="${event.img}" alt="${event.name}">
            <p>${event.name}</p>
        `;
        eventsContainer.appendChild(eventItem);
    });
}

function showTechnicalEvents() {
    showEvents(technicalEvents);
}

function showNonTechnicalEvents() {
    showEvents(nonTechnicalEvents);
}

// Show technical events by default
showTechnicalEvents();