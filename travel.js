/* ------------------------------------------------------------------
   TRAVEL MAP (Notes page)
   To add a place, copy one line in `places`, paste it, and change it:
     ["Name", "Country", latitude, longitude]
   Add a fifth item "up" for a trip that has not happened yet:
     ["Mexico City", "Mexico", 19.43, -99.13, "up"]
   United States: keep it to one dot per state.
   Find coordinates by searching "<city> coordinates" on any search engine.
------------------------------------------------------------------- */
const places = [
  // Asia
  ["Kolkata", "India", 22.57, 88.36],
  ["Puri", "India", 19.81, 85.83],
  ["Delhi", "India", 28.61, 77.21],
  ["Agra", "India", 27.18, 78.02],
  ["Rajasthan", "India", 26.91, 75.79],
  ["Sikkim", "India", 27.33, 88.61],
  ["Goa", "India", 15.3, 74.0],
  ["Hyderabad", "India", 17.38, 78.48],
  ["Andaman Islands", "India", 11.62, 92.73],
  ["Colombo", "Sri Lanka", 6.93, 79.86],
  ["Kandy", "Sri Lanka", 7.29, 80.64],
  ["Ella", "Sri Lanka", 6.87, 81.05],
  ["Yala", "Sri Lanka", 6.37, 81.5],
  ["Mirissa", "Sri Lanka", 5.95, 80.46],
  ["Bangkok", "Thailand", 13.76, 100.5],
  ["Chiang Mai", "Thailand", 18.79, 98.98],
  ["Krabi", "Thailand", 8.09, 98.91],
  ["Singapore", "Singapore", 1.35, 103.82],
  ["Istanbul", "Turkiye", 41.01, 28.98],
  ["Paphos", "Cyprus", 34.77, 32.43],
  // Africa
  ["Cairo", "Egypt", 30.04, 31.24],
  ["Alexandria", "Egypt", 31.2, 29.92],
  ["Luxor", "Egypt", 25.69, 32.64],
  ["Hurghada", "Egypt", 27.26, 33.81],
  ["Dar es Salaam", "Tanzania", -6.79, 39.21],
  ["Tunis", "Tunisia", 36.81, 10.18],
  ["Marrakesh", "Morocco", 31.63, -8.01],
  // Europe
  ["Paris", "France", 48.86, 2.35],
  ["Normandy", "France", 49.18, -0.37],
  ["Lyon", "France", 45.76, 4.84],
  ["Nice", "France", 43.7, 7.26],
  ["Marseille", "France", 43.3, 5.37],
  ["Monaco", "Monaco", 43.74, 7.42],
  ["Rome", "Italy", 41.9, 12.5],
  ["Pompeii", "Italy", 40.75, 14.49],
  ["Florence", "Italy", 43.77, 11.26],
  ["Tuscany", "Italy", 43.35, 11.1],
  ["Venice", "Italy", 45.44, 12.32],
  ["Milan", "Italy", 45.46, 9.19],
  ["Puglia", "Italy", 40.8, 17.1],
  ["Aberdeen", "UK", 57.15, -2.09],
  ["Edinburgh", "UK", 55.95, -3.19],
  ["London", "UK", 51.51, -0.13],
  ["Cork", "Ireland", 51.9, -8.47],
  ["Athens", "Greece", 37.98, 23.73],
  ["Aegina", "Greece", 37.75, 23.43],
  ["Mykonos", "Greece", 37.45, 25.33],
  ["Santorini", "Greece", 36.39, 25.46],
  ["Rhodes", "Greece", 36.43, 28.22],
  ["Amsterdam", "Netherlands", 52.37, 4.9],
  ["Barcelona", "Spain", 41.39, 2.17],
  ["Madrid", "Spain", 40.42, -3.7],
  ["Seville", "Spain", 37.39, -5.98],
  ["Cordoba", "Spain", 37.89, -4.78],
  ["Marbella", "Spain", 36.51, -4.89],
  ["Malaga", "Spain", 36.72, -4.42],
  ["Bilbao", "Spain", 43.26, -2.93],
  ["San Sebastian", "Spain", 43.32, -1.98],
  ["Lisbon", "Portugal", 38.72, -9.14],
  ["Porto", "Portugal", 41.15, -8.61],
  ["Algarve", "Portugal", 37.02, -7.93],
  ["Munich", "Germany", 48.14, 11.58],
  ["Berlin", "Germany", 52.52, 13.4],
  ["Vienna", "Austria", 48.21, 16.37],
  ["Prague", "Czech Republic", 50.08, 14.44],
  ["Geneva", "Switzerland", 46.2, 6.14],
  ["Zurich", "Switzerland", 47.37, 8.54],
  ["Reykjavik", "Iceland", 64.15, -21.94],
  // Americas
  ["New York", "USA", 40.71, -74.01],
  ["Connecticut", "USA", 41.6, -72.7],
  ["Massachusetts", "USA", 42.36, -71.06],
  ["Pennsylvania", "USA", 39.95, -75.17],
  ["Washington DC", "USA", 38.9, -77.04],
  ["Georgia", "USA", 32.08, -81.09],
  ["Florida", "USA", 25.76, -80.19],
  ["Michigan", "USA", 42.96, -85.67],
  ["Illinois", "USA", 41.88, -87.63],
  ["Colorado", "USA", 40.01, -105.27],
  ["Utah", "USA", 40.76, -111.89],
  ["Arizona", "USA", 36.1, -112.1],
  ["Nevada", "USA", 36.17, -115.14],
  ["California", "USA", 36.8, -119.4],
  ["Nassau", "Bahamas", 25.05, -77.35],
  ["Cartagena", "Colombia", 10.39, -75.48],
  ["Santa Marta", "Colombia", 11.24, -74.2],
  ["Bogota", "Colombia", 4.71, -74.07],
  ["Medellin", "Colombia", 6.24, -75.58],
  ["Salento", "Colombia", 4.64, -75.57],
  ["Sao Paulo", "Brazil", -23.55, -46.63],
  ["Rio de Janeiro", "Brazil", -22.91, -43.17],
  ["Iguazu Falls", "Brazil and Argentina", -25.69, -54.44],
  ["San Pedro de Atacama", "Chile", -22.91, -68.2],
  ["Uyuni", "Bolivia", -20.46, -66.83],
  ["Mexico City", "Mexico", 19.43, -99.13, "up"],
  ["Quito", "Ecuador", -0.18, -78.47, "up"],
  // Oceania
  ["Sydney", "Australia", -33.87, 151.21]
];

