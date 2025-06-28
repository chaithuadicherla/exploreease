// ✅ Travel + Modal + Weather Logic

const weatherAPIKey = "b17dec60ad93b8f81c4c29cf74d2c0f4";

// Show cards
async function showCards(items, containerId, withWeather = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (!items || !Array.isArray(items) || items.length === 0) {
    container.innerHTML = "<p>No data found.</p>";
    return;
  }

  for (const item of items) {
    const card = document.createElement("div");
    card.className = "card";

    let cardHTML = 
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      ${item.rating ? <p class="rating">${item.rating}</p> : ''}
      ${item.description ? <p class="description">${item.description}</p> : ''}
    ;

    if (withWeather) {
      cardHTML += <p class="weather">Loading weather...</p>;
    }

    card.innerHTML = cardHTML;

    if (withWeather) {
      const weatherEl = card.querySelector(".weather");
      try {
        const weather = await fetchWeather(item.name);
        weatherEl.textContent = 🌤 ${weather.temp}°C, ${weather.desc};
      } catch (error) {
        weatherEl.textContent = "Weather info unavailable.";
      }
    }

    card.addEventListener("click", () => {
      showModal(
        item.name,
        item.image,
        item.description || "Description not available."
      );
    });

    container.appendChild(card);
  }
}

// Fetch weather
async function fetchWeather(city) {
  const response = await fetch(
    https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${weatherAPIKey}
  );
  const data = await response.json();
  return {
    temp: data.main.temp,
    desc: data.weather[0].description
  };
}

// Modal logic
function showModal(title, imageUrl, description) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalImage").src = imageUrl;
  document.getElementById("modalDescription").textContent = description;
  document.getElementById("infoModal").style.display = "block";

  const query = encodeURIComponent(title + " ratings");
  const googleSearchUrl = https://www.google.com/search?q=${query};
  const ratingLink = document.getElementById("ratingLink");
  if (ratingLink) {
    ratingLink.href = googleSearchUrl;
    ratingLink.style.display = "inline-block";
  }
}

function closeModal() {
  document.getElementById("infoModal").style.display = "none";
}

if (document.getElementById("closeBtn")) {
  document.getElementById("closeBtn").addEventListener("click", closeModal);
}

// Load travel page
window.addEventListener("DOMContentLoaded", () => {
  const source = localStorage.getItem("source");
  const destination = localStorage.getItem("destination");

  if (document.getElementById("travel-route")) {
    if (!source || !destination) {
      document.body.innerHTML = "<p>Missing source or destination. Please go back and enter details.</p>";
      return;
    }

    document.getElementById("travel-route").textContent = Travel from ${source} to ${destination};

    const state = indianStates.find(s => s.name.toLowerCase() === destination.toLowerCase());

    if (state) {
      showCards(state.topDestinations, "destinations", true);
      showCards(state.famousFoods, "foods", false);

      const mapUrl = https://www.google.com/maps/dir/${encodeURIComponent(source)}/${encodeURIComponent(destination)};
      document.getElementById("mapLink").href = mapUrl;
    } else {
      document.getElementById("destinations").innerHTML = "<p>No data found for this state.</p>";
      document.getElementById("foods").innerHTML = "<p>No data found for this state.</p>";
    }
  }
});

// ✅ Authentication: Sign Up, Login, Dashboard

// Sign Up
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = this.username.value.trim();
    const email = this.email.value.trim();
    const password = this.password.value;

    if (localStorage.getItem(user_${email})) {
      alert("Account already exists! Please log in.");
      return;
    }

    const userData = {
      username,
      email,
      password,
      bookings: []
    };

    localStorage.setItem(user_${email}, JSON.stringify(userData));
    alert("Sign up successful! Please log in now.");
    window.location.href = "login.html";
  });
}

// Login
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = this.email.value.trim();
    const password = this.password.value;

    const userData = JSON.parse(localStorage.getItem(user_${email}));

    if (!userData) {
      alert("Account not found. Please sign up first.");
      return;
    }

    if (userData.password !== password) {
      alert("Incorrect password.");
      return;
    }

    localStorage.setItem("loggedInUser", email);
    alert("Login successful!");
    window.location.href = "dashboard.html";
  });
}

// Dashboard
if (document.getElementById("dashboard")) {
  const email = localStorage.getItem("loggedInUser");
  if (!email) {
    alert("Please log in first.");
    window.location.href = "login.html";
  } else {
    const userData = JSON.parse(localStorage.getItem(user_${email}));
    document.getElementById("username").textContent = userData.username;

    const bookingsDiv = document.getElementById("bookings");
    if (userData.bookings && userData.bookings.length > 0) {
      bookingsDiv.innerHTML = userData.bookings.map(b => <li>${b}</li>).join("");
    } else {
      bookingsDiv.innerHTML = "<p>No bookings found yet.</p>";
    }

    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html";
    });
  }
}
// ✅ Simple Booking Logic

function bookNow() {
  // For now, get customer name from prompt — you can replace this with a form later.
  const customerName = prompt("Enter your name for booking:");
  if (!customerName) {
    alert("Booking cancelled. Name is required.");
    return;
  }

  // Generate a simple booking ID
  const bookingID = "EE" + Date.now();

  // Save to localStorage for confirmation.html to read
  localStorage.setItem("customerName", customerName);
  localStorage.setItem("bookingID", bookingID);

  // Optionally save to user's bookings too if logged in
  const email = localStorage.getItem("loggedInUser");
  if (email) {
    const userData = JSON.parse(localStorage.getItem(`user_${email}`));
    if (userData) {
      userData.bookings.push(bookingID);
      localStorage.setItem(`user_${email}`, JSON.stringify(userData));
    }
  }

  // Redirect to confirmation page
  window.location.href = "confirmation.html";
}

// If you have a booking button, connect it here
const bookingBtn = document.getElementById("bookingBtn");
if (bookingBtn) {
  bookingBtn.addEventListener("click", bookNow);
}
