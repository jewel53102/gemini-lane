/* =========================================================================
   OPTIMIND DASHBOARD — STATIC DATA
   Derived from OptiMind-Audit-Roadmap-and-Recommendations-v3.html
   Read-only reference data; live status/progress lives in localStorage.
   ========================================================================= */

const CLIENT = {
  name: "Sarah Ritter",
  business: "OptiMind Educational Strategies",
  preparedBy: "Ruby Groves, Gemini Lane",
  engagementStart: "2026-08-12",
  engagementEnd: "2027-01-26"
};

const SPRINTS = [
  {
    id: "01", dates: "Aug 12 – Aug 31, 2026", start: "2026-08-12", end: "2026-08-31",
    theme: "Onboarding & SOPs", bigRock: "Your new specialist has something to land on",
    cost: 2000, meetings: "Aug 12, 2–4pm ET · Aug 14, 11am–1pm ET",
    goal: "Your new specialist has something to land on, and two long-running irritations disappear.",
    priorities: [
      { badge: "1st Priority", title: "Minimum viable hire package", desc: "Role definition, client workflow written once, week-one schedule and a reference sheet — before her first week.", tag: "Rec 4, 9",
        doneWhen: [
          "A role definition exists on one page: which client types, session load, non-session responsibilities, and what stays with you.",
          "The client workflow is written once, end to end: intake → data collection → goal-setting → provider coordination → session cadence → graduation.",
          "A week-one schedule and a caseload ramp exist — how many clients by which week, and who.",
          "Onboarding process for new clients, or client hand-offs, is documented.",
          "A decision list exists: what she decides alone, what needs a conversation, what is always yours.",
          "A weekly one-to-one and a supervision slot are on the calendar before she starts.",
          "A reference sheet points to the client folder structure, forms and tools."
        ]},
      { badge: "2nd Priority", title: "Research notetaking software", desc: "Shortlist AI notetakers that write straight into the client record, ahead of the Sprint 02 decision.", tag: "Rec 3",
        doneWhen: [
          "A shortlist of notetaking software exists, evaluated against that requirement."
        ]},
      { badge: "3rd Priority", title: "Research CRM software", desc: "Shortlist practice-management platforms ahead of the Sprint 03 decision.", tag: "Rec 6",
        doneWhen: [
          "Multiple CRM systems are investigated, with a document comparing the benefits and drawbacks of each."
        ]},
      { badge: "4th Priority", title: "Research in-house employment contract drafting", desc: "Fractional HR Specialists quoted $2,000 to draft the new hire's employment contracts. Gemini Lane will research using ChatGPT and Claude whether these can be drawn up in-house first.", tag: "Part 1 §05",
        doneWhen: [
          "A list exists of every document a first hire actually requires: offer letter, employment agreement, and any state-required notices.",
          "Draft versions are produced using ChatGPT and Claude and reviewed for adequacy.",
          "A recommendation is given: draft in-house, or take the Fractional HR Specialists' $2,000 quote."
        ]},
      { badge: "5th Priority", title: "New-employer financial prep", desc: "Sarah's own conversation with her CPA — confirm unemployment insurance registration, workers' comp, and payroll setup for a first employee before her first paycheck. Not a Gemini Lane deliverable.", tag: "Part 1 §07",
        doneWhen: [
          "A conversation is had with your CPA about unemployment insurance registration and workers' comp requirements for a first employee.",
          "What's already handled by your current payroll service, versus what still needs to be set up, is confirmed.",
          "Everything needed is in place before her first paycheck."
        ]}
    ]
  },
  {
    id: "02", dates: "Sep 1 – Sep 8, 2026", start: "2026-09-01", end: "2026-09-08",
    theme: "Finalize and hire", bigRock: "Every SOP and onboarding document is final, and the new specialist walks into a written first week",
    cost: 1200, meetings: "Decision session — week of Aug 31 · Week One support, Sep 8–12",
    goal: "The SOP and onboarding set stops being a draft. Every open question is answered or explicitly parked, the documents go to Sarah\u2019s Google Drive as final, and the specialist hired Sep 4 starts the following week against a plan that already exists.",
    priorities: [
      { badge: "1st Priority", title: "Close every open question in the SOP and onboarding set", desc: "One working session against a single register of every TBD, placeholder and unresolved decision across the nineteen documents — answered, or explicitly parked with a named owner and date.", tag: "Rec 4, 10",
        doneWhen: [
          { text: "A single register lists every open question and outstanding to-do across the SOP and onboarding set, grouped by document, with an owner against each.", link: "OptiMind-Open-Items-Register.html" },
          { text: "Sarah has worked through the register in one sitting and given a decision on each item, or parked it with a date.", link: "OptiMind-Open-Items-Register.html", note: "In progress \u2014 22 of 72 answered Aug 31, covering the safety protocol, time off, communication norms, advocacy flagging and company email. 50 remain." },
          "Every parked item is visibly marked in the document itself, so a reader knows it is open rather than assuming it is settled.",
          { text: "The items requiring an attorney (non-compete, mandated-reporter status, EEO thresholds, record retention) are separated out and sent as one bundle, not one at a time.", link: "sops/Attorney-Review-Checklist.html", note: "Done \u2014 consolidated Aug 31 into the Attorney Review Checklist: sixteen questions in four groups, each with the document it blocks and the current working position." }
        ]},
      { badge: "2nd Priority", title: "Pre-hire paperwork ready to sign by Sep 4", desc: "Offer letter, employment agreement and confidentiality agreement carrying real terms — name, start date, compensation, schedule — not placeholders, before the offer goes out.", tag: "Rec 4",
        doneWhen: [
          { text: "Compensation structure and amount, pay frequency, schedule and start date are decided and written into the Offer Letter and Employment Agreement.", link: "onboarding/Offer-Letter.html" },
          { text: "The candidate\u2019s name and the acceptance deadline are filled in.", link: "onboarding/Offer-Letter.html" },
          { text: "Non-solicitation period, termination notice and the arbitration-vs-courts question are decided; the non-compete clause is either removed or attorney-reviewed before it is signed.", link: "onboarding/Employment-Agreement.html" },
          { text: "The Confidentiality & Data-Handling Agreement states the approved storage locations, the personal-device rule and the post-employment duration.", link: "onboarding/Confidentiality-and-Data-Handling-Agreement.html", note: "Storage locations named Aug 31 (Drive, Workspace, PandaDoc, Zoom, Calendly, JotForms). Personal-device rule and post-employment duration are still open \u2014 both attorney items." },
          "All three documents are exported clean, with no TBD markers visible to the candidate."
        ]},
      { badge: "3rd Priority", title: "Publish the finalized set to Google Drive", desc: "The whole SOP and onboarding library, final and versioned, in the folder structure Sarah will actually use — with anything still open clearly flagged rather than silently left blank.", tag: "Rec 4, 5",
        doneWhen: [
          { text: "The folder structure in the Internal Reference Sheet is confirmed by Sarah and built in Drive.", link: "sops/Internal-Reference-Sheet.html" },
          "Every document is exported to Drive in final form — PDF for anything signed or client-facing, editable for anything Sarah maintains.",
          "Documents with parked questions carry a visible \u2018open item\u2019 flag at the top, so the specialist never mistakes a gap for a rule.",
          "A single table of contents points to every document and states which are final and which are provisional.",
          "The stale OptiMind-SOPs-Export copy is retired, so there is only one live set."
        ]},
      { badge: "4th Priority", title: "Week One onboarding support (Sep 8–12)", desc: "Everything in the Week-One Onboarding Schedule — pre-day-one provisioning through the Day 5 one-to-one — supported directly by Gemini Lane.", tag: "Rec 4, 10",
        doneWhen: [
          { text: "Before day one: company email created with signature, Calendly seat with all four event types, calendar sync to Sarah, Zoom seat, document and client-file access granted, weekly one-to-one on the calendar.", link: "sops/Week-One-Onboarding-Schedule.html", note: "Email format confirmed as firstname@optimind-es.com. Calendar sync now follows the Calendar Access Procedure in the Internal Reference Sheet. The company phone line is still blocked on an attorney answer." },
          "Employment paperwork signed and filed before the first day, not during it.",
          { text: "Day 1–5 run as written: Role Definition walkthrough, Client Workflow and curriculum training, provider-coordination templates, three mock sessions, documentation practice, first one-to-one.", link: "sops/Week-One-Onboarding-Schedule.html" },
          "Every account and tool the specialist needs in week one is confirmed working before Sep 8, not discovered missing on the day.",
          "A short end-of-week debrief records what the schedule got wrong, so week two is corrected rather than repeated."
        ]},
      { badge: "5th Priority", title: "Caseload ramp curve, weeks 1–8", desc: "Replace the placeholder ramp table in the Week-One Onboarding Schedule with the real week-by-week hour targets, agreed with Sarah.", tag: "Rec 4",
        doneWhen: [
          { text: "A target billable-hours figure exists for each of weeks 1 through 8, ending at the confirmed ~30 hours.", link: "sops/Week-One-Onboarding-Schedule.html" },
          "Which clients Sarah hands off, and in which week, is named against the curve rather than left to be worked out later.",
          "The curve accounts for the mock-session and shadowing weeks that carry no billable load.",
          { text: "The Week-One Onboarding Schedule and the Role Definition both reflect the same numbers.", link: "sops/Role-Definition-and-Responsibilities.html" }
        ]},
      { badge: "6th Priority", title: "Client resource documents \u2014 inventory and draft the missing set", desc: "The Client Resources page lists twenty-five documents the specialist works from. Three of them exist. These are the forms and worksheets her caseload actually runs on.", tag: "Rec 4, 7",
        doneWhen: [
          { text: "Every client resource document is inventoried against what actually exists \u2014 today 3 of 25 have a file behind them.", link: "client-resources.html", note: "New-client set 12 documents, established-client set 11, plus the document-collection checklist." },
          { text: "The New Client Intake Form is confirmed as the live version, and whether it serves all three client types or only adults.", link: "forms/OptiMind-Adult-Intake-Form.html", note: "Filed under Adult, but listed as an all-client-types document \u2014 one of these is wrong." },
          { text: "The Parent Accountability Contract is finalized alongside the Parent Terms of Service, rather than duplicating it.", link: "sops/Parent-Terms-of-Service.html" },
          { text: "The rest of the all-client intake set is drafted: Time Account Spreadsheet, Client Set-up Sheet, Syllabus Form, School and Therapist Information Release Forms.", link: "sops/Client-Workflow-Intake-to-Graduation.html", note: "The release forms gate every provider conversation \u2014 without them the Client Workflow stalls at stage two." },
          { text: "The school-age set is drafted: School Info Form, Teacher Feedback Form, and the teacher and therapist email templates.", link: "sops/Role-Definition-and-Responsibilities.html", note: "The Role Definition has the specialist using these templates from week one." },
          { text: "The established-client worksheets are inventoried and prioritized by client type, with a target sprint against each.", link: "client-resources.html", note: "Middle & high school 7, college 3, adult 1 \u2014 none drafted yet. Not all of these belong in Sprint 02." },
          { text: "Every document that gets drafted is linked from the Client Resources page, so nothing exists only in a folder.", link: "client-resources.html" }
        ]},
      { badge: "7th Priority", title: "One-page data-handling policy", desc: "What's held, where it lives, who can access it — signed by the new hire before day one.", tag: "Rec 5",
        doneWhen: [
          "One page states what client data is held, where it lives, who can access it, and how long it is kept.",
          "The new specialist has signed against it.",
          "A note records which student-records obligations you have confirmed apply, and which are still open with an education attorney."
        ]}
    ]
  },
  {
    id: "03", dates: "Sep 9 – Sep 22, 2026", start: "2026-09-09", end: "2026-09-22",
    theme: "Buy back hours", bigRock: "The record of what has been taught leaves session notes, and the platform decision lands on Zoho One",
    cost: 3000, meetings: "TBD",
    goal: "The record of what has been taught stops living in session notes, client data finally has a tested backup, and the platform question is settled against Zoho One so the next sprint can build rather than shop.",
    priorities: [
      { badge: "1st Priority", title: "Zoho One — scope, licensing and fit decision", desc: "Zoho One is the named candidate for the practice platform. Test it against the six hard criteria with a real client file before the build sprint commits to it.", tag: "Rec 6",
        doneWhen: [
          "A written list exists of what the system must hold: contact and family details, intake responses, session history and notes, documents, service agreement, scheduling, invoicing, curriculum coverage, referral source, and dated deadlines attached to a client or case.",
          "Zoho One has been demoed with a real client file loaded — not a sales walkthrough — and tested against six criteria: one screen per client; replaces tools rather than adding one; handles minors and family units; supports migration; can hold a dated, reminding deadline against a client record; and exposes a documented API or native automation.",
          "Which Zoho applications are actually in scope is decided and written down — CRM, Bookings, Sign, Books, Notebook, Flow — rather than \u2018all of Zoho One\u2019.",
          "Licensing and seat cost for two users is confirmed in writing, with the data-processing terms read.",
          "You have an answer on whether HIPAA applies to you, since it changes the configuration and the price.",
          "A named fallback is recorded in case Zoho fails a hard criterion, so the build sprint is not blocked."
        ]},
      { badge: "2nd Priority", title: "Curriculum coverage tracker", desc: "Track what's been taught per client — sequence, modules covered, and a \"next up\" field, in one place.", tag: "Rec 7",
        doneWhen: [
          "The curriculum map exists: core sequence numbered, standalone modules listed and tagged, parent curriculum as its own parallel list.",
          "Every active client has a coverage record showing module, date delivered, who delivered it, and whether it was revisited.",
          "Each client record carries an intended \"next up\" module.",
          "It lives in one place and the whole picture is visible on one screen."
        ]},
      { badge: "3rd Priority", title: "Independent backup, tested", desc: "A sync service isn't a backup. Add one beyond Drive sync, and confirm it works by restoring a file.", tag: "Rec 5",
        doneWhen: [
          { text: "An independent backup of the client folder exists beyond Drive sync, and restoring one file has actually been tested.", note: "Escalated Aug 31 \u2014 the Data-Handling Policy now names Google Drive as the interim system of record, so this is the largest single risk in the data set until the dashboard lands. Cadence, restore verification and a target date are all still unset." }
        ]},
      { badge: "4th Priority", title: "How-to capture for SOP documentation", desc: "Step-by-step visual guides recorded once while the work is being done — Scribe or equivalent — so the written SOPs are backed by something a new hire can follow click by click.", tag: "Rec 4",
        doneWhen: [
          "A capture tool is selected — Scribe Pro Personal runs $25/seat/month annual, $35 monthly; the free tier is web-only with no desktop capture.",
          { text: "The recurring tasks worth capturing are listed first: booking through Calendly, running a session in Zoom, filing a session note, updating the curriculum tracker, sending the teacher and therapist templates, invoicing.", link: "sops/Client-Workflow-Intake-to-Graduation.html" },
          "Each captured guide is exported and linked from the SOP document it belongs to, rather than living only inside the tool.",
          { text: "A rule is written for who records a new guide when a process changes, so the library does not go stale the moment the engagement ends.", link: "sops/Organization-and-Labeling-Standards.html" }
        ]},
      { badge: "5th Priority", title: "Rate sheet", desc: "Turn the service-summary PDF into a live hosted link you update once, instead of re-exporting from Gamma each time.", tag: "Part 1 §02, Rec 13",
        doneWhen: [
          "The service summary lives at a permanent URL, and the follow-up email links to it rather than attaching a file."
        ]}
    ]
  },
  {
    id: "04", dates: "Sep 23 – Oct 6, 2026", start: "2026-09-23", end: "2026-10-06",
    theme: "Build Zoho One", bigRock: "Zoho One built and configured; session notes automated into it; the scheduling cycle written down",
    cost: 3000, meetings: "TBD",
    goal: "Zoho One is built and customized by Gemini Lane — most of the sprint goes here — and the session-notes chain is automated into it now that there is a record for notes to land in. The scheduling cycle, dashboard scope, advocacy tracking and analytics get worked out in parallel.",
    priorities: [
      { badge: "1st Priority", title: "Build and configure Zoho One", desc: "Gemini Lane builds and customizes Zoho One directly — CRM, Bookings, Sign and Flow — rather than Sarah building it personally. This takes most of the sprint.", tag: "Rec 6, 16",
        doneWhen: [
          "Zoho One is licensed and paid for at the agreed seat count, with the data terms read.",
          "Zoho CRM modules, layouts and client/family record structure are built and customized by Gemini Lane.",
          "Zoho Bookings is configured against the Calendly event types it replaces, and Zoho Sign against the agreements currently going through PandaDoc.",
          "Your existing client record structure is mapped to the platform's fields — on paper, before any data moves.",
          "A written decision records which of JotForms, PandaDoc, the leads spreadsheet and the billing spreadsheet it will replace, and when.",
          "Deadline handling is configured before any client data is entered: a deadline field or task type that attaches to a client record, carries an owner, and reminds ahead of the date."
        ]},
      { badge: "2nd Priority", title: "Automate the session-notes chain", desc: "One AI notetaker writes straight into the Zoho client record — recovers 2.3–5.3 hrs every week. Held until the platform exists, so the output has somewhere real to land.", tag: "Rec 3",
        doneWhen: [
          "One notetaker is selected and running on live sessions.",
          "Its output lands in the Zoho client record with no copy-paste step — including whether Zoho covers this natively before a separate tool is bought.",
          "The vendor has confirmed in writing that it does not train on session content, and has stated its retention period.",
          "The output arrives in your existing note structure, not a generic meeting summary.",
          "You have established what the current email-summary tool is, and under what data terms."
        ]},
      { badge: "3rd Priority", title: "Annual scheduling cycle & waitlist policy", desc: "Availability round, bridge block, four waitlist states, deposit and refund rule — one repeatable process.", tag: "Rec 1, 2",
        doneWhen: [
          "The annual cycle is written down and dated in the calendar: availability form out in early July with a locked deadline, placement round completed before term starts, and a standing bridge block of three or four recurring slots held outside the contested after-school window.",
          "Ranked preferences replace single-slot requests on the availability form.",
          "Placement offers are time-bound to 48 hours.",
          "New-year overflow routes to the second specialist by design.",
          "Four waitlist states are defined and written down — Placed, Offered, Priority, Open.",
          "The deposit amount, the credit-against-first-invoice rule, and the automatic refund window are stated in the service agreement.",
          "A stated check-in cadence exists so follow-up does not depend on remembering.",
          "The refer-out rule is written.",
          "The bridge offer is defined as its own bounded engagement.",
          "The whole cycle is documented as a repeatable process."
        ]},
      { badge: "4th Priority", title: "Define the operations dashboard", desc: "Scope the questions it must answer on one screen before building any widgets.", tag: "Rec 6, 8, 20",
        doneWhen: [
          "A written list of the questions it must answer on one screen.",
          "Each question is mapped to where the data will come from, and which are not yet capturable.",
          "A decision on whether it is built inside the platform, in a spreadsheet, or in a reporting tool."
        ]},
      { badge: "5th Priority", title: "Advocacy case tracking inside the CRM", desc: "Every statutory deadline entered against the client record — not a thirteenth, standalone system.", tag: "Rec 16",
        doneWhen: [
          "Every statutory and school deadline for every active case is entered in the CRM against the client record, as the prep date rather than the due date.",
          "Each deadline carries an owner and a reminder, and appears on the operations dashboard when it falls inside thirty days.",
          "A consistent subject-line prefix and label convention exists per case.",
          "Time is being logged against each case from the first one."
        ]},
      { badge: "6th Priority", title: "Basic analytics & channel tracking", desc: "GA + UTM tagging so a lead's source survives all the way to a booked consult.", tag: "Part 1 §03",
        doneWhen: [
          "Basic website analytics (Google Analytics or equivalent) is installed and confirmed working.",
          "Every outbound marketing link carries a UTM tag identifying its source.",
          "A booked consult can be traced back to the channel and, where applicable, the specific referral source that produced it."
        ]},
      { badge: "7th Priority", title: "College curriculum tracker", desc: "Build the college-counseling timeline and decision points into the CRM alongside the advocacy deadlines, keyed to each school's application deadline.", tag: "Rec 7, 16; Part 1 §01",
        doneWhen: [
          "Each college-counseling student's decision points and deadlines are entered against the client record in the CRM.",
          "Deadlines are keyed to the specific school's application date, with lead time, not a generic due date.",
          "These deadlines appear on the operations dashboard alongside advocacy deadlines when inside thirty days."
        ]},
      { badge: "8th Priority", title: "Goals tracking", desc: "A shared record of progress against each client's set goals — equally important as the curriculum tracker, but a separate workflow: what was taught vs. what it was meant to achieve.", tag: "Rec 14; Part 1 §01",
        doneWhen: [
          "Each client's goals from intake are entered against the client record.",
          "Progress is logged against each goal in a consistent place, not reconstructed from session notes.",
          "The record is in a form Sprint 08's feedback loop can pull a progress snapshot from."
        ]},
      { badge: "9th Priority", title: "Appointment reminders, case by case", desc: "Investigate how to automate appointment reminders on a case-by-case basis — via Calendly, Zoom, or a separate automation if neither supports it natively.", tag: "Part 1 §02",
        doneWhen: [
          "Confirmed whether Calendly or Zoom natively supports per-appointment reminders.",
          "If neither does, a separate automation is scoped to send reminders case by case.",
          "Instructions are documented in SOP Manual."
        ]}
    ]
  },
  {
    id: "05", dates: "Oct 7 – Oct 20, 2026", start: "2026-10-07", end: "2026-10-20",
    theme: "Pilot and pay", bigRock: "Platform piloted on real clients; billing goes self-service",
    cost: 2000, meetings: "TBD",
    goal: "The platform is customized and proving itself on real clients before anything is migrated, and invoicing stops being transcription.",
    priorities: [
      { badge: "1st Priority", title: "Run the next three new clients through it in parallel", desc: "New clients only, running alongside the current method. A go/no-go on migrating the caseload follows.", tag: "Rec 6",
        doneWhen: [
          "Three new clients have been fully onboarded through the platform: agreement, intake, scheduling, notes, invoice.",
          "A short list exists of what did not work, and whether each is a configuration problem or a product limitation.",
          "A go / no-go decision on migrating the existing caseload has been made and written down."
        ]},
      { badge: "2nd Priority", title: "Self-service card updates and automated invoicing", desc: "No more card numbers by phone; invoices generate from completed appointments, not a spreadsheet.", tag: "Rec 8",
        doneWhen: [
          "Clients update their own card through a secure link; no card number is ever taken by voice again.",
          "Invoices generate from completed appointments rather than from a spreadsheet.",
          "Automatic payment reminders and a stated late-fee schedule apply without a manual decision each month.",
          "ACH is published as the default option rather than offered on complaint.",
          "Cancellations and no-shows are being recorded as data — early cancellations, late cancellations, and reschedules are each logged as distinct outcomes, not lumped into one \"cancelled\" bucket, per the No-Show & Cancellation Policy."
        ]},
      { badge: "3rd Priority", title: "Review the QuickBooks tier and the subscription stack", desc: "Fifteen minutes with the CPA on whether the current tier is still the right one.", tag: "Rec 8",
        doneWhen: [
          "A decision on the QuickBooks tier, taken with your CPA.",
          "Any tool the platform has replaced is cancelled rather than left running.",
          "The Grammarly and Calendly line items are confirmed as monthly or annual."
        ]},
      { badge: "4th Priority", title: "Bookkeeping decision-making", desc: "Not a Gemini Lane deliverable — flagged here for your own awareness, and scheduled alongside the QuickBooks review above. Talk to your bookkeeper about moving to a monthly cadence and get a quote on what that would cost.", tag: "Part 1 §07",
        doneWhen: [
          "A conversation is had with your bookkeeper about the current balancing cadence.",
          "A quote is in hand for monthly bookkeeping.",
          "A decision is made on whether the cost is worth moving off the current cadence."
        ]},
      { badge: "5th Priority", title: "Set up the quarterly P&L review", desc: "Decided: quarterly, with your CPA/bookkeeper, replacing the annual-only cadence that let pricing and cost problems surface up to twelve months late. Not a Gemini Lane deliverable.", tag: "Part 1 §07",
        doneWhen: [
          "A quarterly P&L review is on the calendar with the CPA/bookkeeper.",
          "The first review is dated.",
          "Review results feed the pricing and cost decisions they're meant to inform."
        ]},
      { badge: "6th Priority", title: "Set up and test AI notetaking software", desc: "Configure the selected notetaker against the Zoho client record and run it on real sessions during the pilot, alongside the three new clients going through the platform.", tag: "Rec 3",
        doneWhen: [
          "The notetaker selected in Sprint 04 is configured and running on live sessions with the pilot clients.",
          "Its output lands in the Zoho client record with no copy-paste step.",
          "The output is checked against your existing note structure, not a generic meeting summary, and adjusted if it doesn't match.",
          "Any accuracy or formatting issues found during the pilot are logged and fixed before it runs on the full caseload."
        ]}
    ]
  },
  {
    id: "06", dates: "Nov 4 – Nov 17, 2026", start: "2026-11-04", end: "2026-11-17",
    theme: "Migrate the caseload", bigRock: "Existing caseload migration begins",
    cost: 2500, meetings: "TBD",
    goal: "The migration finally starts — over a term break, in two halves, with your new specialist taking a share of it.",
    priorities: [
      { badge: "1st Priority", title: "Migrate the existing caseload — first half", desc: "Over a term break, in two halves, not one weekend. Your new hire can take a share as a way to learn the base.", tag: "Rec 6",
        doneWhen: [
          "Half the active caseload is fully live on the platform, with history, documents and curriculum coverage carried over.",
          "Nothing is being maintained in two places for those clients.",
          "A written issues list from the first half is applied before the second."
        ]}
    ]
  },
  {
    id: "07", dates: "Nov 18 – Dec 1, 2026", start: "2026-11-18", end: "2026-12-01",
    theme: "One record, everything in it", bigRock: "Caseload migrated; four tools retired",
    cost: 3000, meetings: "TBD",
    goal: "The migration finishes, the old tools get switched off, and the dashboard gets built on top.",
    priorities: [
      { badge: "1st Priority", title: "Finish the migration and retire the replaced tools", desc: "Whole caseload live; JotForms, PandaDoc and two spreadsheets cancelled — roughly $670/yr recovered.", tag: "Rec 6",
        doneWhen: [
          "The whole caseload is live on the platform.",
          "JotForms, PandaDoc and the two spreadsheets are cancelled or archived — roughly $670 a year recovered.",
          "Nothing is being entered in two places."
        ]},
      { badge: "2nd Priority", title: "Build the first draft of the operations dashboard", desc: "Built to the Sprint 03 question list. First draft only — expect to cut half the widgets after a month.", tag: "Rec 8, 20",
        doneWhen: [
          "A single screen answers the questions defined in Sprint 03, refreshing without manual entry.",
          "It is bookmarked and checked at a set time each week.",
          "A note records which questions could not be answered yet."
        ]},
      { badge: "3rd Priority", title: "Research automation tool", desc: "Evaluate native platform automation vs. a dedicated tool, against CRM and dashboard integration. Decision lands in Sprint 07.", tag: "Rec 6, Part 1 §02",
        doneWhen: [
          "A shortlist of automation tools is investigated — native platform automation versus a dedicated tool — evaluated against CRM and dashboard integration."
        ]}
    ]
  },
  {
    id: "08", dates: "Dec 2 – Dec 15, 2026", start: "2026-12-02", end: "2026-12-15",
    theme: "The referral engine", bigRock: "Your best channel finally has a system",
    cost: 2500, meetings: "TBD",
    goal: "Your best channel finally gets a system, a cadence and a number attached to it.",
    priorities: [
      { badge: "1st Priority", title: "Build and populate the referral register", desc: "One record per provider or school. Ninety percent of closed business currently runs on memory alone.", tag: "Rec 11",
        doneWhen: [
          "One record per provider, school or practice, inside the platform.",
          "Each holds: organisation and individual, relationship type, last contact, next planned contact, clients referred, clients closed, and revenue attributed to date.",
          "Every record has a named relationship owner."
        ]},
      { badge: "2nd Priority", title: "Set the tiers and the touch cadence", desc: "Active, Proven, Prospective — contact stops depending on you remembering.", tag: "Rec 11",
        doneWhen: [
          "Active — providers on a shared client now: billable coordination meetings on a set rhythm.",
          "Proven — anyone who has sent a client that closed: quarterly contact, never allowed to go quiet.",
          "Prospective — practices and schools with no relationship yet: a target number of introductions per month.",
          "Reminders are automated, not mental."
        ]},
      { badge: "3rd Priority", title: "Systematise the treat deliveries", desc: "Standing budget, rotating list, per-recipient cap confirmed once with counsel.", tag: "Rec 11",
        doneWhen: [
          "A standing monthly budget, a rotating list, and a recurring calendar block to place the orders.",
          "Deliveries anchored to natural moments.",
          "A written per-recipient annual cap, confirmed once with counsel.",
          "Every delivery logged against the register record."
        ]},
      { badge: "4th Priority", title: "Choose automation tool, map workflows", desc: "The decision, plus mapping every process the tool will touch before anything gets built.", tag: "Rec 6, Part 1 §02",
        doneWhen: [
          "A written workflow map exists: every process to be automated, its trigger, its steps.",
          "One automation tool is chosen and tested end to end before commitment.",
          "The intake form → client folder pipeline is confirmed as native or as workflow one.",
          "A build order is set, cheapest and least risky first.",
          "Every workflow has a named owner and a documented trigger.",
          "The build itself is scoped and quoted as outside work with a fixed acceptance test."
        ]},
      { badge: "5th Priority", title: "Build workflow one — the onboarding sequence", desc: "Agreement, intake, scheduling and forms all fire from a single trigger.", tag: "Rec 6, Part 1 §06",
        doneWhen: [
          "Agreement, intake scheduling, forms and client-record creation fire from one trigger.",
          "Agreement reminders are automatic.",
          "You have run one new client through it end to end without touching anything manually.",
          "It is documented in the workflow map with a named owner."
        ]}
    ]
  },
  {
    id: "09", dates: "Dec 30, 2026 – Jan 12, 2027", start: "2026-12-30", end: "2027-01-12",
    theme: "Close the loops", bigRock: "Feedback, follow-up and parent sessions run themselves",
    cost: 2000, meetings: "TBD",
    goal: "The things that currently depend on you remembering stop depending on you remembering.",
    priorities: [
      { badge: "1st Priority", title: "Turn on revenue attribution by referral source", desc: "Carry the referral tag all the way through to closed revenue, not just the initial consult.", tag: "Rec 11, 12",
        doneWhen: [
          "Every new client is tagged to a referral source at consult, and that tag survives to closed revenue.",
          "The register shows revenue attributed per source.",
          "A first read is scheduled for Sprint 10."
        ]},
      { badge: "2nd Priority", title: "Build the feedback loop", desc: "Automatic check at session eight and term end. Positive → review request; lukewarm → straight to you.", tag: "Rec 14",
        doneWhen: [
          "A short check fires automatically at session eight and at each term end.",
          "Positive responses route to a public review request; anything lukewarm routes straight to you.",
          "Parents receive a progress snapshot built from goal-tracker data."
        ]},
      { badge: "3rd Priority", title: "Three-touch follow-up for leads who go quiet", desc: "Automated day 2 / 7 / 21 sequence — \"very leaky\" today, by Sarah's own description.", tag: "Rec 13",
        doneWhen: [
          "An automated sequence runs at roughly day 2, day 7 and day 21 after a consult.",
          "A seasonal re-approach exists for leads that went quiet more than a term ago.",
          "Nothing in the sequence requires you to remember anything."
        ]},
      { badge: "4th Priority", title: "Make parent sessions a term of service", desc: "Written into the agreement for under-18 clients — a requirement is enforceable, a request isn't.", tag: "Rec 15",
        doneWhen: [
          "For clients under a set age, a three-weekly parent session is written into the service agreement.",
          "The whole term is booked at signature rather than one session at a time."
        ]},
      { badge: "5th Priority", title: "Parent session adherence tracking", desc: "Once it's a contract term, make sure it's kept: automatic reminders and a rebooking prompt whenever a parent session is missed.", tag: "Rec 15",
        doneWhen: [
          "Automatic reminders go out ahead of each scheduled parent session.",
          "A missed parent session automatically triggers a rebooking prompt."
        ]},
      { badge: "6th Priority", title: "Build the cold-lead pre-qualification funnel", desc: "Lower priority. An explainer + landing page so cold leads self-qualify before thirty minutes with you.", tag: "Rec 21, Part 1 §03",
        doneWhen: [
          "A short explainer exists covering what the work is, who it's for, and what it costs.",
          "A landing page hosts the explainer with a Calendly link to the consult beneath it.",
          "Cold-lead inquiries route to the landing page automatically before a consult is booked."
        ]},
      { badge: "7th Priority", title: "Scope the custom operations dashboard", desc: "Requirements + API access confirmed (CRM, QuickBooks, Calendly). Build starts next sprint.", tag: "Sprint 06 → 09",
        doneWhen: [
          "A written list exists of what actually got used from the Sprint 06 dashboard versus what got ignored.",
          "API access is confirmed for each data source in scope: the CRM, QuickBooks, Calendly, and any others identified.",
          "A wireframe exists for scheduling by day, and missed opportunities.",
          "A build approach and rough cost are scoped."
        ]},
      { badge: "8th Priority", title: "ChatGPT training", desc: "One-hour session for Sarah and her husband on Projects and Markdown files, so the two businesses' chats stop getting jumbled together.", tag: "Part 1 §06",
        doneWhen: [
          "A one-hour training session is held with both Sarah and her husband.",
          "Separate Projects exist for each business, with chats filed into the correct one going forward.",
          "Both of them can explain how Markdown files and Projects keep the two businesses' information apart."
        ]}
    ]
  },
  {
    id: "10", dates: "Jan 13 – Jan 26, 2027", start: "2027-01-13", end: "2027-01-26",
    theme: "Definition and evidence", bigRock: "Graduation defined; outcome baseline started",
    cost: 2000, meetings: "TBD",
    goal: "What \"finished\" means gets defined, and the clock starts on outcome data.",
    priorities: [
      { badge: "1st Priority", title: "Define graduation and the maintenance tier", desc: "Written progress criteria, a standard weaning schedule, and a lower-cadence tier for clients who want to stay.", tag: "Rec 10",
        doneWhen: [
          "Written progress criteria define when a client is ready to step down.",
          "A standard weaning schedule exists — goals met, four weeks at once weekly, discharge with a written summary.",
          "A maintenance tier exists at a lower cadence.",
          "Discharge has a positive ritual."
        ]},
      { badge: "2nd Priority", title: "Start the outcome data baseline", desc: "Can't be collected retroactively — choose two or three measures and start now, publish years from now.", tag: "Rec 19",
        doneWhen: [
          "Two or three measures are chosen and will not change.",
          "Baseline collection is running for every new client, and for existing clients where possible.",
          "A consent clause covering aggregate, de-identified use is in the service agreement.",
          "A review point is set for twelve months out, not sooner."
        ]},
      { badge: "3rd Priority", title: "Write down the numbers the plan is missing", desc: "Trailing twelve-month revenue and net margin, from the CPA — without them, the $400K model is guesswork.", tag: "Part 1 §07",
        doneWhen: [
          "Actual revenue and net margin for the trailing twelve months are written down.",
          "It is settled whether \"net $400,000\" means profit after payroll or revenue through the business.",
          "The cadence question has been put to Sarah, even if not yet answered."
        ]},
      { badge: "4th Priority", title: "Build the core custom dashboard", desc: "Scheduling-by-day view, live from the CRM — the smaller, lower-risk half of the build.", tag: "→ Sprint 10",
        doneWhen: [
          "The scheduling-by-day view is live and pulling from the CRM automatically.",
          "It has been checked against a real week and matches what the CRM and calendar actually show.",
          "A named owner exists for the integration."
        ]}
    ]
  },
  {
    id: "11", dates: "Jan 27 – Feb 9, 2027", start: "2027-01-27", end: "2027-02-09",
    theme: "Look at the numbers", bigRock: "First real read on what a client costs and is worth",
    cost: 2000, meetings: "TBD",
    goal: "Four months of data becomes the first real read on what works — and the input to the 2027 plan.",
    priorities: [
      { badge: "1st Priority", title: "Cost per client & lifetime value", desc: "The first real numbers on what a client costs to acquire, and what one is worth over time.", tag: "Rec 11, 12, 20",
        doneWhen: [
          "Cost per acquired client is calculated by channel.",
          "Average client lifetime value is calculated.",
          "Revenue per referral source is ranked, and the treat and coffee spend is compared against it."
        ]},
      { badge: "2nd Priority", title: "Review marketing spend against the evidence", desc: "A written decision on the SEO retainer for 2027 — keep, reduce, or redirect toward referral materials.", tag: "Rec 12",
        doneWhen: [
          "Your SEO vendor provides a one-page monthly report: traffic, consults booked, clients closed.",
          "A clean quarter of instrumented funnel data exists.",
          "A written decision on the retainer for 2027."
        ]},
      { badge: "3rd Priority", title: "Price the advocacy line", desc: "Fully loaded effective hourly rate, compared directly against a coaching hour.", tag: "Rec 18",
        doneWhen: [
          "Fully loaded hours per case are known.",
          "An effective hourly rate is calculated and compared against a coaching hour.",
          "A written decision on the model — hourly against a retainer rather than a flat fee."
        ]},
      { badge: "4th Priority", title: "Missed-opportunity & revenue views — go live", desc: "Phase two of the dashboard: cancellations, waitlist drag, cold leads, revenue vs. target — all in one screen.", tag: "Sprint 08 → 09",
        doneWhen: [
          "Missed-opportunity views are live: cancellations (split early vs. late), no-shows, reschedules, waitlist length and time-to-placement, cold leads with no follow-up.",
          "Revenue month-to-date against target is visible alongside the scheduling view.",
          "All data sources refresh automatically.",
          "It's checked at a set time each week going forward."
        ]},
      { badge: "5th Priority", title: "Retro and re-plan", desc: "What shipped, what slipped, and Sprints 11 onward drafted for Q1 2027.", tag: "This document",
        doneWhen: [
          "A written record of what shipped, what slipped, and what the slippage had in common.",
          "The backlog re-triaged against what is now known.",
          "Sprints 11 onward drafted for Q1 2027."
        ]}
    ]
  },
  {
    id: "12", dates: "Q1 2027", start: "2027-02-17", end: "2027-04-21",
    theme: "Billing workflow review", bigRock: "Confirm the billing workflow before it's locked into the new platform",
    cost: 2000, meetings: "TBD",
    goal: "Before the Practice Management platform is locked in as the long-term home for billing, confirm it actually makes recurring billing and client invoicing easier — not just scheduling and notes.",
    priorities: [
      { badge: "1st Priority", title: "Evaluate the billing & recurring-invoice workflow", desc: "Lower priority than the rest of this roadmap, but worth a dedicated look once the platform chosen in Sprint 03 has been in use for a while: how well does it handle recurring billing, and how easy is it to actually get a bill in front of a client, compared to the current QuickBooks-plus-card-on-file setup?", tag: "Part 1 §07",
        doneWhen: [
          "The platform's recurring-billing workflow is tested against a real client's schedule.",
          "The steps to send a one-off or updated bill to a client are documented and timed.",
          "A written decision: keep billing in QuickBooks, or move it into the new platform."
        ]}
    ]
  }
];

