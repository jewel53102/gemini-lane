/* =========================================================================
   OPTIMIND DASHBOARD — SHARED APP LOGIC
   Sidebar, localStorage-backed status/progress tracking, stats.
   ========================================================================= */

const LS_STATUS = "optimind_dash_status";   // priority-item id -> status
const LS_CHECKS = "optimind_dash_checks";   // checkbox id -> true/false
const LS_RECS   = "optimind_dash_recstatus"; // rec number -> status

const STATUS_LABELS = { planned: "Planned", progress: "In Progress", complete: "Complete", blocked: "Blocked" };
const STATUS_CLASS   = { planned: "st-planned", progress: "st-progress", complete: "st-complete", blocked: "st-blocked" };

function priorityId(sprintId, pIdx) { return "s" + sprintId + "-p" + pIdx; }
function checkId(sprintId, pIdx, cIdx) { return "s" + sprintId + "-p" + pIdx + "-c" + cIdx; }

function loadJSON(key) {
  try { return JSON.parse(localStorage.getItem(key) || "{}"); }
  catch (e) { return {}; }
}
function saveJSON(key, obj) {
  try { localStorage.setItem(key, JSON.stringify(obj)); } catch (e) {}
}

function getStatus(id) {
  const store = loadJSON(LS_STATUS);
  return store[id] || "planned";
}
function setStatus(id, status) {
  const store = loadJSON(LS_STATUS);
  store[id] = status;
  saveJSON(LS_STATUS, store);
}
function getCheck(id) {
  const store = loadJSON(LS_CHECKS);
  return !!store[id];
}
function setCheck(id, val) {
  const store = loadJSON(LS_CHECKS);
  store[id] = val;
  saveJSON(LS_CHECKS, store);
}
function getRecStatus(n) {
  const store = loadJSON(LS_RECS);
  return store[n] || "planned";
}
function setRecStatus(n, status) {
  const store = loadJSON(LS_RECS);
  store[n] = status;
  saveJSON(LS_RECS, store);
}

/* ---------- Backup / Restore ---------- */
const BACKUP_KEYS = [LS_STATUS, LS_CHECKS, LS_RECS, "optimind_dash_sopchecks", "optimind_dash_onboardchecks", "optimind_dash_clients", "optimind_dash_clientdocs"];

function backupData() {
  const payload = { app: "optimind-dashboard", version: 1, exportedAt: new Date().toISOString(), data: {} };
  BACKUP_KEYS.forEach(function (k) { payload.data[k] = loadJSON(k); });
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "optimind-dashboard-backup-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast("Backup downloaded");
}

function restoreData(file) {
  const reader = new FileReader();
  reader.onload = function () {
    let payload;
    try { payload = JSON.parse(reader.result); }
    catch (e) { toast("Restore failed — not a valid backup file"); return; }
    if (!payload || typeof payload.data !== "object") { toast("Restore failed — not a valid backup file"); return; }
    BACKUP_KEYS.forEach(function (k) {
      if (payload.data[k] !== undefined) saveJSON(k, payload.data[k]);
    });
    toast("Restore complete — reloading");
    setTimeout(function () { location.reload(); }, 700);
  };
  reader.onerror = function () { toast("Restore failed — could not read file"); };
  reader.readAsText(file);
}

function handleRestoreInput(input) {
  if (input.files && input.files[0]) {
    if (confirm("This will overwrite current sprint, checklist and recommendation status with the backup file. Continue?")) {
      restoreData(input.files[0]);
    }
  }
  input.value = "";
}

