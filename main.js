import { reactData } from "./data/react-data.js";

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const menuButtons = document.querySelectorAll(".menu-btn");
const mainLogo = document.getElementById("mainLogo");

const escapeHTML = (str) => {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

function displayResults(data, term = "") {
  resultsDiv.innerHTML = "";
  if (data.length === 0) {
    resultsDiv.innerHTML =
      "<p style='grid-column: 1/-1; text-align:center;'>Ma'lumot topilmadi...</p>";
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const highlight = (text) => {
      if (!term) return text;
      const regex = new RegExp(`(${term})`, "gi");
      return text.replace(
        regex,
        (match) =>
          `<mark style='background:#0ea5e9; color:white;'>${match}</mark>`,
      );
    };

    card.innerHTML = `
            <h3><span class="badge">${item.category}</span> ${highlight(item.title)}</h3>
            <p style="margin: 15px 0; color: #94a3b8; font-size: 14px;">${item.desc}</p>
            
            <div class="code-box">
                <p style="font-size: 11px; color: #64748b; margin-bottom: 5px;">KOD:</p>
                <pre><code>${escapeHTML(item.code)}</code></pre>
            </div>

            <div class="result-box">
                <p style="font-size: 11px; color: #64748b; margin-bottom: 5px;">NATIJA:</p>
                ${item.result}
            </div>

            <div style="margin-top: 15px; font-size: 13px;">
                <p>📌 <b>Reja:</b> ${item.reja}</p>
                <p style="color: #10b981;">📝 <b>Vazifa:</b> ${item.vazifa}</p>
            </div>
        `;
    resultsDiv.appendChild(card);
  });
}

function handleSearch(term) {
  const filtered = reactData.filter(
    (i) =>
      i.title.toLowerCase().includes(term.toLowerCase()) ||
      i.category.toLowerCase().includes(term.toLowerCase()) ||
      i.desc.toLowerCase().includes(term.toLowerCase()),
  );
  displayResults(filtered, term);
}

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    btn.classList.add("active");
    const cat = btn.getAttribute("data-category");
    cat === "all" ? displayResults(reactData) : handleSearch(cat);
  });
});

searchInput.addEventListener("input", (e) => handleSearch(e.target.value));

mainLogo.addEventListener("click", () => {
  searchInput.value = "";
  displayResults(reactData);
});

// Init
displayResults(reactData);
