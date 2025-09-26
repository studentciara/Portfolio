// Firestore correct importeren
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js";

// Firebase configuratie
const firebaseConfig = {
  apiKey: "AIzaSyCFLvzy6rBCEFOeXVuwGw0F56MyTSzu2S8",
  authDomain: "database-setup-d6511.firebaseapp.com",
  projectId: "database-setup-d6511",
  storageBucket: "database-setup-d6511.firebasestorage.app",
  messagingSenderId: "1047947597164",
  appId: "1:1047947597164:web:6543cdecadb62a725ecf49",
  measurementId: "G-89B9JCGC0E"
};

// Firebase Initialiseren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Functie om berichten op te halen en weer te geven
async function fetchMessages() {
    const messagesDiv = document.querySelector('#messages');
    messagesDiv.innerHTML = "<p>Berichten laden...</p>";

    try {
        const querySnapshot = await getDocs(collection(db, 'messages'));
        messagesDiv.innerHTML = ""; // Leeg de div voordat nieuwe berichten worden geladen
        
        if (querySnapshot.empty) {
            messagesDiv.innerHTML = "<p>Geen berichten gevonden.</p>";
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            messagesDiv.innerHTML += `
                <div class="message-container">
                    <p><strong>Naam:</strong> ${data.name} ${data.lastname}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Telefoon:</strong> ${data.phone}</p>
                    <p><strong>Bericht:</strong> ${data.message}</p>
                    <p><small><strong>Verzonden op:</strong> ${new Date(data.timestamp.toDate()).toLocaleString()}</small></p>
                </div>
            `;
        });
    } catch (error) {
        messagesDiv.innerHTML = "<p>Fout bij laden van berichten.</p>";
        console.error("Fout bij ophalen van berichten:", error);
    }
}

// Roep de functie aan zodra de pagina laadt
fetchMessages();


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}