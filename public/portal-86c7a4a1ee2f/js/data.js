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
          { text: "The items requiring an attorney (non-compete, mandated-reporter status, EEO thresholds, record retention) are separated out and sent as one bundle, not one at a time.", link: "sops/_archive/Attorney-Review-Checklist.html", note: "Done \u2014 consolidated Aug 31 into the Attorney Review Checklist: sixteen questions in four groups, each with the document it blocks and the current working position." }
        ]},
      { badge: "2nd Priority", title: "Pre-hire paperwork ready to sign by Sep 4", desc: "Offer letter, employment agreement and confidentiality agreement carrying real terms — name, start date, compensation, schedule — not placeholders, before the offer goes out.", tag: "Rec 4",
        doneWhen: [
          { text: "Compensation structure and amount, pay frequency, schedule and start date are decided and written into the Offer Letter and Employment Agreement.", link: "onboarding/_archive/Offer-Letter.html" },
          { text: "The candidate\u2019s name and the acceptance deadline are filled in.", link: "onboarding/_archive/Offer-Letter.html" },
          { text: "Non-solicitation period, termination notice and the arbitration-vs-courts question are decided; the non-compete clause is either removed or attorney-reviewed before it is signed.", link: "onboarding/_archive/Employment-Agreement.html" },
          { text: "The Confidentiality & Data-Handling Agreement states the approved storage locations, the personal-device rule and the post-employment duration.", link: "onboarding/_archive/Confidentiality-and-Data-Handling-Agreement.html", note: "Storage locations named Aug 31 (Drive, Workspace, PandaDoc, Zoom, Calendly, JotForms). Personal-device rule and post-employment duration are still open \u2014 both attorney items." },
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
          { text: "The Parent Accountability Contract is finalized alongside the Parent Terms of Service, rather than duplicating it.", link: "sops/_archive/Parent-Terms-of-Service.html" },
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
    theme: "Buy back hours", bigRock: "The record of what has been taught leaves session notes, a full email marketing campaign goes out to win back cancellations and fill Kyerra's caseload, and the platform decision lands on Monday.com as both CRM and document repository",
    cost: 3000, meetings: "TBD",
    goal: "The record of what has been taught stops living in session notes, a MailChimp-powered email campaign goes out to leads and past clients to recover cancellations and get sessions rebooked, Gamma moves toward retirement via Claude, client data finally has a tested backup, and the platform question is settled against Monday.com \u2014 CRM and document tracking \u2014 so the next sprint can build rather than shop.",
    priorities: [
      { badge: "1st Priority", title: "Monday.com — scope, licensing and fit decision", desc: "Monday.com is the named candidate for client-record and practice-management software — serving as OptiMind's CRM and as the repository for tracking client documents and case files. PandaDoc, Calendly and QuickBooks stay as separate tools alongside it. Test it against the criteria below with a real client file before the build sprint commits to it.", tag: "Rec 6",
        doneWhen: [
          "A written list exists of what the system must hold: contact and family details, intake responses, session history and notes, documents, service agreement, scheduling, invoicing, curriculum coverage, referral source, and dated deadlines attached to a client or case.",
          "Monday.com has been demoed with a real client file loaded — not a sales walkthrough — and tested against six criteria: one screen per client; handles minors and family units; supports migration; can hold a dated, reminding deadline against a client record; tracks and organizes client documents/case files as a repository; and exposes a documented API or native automation for connecting to PandaDoc, Calendly and MailChimp.",
          "Which Monday product and board structure is in scope is decided and written down — CRM, document tracking, plus the integrations to PandaDoc, Calendly and MailChimp it will need — rather than assuming an all-in-one replacement.",
          "Licensing and seat cost for two users is confirmed in writing, with the data-processing terms read.",
          "You have an answer on whether HIPAA applies to you, since it changes the configuration and the price.",
          "A named fallback is recorded in case Monday fails a hard criterion, so the build sprint is not blocked.",
          "Monday, MailChimp and Zapier accounts are opened directly under OptiMind's own billing and ownership — not a Gemini Lane account transferred later — so Sarah has full control and every invoice lands with her from day one."
        ]},
      { badge: "2nd Priority", title: "Email marketing campaign — win back cancellations & fill Kyerra's caseload", desc: "Sarah's focus has shifted: recent cancellations plus Kyerra's new open caseload capacity mean the priority is getting sessions rebooked, not just gathering new leads. Build and send a full email marketing campaign to current leads and past clients/resources using MailChimp, continuing into Sprint 04 as the Monday–MailChimp integration comes online.", tag: "Rec 13, 21",
        doneWhen: [
          "A send list is compiled from current leads and past clients/resources, with consent/opt-out handled correctly.",
          "MailChimp is set up as the sending platform for full email marketing campaigns, under OptiMind's own account and billing.",
          "At least one campaign is drafted, reviewed by Sarah, and sent — aimed specifically at rebooking cancelled/lapsed clients and filling Kyerra's open caseload slots.",
          "Zapier is evaluated as the connector between MailChimp and Monday, so a lead or client's email activity (opens, clicks, replies) can show up against their Monday record without manual re-entry — a recommendation is written down even if the full build happens in Sprint 04.",
          "A decision is recorded on the ongoing send cadence, and how this connects to the Sprint 09 three-touch follow-up sequence once that's built.",
          { text: "Cost/scope impact of pulling this forward — plus the new MailChimp and Zapier subscriptions — is flagged with Sarah; this is additional scope and additional recurring cost inside Sprint 03's existing budget unless she agrees to adjust it.", link: "OptiMind-Open-Items-Register.html" }
        ]},
      { badge: "3rd Priority", title: "How-to capture for SOP documentation", desc: "Step-by-step visual guides recorded once while the work is being done — Scribe or equivalent — so the written SOPs are backed by something a new hire can follow click by click.", tag: "Rec 4",
        doneWhen: [
          "A capture tool is selected — Scribe Pro Personal runs $25/seat/month annual, $35 monthly; the free tier is web-only with no desktop capture.",
          { text: "The recurring tasks worth capturing are listed first: booking through Calendly, running a session in Zoom, filing a session note, updating the curriculum tracker, sending the teacher and therapist templates, invoicing.", link: "sops/Client-Workflow-Intake-to-Graduation.html" },
          "Each captured guide is exported and linked from the SOP document it belongs to, rather than living only inside the tool.",
          { text: "A rule is written for who records a new guide when a process changes, so the library does not go stale the moment the engagement ends.", link: "sops/Organization-and-Labeling-Standards.html" }
        ]},
      { badge: "4th Priority", title: "Get access to Sarah's Calendly to set up Workflows", desc: "The reminder and reschedule-follow-up automation above runs through Calendly Workflows — that needs admin access to Sarah's account, not just booking-level access.", tag: "Parent Terms of Service §2",
        doneWhen: [
          "Sarah has granted admin or workflow-editing access to her Calendly account, not just the ability to book against it.",
          "Calendly's plan tier is confirmed to include Workflows — it's a paid-tier feature, so this is checked before building anything on top of it.",
          "A test Workflow is built and fires correctly on a real event type before it's relied on for parent-session reminders."
        ]},
      { badge: "5th Priority", title: "Research automation tool", desc: "Evaluate native platform automation vs. a dedicated tool, against CRM and dashboard integration. Decision lands in Sprint 07.", tag: "Rec 6, Part 1 §02",
        doneWhen: [
          "A shortlist of automation tools is investigated — native platform automation versus a dedicated tool — evaluated against CRM and dashboard integration."
        ]},
      { badge: "6th Priority", title: "Build and populate the referral register", desc: "One record per provider or school. Ninety percent of closed business currently runs on memory alone.", tag: "Rec 11",
        doneWhen: [
          "One record per provider, school or practice, inside the platform.",
          "Each holds: organisation and individual, relationship type, last contact, next planned contact, clients referred, clients closed, and revenue attributed to date.",
          "Every record has a named relationship owner."
        ]}
    ]
  },
  {
    id: "04", dates: "Sep 23 – Oct 13, 2026", start: "2026-09-23", end: "2026-10-13",
    theme: "Build Monday.com", bigRock: "Monday.com built and configured as CRM and document repository; the email marketing campaign scales with a live Monday\u2013MailChimp connection; session notes automated; the scheduling cycle written down",
    cost: 3000, meetings: "TBD",
    goal: "Monday.com is built and customized by Gemini Lane as both CRM and document repository \u2014 most of the sprint goes here \u2014 while the email marketing campaign started in Sprint 03 scales into a repeatable, Monday-connected operation via MailChimp and Zapier. The session-notes chain is automated now that there is a record for notes to land in, and account ownership for Monday, MailChimp and Zapier is confirmed under OptiMind. The scheduling cycle, dashboard scope, advocacy tracking and analytics get worked out in parallel.",
    priorities: [
      { badge: "1st Priority", title: "Build and configure Monday.com — Part 1", desc: "Gemini Lane builds and customizes Monday.com directly — CRM boards, document/case-file tracking structure, automations and the client/family record structure — rather than Sarah building it personally. PandaDoc, Calendly and QuickBooks stay in place as separate tools, connected in via integration. This takes most of the sprint. Part 2 follows in Sprint 05.", tag: "Rec 6, 16",
        doneWhen: [
          "Monday.com is licensed and paid for at the agreed seat count, with the data terms read.",
          "Monday CRM boards, document/case-file tracking structure, columns/views and client/family record structure are built and customized by Gemini Lane.",
          "Monday is connected to Calendly, PandaDoc and MailChimp via native integration or a connector (Zapier), so bookings, signed agreements and email campaign activity sync into the client record without any of those tools being replaced.",
          "Your existing client record structure is mapped to the platform's fields — on paper, before any data moves.",
          "A written decision records which of JotForms, the leads spreadsheet and the billing spreadsheet Monday replaces, and when — PandaDoc stays in place for e-signature since Monday doesn't natively replace it.",
          "Deadline handling is configured before any client data is entered: a deadline field or task type that attaches to a client record, carries an owner, and reminds ahead of the date.",
          "Monday, MailChimp and Zapier account ownership and billing are confirmed as live under OptiMind — not Gemini Lane — with Sarah able to log in and see every invoice herself."
        ]},
      { badge: "2nd Priority", title: "Set up and configure FloDesk & workflows", desc: "FloDesk replaces MailChimp as OptiMind's email marketing platform. Set up the account, bring the audience across, and build the automated workflows the campaign will run on.", tag: "Rec 13, 21",
        doneWhen: [
          "A FloDesk account is open under OptiMind's own billing and ownership, with Sarah able to log in and see every invoice herself.",
          "Current leads and past clients/resources are imported into FloDesk and segmented, with consent/opt-out carried over correctly.",
          "Branded email templates are set up in FloDesk for campaign sends.",
          "The automated workflows the campaign needs are built in FloDesk and tested end to end before they're relied on.",
          "Any MailChimp account opened in Sprint 03 is cancelled once FloDesk is confirmed working, so the two aren't both billing."
        ]},
      { badge: "3rd Priority", title: "Set up First Email Blast for Parents", desc: "A new mass email sent through FloDesk to leads and clients — the first blast out of the new platform.", tag: "Rec 13, 21",
        doneWhen: [
          "The send list of leads and clients is pulled together in FloDesk, with anyone who has opted out excluded.",
          "The email is drafted in FloDesk using the branded template, and reviewed and approved by Sarah before it goes out.",
          "A test send is checked for formatting, links and personalization before the real send.",
          "The blast is sent, and opens, clicks and replies are reviewed afterward."
        ]},
      { badge: "4th Priority", title: "Run the next three new clients through it in parallel", desc: "New clients only, running alongside the current method. A go/no-go on migrating the caseload follows.", tag: "Rec 6",
        doneWhen: [
          "Three new clients have been fully onboarded through the platform: agreement, intake, scheduling, notes, invoice.",
          "A short list exists of what did not work, and whether each is a configuration problem or a product limitation.",
          "A go / no-go decision on migrating the existing caseload has been made and written down."
        ]},
      { badge: "5th Priority", title: "Migrate the existing caseload — Part 1", desc: "In two parts, not one weekend. Your new hire can take a share as a way to learn the base. The migration continues in the Nov 4–10 buffer.", tag: "Rec 6",
        doneWhen: [
          "The first group of active clients is fully live on the platform, with history, documents and curriculum coverage carried over.",
          "Nothing is being maintained in two places for those clients.",
          "A written issues list from Part 1 exists before the migration continues."
        ]},
      { badge: "6th Priority", title: "Three-touch follow-up for leads who go quiet", desc: "Automated day 2 / 7 / 21 sequence — \"very leaky\" today, by Sarah's own description.", tag: "Rec 13",
        doneWhen: [
          "An automated sequence runs at roughly day 2, day 7 and day 21 after a consult.",
          "A seasonal re-approach exists for leads that went quiet more than a term ago.",
          "Nothing in the sequence requires you to remember anything."
        ]}
    ]
  },
  {
    id: "05", dates: "Oct 14 – Nov 3, 2026", start: "2026-10-14", end: "2026-11-03",
    theme: "Marketing outreach", bigRock: "Email outreach starts bringing in new clients, and the systems behind it are ready for them",
    cost: 3000, meetings: "TBD",
    goal: "This sprint sets up the things that bring on new clients: a six-month lead nurture workflow goes out through FloDesk, and invoicing goes self-service so new clients can start without card numbers taken by phone.",
    priorities: [
      { badge: "1st Priority", title: "Bookkeeping decision-making", desc: "Not a Gemini Lane deliverable — flagged here for your own awareness, and scheduled alongside the QuickBooks review above. Talk to your bookkeeper about moving to a monthly cadence and get a quote on what that would cost.", tag: "Part 1 §07",
        doneWhen: [
          "A conversation is had with your bookkeeper about the current balancing cadence.",
          "A quote is in hand for monthly bookkeeping.",
          "A decision is made on whether the cost is worth moving off the current cadence."
        ]},
      { badge: "2nd Priority", title: "Build and configure Monday.com — Part 2", desc: "Picks up from Part 1 in Sprint 04: refine the Monday build based on what the pilot clients and first migration turned up, finish the integrations and automations, and hand it over so Sarah and the team can run it day to day.", tag: "Rec 6, 16",
        doneWhen: [
          "Boards, columns and views are adjusted based on the issues found with the Sprint 04 pilot clients and Migration Part 1.",
          "The Calendly, PandaDoc and FloDesk connections (native or via Zapier) are finished and tested on real records, so bookings, signed agreements and email activity show up on the client record without re-entry.",
          "The Monday automations the practice relies on — status changes, deadline reminders, task assignments — are built and tested.",
          "Sarah and the team are walked through the build and can add a client, update a record and find a document without help.",
          "How the boards are set up and how to use them is written down and linked from the SOP Manual."
        ]},
      { badge: "3rd Priority", title: "Save PandaDocs to Google Drive", desc: "Save OptiMind's PandaDoc documents to Google Drive, so there's a copy of each one outside PandaDoc.", tag: "New",
        doneWhen: [
          "Every document in PandaDoc that needs to be kept is listed.",
          "Each one is downloaded from PandaDoc and saved in the right Google Drive folder.",
          "The saved copies are checked against the list, and each one opens from Drive."
        ]},
      { badge: "4th Priority", title: "New email blast for Workshop", desc: "Create and send a new FloDesk email blast promoting the workshop.", tag: "New",
        doneWhen: [
          "The workshop details, audience and send date are confirmed with Sarah.",
          "The email is drafted in FloDesk, reviewed and approved by Sarah, and test-sent.",
          "The email is sent to the agreed audience, with opt-outs excluded."
        ]},
      { badge: "5th Priority", title: "Determine Email Templates", desc: "Decide on branding and general email template options for email blasts.", tag: "New",
        doneWhen: [
          "Branding for email blasts is decided with Sarah.",
          "General email template options are put together and reviewed with Sarah.",
          "The template or templates to use for email blasts are chosen."
        ]}
    ]
  },
  {
    id: "06", dates: "Nov 11 – Nov 24, 2026", start: "2026-11-11", end: "2026-11-24",
    theme: "Session notes and migration wrap-up", bigRock: "Session notes run automatically into Monday, and any leftover data finishes migrating",
    cost: 2500, meetings: "TBD",
    goal: "Session notes stop being a manual job: an AI notetaker is selected, set up and tested on live sessions, writing straight into the Monday client record. Alongside it, any client data left over from Sprints 04 and 05 finishes migrating, so nothing is still being kept in two places.",
    priorities: [
      { badge: "1st Priority", title: "Advocacy case tracking inside the CRM", desc: "Every statutory deadline entered against the client record — not a thirteenth, standalone system.", tag: "Rec 16",
        doneWhen: [
          "Every statutory and school deadline for every active case is entered in the CRM against the client record, as the prep date rather than the due date.",
          "Each deadline carries an owner and a reminder, and appears on the operations dashboard when it falls inside thirty days.",
          "A consistent subject-line prefix and label convention exists per case.",
          "Time is being logged against each case from the first one."
        ]},
      { badge: "2nd Priority", title: "Set up and test AI notetaking software", desc: "Configure the selected notetaker against the Monday client record and run it on real sessions during the pilot, alongside the three new clients going through the platform.", tag: "Rec 3",
        doneWhen: [
          "The notetaker selected in Sprint 04 is configured and running on live sessions with the pilot clients.",
          "Its output lands in the Monday client record with no copy-paste step.",
          "The output is checked against your existing note structure, not a generic meeting summary, and adjusted if it doesn't match.",
          "Any accuracy or formatting issues found during the pilot are logged and fixed before it runs on the full caseload."
        ]},
      { badge: "3rd Priority", title: "Automate the session-notes chain", desc: "One AI notetaker writes straight into the Monday client record — recovers 2.3–5.3 hrs every week. Held until the platform exists, so the output has somewhere real to land.", tag: "Rec 3",
        doneWhen: [
          "One notetaker is selected and running on live sessions.",
          "Its output lands in the Monday client record with no copy-paste step — including whether Monday covers this natively before a separate tool is bought.",
          "The vendor has confirmed in writing that it does not train on session content, and has stated its retention period.",
          "The output arrives in your existing note structure, not a generic meeting summary.",
          "You have established what the current email-summary tool is, and under what data terms."
        ]},
      { badge: "4th Priority", title: "Finish the migration and retire the replaced tools", desc: "Whole caseload live; JotForms and the two spreadsheets cancelled. PandaDoc stays in place — Monday doesn't replace e-signature — so the recovered-cost figure needs recalculating without it (see Open Items).", tag: "Rec 6",
        doneWhen: [
          "The whole caseload is live on the platform.",
          "JotForms and the two spreadsheets are cancelled or archived. PandaDoc remains in use; the annual savings figure is recalculated without it and written down.",
          "Nothing is being entered in two places."
        ]},
      { badge: "5th Priority", title: "Move SOPs into Monday — Part 1: link existing SOPs", desc: "Link the existing SOPs in Monday, so Sarah can open each one from there. Parts 2–5 follow in Sprints 07–10.", tag: "Rec 9",
        doneWhen: [
          "Every SOP and reference document that exists today is listed, so nothing is missed.",
          "Each one is linked in Monday.",
          "Each link opens the current version from Monday in one click.",
          "Sarah has found and opened each one from Monday herself, without help."
        ]},
      { badge: "6th Priority", title: "Update the Contracts and the Welcome Email functionality", desc: "Bring the service agreement contracts and the welcome email up to date, so a newly signed client gets the current contract and the right welcome email fires once it's signed.", tag: "Workflow §3–4",
        doneWhen: [
          { text: "The contracts are updated to their current versions, and the updates are confirmed with Sarah.", link: "OptiMind-Onboarding-Automation-Workflow.html#service-agreement" },
          { text: "The welcome email's content is updated, and it reconfirms the client's recurring session times and scheduled intake.", link: "OptiMind-Onboarding-Automation-Workflow.html#email-2" },
          { text: "The welcome email fires automatically once the contract is signed.", link: "OptiMind-Onboarding-Automation-Workflow.html#email-2" },
          "The flow is tested end to end, from a contract being sent and signed to the welcome email arriving, before it's used with a real client."
        ]},
      { badge: "7th Priority", title: "Permissions set-up for Employee in Monday", desc: "Set up the employee's access in Monday so they can see and edit what their role needs, and nothing beyond it.", tag: "New",
        doneWhen: [
          "What the employee needs to view, edit and not see in Monday is listed and agreed with Sarah.",
          "The employee's Monday account is set up with those permissions applied.",
          "Access is tested from the employee's login: they can open and edit what they need, and can't see what's restricted."
        ]},
      { badge: "8th Priority", title: "Add Curriculum schedule to Monday", desc: "Add the curriculum schedule to Monday so it can be found and used alongside the client records.", tag: "New",
        doneWhen: [
          "The current curriculum schedule is confirmed with Sarah.",
          "The schedule is added to Monday.",
          "The schedule in Monday is checked against the original, and Sarah and the team can find and open it."
        ]}
    ]
  },
  {
    id: "07", dates: "Nov 25 – Dec 8, 2026", start: "2026-11-25", end: "2026-12-08",
    theme: "One record, everything in it", bigRock: "Caseload migrated; three tools retired",
    cost: 3000, meetings: "TBD",
    goal: "The migration finishes, the old tools get switched off, and the dashboard gets built on top.",
    priorities: [
      { badge: "1st Priority", title: "Create a system around Parent Sessions", desc: "A system that tracks meetings with each client's parents, so every family is actually having their parent sessions on schedule and none get pushed off for too long. Reminders and reschedule follow-ups currently depend on someone remembering to email the parent; once parent sessions are a contract term, automatic reminders ahead of each session and a rebooking prompt whenever one is missed are how they're kept.", tag: "Rec 15; Parent Terms of Service §2",
        doneWhen: [
          "How often each family should have a parent session is agreed with Sarah, along with how overdue is too long.",
          "Each client record in Monday shows the last parent session date and when the next one is due.",
          "Automation options are evaluated — Calendly's built-in reminders, a Monday.com automation once the platform lands this sprint, or a lighter interim tool — and one is recommended with cost and setup effort attached.",
          "Automatic reminders go out ahead of each scheduled parent session, and the cadence (every other week for the first two months, then monthly) keeps firing without manual re-entry.",
          "A missed parent session automatically triggers a reschedule-request email prompting the parent to rebook, without a specialist having to send it by hand.",
          "Overdue or unscheduled parent sessions are flagged automatically, so nobody has to remember to check.",
          { text: "The escalation trigger — a parent missing multiple required sessions in a row — still reaches Sarah, whether or not the parent responds to the automated follow-up.", link: "sops/_archive/Parent-Terms-of-Service.html" },
          "A view in Monday shows every family's parent-session status at a glance, with overdue ones at the top.",
          "The process is written down and linked from the SOP Manual."
        ]},
      { badge: "2nd Priority", title: "Annual scheduling cycle & waitlist policy", desc: "Availability round, bridge block, four waitlist states, deposit and refund rule — one repeatable process.", tag: "Rec 1, 2",
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
      { badge: "3rd Priority", title: "College curriculum tracker", desc: "Build the college-counseling timeline and decision points into the CRM alongside the advocacy deadlines, keyed to each school's application deadline.", tag: "Rec 7, 16; Part 1 §01",
        doneWhen: [
          "Each college-counseling student's decision points and deadlines are entered against the client record in the CRM.",
          "Deadlines are keyed to the specific school's application date, with lead time, not a generic due date.",
          "These deadlines appear on the operations dashboard alongside advocacy deadlines when inside thirty days."
        ]},
      { badge: "4th Priority", title: "Goals tracking", desc: "A shared record of progress against each client's set goals — equally important as the curriculum tracker, but a separate workflow: what was taught vs. what it was meant to achieve.", tag: "Rec 14; Part 1 §01",
        doneWhen: [
          "Each client's goals from intake are entered against the client record.",
          "Progress is logged against each goal in a consistent place, not reconstructed from session notes.",
          "The record is in a form Sprint 08's feedback loop can pull a progress snapshot from."
        ]},
      { badge: "5th Priority", title: "Appointment reminders, case by case", desc: "Investigate how to automate appointment reminders on a case-by-case basis — via Calendly, Zoom, or a separate automation if neither supports it natively.", tag: "Part 1 §02",
        doneWhen: [
          "Confirmed whether Calendly or Zoom natively supports per-appointment reminders.",
          "If neither does, a separate automation is scoped to send reminders case by case.",
          "Instructions are documented in SOP Manual."
        ]},
      { badge: "6th Priority", title: "Curriculum coverage tracker", desc: "Track what's been taught per client — sequence, modules covered, and a \"next up\" field, in one place.", tag: "Rec 7",
        doneWhen: [
          "The curriculum map exists: core sequence numbered, standalone modules listed and tagged, parent curriculum as its own parallel list.",
          "Every active client has a coverage record showing module, date delivered, who delivered it, and whether it was revisited.",
          "Each client record carries an intended \"next up\" module.",
          "It lives in one place and the whole picture is visible on one screen."
        ]},
      { badge: "7th Priority", title: "Self-service card updates and automated invoicing", desc: "No more card numbers by phone; invoices generate from completed appointments, not a spreadsheet. Includes looking into Stripe as the invoicing and payment tool.", tag: "Rec 8",
        doneWhen: [
          "Stripe is evaluated for invoicing — fees (card and ACH), recurring billing, self-service card updates, and how it connects to QuickBooks, Monday and Calendly — and a decision to use it or not is written down.",
          "Clients update their own card through a secure link; no card number is ever taken by voice again.",
          "Invoices generate from completed appointments rather than from a spreadsheet.",
          "Automatic payment reminders and a stated late-fee schedule apply without a manual decision each month.",
          "ACH is published as the default option rather than offered on complaint.",
          "Cancellations and no-shows are being recorded as data — early cancellations, late cancellations, and reschedules are each logged as distinct outcomes, not lumped into one \"cancelled\" bucket, per the No-Show & Cancellation Policy."
        ]},
      { badge: "8th Priority", title: "Review the QuickBooks tier and the subscription stack", desc: "Fifteen minutes with the CPA on whether the current tier is still the right one.", tag: "Rec 8",
        doneWhen: [
          "A decision on the QuickBooks tier, taken with your CPA.",
          "Any tool the platform has replaced is cancelled rather than left running.",
          "The Grammarly and Calendly line items are confirmed as monthly or annual."
        ]},
      { badge: "9th Priority", title: "Set up the quarterly P&L review", desc: "Decided: quarterly, with your CPA/bookkeeper, replacing the annual-only cadence that let pricing and cost problems surface up to twelve months late. Not a Gemini Lane deliverable.", tag: "Part 1 §07",
        doneWhen: [
          "A quarterly P&L review is on the calendar with the CPA/bookkeeper.",
          "The first review is dated.",
          "Review results feed the pricing and cost decisions they're meant to inform."
        ]},
      { badge: "10th Priority", title: "Build the cold-lead pre-qualification funnel", desc: "Lower priority. An explainer + landing page so cold leads self-qualify before thirty minutes with you.", tag: "Rec 21, Part 1 §03",
        doneWhen: [
          "A short explainer exists covering what the work is, who it's for, and what it costs.",
          "A landing page hosts the explainer with a Calendly link to the consult beneath it.",
          "Cold-lead inquiries route to the landing page automatically before a consult is booked."
        ]},
      { badge: "11th Priority", title: "Define the operations dashboard — Part 1", desc: "Scope the questions it must answer on one screen before building any widgets. Part 2 follows.", tag: "Rec 6, 8, 20",
        doneWhen: [
          "A written list of the questions it must answer on one screen.",
          "Each question is mapped to where the data will come from, and which are not yet capturable."
        ]},
      { badge: "12th Priority", title: "Define the operations dashboard — Part 2", desc: "Picks up from Part 1: decide where the dashboard gets built, against the question list and data sources already mapped.", tag: "Rec 6, 8, 20",
        doneWhen: [
          "A decision on whether it is built inside the platform, in a spreadsheet, or in a reporting tool."
        ]},
      { badge: "13th Priority", title: "Move SOPs into Monday — Part 2: policies and agreements", desc: "Picks up from Part 1 in Sprint 06: move the client-facing policies, terms and agreements into the Monday SOP library.", tag: "Rec 9",
        doneWhen: [
          "Moved this sprint: No-Show & Cancellation Policy, Parent Terms of Service, New Client Service Agreement, Rate Sheet, Screening Protocol, Add-On Services Identification & Referral Process, and the Attorney Review Checklist.",
          "Contracts and the rate sheet use the permanent links set up in the Nov 4–10 buffer, so Monday never points at an out-of-date version.",
          "Each document is either linked from Monday or recreated as a Monday doc, and which one is noted against it — a link where the original stays the source of truth, a new Monday doc where Sarah will edit it there.",
          "Each one is filed in the right group of the Monday SOP library, named consistently, and opens from Monday in one click.",
          "Sarah has found and opened each one from Monday herself, without help."
        ]},
      { badge: "14th Priority", title: "Set up Podcast Promotion Email Blast", desc: "A new mass email sent through FloDesk to leads and clients, promoting Sarah's podcast.", tag: "Rec 13, 21",
        doneWhen: [
          "The send list of leads and clients is pulled together in FloDesk, with anyone who has opted out excluded.",
          "The email is drafted in FloDesk using the branded template, with a clear link to listen to the podcast, and reviewed and approved by Sarah before it goes out.",
          "A test send is checked for formatting, links and personalization before the real send.",
          "The blast is sent, and opens, clicks on the podcast link, and replies are reviewed afterward."
        ]},
      { badge: "15th Priority", title: "Birthday tracking — clients & employees (manual, phase 1)", desc: "Capture a client's birthday at intake and text them on the day, so they know you're thinking of them. Run this by hand first; automate later once the pattern is proven.", tag: "New",
        doneWhen: [
          "Birthday is a captured field in the intake session and saved to the client's record.",
          "The birthday is manually added to the owning specialist's working calendar, with a reminder on the day.",
          "If a client is handed off to another specialist, their birthday reminder moves to that specialist's calendar rather than staying behind on the original one.",
          "A short happy-birthday text template exists, and is sent manually on the day.",
          "When a client fully graduates, they're removed from the calendar and the text list — no stale reminders firing after the relationship ends.",
          "The same process runs for employees, plus a reminder set 10 days ahead of their birthday to find and send a gift.",
          "A note records what volume or pattern would justify moving this from manual to an automation."
        ]},
      { badge: "16th Priority", title: "Claude onboarding — retire Gamma", desc: "Moved up from the Sprint 09 AI-training slot: get Sarah working directly in Claude now, specifically so Gamma can be fully retired once the Rate Sheet's live-hosted-link migration (Buffer, Nov 4–10) lands.", tag: "Part 1 §06",
        doneWhen: [
          "A short Claude onboarding session is held with Sarah, covering how to organize and update business content directly, without exporting from Gamma.",
          "The service-summary/rate-sheet content currently built in Gamma is recreated with Claude's help, in a form Sarah can edit and update herself.",
          "Gamma is cancelled once the recreated content is confirmed working and linked from the live Rate Sheet URL.",
          "Any other content still produced in Gamma is inventoried, so nothing is silently orphaned when the subscription is cancelled."
        ]}
    ]
  },
  {
    id: "08", dates: "Dec 9 – Dec 22, 2026", start: "2026-12-09", end: "2026-12-22",
    theme: "The referral engine", bigRock: "Your best channel finally has a system",
    cost: 2500, meetings: "TBD",
    goal: "Your best channel finally gets a system, a cadence and a number attached to it.",
    priorities: [
      { badge: "1st Priority", title: "Choose automation tool, map workflows", desc: "The decision, plus mapping every process the tool will touch before anything gets built.", tag: "Rec 6, Part 1 §02",
        doneWhen: [
          "A written workflow map exists: every process to be automated, its trigger, its steps.",
          "One automation tool is chosen and tested end to end before commitment.",
          "The intake form → client folder pipeline is confirmed as native or as workflow one.",
          "A build order is set, cheapest and least risky first.",
          "Every workflow has a named owner and a documented trigger.",
          "The build itself is scoped and quoted as outside work with a fixed acceptance test."
        ]},
      { badge: "2nd Priority", title: "Build workflow one — the onboarding sequence", desc: "Agreement, intake, scheduling and forms all fire from a single trigger.", tag: "Rec 6, Part 1 §06",
        doneWhen: [
          "Agreement, intake scheduling, forms and client-record creation fire from one trigger.",
          "Agreement reminders are automatic.",
          "You have run one new client through it end to end without touching anything manually.",
          "It is documented in the workflow map with a named owner."
        ]},
      { badge: "3rd Priority", title: "Basic analytics & channel tracking", desc: "GA + UTM tagging so a lead's source survives all the way to a booked consult.", tag: "Part 1 §03",
        doneWhen: [
          "Basic website analytics (Google Analytics or equivalent) is installed and confirmed working.",
          "Every outbound marketing link carries a UTM tag identifying its source.",
          "A booked consult can be traced back to the channel and, where applicable, the specific referral source that produced it."
        ]},
      { badge: "4th Priority", title: "Move SOPs into Monday — Part 3: team and onboarding", desc: "Picks up from Part 2 in Sprint 07: move the documents a specialist needs to do the job into the Monday SOP library.", tag: "Rec 9",
        doneWhen: [
          "Moved this sprint: Role Definition & Responsibilities, Employee Reference Sheet, Internal Reference Sheet, Week-One Onboarding Schedule, and the Employee Decision List.",
          "The team's Monday view shows these documents without them having to search the whole library.",
          "Each document is either linked from Monday or recreated as a Monday doc, and which one is noted against it — a link where the original stays the source of truth, a new Monday doc where Sarah will edit it there.",
          "Each one is filed in the right group of the Monday SOP library, named consistently, and opens from Monday in one click.",
          "Sarah has found and opened each one from Monday herself, without help."
        ]},
      { badge: "5th Priority", title: "Create a Graduation email", desc: "A congratulatory email sent to clients who have completed the program — marking the milestone, recapping what they've achieved, and letting them know how to stay in touch or come back if they need support later.", tag: "Rec 10",
        doneWhen: [
          "The email is drafted using the branded template, and reviewed and approved by Sarah.",
          "It covers congratulations on completing the program, a short recap of what the client has achieved, and how to reach OptiMind if they need support again.",
          { text: "The email is set up to send when a client is marked as graduated, so nobody has to remember to send it.", note: "Provisional — graduation criteria are defined in Sprint 10, so revisit the trigger then." },
          "A test send is checked for formatting, links and personalization before it goes to a real client."
        ]},
      { badge: "6th Priority", title: "Independent backup, tested", desc: "A sync service isn't a backup. Add one beyond Drive sync, and confirm it works by restoring a file.", tag: "Rec 5",
        doneWhen: [
          { text: "An independent backup of the client folder exists beyond Drive sync, and restoring one file has actually been tested.", note: "Escalated Aug 31 \u2014 the Data-Handling Policy now names Google Drive as the interim system of record, so this is the largest single risk in the data set until the dashboard lands. Cadence, restore verification and a target date are all still unset." }
        ]},
      { badge: "7th Priority", title: "Cancellation & billing tracking document", desc: "A dedicated document Sarah bills from — the calendar shows what happened to a session, this is where it gets billed or cleared.", tag: "Organization & Labeling Standards §7",
        doneWhen: [
          { text: "The document exists and is linked from the Organization & Labeling Standards SOP.", link: "sops/Organization-and-Labeling-Standards.html" },
          "It carries two lists: sessions billed (no-shows and late cancellations, outside the 24-hour window) and sessions not billed (cancelled within the policy window, or rescheduled).",
          "The workflow for adding an entry — who logs it, and when — is written down."
        ]},
      { badge: "8th Priority", title: "Capture outreach efforts for each resource", desc: "Every outreach effort to a referral resource — provider, school or practice — gets logged against that resource's record in the referral register built in Sprint 03, so who was contacted, when and how never depends on memory.", tag: "Rec 11",
        doneWhen: [
          "Each outreach effort — email, call, meeting, treat delivery or event — is logged against the resource's record in the referral register.",
          "Each entry records the date, the type of outreach, who on the team made it, and any response or next step.",
          "Every resource record shows its last contact and next planned contact, updated from the outreach log rather than by hand.",
          "The logging process — who logs it, and when — is written down so the record stays current as outreach scales."
        ]}
    ]
  },
  {
    id: "09", dates: "Jan 6 – Jan 19, 2027", start: "2027-01-06", end: "2027-01-19",
    theme: "Close the loops", bigRock: "Feedback and follow-up run themselves",
    cost: 2000, meetings: "TBD",
    goal: "The things that currently depend on you remembering stop depending on you remembering.",
    priorities: [
      { badge: "1st Priority", title: "ChatGPT training", desc: "One-hour session for Sarah and her husband on Projects and Markdown files, so the two businesses' chats stop getting jumbled together.", tag: "Part 1 §06",
        doneWhen: [
          "A one-hour training session is held with both Sarah and her husband.",
          "Separate Projects exist for each business, with chats filed into the correct one going forward.",
          "Both of them can explain how Markdown files and Projects keep the two businesses' information apart."
        ]},
      { badge: "2nd Priority", title: "Move SOPs into Monday — Part 4: client resources and forms", desc: "Picks up from Part 3 in Sprint 08: move the client resource documents, intake forms and brand standards into the Monday SOP library.", tag: "Rec 9",
        doneWhen: [
          "Moved this sprint: the new-client and established-client resource documents from the Client Resources page, the New Client Intake Form, and the document-collection checklist.",
          "Also moved: Organization & Labeling Standards, the OptiMind Style Guide, and the logos and email signature files.",
          "Client resource documents are grouped by client type — all client types, middle & high school, college, adult — the same way the Client Resources page groups them.",
          "Each document is either linked from Monday or recreated as a Monday doc, and which one is noted against it — a link where the original stays the source of truth, a new Monday doc where Sarah will edit it there.",
          "Each one is filed in the right group of the Monday SOP library, named consistently, and opens from Monday in one click.",
          "Sarah has found and opened each one from Monday herself, without help."
        ]},
      { badge: "3rd Priority", title: "Set up 6-month lead nurture email workflow", desc: "A FloDesk workflow that sends leads a new email every two weeks for six months, then starts back at the first email and runs the full sequence again for another six months.", tag: "Rec 13, 21",
        doneWhen: [
          "The sequence is planned and written: about 13 emails, one every two weeks across six months, with each email's topic set before any are built.",
          "Every email is drafted in FloDesk using the branded template, and reviewed and approved by Sarah.",
          "The workflow is built in FloDesk to send one email every two weeks, then loop back to the first email and repeat the full sequence for a second six months.",
          "A rule is set for when a lead leaves the workflow — booking a consult, becoming a client, or unsubscribing — so nobody keeps getting lead emails after they convert or opt out.",
          "The workflow is tested end to end, including the loop back to the first email, before real leads are added.",
          "Leads are being added to the workflow automatically, and opens, clicks and bookings are reviewed after the first few sends."
        ]}
    ]
  },
  {
    id: "10", dates: "Jan 20 – Feb 2, 2027", start: "2027-01-20", end: "2027-02-02",
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
      { badge: "4th Priority", title: "Move SOPs into Monday — Part 5: remaining documents and final check", desc: "Picks up from Part 4 in Sprint 09: move anything still left, including SOPs written during the engagement, and confirm every item has a place in Monday before the engagement ends.", tag: "Rec 9",
        doneWhen: [
          "Moved this sprint: anything written or captured since Part 1 — the how-to capture guides, the cancellation & billing tracking document, the data-handling policy, and the automation workflow documentation.",
          "The full list from Part 1 is checked line by line: every item is in the Monday SOP library, and nothing exists only in Drive, the dashboard or a folder.",
          "Sarah is walked through the whole library, and a rule is written down for where new SOPs go and who files them, so it stays complete after the engagement ends.",
          "Each document is either linked from Monday or recreated as a Monday doc, and which one is noted against it — a link where the original stays the source of truth, a new Monday doc where Sarah will edit it there.",
          "Each one is filed in the right group of the Monday SOP library, named consistently, and opens from Monday in one click.",
          "Sarah has found and opened each one from Monday herself, without help."
        ]}
    ]
  },
  {
    id: "11", dates: "Feb 3 – Feb 16, 2027", start: "2027-02-03", end: "2027-02-16",
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
    id: "12", dates: "Q1 2027", start: "2027-02-24", end: "2027-04-28",
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
    id: "B1", position: "Between Sprint 05 and Sprint 06",
    dates: "Nov 4 – Nov 10, 2026", start: "2026-11-04", end: "2026-11-10",
    bigRock: "Catch up on unfinished work from Sprints 01–05",
    cost: 1200, meetings: "TBD",
    note: "No new work starts here — this sprint holds what was carried over from Sprint 05.",
    priorities: [
      { badge: "1st Priority", title: "Set up permanent links for the rate sheet and contracts", desc: "Turn the service-summary PDF into a live hosted rate sheet you update once, instead of re-exporting from Gamma each time — and give it and each contract one permanent link that redirects to its current version. When a document is updated, only the redirect changes — the link stays the same everywhere it's already been used, so nothing has to be replaced in multiple places.", tag: "Part 1 §02, Rec 13",
        doneWhen: [
          "The service summary is rebuilt as a live hosted page, so it no longer has to be re-exported from Gamma.",
          "Every place the rate sheet or a contract link is used today is listed — emails, FloDesk workflows, Monday, the website, SOPs and templates.",
          "A redirect method is chosen, ideally on OptiMind's own domain so the links look trustworthy and stay under OptiMind's control.",
          "The rate sheet and each contract have a permanent link that redirects to the current version.",
          "Every place on the list is updated to use the permanent link instead of the direct URL.",
          "Updating a redirect to a new version is tested, and the link works everywhere without anything else changing.",
          "The steps for updating a redirect when a document changes are written down and linked from the SOP Manual.",
          "The follow-up email links to the rate sheet's permanent link rather than attaching a file."
        ]},
      { badge: "2nd Priority", title: "Continue to Migrate the existing caseload into Monday", desc: "Picks up from Part 1 in Sprint 04, with its issues list applied first. Your new hire can take a share as a way to learn the base.", tag: "Rec 6",
        doneWhen: [
          "The issues list from Part 1 is applied before any more clients move.",
          "The next group of active clients is fully live on the platform, with history, documents and curriculum coverage carried over.",
          "Nothing is being maintained in two places for those clients."
        ]},
      { badge: "3rd Priority", title: "Verify OptiMind's domain with FloDesk", desc: "Authenticate OptiMind's sending domain in FloDesk so emails go out from OptiMind's own address and land in inboxes, not spam folders.", tag: "Rec 13, 21",
        doneWhen: [
          "OptiMind's domain is added in FloDesk and the DNS records FloDesk provides are added with the domain host.",
          "FloDesk shows the domain as verified.",
          "A test email sent from the OptiMind address arrives in the inbox, not spam, with no \"via FloDesk\" sender label."
        ]},
      { badge: "4th Priority", title: "Set up blog email blasts with the SEO company", desc: "Work with the SEO company so each new blog post goes out to leads and clients as a FloDesk email blast.", tag: "Rec 13, 21",
        doneWhen: [
          "Who does what is agreed with the SEO company: who writes the post, who drafts the email, and who sends it.",
          "A blog email template is set up in FloDesk using the branded template, with a clear link back to the post on the website.",
          "A send cadence is agreed, matched to how often the SEO company publishes posts.",
          "The first blog email is reviewed and approved by Sarah, test-sent, and then sent to leads and clients, with opt-outs excluded.",
          "Opens and clicks through to the blog are reviewed after the first send."
        ]},
      { badge: "5th Priority", title: "Transfer subscriptions to admin@optimind-es.com", desc: "Move the Monday, Zapier, FloDesk and SignNow subscriptions so admin@optimind-es.com is the main login on each, keeping every account under OptiMind's control rather than tied to one person's email.", tag: "New",
        doneWhen: [
          "Monday.com: admin@optimind-es.com is the main login and account owner.",
          "Zapier: admin@optimind-es.com is the main login and account owner.",
          "FloDesk: admin@optimind-es.com is the main login and account owner.",
          "SignNow: admin@optimind-es.com is the main login and account owner.",
          "Each account is signed into with the new login to confirm it works, and billing, existing workflows and integrations are still running after the change."
        ]},
      { badge: "6th Priority", title: "Brainstorm how to integrate session notes into Monday", desc: "Talk through how session notes should get into the Monday client record, so the notetaker setup and session-notes automation in Sprint 06 start from an agreed approach.", tag: "Rec 3",
        doneWhen: [
          "How session notes are written and stored today is walked through with Sarah.",
          "Options for getting notes into the Monday client record are listed, such as an AI notetaker writing in directly, a Zapier step, or a Monday doc template, along with what each needs.",
          "A preferred approach is picked, with any open questions written down to carry into Sprint 06."
        ]}
    ]
  },
  {
    id: "B2", position: "Between Sprint 08 and Sprint 09",
    dates: "Dec 23, 2026 – Jan 5, 2027", start: "2026-12-23", end: "2027-01-05",
    bigRock: "Catch up on unfinished work from Sprints 06–08",
    cost: 1200, meetings: "TBD",
    note: "No new work starts here — what lands in this sprint depends on what's still open when Sprint 08 ends: carried-over done-when items, anything blocked, or work that simply ran long."
  }
];

