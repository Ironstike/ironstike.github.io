fetch('file_cache/txt_docs/splash_text.txt')
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n').filter(line => line.trim() !== "");
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    document.getElementById('splash').textContent = randomLine;
  })
  .catch(err => {
    console.error('Could not load splash texts:', err);
    document.getElementById('splash').textContent = "Static fallback splash.";
  });