const BUFFERS = [
  {
    id: "1", position: "Between Sprint 05 and Sprint 06",
    dates: "Oct 21 – Nov 3, 2026", start: "2026-10-21", end: "2026-11-03",
    bigRock: "Catch up on unfinished work from Sprints 01–05",
    cost: 1200, meetings: "TBD",
    note: "No new work starts here — what lands in this sprint depends on what's still open when Sprint 05 ends: carried-over done-when items, anything blocked, or work that simply ran long."
  },
  {
    id: "2", position: "Between Sprint 08 and Sprint 09",
    dates: "Dec 16 – Dec 29, 2026", start: "2026-12-16", end: "2026-12-29",
    bigRock: "Catch up on unfinished work from Sprints 06–08",
    cost: 1200, meetings: "TBD",
    note: "No new work starts here — what lands in this sprint depends on what's still open when Sprint 08 ends: carried-over done-when items, anything blocked, or work that simply ran long."
  }
];

/* #, title, effort, impact, when */
const RECOMMENDATIONS = [
  { n: 1,  title: "Annual scheduling cycle — offer round, not waitlist", effort: "Low", impact: "High", when: "Sprint 03" },
  { n: 2,  title: "Waitlist policy — states, deposit, refer-out", effort: "Low", impact: "High", when: "Sprint 03" },
  { n: 3,  title: "Automate the session-notes chain end to end", effort: "Low", impact: "High", when: "30 days" },
  { n: 4,  title: "Ship a minimum viable hire package", effort: "Medium", impact: "High", when: "30 days" },
  { n: 5,  title: "Establish a data-handling baseline", effort: "Low", impact: "Risk reduction", when: "30 days" },
  { n: 6,  title: "Collapse a dozen places into one client record", effort: "Medium", impact: "High", when: "1–3 months" },
  { n: 7,  title: "Track curriculum coverage per client", effort: "Low–Medium", impact: "High", when: "1–3 months" },
  { n: 8,  title: "Automate the money chain; self-service card updates", effort: "Low", impact: "Medium–High", when: "1–3 months",
    note: "Cancellation tracking is part of this: early cancellations, late cancellations, and reschedules are logged as separate outcomes (not one \"cancelled\" bucket), per the No-Show & Cancellation Policy. Feeds the missed-opportunity/revenue views in Sprint 08 → 09." },
  { n: 9,  title: "Write down the five most-repeated processes", effort: "Medium", impact: "High", when: "1–3 months" },
  { n: 10, title: "Define graduation and a maintenance tier", effort: "Low", impact: "Medium–High", when: "1–3 months" },
  { n: 11, title: "Referral register, cadence and per-source ROI", effort: "Medium", impact: "Highest", when: "3–6 months" },
  { n: 12, title: "Re-weight marketing spend against the evidence", effort: "Low", impact: "Medium–High", when: "3–6 months" },
  { n: 13, title: "Automated follow-up for unconverted leads", effort: "Low", impact: "Medium", when: "3–6 months" },
  { n: 14, title: "Feedback loop that produces data", effort: "Low", impact: "High", when: "3–6 months" },
  { n: 15, title: "Make parent sessions a term of service", effort: "Low", impact: "Medium–High", when: "3–6 months" },
  { n: 16, title: "Advocacy case tracking, inside the CRM", effort: "Low", impact: "Risk reduction", when: "Sprint 03" },
  { n: 17, title: "Test one group offer before building a programme", effort: "Medium", impact: "High if it works", when: "6–12 months" },
  { n: 18, title: "Price the advocacy line deliberately", effort: "Medium", impact: "Medium–High", when: "6–12 months" },
  { n: 19, title: "Start the outcome data set (publish later)", effort: "Low now", impact: "Strategic", when: "Start now" },
  { n: 20, title: "Model the path to $400,000 explicitly", effort: "Medium", impact: "Strategic", when: "6–12 months" },
  { n: 21, title: "Video or information lead-qualification workflow", effort: "Low–Medium", impact: "Medium", when: "Sprint 08" }
];

