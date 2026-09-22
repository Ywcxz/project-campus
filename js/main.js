/* ============================================================
   Project CAMPUS — Shared utilities
   Include on every page. Renders the spine nav from
   data/chapters.json so adding a chapter is a one-file edit.
   ============================================================ */

async function fetchChapters() {
  try {
    const res = await fetch("data/chapters.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("fetchChapters() failed:", err.message);
    return [];
  }
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function currentSlug() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  return file.replace(".html", "") === "" ? "index" : file.replace(".html", "");
}

function renderSpine(chapters) {
  const list = document.getElementById("spineList");
  if (!list) return;
  const here = currentSlug();

  list.innerHTML = chapters
    .map((ch) => {
      const isActive = ch.slug === here;
      const dotClass = ch.status === "available" ? "written" : "not-started";
      const inner = `
        <span class="spine-num">${pad2(ch.number)}</span>
        <span class="spine-title">${ch.title}</span>
        <span class="spine-dot ${dotClass}"></span>
      `;
      if (ch.slug) {
        return `<li class="spine-item${isActive ? " active" : ""}">
          <a href="${ch.slug}.html">${inner}</a>
        </li>`;
      }
      return `<li class="spine-item">
        <span class="disabled">${inner}</span>
      </li>`;
    })
    .join("");
}

function renderToc(chapters) {
  const el = document.getElementById("tocGrid");
  if (!el) return;
  el.innerHTML = chapters
    .map((ch) => {
      const written = ch.status === "available";
      const title = written
        ? `<a href="${ch.slug}.html">${ch.title}</a>`
        : ch.title;
      return `<div class="toc-row${written ? " is-written" : ""}">
        <span class="n">${pad2(ch.number)}</span>
        <span class="t">${title}</span>
        <span class="s">${written ? "Available" : "Not started"}</span>
      </div>`;
    })
    .join("");
}

function renderChapterNav(chapters) {
  const el = document.getElementById("chapterNav");
  if (!el) return;
  const here = currentSlug();
  const idx = chapters.findIndex((c) => c.slug === here);
  if (idx === -1) return;

  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;

  const prevHTML = prev
    ? prev.slug
      ? `<a href="${prev.slug}.html"><span class="dir">← Previous</span><span class="label">${prev.title}</span></a>`
      : `<span class="disabled"><span class="dir">← Previous</span><span class="label">${prev.title}</span></span>`
    : `<span></span>`;

  const nextHTML = next
    ? next.slug
      ? `<a class="next" href="${next.slug}.html"><span class="dir">Next →</span><span class="label">${next.title}</span></a>`
      : `<span class="disabled next"><span class="dir">Next</span><span class="label">${next.title} — not yet written</span></span>`
    : `<span></span>`;

  el.innerHTML = prevHTML + nextHTML;
}

function headingId(text, index) {
  const slug = text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "section";
  return `${slug}-${index + 1}`;
}

function initSectionAnchors() {
  document.querySelectorAll(".chapter h2").forEach((heading, index) => {
    if (!heading.id) heading.id = headingId(heading.textContent, index);
    if (heading.querySelector(".heading-anchor")) return;

    const anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = `#${heading.id}`;
    anchor.textContent = "#";
    anchor.setAttribute("aria-label", `Link to section: ${heading.textContent.trim()}`);
    anchor.title = "Link to this section";
    heading.append(anchor);
  });
}

function initTheme() {
  const root = document.documentElement;
  const queryTheme = new URLSearchParams(window.location.search).get("theme");
  const storedTheme = localStorage.getItem("campus-theme");
  const savedTheme = storedTheme === "ink" ? "dark" : storedTheme === "paper" ? "light" : storedTheme;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const forcedTheme = queryTheme === "ink" ? "dark" : queryTheme === "paper" ? "light" : queryTheme;
  const initialTheme = ["dark", "light"].includes(forcedTheme)
    ? forcedTheme
    : savedTheme || (prefersDark ? "dark" : "light");
  root.dataset.theme = initialTheme;

  const createToggle = (parent) => {
    if (!parent || parent.querySelector(".theme-toggle")) return;
    const toggle = document.createElement("button");
    toggle.className = "theme-toggle";
    toggle.type = "button";
    toggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      localStorage.setItem("campus-theme", nextTheme);
      updateToggleLabels();
    });
    parent.append(toggle);
  };

  const updateToggleLabels = () => {
    const darkMode = root.dataset.theme === "dark";
    document.querySelectorAll(".theme-toggle").forEach((toggle) => {
      toggle.textContent = "";
      toggle.dataset.icon = darkMode ? "☀" : "☾";
      toggle.setAttribute("aria-pressed", String(darkMode));
      toggle.setAttribute("aria-label", darkMode ? "Switch to Light Mode" : "Switch to Dark Mode");
      toggle.title = darkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
    });
  };

  createToggle(document.querySelector(".spine-head"));
  createToggle(document.querySelector(".topbar"));
  updateToggleLabels();
}

function initMobileSpine() {
  const toggle = document.getElementById("spineToggle");
  const spine = document.getElementById("spine");
  const backdrop = document.getElementById("spineBackdrop");
  if (!toggle || !spine || !backdrop) return;
  const open = () => { spine.classList.add("open"); backdrop.classList.add("open"); };
  const close = () => { spine.classList.remove("open"); backdrop.classList.remove("open"); };
  toggle.addEventListener("click", () => {
    spine.classList.contains("open") ? close() : open();
  });
  backdrop.addEventListener("click", close);
  spine.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  const chapters = await fetchChapters();
  renderSpine(chapters);
  renderToc(chapters);
  renderChapterNav(chapters);
  initSectionAnchors();
  initMobileSpine();
});
