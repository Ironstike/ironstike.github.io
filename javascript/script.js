const fallbackLines = [
  "Now made with 90% more material design!",
  "404% more reliable than before.",
  "Probably not a virus.",
  "Warning: contains website.",
  "Built on tears and StackOverflow posts.",
  "It's not a bug, it's a feature.",
  "The problem is your computer, not mine",
  "Proudly hosted on someone’s cousin’s basement server.",
  "This site brought to you by low standards.",
  "So edgy it might cut your screen.",
  "Now supports teleportation (beta).",
  "Wow, such website, very design.",
  "Insert funny text here.",
  "Ew, is that a MacBook?",
  "Now, not broken on Firefox",
  "Congrats, you found the fun part of the internet.",
  "Now certified horse-friendly.",
  "Keyboard not found. Press F1 to continue.",
  "Tabs vs. Spaces: war never changes.",
  "Hello, world! …goodbye, sanity.",
  "Semicolons are optional, therapy isn’t.",
  "It worked yesterday.",
  "If it works, don’t touch it. If it doesn’t, reboot.",
  "Code fast, break stuff faster.",
  "JavaScript: where 0.1 + 0.2 = 0.30000000000000004."
];

function pickRandomLine(lines) {
  return lines[Math.floor(Math.random() * lines.length)];
}

fetch('file_cache/txt_docs/splash_text.txt')
  .then(response => {
    if (!response.ok) throw new Error("Network response not ok");
    return response.text();
  })
  .then(data => {
    const lines = data.split('\n').filter(line => line.trim() !== "");
    document.getElementById('splash').textContent = pickRandomLine(lines);
  })
  .catch(err => {
    console.warn('Using fallback splash texts:', err);
    document.getElementById('splash').textContent = pickRandomLine(fallbackLines);
  });