/* New Client Intake — documents by client type. Each doc: { title, desc }. Empty scaffold; add documents as they're drafted. */
const NEW_CLIENT_DOCS = [
  { key: "all-types", title: "All Client Types", docs: [
    { title: "New Client Intake Form", link: "forms/OptiMind-Adult-Intake-Form.html" },
    { title: "Time Account Spreadsheet" },
    { title: "Parent Accountability Contract", link: "sops/Parent-Terms-of-Service.html" },
    { title: "Client Set-up Sheet" },
    { title: "School & Therapist Information Release Forms" },
    { title: "Syllabus Form" }
  ] },
  { key: "school-age", title: "Middle & High School", docs: [
    { title: "School Info Form" },
    { title: "Teacher Feedback Form" },
    { title: "Teacher Email Template" },
    { title: "Therapist Email Template" }
  ] },
  { key: "college", title: "College", docs: [] },
  { key: "adult", title: "Adult", docs: [
    { title: "Adult Intake Form" }
  ] }
];

/* Client Resources — for existing clients who've already gone through intake, by client type. Same doc shape as NEW_CLIENT_DOCS. */
const ESTABLISHED_CLIENT_DOCS = [
  { key: "school-age", title: "Middle & High School", docs: [
    { title: "Growth Mindset Worksheet" },
    { title: "Goal Brainstorming" },
    { title: "Getting to Know You Questionnaire" },
    { title: "Executive Function Questionnaire" },
    { title: "Student Success Behaviors Questionnaire" },
    { title: "Assignment Tracker" },
    { title: "Grade Tracker" }
  ] },
  { key: "college", title: "College", docs: [
    { title: "College Application Timeline Worksheet" },
    { title: "College Curriculum & Deadline Tracker" },
    { title: "College Goal Brainstorming" }
  ] },
  { key: "adult", title: "Adult", docs: [
    { title: "Task Tracker" }
  ] }
];