/* =========================================================================
   AUTOMATION — new work stream, tracked separately from the dated sprints
   above. Not yet scheduled into a sprint; add items here as they're scoped,
   move a finished item's follow-through into the relevant SPRINTS entry
   once it has a sprint and cost attached.
   badge/tag are optional labels; doneWhen follows the same {text, link,
   note} shape used in SPRINTS.
   ========================================================================= */
const AUTOMATION = [
  { badge: "1st Priority", title: "Fix the lead/client data model", desc: "Separate “person receiving services” from “person reaching out,” move the consult intake off JotForm and into Monday, and add the fields/stages every downstream automation depends on.", tag: "Workflow §1",
    doneWhen: [
      { text: "Booking form (Calendly or Monday) relabels name fields: person receiving services, person reaching out (if different), relationship to client.", link: "OptiMind-Onboarding-Automation-Workflow.html#data-model" },
      { text: "Consult intake form (currently JotForm “Parent Consult Form,” used for every consult) is rebuilt as a native Monday form tied to the lead record.", link: "OptiMind-Onboarding-Automation-Workflow.html#data-model" },
      { text: "New fields exist on the record: Parent Paying, All Scheduled, Interested Later (date), Contract Confirmed.", link: "OptiMind-Onboarding-Automation-Workflow.html#data-model" },
      { text: "New pipeline stages exist: Not Interested (Right Now), Interested Later, Contract Sent, Waitlisted.", link: "OptiMind-Onboarding-Automation-Workflow.html#data-model" }
    ]},
  { badge: "2nd Priority", title: "Build Email 1 — Post-Consult Follow-Up", desc: "The core Mailchimp automation: personalized opening, services summary in-body, and the recurring-time and intake-scheduling variants Sarah described.", tag: "Workflow §2",
    doneWhen: [
      { text: "Email fires off a “Consult Held” trigger and opens with the client's name (or “your son/daughter, [name]” for a minor).", link: "OptiMind-Onboarding-Automation-Workflow.html#email-1" },
      { text: "Services summary is written into the email body, not attached as a PDF.", link: "OptiMind-Onboarding-Automation-Workflow.html#email-1" },
      { text: "All three recurring-time cases (time agreed / needs to check / no schedule yet) are built as variants, each ending on “confirmed once signed.”", link: "OptiMind-Onboarding-Automation-Workflow.html#email-1", note: "Which case applies needs to be a field Sarah sets during the consult." },
      { text: "Intake-scheduling variant handles minor vs. adult vs. college-age-both-book, and the All Scheduled override suppresses the scheduling ask entirely.", link: "OptiMind-Onboarding-Automation-Workflow.html#email-1" }
    ]},
  { badge: "3rd Priority", title: "Service agreement branching (PandaDoc)", desc: "One base agreement for minor/adult self-pay; a two-agreement branch for adult clients whose parent or a third party is paying.", tag: "Workflow §3",
    doneWhen: [
      { text: "Base agreement template supports an optional child's-name field so one document covers both minor and adult self-pay.", link: "OptiMind-Onboarding-Automation-Workflow.html#service-agreement" },
      { text: "Parent Paying checkbox triggers two agreements: one to the payer, one to the client.", link: "OptiMind-Onboarding-Automation-Workflow.html#service-agreement", note: "Provisional — Sarah is checking with her attorney whether this is actually required." },
      { text: "“Review & sign” PandaDoc link is embedded directly in Email 1.", link: "OptiMind-Onboarding-Automation-Workflow.html#service-agreement" }
    ]},
  { badge: "4th Priority", title: "Connect Mailchimp to PandaDoc for the signature trigger", desc: "PandaDoc is where Sarah actually sends contracts from, so it's the source of truth for “signed” — wire a Zapier connection so a completed PandaDoc document fires Email 2 directly in Mailchimp, rather than routing the trigger through Monday.", tag: "Workflow §4",
    doneWhen: [
      { text: "Confirm Zapier's PandaDoc integration exposes a “completed by all signers” trigger, distinct from “viewed” or “completed by one party.”", link: "OptiMind-Onboarding-Automation-Workflow.html#email-2", note: "Open item — Ruby to check." },
      { text: "Zapier connects that PandaDoc trigger to the Mailchimp Email 2 send.", link: "OptiMind-Onboarding-Automation-Workflow.html#email-2" },
      { text: "If Zapier can't isolate the right event, the Contract Confirmed checkbox (Section 1) is wired as the fallback manual trigger.", link: "OptiMind-Onboarding-Automation-Workflow.html#email-2" }
    ]},
  { badge: "5th Priority", title: "Build Email 2 — Welcome / Signed Confirmation", desc: "Celebratory welcome email that fires once the service agreement is signed, reconfirming recurring times and the already-scheduled intake.", tag: "Workflow §4",
    doneWhen: [
      { text: "Email reconfirms the agreed recurring session times and the scheduled intake time.", link: "OptiMind-Onboarding-Automation-Workflow.html#email-2" },
      { text: "No separate intake reminder is built — confirmed Calendly's existing reminder already covers it.", link: "OptiMind-Onboarding-Automation-Workflow.html#email-2" }
    ]},
  { badge: "6th Priority", title: "Build the not-signed nudge sequence", desc: "Day 3 and Day 5–7 follow-ups if the service agreement isn't signed after Email 1, plus the tone and weekend-blackout rules that apply across the whole workflow.", tag: "Workflow §5",
    doneWhen: [
      { text: "Day 3 nudge: warm check-in, re-share the signing link and (if needed) the intake link.", link: "OptiMind-Onboarding-Automation-Workflow.html#nudges" },
      { text: "Day 5–7 nudge: same intent, reworded from Day 3.", link: "OptiMind-Onboarding-Automation-Workflow.html#nudges" },
      { text: "Weekend blackout rule applied to every automated send in this workflow: hold and send the next business day instead of Sat/Sun.", link: "OptiMind-Onboarding-Automation-Workflow.html#nudges" }
    ]},
  { badge: "7th Priority", title: "Build long-term nurture + graduate re-engagement", desc: "4-week and 3-month personal check-ins, the school-year-checkpoint exception, Interested Later re-engagement, and the post-graduation check-in.", tag: "Workflow §6–7",
    doneWhen: [
      { text: "~4-week personal check-in (not a sales nudge) branches to Email 1/agreement link on reply, or into the future blog-nurture bucket if quiet.", link: "OptiMind-Onboarding-Automation-Workflow.html#nurture" },
      { text: "~3-month follow-on check-in for leads still in the nurture bucket.", link: "OptiMind-Onboarding-Automation-Workflow.html#nurture" },
      { text: "School-age/college-age exception: mid-January checkpoint check-in, suppressed if Sarah already emailed the lead between early December and mid-January.", link: "OptiMind-Onboarding-Automation-Workflow.html#nurture" },
      { text: "Interested Later re-engagement email fires on/near the lead's given date.", link: "OptiMind-Onboarding-Automation-Workflow.html#nurture" },
      { text: "Graduated-client check-in (~1 year out) branches to a review ask on a positive reply, or a restart offer on a negative one.", link: "OptiMind-Onboarding-Automation-Workflow.html#graduates" }
    ]},
  { badge: "Research", title: "Quo business-line call menu + auto-text", desc: "Adjacent idea, not part of the email automation build: route OptiMind's business number through Quo with a call menu, auto-texting the Calendly link to prospective-client callers.", tag: "Workflow §8",
    doneWhen: [
      { text: "Confirm whether Quo supports a call menu (press 1 prospective / press 2 existing client or provider) with an auto-text on hangup.", link: "OptiMind-Onboarding-Automation-Workflow.html#open-items", note: "Lower priority than the core email workflow." }
    ]}
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
    { title: "Parent Accountability Contract", link: "sops/_archive/Parent-Terms-of-Service.html" },
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
  { title: "Curriculum by Client Type", desc: "The session-by-session curriculum for Middle & High School, College, and Adult clients — the fixed intake-to-goals sequence, then the Differentiation Toolkit used going forward.", link: "sops/Curriculum-by-Client-Type.html", category: "employee", reviewTags: [] },
  { title: "Week-One Onboarding Schedule", desc: "Pre-day-one provisioning and the day-by-day first week, through to the first one-to-one and the caseload ramp.", link: "sops/Week-One-Onboarding-Schedule.html", category: "employee", reviewTags: [] },
  { title: "Employee Reference Sheet", desc: "The day-to-day quick reference: tools, company email, response times, the safety and mental-health crisis steps, and how to escalate a pause or cancellation request.", link: "sops/Employee-Reference-Sheet.html", category: "employee", reviewTags: [] },
  { title: "Organization & Labeling Standards", desc: "How to name, file, label and schedule consistently \u2014 email signature, subject-line prefixes, email labels, file names, folder placement and calendar conventions.", link: "sops/Organization-and-Labeling-Standards.html", category: "employee", reviewTags: [] },
  { title: "Internal Reference Sheet (Sarah Only)", desc: "The full version — financial tools, external contacts, business-development details, the Calendar Access Procedure, and what to expect on Sarah's side of a safety event.", link: "sops/Internal-Reference-Sheet.html", category: "internal", reviewTags: [] },
  { title: "Employee Weekly 1:1", desc: "What gets discussed in the weekly one-to-one. Not drafted yet.", category: "employee", reviewTags: [] },
  { title: "Style Guide", desc: "Brand colors, fonts, and usage guidelines.", link: "sops/OptiMind-Style-Guide.html", category: "internal", reviewTags: [] },
  { title: "Logos", desc: "Watermark, QuickBooks, email signature, and long-format logo assets.", link: "sops/Logos.html", category: "internal", reviewTags: [] },
  { title: "New Employee Checklist", desc: "SOP build checklist and the new-hire onboarding checklist.", link: "sops/Checklists.html", category: "hiring", reviewTags: [] },
  { title: "Birthday Tracking Protocol", desc: "Placeholder \u2014 TBD. Capturing client and employee birthdays at intake/hire, working-calendar entry, the handoff rule when a client moves specialists, the birthday text, removal at graduation, and the 10-day-ahead employee gift reminder. Manual for now; automate once the pattern is proven. Scheduled for Sprint 06.", category: "internal", reviewTags: [] }
];

