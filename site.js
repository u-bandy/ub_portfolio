/* ------------------------------------------------------------------
   ALL CONTENT LIVES IN THIS LIST.
   To add a project: copy one { ... }, block, paste it at the top of
   `items`, change the words, and commit. Newest first.
   Fields: when, title, role, outcome, link (optional, leave "" if none)
------------------------------------------------------------------- */
const EMAIL = "urbeebandy@gmail.com";
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // paste your Formspree URL here

const items = [
  {
    when: "2024 to 26",
    title: "Bulk Ingestion tool",
    role: "Senior Product Manager, led an 8+ person team",
    outcome: "Faster onboarding of new catalogs and labels, and less manual input for business users.",
    link: ""
  },
  {
    when: "2024 to 26",
    title: "Acquisition integration, Spain",
    role: "Senior Product Manager, led the technology integration",
    outcome: "Helped add $60M of top-line revenue and lift EBITDA from $2.5M to $6M. 1.4M tracks across 8,000 labels aligned, 117 people onboarded.",
    link: ""
  },
  {
    when: "2020 to 24",
    title: "Greenfield podcast product",
    role: "Product Manager on a new podcast distribution and analytics product",
    outcome: "Worked across creative, business and engineering. Its traction supported the case for acquisitions in podcast production.",
    link: ""
  }
];


/* ------------------------------------------------------------------
   THE LOG (Notes page). One block per hobby.
   To add something: copy one { ... }, line, paste it at the top of that
   section, and fill in title, sub (artist, place, date) and img (a file
   you uploaded to the repo, like "kyoto.jpg"). Leave img "" for no photo.
------------------------------------------------------------------- */
const log = [
  { section: "Recently read", items: [
    { title: "The Rachel Incident", sub: "Caroline O'Donoghue", img: "book-the-rachel-incident.jpg", cover: true },
    { title: "The Nix", sub: "Nathan Hill", img: "book-the-nix.jpg", cover: true },
    { title: "My Friends", sub: "Fredrik Backman", img: "book-my-friends.jpg", cover: true }
  ]},
  { section: "Currently listening", items: [
    { title: "Add a song or album", sub: "Artist", img: "" },
    { title: "Add another", sub: "Artist", img: "" }
  ]},
  { section: "Recently eaten", items: [
    { title: "Add a favourite meal", sub: "Restaurant, city", img: "" },
    { title: "Add another", sub: "Restaurant, city", img: "" }
  ]},
  { section: "Places I've been", map: true },
  { section: "Recently hiked", items: [
    { title: "Add a trail", sub: "Place, month", img: "" },
    { title: "Add another", sub: "Place, month", img: "" }
  ]}
];

/* ---------- rendering ---------- */
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
document.querySelectorAll("[data-work]").forEach(ul=>{
  const n = Number(ul.dataset.work) || items.length;
  ul.innerHTML = items.slice(0,n).map(i=>{
    const inner = `<span class="when">${esc(i.when)}</span><span><h3>${esc(i.title)}</h3>
      <p><b>${esc(i.role)}</b></p><p>${esc(i.outcome)}</p></span>`;
    return i.link
      ? `<li><a class="row" href="${esc(i.link)}" target="_blank" rel="noopener">${inner}</a></li>`
      : `<li><div class="row">${inner}</div></li>`;
  }).join("");
});


document.querySelectorAll("[data-log]").forEach(box=>{
  box.innerHTML = log.map(g=>`<h3 class="lbl">${esc(g.section)}</h3>`+(g.map?`<div data-travel-map></div>`:`<div class="tiles">`+
    g.items.map(i=>`<figure class="tile"><div class="pic${i.img?"":" empty"}${i.cover?" cover":""}">${i.img?`<img src="${esc(i.img)}" alt="${esc(i.title)}" loading="lazy">`:`<span>${esc(i.ph||"Add photo")}</span>`}</div><figcaption><b>${esc(i.title)}</b><span>${esc(i.sub)}</span></figcaption></figure>`).join("")+
    `</div>`)).join("");
});

/* ---------- copy email ---------- */
document.querySelectorAll("[data-copy-email]").forEach(btn=>{
  const label = btn.textContent;
  btn.addEventListener("click", async ()=>{
    try{ await navigator.clipboard.writeText(EMAIL); }
    catch(e){
      const t=document.createElement("textarea"); t.value=EMAIL; document.body.appendChild(t);
      t.select(); try{document.execCommand("copy")}catch(_){} t.remove();
    }
    btn.textContent = "Copied";
    setTimeout(()=>btn.textContent = label, 1600);
  });
});

/* ---------- theme toggle ---------- */
(function(){
  const root=document.documentElement;
  try{const s=localStorage.getItem("theme"); if(s) root.dataset.theme=s;}catch(e){}
  document.querySelectorAll("[data-theme-toggle]").forEach(b=>b.addEventListener("click",()=>{
    const dark = root.dataset.theme ? root.dataset.theme==="dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    root.dataset.theme = next;
    try{localStorage.setItem("theme",next)}catch(e){}
  }));
})();

/* ---------- message box (Formspree) ---------- */
const form = document.getElementById("msg");
if(form){
  const status = document.getElementById("status");
  form.addEventListener("submit", async e=>{
    e.preventDefault();
    if(form.querySelector(".hp input").value) return; // honeypot
    status.textContent = "Sending...";
    try{
      const r = await fetch(FORM_ENDPOINT,{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});
      if(r.ok){ form.reset(); status.textContent = "Got it, thanks."; }
      else throw new Error("bad response");
    }catch(err){
      status.textContent = "That did not send. Please email me instead.";
    }
  });
}