/* Document/Reports Collection — per-client checklist tracking what's gathered after intake (Client Workflow stage 2). Flat list, applies to every client. */
const DOCUMENT_COLLECTION_ITEMS = [
  { title: "School Information Release Form — signed, on file" },
  { title: "Therapist Information Release Form — signed, on file" },
  { title: "Report card received" },
  { title: "IEP / 504 plan received" },
  { title: "Neuropsych / psycho-ed evaluation received" },
  { title: "Therapist notes received" }
];

/* SOPs — Sarah's internal Standard Operating Procedures library. Flat list; add documents as they're drafted. */
const SOP_DOCS = [
  { title: "Role Definition & Responsibilities", desc: "Which client types, session load, non-session responsibilities, and what stays with Sarah.", link: "sops/Role-Definition-and-Responsibilities.html", category: "employee", reviewTags: [] },
  { title: "Client Workflow — Intake to Graduation", desc: "The end-to-end process: intake, data collection, goal-setting, provider coordination, session cadence, graduation.", link: "sops/Client-Workflow-Intake-to-Graduation.html", category: "employee", reviewTags: [] },
  { title: "Week-One Onboarding Schedule", desc: "Pre-day-one provisioning and the day-by-day first week, through to the first one-to-one and the caseload ramp.", link: "sops/Week-One-Onboarding-Schedule.html", category: "employee", reviewTags: [] },
  { title: "Employee Reference Sheet", desc: "The day-to-day quick reference: tools, company email, response times, the safety and mental-health crisis steps, and how to escalate a pause or cancellation request.", link: "sops/Employee-Reference-Sheet.html", category: "employee", reviewTags: [] },
  { title: "Organization & Labeling Standards", desc: "How to name, file, label and schedule consistently \u2014 email signature, subject-line prefixes, email labels, file names, folder placement and calendar conventions.", link: "sops/Organization-and-Labeling-Standards.html", category: "employee", reviewTags: [] },
  { title: "Internal Reference Sheet (Sarah Only)", desc: "The full version — financial tools, external contacts, business-development details, the Calendar Access Procedure, and what to expect on Sarah's side of a safety event.", link: "sops/Internal-Reference-Sheet.html", category: "internal", reviewTags: [] },
  { title: "Rate Sheet", desc: "The service summary, hosted at one permanent URL instead of a re-exported PDF.", link: "sops/Rate-Sheet.html", category: "newclient", reviewTags: ["accounting"] },
  { title: "Parent Terms of Service", desc: "Required parent-session cadence for minor clients, with reminders and a non-adherence clause.", link: "sops/Parent-Terms-of-Service.html", category: "newclient", reviewTags: ["legal"] },
  { title: "New Client Service Agreement", desc: "Draft template — includes the proposed no-show/cancellation clause, pending attorney review.", link: "sops/Services-Agreement.html", category: "newclient", reviewTags: ["legal"] },
  { title: "Employee Weekly 1:1", desc: "What gets discussed in the weekly one-to-one. Not drafted yet.", category: "employee", reviewTags: [] },
  { title: "Style Guide", desc: "Brand colors, fonts, and usage guidelines.", link: "sops/OptiMind-Style-Guide.html", category: "internal", reviewTags: [] },
  { title: "Logos", desc: "Watermark, QuickBooks, email signature, and long-format logo assets.", link: "sops/Logos.html", category: "internal", reviewTags: [] },
  { title: "New Employee Checklist", desc: "SOP build checklist and the new-hire onboarding checklist.", link: "sops/Checklists.html", category: "hiring", reviewTags: [] },
  { title: "Screening Protocol", desc: "Pre-employment background check scope, sequence, Maryland specifics, and the FCRA disclosure/authorization/adverse-action templates.", link: "sops/OptiMind-Screening-Protocol.html", category: "hiring", reviewTags: ["legal"] },
  { title: "No-Show & Cancellation Policy", desc: "TBD — the no-show timeline, billing terms, and session-environment adherence policy. Needs Sarah's sign-off before it's added to the Services Agreement.", link: "sops/No-Show-and-Cancellation-Policy.html", category: "newclient", reviewTags: ["legal", "accounting"] },
  { title: "Add-On Services \u2014 Identification & Referral Process", desc: "How a Special Education Advocacy or College Counseling need gets spotted, recorded and passed to Sarah. The identification half is usable now; how the service is sold is still to build.", link: "sops/Add-On-Services-Identification-and-Referral-Process.html", category: "employee", reviewTags: [] },
  { title: "Attorney Review Checklist", desc: "Every item across the SOP and onboarding set waiting on a lawyer \u2014 sixteen questions in four groups, each with the document it blocks and OptiMind's current working position.", link: "sops/Attorney-Review-Checklist.html", category: "internal", reviewTags: ["legal"] }
];