/* ---------- map code below. Nothing to edit. ---------- */
(function(){
  const W = 960, H = 430, S = 175, CX = 480, CY = 250;
  function project(lat, lon){            // Natural Earth projection
    const p = lat * Math.PI / 180, l = lon * Math.PI / 180;
    const p2 = p * p, p4 = p2 * p2;
    const x = l * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4)));
    const y = p * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4)));
    return [CX + S * x, CY - S * y];
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const pts = places.map(p => ({name:p[0], country:p[1], up:p[4]==="up", xy:project(p[2], p[3])}));
  const done = pts.filter(p => !p.up);
  const countries = new Set(done.map(p => p.country.split(" and ").join("|")).join("|").split("|"));
  const upCount = pts.length - done.length;

  document.querySelectorAll("[data-travel-map]").forEach(box => {
    const dots = pts.map((p,i) => `<g class="dot${p.up?" up":""}" data-i="${i}" tabindex="0" role="img" aria-label="${esc(p.name)}, ${esc(p.country)}${p.up?", upcoming":""}"><circle class="hit" cx="${p.xy[0].toFixed(1)}" cy="${p.xy[1].toFixed(1)}"/><circle class="pt" cx="${p.xy[0].toFixed(1)}" cy="${p.xy[1].toFixed(1)}"/></g>`).join("");
    const byCountry = {};
    pts.forEach(p => (byCountry[p.country] = byCountry[p.country] || []).push(p.name + (p.up ? " (upcoming)" : "")));
    const list = Object.keys(byCountry).sort().map(c => `<li><b>${esc(c)}</b> ${esc(byCountry[c].join(", "))}</li>`).join("");
    box.innerHTML = `<div class="tmap">
      <svg viewBox="0 0 ${W} ${H}" role="group" aria-label="World map of places I have been. Hover to send a plane flying.">
        <path class="land" d="${WORLD_PATH}"/>
        <path class="trail" d=""/>
        <g class="dots">${dots}</g>
        <polygon class="plane" points="11,0 -7,-6.5 -3,0 -7,6.5" opacity="0"/>
      </svg>
      <div class="tip" role="status"></div>
    </div>
    <p class="tcount">${done.length} places in ${countries.size} countries${upCount ? `, ${upCount} more coming up` : ""}.</p>
    <details class="tlist"><summary>See every place</summary><ul>${list}</ul></details>`;

    const wrap = box.querySelector(".tmap"), svg = wrap.querySelector("svg"), tip = wrap.querySelector(".tip");
    const plane = svg.querySelector(".plane"), trail = svg.querySelector(".trail");

    /* tooltip */
    function showTip(g){
      const p = pts[g.dataset.i];
      tip.textContent = p.name + ", " + p.country + (p.up ? " (upcoming)" : "");
      tip.style.left = (p.xy[0] / W * 100) + "%";
      tip.style.top = (p.xy[1] / H * 100) + "%";
      tip.classList.add("on");
    }
    svg.querySelectorAll(".dot").forEach(g => {
      g.addEventListener("pointerenter", () => showTip(g));
      g.addEventListener("focus", () => showTip(g));
      g.addEventListener("pointerleave", () => tip.classList.remove("on"));
      g.addEventListener("blur", () => tip.classList.remove("on"));
    });

    /* flying plane */
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let flying = false, raf = 0;
    function pick(){
      let a, b, d, tries = 0;
      do {
        a = done[Math.floor(Math.random() * done.length)];
        b = done[Math.floor(Math.random() * done.length)];
        d = Math.hypot(a.xy[0] - b.xy[0], a.xy[1] - b.xy[1]);
      } while ((d < 160 || d > 520) && ++tries < 40);
      return [a, b, d];
    }
    function fly(){
      if (!flying) return;
      const [a, b, d] = pick();
      const [x0, y0] = a.xy, [x1, y1] = b.xy;
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2 - d * 0.28;
      trail.setAttribute("d", `M${x0.toFixed(1)} ${y0.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)}`);
      const len = trail.getTotalLength();
      trail.style.strokeDasharray = len; trail.style.strokeDashoffset = len; trail.style.opacity = 1;
      plane.setAttribute("opacity", 1);
      const dur = 1500 + d * 3.2, t0 = performance.now();
      (function step(now){
        if (!flying) return;
        let t = Math.min(1, (now - t0) / dur);
        const e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;   // ease in-out
        const u = 1 - e;
        const x = u * u * x0 + 2 * u * e * cx + e * e * x1;
        const y = u * u * y0 + 2 * u * e * cy + e * e * y1;
        const dx = 2 * u * (cx - x0) + 2 * e * (x1 - cx), dy = 2 * u * (cy - y0) + 2 * e * (y1 - cy);
        const ang = Math.atan2(dy, dx) * 180 / Math.PI;
        const sc = 1 + 0.5 * Math.sin(Math.PI * e);                          // bigger mid-flight
        plane.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${ang.toFixed(1)}) scale(${sc.toFixed(2)})`);
        trail.style.strokeDashoffset = len * (1 - e);
        if (t < 1) raf = requestAnimationFrame(step);
        else { trail.style.opacity = 0; raf = setTimeout(fly, 350); }
      })(t0);
    }
    function start(){ if (reduce || flying) return; flying = true; fly(); }
    function stop(){ flying = false; cancelAnimationFrame(raf); clearTimeout(raf); plane.setAttribute("opacity", 0); trail.style.opacity = 0; }
    wrap.addEventListener("pointerenter", start);
    wrap.addEventListener("pointerleave", stop);
    wrap.addEventListener("click", () => flying ? stop() : start());  // tap on phones
  })
})();
