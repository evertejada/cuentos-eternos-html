@import url('https://fonts.googleapis.com/css2?family=Alegreya:wght@700;800&family=Inter:wght@400;600&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to bottom, #E4DAFF, #B6E3FF);
  color: #3b3b5c;
}

header {
  background: #E4DAFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.logo {
  display: flex;
  align-items: center;
  font-family: 'Alegreya', serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #8E6BFF;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #3b3b5c;
  font-weight: 600;
}

.hero {
  text-align: center;
  padding: 100px 20px 120px;
  background: linear-gradient(to bottom, #E4DAFF, #B6E3FF, #8E6BFF);
}

.hero h1 {
  font-family: 'Alegreya', serif;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #3b3b5c; /* Color oscuro para mejor contraste */
}

.hero span {
  color: #FF927B;
  font-weight: bold;
}

.hero p {
  font-size: 1.2rem;
  color: #292944; /* Más oscuro, legible */
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.buttons button {
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.buttons .crear {
  background-color: #FF927B;
  color: white;
}

.buttons .crear:hover {
  background-color: #e77a67;
}

.buttons .explorar {
  background-color: #B6E3FF;
  color: #292944;
}

.buttons .explorar:hover {
  background-color: #a3d6f5;
}

.down-arrow {
  font-size: 2rem;
  color: white;
  margin-top: 3rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