/* Onboarding Documents — for hiring and onboarding a new employee. Flat list; add documents as they're drafted. */
const EMPLOYEE_ONBOARDING_DOCS = [
  { title: "Offer Letter", desc: "Role, start date, compensation and at-will status — kept short, points to the employment agreement for detail. Now carries the paid closures and the continuing-education stipend.", link: "onboarding/Offer-Letter.html", category: "employee", reviewTags: [] },
  { title: "Holiday, Vacation & Leave Policy", desc: "Paid closures (winter break, Thanksgiving), summer scheduling, sick and safe leave, and how time off is requested \u2014 with the seven decisions still open listed in one place.", link: "onboarding/Holiday-Vacation-and-Leave-Policy.html", category: "employee", reviewTags: ["legal"] },
  { title: "Employment Agreement", desc: "Duties, compensation/schedule, benefits, termination terms, dispute resolution.", link: "onboarding/Employment-Agreement.html", category: "hiring", reviewTags: ["legal"] },
  { title: "Confidentiality & Data-Handling Agreement", desc: "Signed separately from the handbook, given the neuropsych, IEP/504 and health data the role touches. Now names the approved storage systems and carries a four-step breach-reporting sequence.", link: "onboarding/Confidentiality-and-Data-Handling-Agreement.html", category: "hiring", reviewTags: ["legal"] },
  { title: "Employee Decision List", desc: "What the specialist decides alone, what needs a conversation, and what always stays with Sarah \u2014 including standing authority to call 911 in an emergency and the CLIENTS REQUEST TO CANCEL OR PAUSE escalation.", link: "onboarding/Employee-Decision-List.html", category: "employee", reviewTags: [] },
  { title: "Employee Handbook", desc: "Time off, conduct, communication norms, advocacy/college flagging, and the confirmed safety-escalation protocol. Updated Aug 31; five sections still carry attorney items.", link: "onboarding/Employee-Handbook.html", category: "employee", reviewTags: ["legal"] },
  { title: "Data-Handling Policy", desc: "What client data is held, where it lives, who can access it, and how long it's kept \u2014 plus the backup gap: records sit in Google Drive with no independent, tested backup.", link: "onboarding/Data-Handling-Policy.html", category: "newclient", reviewTags: ["legal"] }
];