const ARCHIVED_DOCS = [
  { title: "Attorney Review Checklist", desc: "The sixteen open attorney questions, in four groups, each with the document it blocks and the current working position.", link: "sops/_archive/Attorney-Review-Checklist.html", location: "sops/_archive", filedAs: "active", filedNote: "Still the live tracker for every pending attorney item, referenced from the Employee Handbook, the Holiday, Vacation & Leave Policy, the Internal Reference Sheet, and the Confidentiality & Data-Handling Agreement." },
  { title: "No-Show & Cancellation Policy", desc: "The full no-show and cancellation protocol and billing terms, the 24-hour/20-minute rules, and early-cancellation, late-cancellation and reschedule tracked as separate outcomes.", link: "sops/_archive/No-Show-and-Cancellation-Policy.html", location: "sops/_archive", filedAs: "active", filedNote: "Still the source of truth for cancellation and no-show billing, referenced from the Rate Sheet, the Parent Terms of Service, the Internal Reference Sheet, and Client Workflow — Intake to Graduation." },
  { title: "Employment Agreement", desc: "The employment contract: offer terms, IP assignment, non-solicit, and a non-compete clause pending attorney review.", link: "onboarding/_archive/Employment-Agreement.html", location: "onboarding/_archive", filedAs: "active", filedNote: "Still the working employment contract, referenced from the Employee Decision List and the new-hire document checklist for IP assignment, non-solicit, and non-compete clauses specifically." },
  { title: "Confidentiality & Data-Handling Agreement", desc: "The employee-facing confidentiality and data-handling agreement: approved storage locations, the personal-device rule, and post-employment duration.", link: "onboarding/_archive/Confidentiality-and-Data-Handling-Agreement.html", location: "onboarding/_archive", filedAs: "active", filedNote: "Still the working confidentiality/NDA document, referenced from the new-hire document checklist. Personal-device rule and post-employment duration remain open attorney items." },
  { title: "Data-Handling Policy", desc: "The employee-facing data-handling policy acknowledgment.", link: "onboarding/_archive/Data-Handling-Policy.html", location: "onboarding/_archive", filedAs: "active", filedNote: "Still referenced from the new-hire document checklist as the data-handling policy acknowledgment." },
  { title: "Screening Protocol", desc: "Pre-employment background check scope, sequence, Maryland specifics, and the FCRA disclosure/authorization/adverse-action templates.", link: "sops/_archive/OptiMind-Screening-Protocol.html", location: "sops/_archive", filedAs: "archived", filedNote: "Archived Sep 9, 2026." },
  { title: "Employee Handbook", desc: "Time off, conduct, communication norms, advocacy/college flagging, and the confirmed safety-escalation protocol. Updated Aug 31; five sections still carry attorney items.", link: "onboarding/_archive/Employee-Handbook.html", location: "onboarding/_archive", filedAs: "active", filedNote: "Still the working handbook, referenced from Role Definition & Responsibilities, Add-On Services — Identification & Referral Process, the Internal Reference Sheet, the Attorney Review Checklist, and the Employee Decision List." },
  { title: "Holiday, Vacation & Leave Policy", desc: "Paid closures (winter break, Thanksgiving), summer scheduling, sick and safe leave, and how time off is requested — with the seven decisions still open listed in one place.", link: "onboarding/_archive/Holiday-Vacation-and-Leave-Policy.html", location: "onboarding/_archive", filedAs: "active", filedNote: "Still the working leave policy, referenced from the Week-One Onboarding Schedule, the Attorney Review Checklist, and the Employee Handbook and Offer Letter." },
  { title: "Offer Letter", desc: "Role, start date, compensation and at-will status — kept short, points to the employment agreement for detail. Now carries the paid closures and the continuing-education stipend.", link: "onboarding/_archive/Offer-Letter.html", location: "onboarding/_archive", filedAs: "active", filedNote: "Still the working offer letter, referenced from the Internal Reference Sheet, the Attorney Review Checklist, and the new-hire document checklist." },
  { title: "Rate Sheet", desc: "The service summary, hosted at one permanent URL instead of a re-exported PDF.", link: "sops/_archive/Rate-Sheet.html", location: "sops/_archive", filedAs: "active", filedNote: "Still the working rate sheet, cross-referenced with the New Client Service Agreement's Fee Schedule exhibit and the No-Show & Cancellation Policy." },
  { title: "Parent Terms of Service", desc: "Required parent-session cadence for minor clients, with reminders and a non-adherence clause.", link: "sops/_archive/Parent-Terms-of-Service.html", location: "sops/_archive", filedAs: "active", filedNote: "Still the working terms document, referenced as the Parent Accountability Contract in the New Client Intake documents and from the parent-escalation checklist items." },
  { title: "New Client Service Agreement", desc: "Draft template — includes the proposed no-show/cancellation clause, pending attorney review.", link: "sops/_archive/Services-Agreement.html", location: "sops/_archive", filedAs: "active", filedNote: "Still the working draft agreement, referenced from the Rate Sheet's Fee Schedule exhibit and the Attorney Review Checklist." },
  { title: "Add-On Services — Identification & Referral Process", desc: "How a Special Education Advocacy or College Counseling need gets spotted, recorded and passed to Sarah. The identification half is usable now; how the service is sold is still to build.", link: "sops/_archive/Add-On-Services-Identification-and-Referral-Process.html", location: "sops/_archive", filedAs: "active", filedNote: "Still the working process document, referenced from the Employee Handbook and the Employee Decision List." }
];

