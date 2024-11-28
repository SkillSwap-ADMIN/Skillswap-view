import { database } from './firebase-config.js';
import { ref, onValue, push, set } from "firebase/database";

// Reference to your services in Firebase
const servicesRef = ref(database, 'services');

// Listen for changes in real-time
onValue(servicesRef, (snapshot) => {
    const services = snapshot.val();
    updateServicesDisplay(services);
});

function updateServicesDisplay(services) {
    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = '';

    for (let id in services) {
        const service = services[id];
        const serviceElement = createServiceElement(service);
        servicesContainer.appendChild(serviceElement);
    }
}

function createServiceElement(service) {
    const div = document.createElement('div');
    div.className = 'service-card';
    div.innerHTML = `
        <img src="${service.image}" alt="${service.name}">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <p class="price">$${service.price}</p>
        <button onclick="addToCart('${service.id}')">Add to Cart</button>
    `;
    return div;
}

// Function to add a new service (for admin)
function addService(serviceData) {
    const newServiceRef = push(servicesRef);
    set(newServiceRef, {
        id: newServiceRef.key,
        ...serviceData
    });
} 