/* SOPs — build checklist. Process documentation for how the practice runs day to day. */
const SOP_CHECKLIST = [
  { key: "standards-conventions", title: "Standards & Conventions", items: [
    { text: "Organization & labeling standards", link: "sops/Organization-and-Labeling-Standards.html", note: "How employees name, file, label and schedule things consistently \u2014 email signature, subject-line prefixes, email labels, file naming, folder placement, calendar conventions. Draft; eight open questions for Sarah." },
    { text: "Email signature built and set as the Gmail default", link: "sops/Organization-and-Labeling-Standards.html", note: "Blocked on the company email address, phone line and website URL. Pre-day-one task in the Week-One Onboarding Schedule." },
    { text: "Email labels and calendar colors agreed and created", link: "sops/Organization-and-Labeling-Standards.html", note: "Both calendars have to use the same five colors, so this is decided once rather than per person." }
  ] },
  { key: "mvp-hire-package", title: "Minimum Viable Hire Package", items: [
    "Role definition",
    "Client workflow written once",
    "Week-one schedule",
    "Reference sheet"
  ] }
];

/* Onboarding Documents — build checklist. Hire-specific paperwork: what a new hire signs and receives once.
   Each item is a string, or { text, link, note } once it's mapped to an actual document or flagged out of scope. */
