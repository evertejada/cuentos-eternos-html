// Modo oscuro
const toggleDarkMode = document.getElementById('toggleDarkMode');

toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Cambios de estilos en modo oscuro
const style = document.createElement('style');
style.innerHTML = `
  body.dark {
    background: linear-gradient(to bottom, #1e1e2f, #3d3d5c);
    color: #ffffff;
  }

  body.dark .header {
    background: rgba(0, 0, 0, 0.2);
  }

  body.dark .brand {
    color: #b6e3ff;
  }

  body.dark .menu a {
    color: #e4daff;
  }

  body.dark .btn.coral {
    background-color: #ff927b;
    color: white;
  }

  body.dark .btn.morado {
    background-color: #8e6bff;
    color: white;
  }
`;
document.head.appendChild(style);