/* ---------- Stats ---------- */
function computeStats() {
  let totalItems = 0, completeItems = 0, inProgressItems = 0, blockedItems = 0;
  let totalChecks = 0, doneChecks = 0;
  let totalCost = 0;

  SPRINTS.forEach(function (sprint) {
    totalCost += sprint.cost;
    sprint.priorities.forEach(function (p, pIdx) {
      totalItems++;
      const pid = priorityId(sprint.id, pIdx);
      const st = getStatus(pid);
      if (st === "complete") completeItems++;
      if (st === "progress") inProgressItems++;
      if (st === "blocked") blockedItems++;
      (p.doneWhen || []).forEach(function (_, cIdx) {
        totalChecks++;
        if (getCheck(checkId(sprint.id, pIdx, cIdx))) doneChecks++;
      });
    });
  });

  BUFFERS.forEach(function (b) {
    totalCost += b.cost;
  });

  let recsComplete = 0;
  RECOMMENDATIONS.forEach(function (r) {
    if (getRecStatus(r.n) === "complete") recsComplete++;
  });

  const todayStr = new Date().toISOString().slice(0, 10);
  let currentSprint = null;
  for (let i = 0; i < SPRINTS.length; i++) {
    if (todayStr >= SPRINTS[i].start && todayStr <= SPRINTS[i].end) { currentSprint = SPRINTS[i]; break; }
  }
  let currentBuffer = null;
  if (!currentSprint) {
    for (let i = 0; i < BUFFERS.length; i++) {
      if (todayStr >= BUFFERS[i].start && todayStr <= BUFFERS[i].end) { currentBuffer = BUFFERS[i]; break; }
    }
  }
  if (!currentSprint && !currentBuffer) {
    if (todayStr < SPRINTS[0].start) currentSprint = null;
    else if (todayStr > SPRINTS[SPRINTS.length - 1].end) currentSprint = null;
    else currentSprint = SPRINTS[SPRINTS.length - 1];
  }

  return {
    totalItems: totalItems, completeItems: completeItems, inProgressItems: inProgressItems, blockedItems: blockedItems,
    totalChecks: totalChecks, doneChecks: doneChecks,
    totalCost: totalCost, currentSprint: currentSprint, currentBuffer: currentBuffer,
    recsTotal: RECOMMENDATIONS.length, recsComplete: recsComplete
  };
}

/* ---------- Sidebar / topbar ---------- */
function initChrome(activePage, title, sub) {
  document.querySelectorAll(".sb-item").forEach(function (el) {
    if (el.dataset.page === activePage) el.classList.add("active");
  });
  const t = document.getElementById("topbar-title");
  if (t) t.textContent = title || "";
  const s = document.getElementById("topbar-sub");
  if (s) { s.textContent = sub || ""; s.style.display = sub ? "" : "none"; }
  const dateEl = document.getElementById("topbar-date");
  if (dateEl) dateEl.textContent = new Date().toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const sbDate = document.getElementById("sb-date");
  if (sbDate) sbDate.textContent = "OptiMind Educational Strategies";
}

function fmtMoney(n) { return "$" + n.toLocaleString("en-US"); }

function toast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
}

function sidebarHTML(active) {
  function item(page, href, label, icon) {
    const cls = "sb-item" + (page === active ? " active" : "");
    return '<a class="' + cls + '" href="' + href + '" data-page="' + page + '">' + icon + label + '</a>';
  }
  const ico = {
    overview: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke-width="2"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke-width="2"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke-width="2"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke-width="2"/></svg>',
    sprints: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M4 8h16M5 6h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z"/></svg>',
    diagnostic: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14"/></svg>',
    recommendations: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    clientresources: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5.5C4 4.67 4.67 4 5.5 4H11a2 2 0 012 2v14a2 2 0 00-2-2H4V5.5zM20 5.5c0-.83-.67-1.5-1.5-1.5H13a2 2 0 00-2 2v14a2 2 0 012-2h7V5.5z"/></svg>',
    sops: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 7h6m-6 4h6"/></svg>'
  };
  return '' +
    '<aside class="sidebar">' +
    '  <div class="sb-brand"><div class="sb-logo">OptiMind</div><div class="sb-sub">Engagement Dashboard</div></div>' +
    '  <nav class="sb-nav">' +
    '    <div class="sb-label">Command</div>' +
    item("overview", "index.html", "Overview", ico.overview) +
    item("sprints", "sprints.html", "Sprints", ico.sprints) +
    item("recommendations", "recommendations.html", "Audit Recommendations", ico.recommendations) +
    item("diagnostic", "diagnostic.html", "Audit Progress Tracking", ico.diagnostic) +
    item("sops", "sops.html", "SOPs", ico.sops) +
    item("clientresources", "client-resources.html", "Client Resources", ico.clientresources) +
    '  </nav>' +
    '  <div class="sb-actions">' +
    '    <button class="sb-action-btn" onclick="backupData()" title="Download a backup of sprint, checklist and recommendation status">&#8681; Backup</button>' +
    '    <button class="sb-action-btn" onclick="document.getElementById(\'sb-restore-input\').click()" title="Restore status from a backup file">&#8679; Restore</button>' +
    '  </div>' +
    '  <input type="file" id="sb-restore-input" accept="application/json" style="display:none" onchange="handleRestoreInput(this)">' +
    '  <div class="sb-footer" id="sb-date">OptiMind Educational Strategies</div>' +
    '</aside>';
}

function mountSidebar(active) {
  const mount = document.getElementById("sidebar-mount");
  if (mount) mount.outerHTML = sidebarHTML(active);
}