const ONBOARDING_CHECKLIST = [
  { key: "contracts-decisions", title: "Contracts & Decisions", items: [
    { text: "Employment contracts", link: "onboarding/Employment-Agreement.html" },
    { text: "Decision list", link: "onboarding/Employee-Decision-List.html" }
  ] },
  { key: "hr-paperwork", title: "Employment & HR Paperwork", items: [
    { text: "Offer letter", link: "onboarding/Offer-Letter.html" },
    { text: "Background check completed", link: "onboarding/Offer-Letter.html", note: "Required condition of employment — see the Offer Letter's Conditions of Employment section." },
    { text: "Employment agreement", link: "onboarding/Employment-Agreement.html" },
    { text: "Confidentiality / NDA", link: "onboarding/Confidentiality-and-Data-Handling-Agreement.html" },
    { text: "IP assignment", link: "onboarding/Employment-Agreement.html#ip-assignment", note: "Covered as a clause inside the Employment Agreement, not a standalone document." },
    { text: "Non-solicit agreement", link: "onboarding/Employment-Agreement.html#non-solicit", note: "Covered as a clause inside the Employment Agreement, not a standalone document." },
    { text: "Non-compete (attorney-reviewed)", link: "onboarding/Employment-Agreement.html#non-compete", note: "Drafted as a clause inside the Employment Agreement — still needs actual attorney review before use." },
    { text: "Employee handbook", link: "onboarding/Employee-Handbook.html" },
    { text: "Data-handling policy acknowledgment", link: "onboarding/Data-Handling-Policy.html" },
    { text: "Form I-9", note: "Official USCIS form — sourced from the government, not drafted in-house." },
    { text: "Form W-4", note: "Official IRS form — sourced from the government, not drafted in-house." },
    { text: "State new-hire reporting", note: "A compliance action with your CPA/payroll provider, not a drafted document." },
    { text: "Workers' comp coverage confirmed", note: "A compliance action with your CPA, not a drafted document." },
    { text: "Unemployment insurance registration", note: "A compliance action with your CPA, not a drafted document." },
    { text: "Direct deposit / payroll setup form", note: "Provided by whichever payroll provider is chosen, not drafted in-house." }
  ] }
];