/* Onboarding Documents — for hiring and onboarding a new employee. Flat list; add documents as they're drafted. */
const EMPLOYEE_ONBOARDING_DOCS = [
  { title: "Employee Decision List", desc: "What the specialist decides alone, what needs a conversation, and what always stays with Sarah \u2014 including standing authority to call 911 in an emergency and the CLIENTS REQUEST TO CANCEL OR PAUSE escalation.", link: "onboarding/Employee-Decision-List.html", category: "employee", reviewTags: [] }
];

/* SOPs — build checklist. Process documentation for how the practice runs day to day. */
const SOP_CHECKLIST = [
  { key: "standards-conventions", title: "Standards & Conventions", items: [
    { text: "Organization & labeling standards", link: "sops/Organization-and-Labeling-Standards.html", note: "How employees name, file, label and schedule things consistently \u2014 email signature, subject-line prefixes, email labels, file naming, folder placement, calendar conventions. Draft; five open questions for Sarah." },
    { text: "Email signature built and set as the Gmail default", link: "sops/Organization-and-Labeling-Standards.html", note: "Signature confirmed \u2014 name, title, phone, website link and disclaimer. Pre-day-one task in the Week-One Onboarding Schedule." },
    { text: "Email labels and calendar colors agreed and created", link: "sops/Organization-and-Labeling-Standards.html", note: "Both calendars have to use the same five colors, so this is decided once rather than per person." }
  ] }
];

