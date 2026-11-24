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
function automationId(aIdx) { return "auto-p" + aIdx; }
function automationCheckId(aIdx, cIdx) { return "auto-p" + aIdx + "-c" + cIdx; }

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

/* ---------- One-time migration: Nov 2026 Sprint 05 reshuffle ----------
   Status/check ids are index-based, so moving items between sprints would
   otherwise leave saved progress attached to the wrong card. Rate sheet +
   contract permanent links were merged and moved (with Migration Part 2,
   FloDesk domain verification and blog email blasts) into Buffer B1; the podcast blast went to
   Sprint 07. Remaps saved keys once per browser. */
(function migrateSprint05Reshuffle() {
  const FLAG = "optimind_dash_mig_2026_11_s05";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  function moveItem(from, to, checkMap) {
    if (from in oldSt) st[to] = oldSt[from];
    Object.keys(checkMap).forEach(function (c) {
      const k = from + "-c" + c;
      if (k in oldCk) ck[to + "-c" + checkMap[c]] = oldCk[k];
    });
  }
  function same(n) { const m = {}; for (let i = 0; i < n; i++) m[i] = i; return m; }
  Object.keys(oldSt).concat(Object.keys(oldCk)).forEach(function (k) {
    if (k.indexOf("s05-") === 0) { delete st[k]; delete ck[k]; }
  });
  // Combined permanent-links item: rate sheet's one check goes last; contracts' status wins.
  moveItem("s05-p0", "sB1-p0", { 0: 7 });
  moveItem("s05-p1", "sB1-p0", { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6 });
  moveItem("s05-p3", "sB1-p1", same(10));
  moveItem("s05-p6", "sB1-p2", same(10));
  moveItem("s05-p2", "s05-p0", same(10));
  moveItem("s05-p5", "s05-p1", same(10));
  moveItem("s05-p7", "sB1-p3", same(10));
  moveItem("s05-p4", "s07-p12", same(10));
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Define the operations dashboard — Part 1" moved from
   Sprint 06 (index 10) to Buffer B1 (index 6); Sprint 06's index 11 shifts up. */
(function migrateOpsDashboardPart1() {
  const FLAG = "optimind_dash_mig_2026_11_s06_opsdash";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  [["s06-p10", "sB1-p6"], ["s06-p11", "s06-p10"]].forEach(function (pair) {
    const from = pair[0], to = pair[1];
    delete st[from];
    Object.keys(oldCk).forEach(function (k) { if (k.indexOf(from + "-c") === 0) delete ck[k]; });
  });
  [["s06-p10", "sB1-p6"], ["s06-p11", "s06-p10"]].forEach(function (pair) {
    const from = pair[0], to = pair[1];
    if (from in oldSt) st[to] = oldSt[from];
    Object.keys(oldCk).forEach(function (k) {
      if (k.indexOf(from + "-c") === 0) ck[to + k.slice(from.length)] = oldCk[k];
    });
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: Sprint 09's "Parent session adherence tracking" (index 0)
   merged into Sprint 08's "Create a system around Parent Sessions" (index 5);
   Sprint 09's remaining items shift up one. */
(function migrateParentSessionsMerge() {
  const FLAG = "optimind_dash_mig_2026_11_s09_parent";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  Object.keys(oldSt).concat(Object.keys(oldCk)).forEach(function (k) {
    if (k.indexOf("s09-") === 0) { delete st[k]; delete ck[k]; }
  });
  function moveItem(from, to, checkMap) {
    if (from in oldSt && !(to in oldSt)) st[to] = oldSt[from];
    Object.keys(oldCk).forEach(function (k) {
      if (k.indexOf(from + "-c") !== 0) return;
      const c = k.slice(from.length + 2);
      const nc = checkMap ? checkMap[c] : c;
      if (nc !== undefined) ck[to + "-c" + nc] = oldCk[k];
    });
  }
  moveItem("s09-p0", "s08-p5", { 0: 2, 1: 3 });
  moveItem("s09-p1", "s09-p0");
  moveItem("s09-p2", "s09-p1");
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Update the Contracts and the Welcome Email functionality"
   moved from Buffer B1 (index 7, last) to Sprint 06 (index 11, last). */
(function migrateContractsWelcomeEmail() {
  const FLAG = "optimind_dash_mig_2026_11_s06_contracts";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const from = "sB1-p7", to = "s06-p11";
  if (from in st) { st[to] = st[from]; delete st[from]; }
  Object.keys(ck).forEach(function (k) {
    if (k.indexOf(from + "-c") !== 0) return;
    ck[to + k.slice(from.length)] = ck[k];
    delete ck[k];
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Define the operations dashboard — Part 1"
   moved back from Buffer B1 (index 6, last) to Sprint 06 (index 12, last). */
(function migrateOpsDashboardPart1Back() {
  const FLAG = "optimind_dash_mig_2026_11_s06_opsdash_back";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const from = "sB1-p6", to = "s06-p12";
  if (from in st) { st[to] = st[from]; delete st[from]; }
  Object.keys(ck).forEach(function (k) {
    if (k.indexOf(from + "-c") !== 0) return;
    ck[to + k.slice(from.length)] = ck[k];
    delete ck[k];
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Cancellation & billing tracking document" moved from
   Sprint 06 (index 4) to Sprint 07 (index 13, last); Sprint 06's later items
   shift up one. */
(function migrateCancellationBilling() {
  const FLAG = "optimind_dash_mig_2026_11_s07_cancelbilling";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  const pairs = [["s06-p4", "s07-p13"]];
  for (let i = 5; i <= 12; i++) pairs.push(["s06-p" + i, "s06-p" + (i - 1)]);
  pairs.forEach(function (pair) {
    delete st[pair[0]];
    Object.keys(oldCk).forEach(function (k) { if (k.indexOf(pair[0] + "-c") === 0) delete ck[k]; });
  });
  pairs.forEach(function (pair) {
    const from = pair[0], to = pair[1];
    if (from in oldSt) st[to] = oldSt[from];
    Object.keys(oldCk).forEach(function (k) {
      if (k.indexOf(from + "-c") === 0) ck[to + k.slice(from.length)] = oldCk[k];
    });
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Independent backup, tested" moved from Sprint 06
   (index 1) to Sprint 08 (index 6, last); Sprint 06's later items shift up one. */
(function migrateIndependentBackup() {
  const FLAG = "optimind_dash_mig_2026_11_s08_backup";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  const pairs = [["s06-p1", "s08-p6"]];
  for (let i = 2; i <= 12; i++) pairs.push(["s06-p" + i, "s06-p" + (i - 1)]);
  pairs.forEach(function (pair) {
    delete st[pair[0]];
    Object.keys(oldCk).forEach(function (k) { if (k.indexOf(pair[0] + "-c") === 0) delete ck[k]; });
  });
  pairs.forEach(function (pair) {
    const from = pair[0], to = pair[1];
    if (from in oldSt) st[to] = oldSt[from];
    Object.keys(oldCk).forEach(function (k) {
      if (k.indexOf(from + "-c") === 0) ck[to + k.slice(from.length)] = oldCk[k];
    });
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Birthday tracking — clients & employees (manual, phase 1)"
   moved from Sprint 06 (index 0) to Sprint 07 (index 14, last); Sprint 06's
   later items shift up one. */
(function migrateBirthdayTracking() {
  const FLAG = "optimind_dash_mig_2026_11_s07_birthday";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  const pairs = [["s06-p0", "s07-p14"]];
  for (let i = 1; i <= 11; i++) pairs.push(["s06-p" + i, "s06-p" + (i - 1)]);
  pairs.forEach(function (pair) {
    delete st[pair[0]];
    Object.keys(oldCk).forEach(function (k) { if (k.indexOf(pair[0] + "-c") === 0) delete ck[k]; });
  });
  pairs.forEach(function (pair) {
    const from = pair[0], to = pair[1];
    if (from in oldSt) st[to] = oldSt[from];
    Object.keys(oldCk).forEach(function (k) {
      if (k.indexOf(from + "-c") === 0) ck[to + k.slice(from.length)] = oldCk[k];
    });
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Cancellation & billing tracking document" moved on from
   Sprint 07 (index 13) to Sprint 08 (index 7, last); Sprint 07's index 14
   shifts up one. */
(function migrateCancellationBillingS08() {
  const FLAG = "optimind_dash_mig_2026_11_s08_cancelbilling";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  const pairs = [["s07-p13", "s08-p7"], ["s07-p14", "s07-p13"]];
  pairs.forEach(function (pair) {
    delete st[pair[0]];
    Object.keys(oldCk).forEach(function (k) { if (k.indexOf(pair[0] + "-c") === 0) delete ck[k]; });
  });
  pairs.forEach(function (pair) {
    const from = pair[0], to = pair[1];
    if (from in oldSt) st[to] = oldSt[from];
    Object.keys(oldCk).forEach(function (k) {
      if (k.indexOf(from + "-c") === 0) ck[to + k.slice(from.length)] = oldCk[k];
    });
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Capture outreach efforts for each resource" moved from
   Sprint 06 (index 4) to Sprint 08 (index 8, last); Sprint 06's later items
   shift up one. */
(function migrateOutreachCapture() {
  const FLAG = "optimind_dash_mig_2026_11_s08_outreach";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  const pairs = [["s06-p4", "s08-p8"]];
  for (let i = 5; i <= 10; i++) pairs.push(["s06-p" + i, "s06-p" + (i - 1)]);
  pairs.forEach(function (pair) {
    delete st[pair[0]];
    Object.keys(oldCk).forEach(function (k) { if (k.indexOf(pair[0] + "-c") === 0) delete ck[k]; });
  });
  pairs.forEach(function (pair) {
    const from = pair[0], to = pair[1];
    if (from in oldSt) st[to] = oldSt[from];
    Object.keys(oldCk).forEach(function (k) {
      if (k.indexOf(from + "-c") === 0) ck[to + k.slice(from.length)] = oldCk[k];
    });
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Set up 6-month lead nurture email workflow" moved from
   Sprint 06 (index 4) to Sprint 09 (index 2, last); Sprint 06's later items
   shift up one. */
(function migrateLeadNurture() {
  const FLAG = "optimind_dash_mig_2026_11_s09_nurture";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  const pairs = [["s06-p4", "s09-p2"]];
  for (let i = 5; i <= 9; i++) pairs.push(["s06-p" + i, "s06-p" + (i - 1)]);
  pairs.forEach(function (pair) {
    delete st[pair[0]];
    Object.keys(oldCk).forEach(function (k) { if (k.indexOf(pair[0] + "-c") === 0) delete ck[k]; });
  });
  pairs.forEach(function (pair) {
    const from = pair[0], to = pair[1];
    if (from in oldSt) st[to] = oldSt[from];
    Object.keys(oldCk).forEach(function (k) {
      if (k.indexOf(from + "-c") === 0) ck[to + k.slice(from.length)] = oldCk[k];
    });
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: "Create a system around Parent Sessions" moved from
   Sprint 08 (index 5) to Sprint 07 (index 14, last); Sprint 08's later items
   shift up one. */
(function migrateParentSessionsS07() {
  const FLAG = "optimind_dash_mig_2026_11_s07_parentsessions";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  const pairs = [["s08-p5", "s07-p14"]];
  for (let i = 6; i <= 8; i++) pairs.push(["s08-p" + i, "s08-p" + (i - 1)]);
  pairs.forEach(function (pair) {
    delete st[pair[0]];
    Object.keys(oldCk).forEach(function (k) { if (k.indexOf(pair[0] + "-c") === 0) delete ck[k]; });
  });
  pairs.forEach(function (pair) {
    const from = pair[0], to = pair[1];
    if (from in oldSt) st[to] = oldSt[from];
    Object.keys(oldCk).forEach(function (k) {
      if (k.indexOf(from + "-c") === 0) ck[to + k.slice(from.length)] = oldCk[k];
    });
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* One-time migration: Sprint 07's "Automate parent-session reminders & reschedule
   follow-ups" (index 0) and "Create a system around Parent Sessions" (index 14,
   last) merged into one card at index 0. The two overlapping step pairs count as
   checked only if both were. */
(function migrateParentSessionsMergeS07() {
  const FLAG = "optimind_dash_mig_2026_11_s07_parentmerge";
  try { if (localStorage.getItem(FLAG)) return; } catch (e) { return; }
  const st = loadJSON(LS_STATUS), ck = loadJSON(LS_CHECKS);
  const oldSt = Object.assign({}, st), oldCk = Object.assign({}, ck);
  const A = "s07-p0", B = "s07-p14";
  const a = oldSt[A] || "planned", b = oldSt[B] || "planned";
  delete st[A]; delete st[B];
  Object.keys(oldCk).forEach(function (k) {
    if (k.indexOf(A + "-c") === 0 || k.indexOf(B + "-c") === 0) delete ck[k];
  });
  const merged = a === b ? a : (a === "blocked" || b === "blocked") ? "blocked" : "progress";
  if (merged !== "planned") st[A] = merged;
  function was(id, c) { return !!oldCk[id + "-c" + c]; }
  [was(B, 0), was(B, 1), was(A, 0), was(A, 2) && was(B, 2), was(A, 1) && was(B, 3),
   was(B, 4), was(A, 3), was(B, 5), was(B, 6)].forEach(function (on, i) {
    if (on) ck[A + "-c" + i] = true;
  });
  saveJSON(LS_STATUS, st); saveJSON(LS_CHECKS, ck);
  try { localStorage.setItem(FLAG, "1"); } catch (e) {}
})();

/* ---------- Backup / Restore ---------- */
const BACKUP_KEYS = [LS_STATUS, LS_CHECKS, LS_RECS, "optimind_dash_sopchecks", "optimind_dash_onboardchecks", "optimind_dash_clients", "optimind_dash_clientdocs", "optimind_dash_docmeta"];

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
    (b.priorities || []).forEach(function (p, pIdx) {
      totalItems++;
      const st = getStatus(priorityId(b.id, pIdx));
      if (st === "complete") completeItems++;
      if (st === "progress") inProgressItems++;
      if (st === "blocked") blockedItems++;
      (p.doneWhen || []).forEach(function (_, cIdx) {
        totalChecks++;
        if (getCheck(checkId(b.id, pIdx, cIdx))) doneChecks++;
      });
    });
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
    leads: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    diagnostic: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14"/></svg>',
    automation: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>',
    recommendations: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    clientresources: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5.5C4 4.67 4.67 4 5.5 4H11a2 2 0 012 2v14a2 2 0 00-2-2H4V5.5zM20 5.5c0-.83-.67-1.5-1.5-1.5H13a2 2 0 00-2 2v14a2 2 0 012-2h7V5.5z"/></svg>',
    sops: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 7h6m-6 4h6"/></svg>',
    archive: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7.5V6a1 1 0 011-1h16a1 1 0 011 1v1.5M3 7.5h18M3 7.5V18a1 1 0 001 1h16a1 1 0 001-1V7.5M10 12h4"/></svg>'
  };
  return '' +
    '<aside class="sidebar">' +
    '  <div class="sb-brand"><div class="sb-logo">OptiMind</div><div class="sb-sub">Engagement Dashboard</div></div>' +
    '  <nav class="sb-nav">' +
    '    <div class="sb-label">Command</div>' +
    item("overview", "index.html", "Overview", ico.overview) +
    item("sprints", "sprints.html", "Sprints", ico.sprints) +
    item("leads", "leads.html", "Lead Workflow", ico.leads) +
    item("automation", "automation.html", "Automation", ico.automation) +
    item("sops", "sops.html", "SOPs", ico.sops) +
    item("archive", "archive.html", "Archive", ico.archive) +
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