/* Diagnostic reference — Part One, condensed. Read-only. */
const SCORES = [
  { label: "Business Goals", pct: 92 },
  { label: "Risk & Compliance", pct: 85 },
  { label: "Financial Management", pct: 68 },
  { label: "Operations & Process", pct: 51 },
  { label: "Marketing & Advertising", pct: 47 },
  { label: "Customer Relationships & Outreach", pct: 41 },
  { label: "Employee Management", pct: 32 },
  { label: "Technology", pct: 30 },
  { label: "AI & Automation Readiness", pct: 30 },
  { label: "Overall", pct: 47 }
];

const DIAGNOSTIC = [
  {
    num: "—", title: "Executive Summary",
    intro: "The short version, before the detail.",
    cards: [
      { h: "Where it stands", body: "A strong, well-differentiated practice — referrals close at 53% and produce 90% of the business actually won. Compliance, insurance, and financial hygiene are ahead of most solo practices twice this size. But the business runs entirely on Sarah, entirely by memory, entirely by the hour. Asked which processes are documented anywhere, the answer was three words: \"None of it.\"" },
      { h: "What determines success", body: "The new hire gets a real onboarding, not a debacle. The hours lost to copy-paste admin get automated, so Fridays can stay clear. Sarah starts measuring what referral relationships are worth, instead of running the best channel on memory." }
    ]
  },
  {
    num: "01", title: "Operations & Process",
    intro: "How work actually moves through the business, and where it stalls.",
    cards: [
      { h: "Working", body: "Leads answered within minutes. Intake flow is genuinely thorough. Already coordinates proactively with outside providers." },
      { h: "Fix now", body: "Nothing is documented, and the hire is weeks away — the single highest-leverage fix in the whole report." },
      { h: "Fix next", body: "Client \"graduation\" has no defined process. A waitlist policy is needed that works beyond August. Curriculum coverage needs to be tracked per client, in one place. Advocacy deadlines need to live in the CRM. Goals tracking needs its own record too — same failure mode as curriculum, but a separate workflow. College counseling needs its own workflow and timeline, keyed to school application deadlines." }
    ]
  },
  {
    num: "02", title: "Technology & Tools",
    intro: "What you pay for, what talks to what, and what you may be paying for twice.",
    cards: [
      { h: "The picture", body: "At least ten tools, mostly islands. Software spend runs roughly $280/mo. QuickBooks alone is ~$107/mo, above a typical solo-practitioner plan. Software costs ~$3,400/yr; lead generation costs $18,000/yr." },
      { h: "Fix next", body: "Appointment reminders, case by case — Sarah's fine with the generated Zoom links, but wants the ability to send a reminder for a specific appointment only, not as a blanket rule. Stop hunting for the rate sheet (host it at a permanent URL)." },
      { h: "Decided", body: "Build a real, deliberately-chosen automation layer — not ad hoc plumbing like the failed Zapier/HubSpot/ClickUp attempts." }
    ]
  },
  {
    num: "03", title: "Marketing, Advertising & Referrals",
    intro: "Where clients actually come from — and whether spend matches it.",
    cards: [
      { h: "The clearest number in the audit", body: "Referrals are 45% of leads, close at 53%, and make up 90% of business won. $1,500/mo goes to the channel (SEO) that converts worst, while the best channel runs on memory with no budget line." },
      { h: "Fix next", body: "Basic tracking isn't set up (no UTM/analytics). Networking is a marketing channel and should run like one. Leads who don't buy right away go cold — no follow-up sequence exists." },
      { h: "Later", body: "Social media is a deliberate non-priority — one lightly-used Facebook account, and referrals already dominate. No email/SMS list yet." }
    ]
  },
  {
    num: "04", title: "Customer Relationships & Retention",
    intro: "What happens after someone becomes a client.",
    cards: [
      { h: "Working", body: "Response time excellent. Onboarding is defined, even if manual." },
      { h: "Fix next", body: "No real feedback loop exists — no way to show growth or plateaus, no early warning before a client disengages. Parent sessions are a request, not a requirement — the middle-schoolers who leave are almost always the ones whose parents didn't meet consistently. Write it into the service agreement as a requirement, not an ask." },
      { h: "Long-term", body: "Turn client outcomes into published proof — start the data baseline now since it can't be collected retroactively." }
    ]
  },
  {
    num: "05", title: "Team, Hiring & Onboarding",
    intro: "The most urgent section — because of timing, not because the problem is unusual.",
    cards: [
      { h: "The situation", body: "First EF specialist hire lands during the exact weeks the caseload spikes for the school year, into a business where zero processes are documented." },
      { h: "Fix now", body: "Build the minimum onboarding kit, not the perfect one — role definition, the client workflow written once, a reference sheet, a standing communication rhythm. Employment contracts — Fractional HR Specialists quoted $2,000 to draft the new hire's contracts; Gemini Lane is researching whether ChatGPT and Claude can draft these in-house first." }
    ]
  },
  {
    num: "06", title: "AI & Automation Readiness",
    intro: "What is realistic to automate, and what it would take.",
    cards: [
      { h: "The read", body: "Instincts about what to automate are accurate — session notes, onboarding, non-recurring scheduling. The one failed attempt (Zapier) was a bad experience, not evidence automation doesn't work here." },
      { h: "Highest value", body: "Session notes — copying an AI summary into a doc template ~30x/week is the largest single line in the week." },
      { h: "Later", body: "Grade logging and full onboarding automation — both real, but lower priority than session notes. ChatGPT account hygiene — Sarah and her husband share one account and their two businesses' chats get jumbled together; a one-hour training session on Projects and Markdown files fixes this." }
    ]
  },
  {
    num: "07", title: "Financial Management",
    intro: "Strongest operational area after compliance — worth protecting while everything else gets fixed.",
    cards: [
      { h: "Working", body: "Financial reserve, documented budget, separated accounts, CPA relationship, rates raised every year with real market testing." },
      { h: "Fix next", body: "Doesn't know what a client is worth or what one costs to acquire. Bookkeeping decision-making — how and when the books actually get balanced hasn't been pinned down; worth a conversation with the bookkeeper about a monthly cadence and a quote on cost. Take a closer look at the billing workflow — before committing long-term to the new platform, confirm its recurring-billing workflow and how easy it is to bill a client. New-employer financial prep — this first hire brings unemployment insurance registration, possible workers' comp, and payroll obligations beyond the current owner-only setup." },
      { h: "Decided", body: "The P&L review cadence moves from yearly — which let pricing and cost problems surface up to 12 months late — to quarterly, with the CPA/bookkeeper." }
    ]
  },
  {
    num: "08", title: "Risk, Compliance & Data Handling",
    intro: "Strongest area — with gaps worth closing given the kind of data handled.",
    cards: [
      { h: "Working", body: "General liability, E&O, professional liability all current. Contracts used consistently." },
      { h: "Fix now", body: "Back up client data — everything lives on the cloud with no true backup. Build a client-information review/summary process for hand-offs." },
      { h: "Fix next", body: "No written data-handling policy — needed given neuropsych reports, IEPs/504s, and grades." }
    ]
  },
  {
    num: "09", title: "Owner Dependency",
    intro: "What breaks if Sarah steps away — and what it would take to change that.",
    cards: [
      { h: "The core constraint", body: "\"If I disappeared for two weeks, revenue stops\" — the natural state of a one-person practice, but exactly what the 12-month goals (Fridays back, hire without burnout, break the hourly ceiling) push against." },
      { h: "Growth ideas flagged", body: "Non-session billing (lawyer-style, like the Enhance EFS peer model) and a group/subscription co-working offer (Shimmer-style) — both deserve a dedicated planning conversation once hiring and documentation are stable." }
    ]
  }
];