/* Onboarding Documents — build checklist. Hire-specific paperwork: what a new hire signs and receives once.
   Each item is a string, or { text, link, note } once it's mapped to an actual document or flagged out of scope. */
const ONBOARDING_CHECKLIST = [
  { key: "contracts-decisions", title: "Contracts & Decisions", items: [
    { text: "Employment contracts", link: "onboarding/_archive/Employment-Agreement.html" },
    { text: "Decision list", link: "onboarding/Employee-Decision-List.html" }
  ] },
  { key: "hr-paperwork", title: "Employment & HR Paperwork", items: [
    { text: "Offer letter", link: "onboarding/_archive/Offer-Letter.html" },
    { text: "Background check completed", link: "onboarding/_archive/Offer-Letter.html", note: "Required condition of employment — see the Offer Letter's Conditions of Employment section." },
    { text: "Employment agreement", link: "onboarding/_archive/Employment-Agreement.html" },
    { text: "Confidentiality / NDA", link: "onboarding/_archive/Confidentiality-and-Data-Handling-Agreement.html" },
    { text: "IP assignment", link: "onboarding/_archive/Employment-Agreement.html#ip-assignment", note: "Covered as a clause inside the Employment Agreement, not a standalone document." },
    { text: "Non-solicit agreement", link: "onboarding/_archive/Employment-Agreement.html#non-solicit", note: "Covered as a clause inside the Employment Agreement, not a standalone document." },
    { text: "Non-compete (attorney-reviewed)", link: "onboarding/_archive/Employment-Agreement.html#non-compete", note: "Drafted as a clause inside the Employment Agreement — still needs actual attorney review before use." },
    { text: "Employee handbook", link: "onboarding/_archive/Employee-Handbook.html" },
    { text: "Data-handling policy acknowledgment", link: "onboarding/_archive/Data-Handling-Policy.html" },
    { text: "Form I-9", note: "Official USCIS form — sourced from the government, not drafted in-house." },
    { text: "Form W-4", note: "Official IRS form — sourced from the government, not drafted in-house." },
    { text: "State new-hire reporting", note: "A compliance action with your CPA/payroll provider, not a drafted document." },
    { text: "Workers' comp coverage confirmed", note: "A compliance action with your CPA, not a drafted document." },
    { text: "Unemployment insurance registration", note: "A compliance action with your CPA, not a drafted document." },
    { text: "Direct deposit / payroll setup form", note: "Provided by whichever payroll provider is chosen, not drafted in-house." },
    { text: "New Employee Cell Phone" }
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
