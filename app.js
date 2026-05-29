const state = {
  tab: "conversations",
  route: "conversations",
  accountDetail: "general",
  agentDetail: "Business Information",
  inboxSegment: "Chats",
  messageFilter: "Open",
  dialNumber: "",
  setupStep: 1,
  agentLive: false,
  callMethod: "Forward calls",
  selectedContact: "45 East VIP Line",
};

const workspace = {
  user: "Demo Owner",
  email: "owner@kiaora.example",
  inbox: "Primary",
  phone: "+64 9 000 0116",
  agentNumber: "+64 9 000 7902",
  business: "45 East",
  website: "https://www.45eastpdx.com/",
};

const agentBusiness = {
  name: "2degrees",
  website: "https://www.2degrees.nz/",
  address: "Level 2, 136 Fanshawe Street, Auckland 1010, New Zealand",
  type: "Telecommunications provider",
  overview: "New Zealand mobile, broadband and business telecommunications provider",
  greeting: "Hello, thank you for calling 2degrees. My name is Kia Assistant, how can I help you today?",
};

const deviceNumber = {
  name: "My iPhone number",
  number: "+64 21 000 0116",
  type: "Primary eSIM",
  behavior: "Native Phone app",
};

const secondNumbers = [
  {
    name: "Business Line",
    number: workspace.phone,
    status: "Active",
    mode: "App calling only",
    routing: "Ring app, then Kia Agent",
    inbox: "1 open",
  },
  {
    name: "AI Agent Line",
    number: workspace.agentNumber,
    status: "Live",
    mode: "App and agent",
    routing: "Handled by Kia Agent",
    inbox: "0 unread",
  },
];

const mobileLines = [
  { name: "Primary Mobile", number: "+64 21 000 0116", type: "eSIM", usage: 18.4, limit: 40, status: "Active" },
  { name: "AI Agent Line", number: "+64 9 000 7902", type: "App number", usage: 0.8, limit: 5, status: "Active" },
  { name: "Team Mobile", number: "+64 22 000 7902", type: "Physical SIM", usage: 11.6, limit: 25, status: "Active" },
];

const mobileAddOns = [
  ["10GB data boost", "Valid for 7 days", "NZ$10"],
  ["Australia roaming day pass", "1GB data + 30 minutes", "NZ$8"],
  ["International calling pack", "300 minutes to selected countries", "NZ$12"],
];

const mobilePlans = [
  ["KiaOra Mobile Pro", "Monthly", "40GB data · Unlimited NZ calls · 500 SMS", "NZ$89"],
  ["Team Connect", "Monthly", "80GB shared pool · 3 mobile lines · AI Agent line", "NZ$149"],
  ["Event Weekend Boost", "7 days", "20GB data · Priority support · Roaming ready", "NZ$18"],
];

const conversations = [
  { name: "+64 20 000 2627", preview: "You: Hello Back", time: "4:58 PM", status: "Open", kind: "Chats", meta: "Failed to send", tone: "failed" },
  { name: "VIP Inquiry", preview: "Kia Assistant took a message and summarized the caller details.", time: "3:18 PM", status: "Unread", kind: "Calls", meta: "Handled by Kia Agent", tone: "ai" },
  { name: "KiaOra Team", preview: "Welcome to KiaOra Mobile. Your inbox is ready.", time: "Yesterday", status: "Done", kind: "Chats", meta: "Workspace", tone: "normal" },
];

const contacts = [
  { name: "KiaOra Team", subtitle: "KiaOra Mobile", avatar: "K", company: "KiaOra", role: "Support", phone: workspace.phone, email: "support@kiaora.example", access: "Everyone", tags: "Workspace" },
  { name: "Kia Assistant Support", subtitle: "Agent setup specialist", avatar: "A", company: "KiaOra", role: "Agent specialist", phone: workspace.agentNumber, email: "agent@kiaora.example", access: "Owner", tags: "AI Agent" },
  { name: "45 East VIP Line", subtitle: workspace.phone, avatar: "V", company: "45 East", role: "VIP enquiries", phone: "+64 20 000 2627", email: "vip@45east.example", access: "Everyone", tags: "VIP, Open" },
];

const activity = [
  { title: "Message not delivered", detail: "Today, 4:58 PM · Primary · +64 20 000 2627", severity: "alert" },
  { title: "Kia Assistant captured a caller request", detail: "VIP table request · Wants a text link", severity: "ai" },
  { title: "Carrier registration reminder", detail: "Register local numbers before sending US/CA texts", severity: "info" },
];

const settingsGroups = [
  ["Workspace", [
    ["General", "Workspace name, logo and business hours", "building"],
    ["Phone numbers", "Lines, routing and forwarding", "phone"],
    ["Plan & billing", "Payment method and next bill", "card"],
    ["Trust center", "Carrier registration and compliance", "shield"],
  ]],
  ["Messaging", [
    ["Contacts", "Sort order and sync settings", "users"],
    ["Snippets", "Saved replies for frequent questions", "message"],
    ["Blocklist", "Numbers you have blocked", "shield"],
  ]],
  ["Account", [
    ["Profile", "Name and email address", "account"],
    ["Preferences", "Theme, reactions and clipboard detection", "sliders"],
    ["Notifications", "Message previews and work schedule", "bell"],
  ]],
  ["Support", [
    ["Chat with us", "Open a support conversation", "ai"],
    ["Help center", "Guides and tutorials", "document"],
    ["Terms of Service", "Legal terms and policies", "document"],
  ]],
];

const agentSettings = [
  ["Business Information", "Confirm business details from your data", "building"],
  ["Agent Profile", "Personality, voice and background noise", "ai"],
  ["Greeting", "Customize how the assistant answers the phone", "message"],
  ["Take a Message", "Customize message-taking scenarios", "document"],
  ["Transfer Calls", "Allow the assistant to transfer a call", "transfer"],
  ["Text a Link", "Allow callers to receive links via SMS", "message"],
  ["Appointments", "Allow the assistant to handle appointments", "calendar"],
  ["FAQs", "Help the assistant answer common questions", "document"],
  ["Training Files", "Upload files to train your agent", "document"],
  ["Spam Filters", "Deflect and block spam calls", "shield"],
  ["Website Testing", "Set up live chat for your website", "globe"],
];

const integrations = [
  ["Acuity Scheduling", "Let the assistant book appointments directly to your Acuity calendar.", "Available"],
  ["Appointlet", "Let the assistant book appointments directly to your Appointlet calendar.", "Available"],
  ["Calendly", "Let the assistant book appointments through your Calendly account.", "Available"],
  ["Google Calendar", "Let the assistant book appointments directly to your Google Calendar.", "Available"],
  ["Zapier", "Send events and call information to Zapier workflows.", "Available"],
];

const accountDetails = {
  "General": {
    title: "General",
    intro: "Workspace identity, business hours and the default call flow for the business inbox.",
    rows: [
      ["Workspace name", "KiaOra Mobile"],
      ["Business", workspace.business],
      ["Business hours", "Mon-Fri · 9:00 AM-6:00 PM"],
      ["Default call flow", "Team first, then AI Agent after 20 seconds"],
    ],
  },
  "Phone numbers": {
    title: "Phone numbers",
    intro: "Manage business numbers, mobile lines, routing rules and forwarding instructions.",
    rows: [
      ["Primary inbox", workspace.phone],
      ["AI Agent number", workspace.agentNumber],
      ["Primary mobile", mobileLines[0].number],
      ["Team mobile", mobileLines[2].number],
      ["Forward all calls", "Off"],
      ["International calls & messages", "On"],
    ],
    actions: [["Open keypad", "keypad"], ["Open mobile lines", "mobile"]],
  },
  "Plan & billing": {
    title: "Plan & billing",
    intro: "Payment method, next billing date, restore purchase and invoice settings.",
    rows: [
      ["Payment method", "Visa ending 4242"],
      ["Next billing date", "2 Jun 2026"],
      ["Current plan", "KiaOra Mobile Pro"],
      ["Monthly total", "NZ$89.00"],
      ["Billing address", "Auckland, New Zealand"],
    ],
  },
  "Trust center": {
    title: "Trust center",
    intro: "Compliance hub for number registration, business verification and messaging trust.",
    rows: [
      ["Carrier registration", "Ready to submit"],
      ["Local numbers registration", "Required before US/CA messaging"],
      ["Business verification", "Verified"],
      ["Spam protection", "Enabled"],
    ],
  },
  "Contacts": {
    title: "Contacts",
    intro: "Contact sync, sorting and team contact visibility.",
    rows: [
      ["Sort order", "First, Last"],
      ["Sync contacts", "Do not sync"],
      ["Shared contacts", "KiaOra Team, Kia Assistant Support, VIP Line"],
    ],
    actions: [["Open contacts", "contacts"]],
  },
  "Snippets": {
    title: "Snippets",
    intro: "Saved replies for frequently used customer responses.",
    rows: [
      ["VIP response", "Thanks for reaching out. We can help with VIP options."],
      ["Hours response", "Our team is available during listed business hours."],
      ["Link response", "Here is the booking link requested by the caller."],
    ],
  },
  "Blocklist": {
    title: "Blocklist",
    intro: "Numbers blocked from calling or messaging your workspace.",
    rows: [
      ["Blocked numbers", "0"],
      ["Spam filter", "On"],
      ["Unknown callers", "Allowed"],
    ],
  },
  "Profile": {
    title: "Profile",
    intro: "Your user profile and account login details.",
    rows: [
      ["Name", workspace.user],
      ["Email", workspace.email],
      ["Role", "Workspace owner"],
      ["Delete your account", "Available from support"],
    ],
  },
  "Preferences": {
    title: "Preferences",
    intro: "Theme, emoji skin tone, reaction shortcuts and clipboard detection.",
    rows: [
      ["Theme", "System"],
      ["Emoji skin tone", "Default"],
      ["Reaction shortcuts", "Thumbs up, smile, heart"],
      ["Detect numbers from clipboard", "Off"],
    ],
  },
  "Notifications": {
    title: "Notifications",
    intro: "Message previews, notification sounds and work schedule controls.",
    rows: [
      ["Include message previews", "On"],
      ["Play notification sounds", "On"],
      ["Send notifications while off", "On"],
      ["Work schedule", "Off"],
    ],
  },
  "Chat with us": {
    title: "Chat with us",
    intro: "Support conversation with the KiaOra Mobile team.",
    rows: [
      ["Status", "Online"],
      ["Last message", "Hi there, how can we help?"],
      ["Channel", "In-app support"],
    ],
  },
  "Help center": {
    title: "Help center",
    intro: "Guides, tutorials and setup articles for calls, messages and AI Agent.",
    rows: [
      ["Getting started", "Setup guide"],
      ["Carrier registration", "Business messaging compliance"],
      ["AI Agent", "Training, testing and go-live"],
      ["Integrations", "Calendars and scheduling tools"],
    ],
  },
  "Terms of Service": {
    title: "Terms of Service",
    intro: "Legal terms and service policies for the workspace.",
    rows: [
      ["Revision date", "11 Jun 2025"],
      ["App terms", "Available"],
      ["Privacy policy", "Available"],
    ],
  },
};

const agentDetails = {
  "Business Information": {
    title: "Business Information",
    intro: "Core business facts the assistant uses to answer callers accurately.",
    rows: [
      ["Business name", agentBusiness.name],
      ["Website", agentBusiness.website],
      ["Business address", agentBusiness.address],
      ["Business type", agentBusiness.type],
      ["Overview", agentBusiness.overview],
      ["Business phone", workspace.phone],
    ],
  },
  "Agent Profile": {
    title: "Agent Profile",
    intro: "Personality, speaking style and background sound settings for the AI Agent.",
    rows: [
      ["Agent name", "Kia Assistant"],
      ["Voice", "Warm professional"],
      ["Talking speed", "Average"],
      ["Background noise", "Cafe"],
      ["Tone", "Helpful, concise and confident"],
    ],
  },
  "Greeting": {
    title: "Greeting",
    intro: "Customize the first thing callers hear when the assistant answers.",
    rows: [
      ["Greeting", agentBusiness.greeting],
      ["Recording disclosure", "Enabled"],
      ["Business name included", "Yes"],
      ["Edit mode", "Ready"],
    ],
  },
  "Take a Message": {
    title: "Take a Message",
    intro: "Message-taking scenarios define what the assistant should collect from callers.",
    rows: [
      ["Mobile plan inquiry", "Gather current plan, device type and callback details"],
      ["Broadband support", "Capture service address, outage symptoms and contact preference"],
      ["Custom scenario", "Available"],
      ["Summary style", "Short action-oriented summary"],
    ],
  },
  "Transfer Calls": {
    title: "Transfer Calls",
    intro: "Rules for when the assistant should transfer a live call to a person.",
    rows: [
      ["Reception transfer", workspace.phone],
      ["Emergency routing", "Off"],
      ["Account support transfer", "Enabled during business hours"],
      ["No-answer behavior", "Take a message"],
    ],
  },
  "Text a Link": {
    title: "Text a Link",
    intro: "Allow the assistant to send callers useful SMS links during or after a call.",
    rows: [
      ["Plan comparison link", "Enabled"],
      ["Coverage checker", "Enabled"],
      ["Support case link", "Enabled"],
      ["Compliance copy", "Message and data rates may apply"],
    ],
  },
  "Appointments": {
    title: "Appointments",
    intro: "Appointment and booking rules for connected calendar tools.",
    rows: [
      ["Appointments", "Available after integration"],
      ["Default provider", "Google Calendar"],
      ["Booking window", "Next 30 days"],
      ["Confirmation message", "Send SMS confirmation"],
    ],
    actions: [["Open integrations", "integrations"]],
  },
  "FAQs": {
    title: "FAQs",
    intro: "Frequently asked questions the assistant can answer without human help.",
    rows: [
      ["Store hours", "Answered automatically"],
      ["Mobile plan changes", "Answered with support handoff"],
      ["Coverage questions", "Answered with coverage checker link"],
      ["Billing issues", "Needs human review"],
    ],
  },
  "Training Files": {
    title: "Training Files",
    intro: "Documents and reference files used to train the assistant.",
    rows: [
      ["Mobile support FAQ", "Uploaded"],
      ["Broadband support guide", "Uploaded"],
      ["Business services guide", "Uploaded"],
      ["Last training run", "Today"],
    ],
  },
  "Spam Filters": {
    title: "Spam Filters",
    intro: "Deflect unwanted calls and protect the business inbox from spam.",
    rows: [
      ["Spam detection", "On"],
      ["Known spam callers", "Blocked"],
      ["Unknown caller screening", "Ask reason for calling"],
      ["Blocklist sync", "Enabled"],
    ],
  },
  "Website Testing": {
    title: "Website Testing",
    intro: "Preview how the assistant handles web chat and website handoff workflows.",
    rows: [
      ["Website chat", "Ready to test"],
      ["Test page", agentBusiness.website],
      ["Lead capture", "Enabled"],
      ["Handoff to inbox", "Enabled"],
    ],
  },
};

const iconPaths = {
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  back: '<path d="m15 18-6-6 6-6"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>',
  data: '<path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  store: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  ai: '<path d="M12 3a7 7 0 0 0-7 7v4a7 7 0 0 0 14 0v-4a7 7 0 0 0-7-7z"/><path d="M9 11h.01M15 11h.01"/><path d="M9.5 15a4 4 0 0 0 5 0"/>',
  account: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  sliders: '<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M2 14h4M10 8h4M18 16h4"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M21 21v-2a4 4 0 0 0-3-3.87M17 3.13a4 4 0 0 1 0 7.75"/>',
  building: '<path d="M4 21V5l8-3 8 3v16"/><path d="M9 21v-4h6v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/>',
  document: '<path d="M6 2h9l4 4v16H6z"/><path d="M14 2v6h5M9 13h7M9 17h7"/>',
  transfer: '<path d="M16 3h5v5M21 3l-7 7"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/>',
  calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01"/>',
  sparkle: '<path d="M12 2 9.6 9.6 2 12l7.6 2.4L12 22l2.4-7.6L22 12l-7.6-2.4z"/>',
  community: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
};

function icon(name, size = 22) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;
}

function logo() {
  return `<div class="wordmark"><span class="mark-wave"></span><span><strong>KiaOra</strong><small>Mobile</small></span></div>`;
}

function header(title, controls = "") {
  return `<header class="app-header"><h1 class="header-title">${title}</h1><div class="header-actions">${controls}</div></header>`;
}

function detailHeader(title) {
  return `<header class="app-header detail-header">
    <button class="icon-button" aria-label="Back" data-action="back">${icon("back")}</button>
    <h2>${title}</h2>
  </header>`;
}

function tabBar() {
  const tabs = [
    ["conversations", "Home", "home"],
    ["keypad", "Keypad", "data"],
    ["contacts", "Contacts", "users"],
    ["agent", "Kia Agent", "sparkle"],
    ["mobile", "Mobile", "phone"],
    ["account", "Settings", "sliders"],
  ];
  return `<nav class="tab-bar" aria-label="Primary">
    ${tabs.map(([key, label, symbol]) => `
      <button class="tab ${state.tab === key ? "active" : ""}" data-action="tab" data-tab="${key}">
        ${icon(symbol, 21)}<span>${label}</span>
      </button>`).join("")}
  </nav>`;
}

function badge(label, tone = "blue") {
  return `<span class="small-badge ${tone}">${label}</span>`;
}

function activeContact() {
  return contacts.find(contact => contact.name === state.selectedContact) || contacts[0];
}

function conversationScreen() {
  const items = conversations.filter((item) => {
    const segmentMatch = item.kind === state.inboxSegment || state.messageFilter === "All";
    const filterMatch = state.messageFilter === "All" || item.status === state.messageFilter || (state.messageFilter === "Unresponded" && item.kind === "Calls");
    return segmentMatch && filterMatch;
  });
  const openCount = conversations.filter(item => item.status === "Open").length;
  const unreadCount = conversations.filter(item => item.status === "Unread").length;
  return `
  <section class="screen">
    <header class="app-header">${logo()}<div class="header-actions">
      <button class="icon-button compact" aria-label="Activity" data-action="route" data-route="activity">${icon("bell", 19)}</button>
      <button class="icon-button compact" aria-label="Settings" data-action="tab" data-tab="account">${icon("sliders", 19)}</button>
    </div></header>
    <div class="screen-body">
      <div class="workspace-card">
        <span class="avatar small">S</span>
        <div><strong>${secondNumbers[0].name}</strong><p>${workspace.phone} · KiaOra second number</p></div>
        <span class="voice-pill app-only">APP</span>
      </div>
      <div class="comm-status-grid">
        <div><strong>${openCount}</strong><span>open</span></div>
        <div><strong>${unreadCount}</strong><span>unread</span></div>
        <div><strong>Live</strong><span>agent</span></div>
      </div>
      <div class="search inline-search">${icon("search", 18)}<span>Search conversations or numbers</span></div>
      <div class="segments">
        ${["Chats", "Calls"].map(item => `<button class="segment ${state.inboxSegment === item ? "active" : ""}" data-action="segment" data-value="${item}">${item}<small>${item === "Chats" ? "0 unread" : "0 unresponded"}</small></button>`).join("")}
      </div>
      <div class="filter-chips">
        ${["Open", "Done", "Unread", "Unresponded", "All"].map(item => `<button class="chip ${state.messageFilter === item ? "active" : ""}" data-action="filter" data-value="${item}">${item}</button>`).join("")}
      </div>
      <div class="conversation-list">
        ${items.length ? items.map(item => `<button class="conversation ${item.tone === "failed" ? "has-failure" : ""}" data-action="route" data-route="conversation-detail">
          <span class="avatar">${item.name.slice(0, 1)}</span>
          <span class="conversation-text">
            <span class="conversation-head"><strong>${item.name}</strong><time>${item.time}</time></span>
            <p>${item.preview}</p>
            <span class="conversation-meta">${badge(item.status, item.status === "Unread" ? "purple" : "blue")}${item.meta ? badge(item.meta, item.tone === "failed" ? "red" : item.tone === "ai" ? "purple" : "orange") : ""}</span>
          </span>
        </button>`).join("") : `<div class="empty-card">${icon("search", 28)}<h3>No ${state.inboxSegment.toLowerCase()} found</h3><p>Try a different filter or clear the current state.</p><button class="secondary" data-action="filter" data-value="All">Clear filters</button></div>`}
      </div>
      <button class="fab" data-action="toast" data-message="New conversation composer opened">${icon("message", 21)}</button>
    </div>
    ${tabBar()}
  </section>`;
}

function conversationDetail() {
  return `
  <section class="screen">
    ${detailHeader("+64 20 000 2627")}
    <div class="screen-body">
      <div class="contact-hero conversation-hero">
        <span class="avatar purple">VIP</span>
        <h3>VIP Inquiry</h3>
        <p>Unknown caller · ${workspace.inbox}</p>
        <div class="contact-actions compact-actions">
          <button class="contact-action" data-action="toast" data-message="Calling +64 20 000 2627">${icon("phone", 19)}<span>Call</span></button>
          <button class="contact-action" data-action="toast" data-message="Added as contact">${icon("users", 19)}<span>Add</span></button>
          <button class="contact-action" data-action="toast" data-message="Conversation marked done">${icon("shield", 19)}<span>Done</span></button>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-heading"><h3>AI caller summary</h3>${badge("Handled by Kia Agent", "purple")}</div>
        <p>Caller asked whether VIP experiences are available this weekend. Kia Assistant captured event date, party size and callback details.</p>
        <div class="details-grid">
          <div class="captured"><span>Reason</span><strong>VIP table</strong></div>
          <div class="captured"><span>Party size</span><strong>6-8 guests</strong></div>
          <div class="captured"><span>Next action</span><strong>Send link</strong></div>
          <div class="captured"><span>Priority</span><strong>Today</strong></div>
        </div>
      </div>
      <div class="chat-demo">
        <div class="timeline-note"><strong>Today, 4:58 PM</strong><span>Primary inbox</span></div>
        <div class="bubble bot">Hello from demo user</div>
        <div class="bubble user">Hello Back <small>Failed to send</small></div>
        <div class="bubble bot">Kia Assistant can reply with the VIP booking link or mark this as done after callback.</div>
        <div class="bubble bot action-bubble"><button data-action="toast" data-message="Reply composer opened">Reply</button><button data-action="toast" data-message="VIP link sent">Send link</button><button data-action="toast" data-message="Conversation marked done">Mark done</button></div>
      </div>
      <div class="composer-preview"><span>Write a message...</span>${icon("document", 18)}${icon("clock", 18)}${icon("arrow", 18)}</div>
    </div>
  </section>`;
}

function keypadScreen() {
  const keys = [["1", ""], ["2", "ABC"], ["3", "DEF"], ["4", "GHI"], ["5", "JKL"], ["6", "MNO"], ["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"], ["*", ""], ["0", "+"], ["#", ""]];
  return `
  <section class="screen">
    ${header("Keypad", `<button class="icon-button compact" data-action="route" data-route="activity">${icon("bell", 19)}</button>`)}
    <div class="screen-body">
      <div class="workspace-card centered outbound-card">
        <div class="outbound-main">
          <div>
            <strong>Calling from ${secondNumbers[0].name}</strong>
            <p>${workspace.phone}</p>
          </div>
          <span class="voice-pill app-only">APP ONLY</span>
        </div>
        <small>Phone app uses ${deviceNumber.type}: ${deviceNumber.number}</small>
        <div class="outbound-hint">
          <span>${icon("phone", 17)}</span>
          <p><strong>Use this keypad</strong> to show your KiaOra second number.</p>
        </div>
      </div>
      <div class="dialer-number ${state.dialNumber ? "" : "placeholder"}">${state.dialNumber || "Enter a number"}</div>
      <div class="keypad">${keys.map(([digit, letters]) => `<button class="key" data-action="key" data-digit="${digit}">${digit}<small>${letters}</small></button>`).join("")}</div>
      <div class="dial-actions">
        <button class="call-circle message" data-action="toast" data-message="Message composer ready">${icon("message", 23)}</button>
        <button class="call-circle" data-action="toast" data-message="${state.dialNumber ? "Calling " + state.dialNumber : "Enter a number first"}">${icon("phone", 26)}</button>
      </div>
    </div>
    ${tabBar()}
  </section>`;
}

function contactsScreen() {
  return `
  <section class="screen">
    ${header("Contacts", `<button class="icon-button compact" data-action="route" data-route="contact-create">${icon("users", 19)}</button>`)}
    <div class="screen-body">
      <div class="search">${icon("search", 18)}<span>Search contacts</span></div>
      <div class="filter-chips compact-scroll">
        ${["Company", "Creator", "Access", "Tags"].map(item => `<button class="chip" data-action="toast" data-message="${item} filter opened">${item}</button>`).join("")}
      </div>
      <div class="conversation-list">
        ${contacts.map(contact => `<button class="conversation" data-action="contact-detail" data-contact="${contact.name}">
          <span class="avatar purple">${contact.avatar}</span>
          <span class="conversation-text"><span class="conversation-head"><strong>${contact.name}</strong>${badge(contact.access, "blue")}</span><p>${contact.subtitle}</p><span class="conversation-meta">${badge(contact.tags, "orange")}</span></span>
        </button>`).join("")}
      </div>
    </div>
    ${tabBar()}
  </section>`;
}

function contactDetailScreen() {
  const contact = activeContact();
  const rows = [
    ["Company", contact.company],
    ["Role", contact.role],
    ["Phone", contact.phone],
    ["Email", contact.email],
    ["Creator", workspace.user],
    ["Access", contact.access],
    ["Tags", contact.tags],
  ];
  return `
  <section class="screen">
    ${detailHeader(contact.name)}
    <div class="screen-body">
      <div class="contact-hero">
        <span class="avatar purple big-avatar">${contact.avatar}</span>
        <h3>${contact.name}</h3>
        <p>${contact.company}</p>
        <div class="contact-actions">
          <button class="contact-action" data-action="toast" data-message="Calling ${contact.phone}">${icon("phone", 19)}<span>Call</span></button>
          <button class="contact-action" data-action="toast" data-message="Message composer opened">${icon("message", 19)}<span>Message</span></button>
          <button class="contact-action" data-action="toast" data-message="Email composer opened">${icon("document", 19)}<span>Email</span></button>
        </div>
      </div>
      <div class="segments details-tabs"><button class="segment active">Details</button><button class="segment" data-action="toast" data-message="Notes opened">Notes</button></div>
      <div class="setting-list account-list">
        ${rows.map(([label, value]) => `<div class="setting-row static-row"><span class="setting-icon">${icon("document", 18)}</span><span class="label"><strong>${label}</strong><small>${value}</small></span></div>`).join("")}
      </div>
      <div class="card note-card"><h3>Latest note</h3><p>Follow up with VIP link and ask which event date they prefer.</p><div class="composer-preview small"><span>Write a note...</span>${icon("message", 17)}${icon("arrow", 17)}</div></div>
    </div>
  </section>`;
}

function contactCreateScreen() {
  return `
  <section class="screen">
    ${detailHeader("New contact")}
    <div class="screen-body">
      <div class="card create-contact-card">
        <span class="avatar big-avatar">+</span>
        <h2>Add a name...</h2>
        <div class="field"><label>Company</label><strong>Set a company...</strong></div>
        <div class="field"><label>Role</label><strong>Set a role...</strong></div>
        <div class="field"><label>Mobile</label><strong>Set a number...</strong></div>
        <div class="field"><label>Access</label><strong>Everyone</strong></div>
      </div>
      <button class="setting-row property-add" data-action="toast" data-message="Property picker opened"><span class="setting-icon">${icon("store", 18)}</span><span class="label"><strong>Add a property</strong><small>Phone, email, address, URL, tags, date, checkbox, text or number</small></span></button>
      <button class="secondary wide" data-action="toast" data-message="Add a name before saving">Save contact</button>
    </div>
  </section>`;
}

function activityScreen() {
  return `
  <section class="screen">
    ${detailHeader("Activity")}
    <div class="screen-body">
      ${activity.map(item => `<div class="notice-card ${item.severity === "ai" ? "ai-note" : ""}">
        <span class="notice-dot">${icon(item.severity === "alert" ? "bell" : item.severity === "ai" ? "sparkle" : "shield", 18)}</span>
        <div><strong>${item.title}</strong><p>${item.detail}</p></div>
      </div>`).join("")}
    </div>
  </section>`;
}

function agentScreen() {
  if (!state.agentLive) return setupScreen();
  return `
  <section class="screen">
    ${header("AI Agent", `<button class="icon-button compact" data-action="route" data-route="agent-settings">${icon("sliders", 19)}</button>`)}
    <div class="screen-body">
      <div class="card agent-hero">
        <div class="agent-hero-row">
          <span class="setting-icon">${icon("sparkle", 18)}</span>
          <div><strong>Kia Assistant</strong><p>AI Agent line · ${workspace.agentNumber}</p></div>
          ${badge("Live", "green")}
        </div>
        <button class="secondary wide" data-action="route" data-route="plans">View plans</button>
      </div>
      <div class="filter-chips">
        ${["All", "Unread", "Starred", "Archived"].map((item, index) => `<button class="chip ${index === 1 ? "active" : ""}" data-action="toast" data-message="${item} conversations">${item}</button>`).join("")}
      </div>
      <div class="empty-state">
        <span class="ai-orb">${icon("sparkle", 26)}</span>
        <h3>No Unread Conversations</h3>
        <p>You do not currently have any unread conversations.</p>
      </div>
    </div>
    ${tabBar()}
  </section>`;
}

function setupScreen() {
  const steps = [
    ["Building your AI Agent", "Kia Assistant is training on your data.", ["Analyzing your website for data.", "Processing your business information.", "Optimizing your data for AI.", "Generating your custom AI agent."]],
    ["Confirm your business info", "Let's start by confirming your basic business details.", [`Business Profile: ${agentBusiness.name}`, `Business Website: ${agentBusiness.website}`, `Head office address: ${agentBusiness.address}`, `Business Overview: ${agentBusiness.overview}.`]],
    ["Confirm core services", "Here are the core services we found for your business.", ["Mobile plans, SIM and eSIM support", "Broadband and home internet support", "Business telecommunications services", "Coverage, roaming and account assistance"]],
    ["Call Greeting", "Make a great first impression with a personalized call greeting.", [`${agentBusiness.greeting} This call may be recorded for quality and training purposes.`]],
    ["Message Taking", "Choose what information the assistant should collect.", ["Mobile plan inquiry", "Broadband support", "Coverage or roaming question", "Write your own custom scenario"]],
    ["Notifications", "Enable notifications to be alerted when the assistant answers a call.", ["Call Notifications", "Push Notifications", "Email Notifications", "Text Message Notifications"]],
    ["Go live", "Your agent is ready. Make your first test call.", [`Your AI Agent Number: ${workspace.agentNumber}`, "Try asking: Tell me about 2degrees", "Try asking: What mobile plans do you offer?", "Try asking: Where is your Auckland head office?"]],
  ];
  const [title, body, rows] = steps[state.setupStep - 1];
  return `
  <section class="screen">
    ${header("AI Agent setup")}
    <div class="screen-body">
      <div class="setup-track">
        ${["Train", "Confirm", "Test", "Go Live"].map((item, i) => `<span class="${i <= Math.floor((state.setupStep - 1) / 2) ? "current" : ""}">${item}</span>`).join("")}
      </div>
      <div class="card wizard-card agent-wizard">
        <span class="pill setup-pill">Step ${state.setupStep} of 7</span>
        <h2>${title}</h2>
        <p>${body}</p>
        <div class="setting-list embedded">
          ${rows.map(row => `<div class="setting-row"><span class="setting-icon setup-row-icon">${icon("sparkle", 18)}</span><span class="label"><strong>${row}</strong></span></div>`).join("")}
        </div>
        ${state.setupStep === 7 ? `<button class="primary ai-button wide" data-action="toast" data-message="Calling AI Agent test number">${icon("phone", 17)} Call AI Agent</button>` : ""}
      </div>
      <div class="wizard-actions">
        <button class="secondary" data-action="setup-prev">${icon("back", 18)}</button>
        <button class="primary ai-button" data-action="setup-next">${state.setupStep === 7 ? "Go live" : "Continue"} ${icon("arrow", 16)}</button>
      </div>
    </div>
    ${tabBar()}
  </section>`;
}

function agentSettingsScreen() {
  return `
  <section class="screen">
    ${detailHeader("Agent settings")}
    <div class="screen-body">
      <p class="group-label">Agent & business</p>
      <div class="setting-list">${agentSettings.map(([title, subtitle, symbol]) => agentSettingRow(symbol, title, subtitle)).join("")}</div>
    </div>
  </section>`;
}

function agentDetailScreen() {
  const detail = agentDetails[state.agentDetail] || agentDetails["Business Information"];
  return `
  <section class="screen">
    ${detailHeader(detail.title)}
    <div class="screen-body">
      <div class="card detail-summary agent-detail-summary">
        <p class="card-kicker">AI Agent settings</p>
        <h2>${detail.title}</h2>
        <p>${detail.intro}</p>
      </div>
      <div class="setting-list account-list">
        ${detail.rows.map(([label, value]) => `<div class="setting-row static-row">
          <span class="setting-icon agent-setting-icon">${icon("sparkle", 18)}</span>
          <span class="label"><strong>${label}</strong><small>${value}</small></span>
        </div>`).join("")}
      </div>
      ${detail.actions ? `<div class="button-row detail-actions">${detail.actions.map(([label, route]) => `<button class="primary ai-button wide" data-action="tab" data-tab="${route}">${label}</button>`).join("")}</div>` : ""}
    </div>
  </section>`;
}

function accountScreen() {
  return `
  <section class="screen">
    ${header("Account", `<button class="icon-button compact" data-action="route" data-route="integrations">${icon("store", 19)}</button>`)}
    <div class="screen-body">
      <div class="account-profile">
        <span class="company-avatar">SZ</span>
        <div><h2>${workspace.user}</h2><p>${workspace.email}</p></div>
      </div>
      ${settingsGroups.map(([group, rows]) => `<p class="group-label">${group}</p><div class="setting-list account-list">${rows.map(([title, subtitle, symbol]) => accountSettingRow(symbol, title, subtitle)).join("")}</div>`).join("")}
      <button class="primary ai-button wide" data-action="route" data-route="agent-settings">Open AI agent settings</button>
    </div>
    ${tabBar()}
  </section>`;
}

function accountDetailScreen() {
  const detail = accountDetails[state.accountDetail] || accountDetails.General;
  return `
  <section class="screen">
    ${detailHeader(detail.title)}
    <div class="screen-body">
      <div class="card detail-summary">
        <p class="card-kicker">Account settings</p>
        <h2>${detail.title}</h2>
        <p>${detail.intro}</p>
      </div>
      <div class="setting-list account-list">
        ${detail.rows.map(([label, value]) => `<div class="setting-row static-row">
          <span class="setting-icon">${icon("document", 18)}</span>
          <span class="label"><strong>${label}</strong><small>${value}</small></span>
        </div>`).join("")}
      </div>
      ${detail.actions ? `<div class="button-row detail-actions">${detail.actions.map(([label, route]) => `<button class="primary wide" data-action="tab" data-tab="${route}">${label}</button>`).join("")}</div>` : ""}
    </div>
  </section>`;
}

function integrationsScreen() {
  return `
  <section class="screen">
    ${detailHeader("Integrations")}
    <div class="screen-body">
      <div class="contact-hero"><span class="ai-orb">${icon("store", 26)}</span><h3>Connect your favorite tools with Kia Assistant</h3><p>Booking, calendar and workflow providers for the AI agent flow.</p></div>
      <div class="service-grid">
        ${integrations.map(([title, text, status]) => `<button class="service-tile" data-action="toast" data-message="${title} selected"><span class="tile-icon">${icon("calendar", 22)}</span><strong>${title}</strong><p>${text}</p><span class="small-badge blue">${status}</span></button>`).join("")}
      </div>
    </div>
  </section>`;
}

function plansScreen() {
  return `
  <section class="screen">
    ${detailHeader("Go live plan")}
    <div class="screen-body">
      <div class="card agent-plan">
        <h2>Choose a plan to go live</h2>
        <p>Select a subscription so the assistant can start answering customer calls.</p>
        <button class="primary wide" data-action="toast" data-message="Plan selected">View plans ${icon("arrow", 16)}</button>
      </div>
      <p class="group-label">How the assistant answers calls</p>
      <div class="service-grid">
        <button class="service-tile selected" data-action="method" data-value="Forward calls"><span class="tile-icon">${icon("transfer", 22)}</span><strong>Forward calls</strong><p>Forward existing calls to the assistant.</p></button>
        <button class="service-tile" data-action="method" data-value="Use AI Agent No."><span class="tile-icon">${icon("phone", 22)}</span><strong>Use AI Agent No.</strong><p>Use the assistant's number directly.</p></button>
      </div>
    </div>
  </section>`;
}

function mobileScreen() {
  const totalUsed = mobileLines.reduce((sum, line) => sum + line.usage, 0);
  const totalLimit = mobileLines.reduce((sum, line) => sum + line.limit, 0);
  const percent = Math.round((totalUsed / totalLimit) * 100);
  return `
  <section class="screen">
    ${header("Mobile", `<button class="icon-button compact" data-action="toast" data-message="Mobile service alerts opened">${icon("bell", 19)}</button>`)}
    <div class="screen-body">
      <div class="card mobile-summary-card">
        <div class="mobile-summary-head">
          <span class="setting-icon kiaora-icon">${icon("phone", 19)}</span>
          <div><p class="card-kicker">KiaOra Mobile</p><h2>Take Your Own Second Number</h2></div>
          <span class="voice-pill app-only">APP</span>
        </div>
        <p class="mobile-summary-copy">Keep your personal SIM private. Call and text customers from a KiaOra number inside this app.</p>
        <div class="mobile-status-grid">
          <div><strong>2</strong><span>numbers</span></div>
          <div><strong>App only</strong><span>caller ID</span></div>
          <div><strong>Ready</strong><span>Kia Agent</span></div>
        </div>
        <div class="button-row hero-actions compact-actions">
          <button class="primary" data-action="tab" data-tab="keypad">Call from KiaOra</button>
          <button class="secondary" data-action="route" data-route="second-number-flow">Add number</button>
        </div>
      </div>

      <div class="card number-relationship-card">
        <p class="card-kicker">Number relationship</p>
        <div class="number-compare">
          <div><span class="setting-icon">${icon("card", 18)}</span><strong>Primary SIM/eSIM</strong><small>${deviceNumber.number}</small><p>Works in the native Phone app.</p></div>
          <div><span class="setting-icon kiaora-icon">${icon("phone", 18)}</span><strong>KiaOra second number</strong><small>${workspace.phone}</small><p>Works inside KiaOra for business caller ID.</p></div>
        </div>
      </div>

      <p class="group-label">KiaOra second numbers</p>
      <div class="setting-list account-list">
        ${secondNumbers.map(line => {
          return `<button class="mobile-line second-number-row" data-action="toast" data-message="${line.name} selected">
            <span class="setting-icon">${icon(line.name.includes("Agent") ? "sparkle" : "phone", 19)}</span>
            <span class="label"><strong>${line.name}</strong><small>${line.number} · ${line.mode}</small><em>${line.routing}</em></span>
            <span class="usage-mini">${line.status}</span>
          </button>`;
        }).join("")}
      </div>

      <p class="group-label">Device number</p>
      <div class="setting-list account-list">
        <div class="mobile-line device-number-row">
          <span class="setting-icon">${icon("card", 19)}</span>
          <span class="label"><strong>${deviceNumber.name}</strong><small>${deviceNumber.number} · ${deviceNumber.type}</small><em>Used by ${deviceNumber.behavior}</em></span>
          <span class="usage-mini">Personal</span>
        </div>
      </div>

      <div class="service-grid">
        <button class="service-tile" data-action="route" data-route="mobile-usage"><span class="tile-icon">${icon("data", 22)}</span><strong>Usage</strong><p>Week, month and category breakdown.</p></button>
        <button class="service-tile" data-action="route" data-route="mobile-plans"><span class="tile-icon">${icon("store", 22)}</span><strong>Plans</strong><p>Current plan, boosts and add-ons.</p></button>
        <button class="service-tile" data-action="route" data-route="second-number-flow"><span class="tile-icon">${icon("phone", 22)}</span><strong>Add second number</strong><p>Choose or bring a business number.</p></button>
        <button class="service-tile" data-action="toast" data-message="Number porting checklist opened"><span class="tile-icon">${icon("transfer", 22)}</span><strong>Bring a number</strong><p>Move an existing business number to KiaOra.</p></button>
        <button class="service-tile" data-action="toast" data-message="Roaming settings opened"><span class="tile-icon">${icon("globe", 22)}</span><strong>Roaming</strong><p>Manage travel packs and roaming status.</p></button>
        <button class="service-tile" data-action="toast" data-message="Mobile billing opened"><span class="tile-icon">${icon("card", 22)}</span><strong>Billing</strong><p>Next renewal: NZ$89 on 2 Jun.</p></button>
      </div>

      <p class="group-label">Add-ons</p>
      <div class="setting-list">
        ${mobileAddOns.map(([title, subtitle, price]) => `<button class="setting-row" data-action="toast" data-message="${title} added">
          <span class="setting-icon">${icon("data", 19)}</span>
          <span class="label"><strong>${title}</strong><small>${subtitle}</small></span>
          <strong class="price-label">${price}</strong>
        </button>`).join("")}
      </div>
    </div>
    ${tabBar()}
  </section>`;
}

function secondNumberFlowScreen() {
  return `
  <section class="screen">
    ${detailHeader("Add second number")}
    <div class="screen-body">
      <div class="card second-flow-hero">
        <p class="card-kicker">Step 1 of 5</p>
        <h2>Choose how to add your KiaOra number</h2>
        <p>This number is app-based. To show it as caller ID, start outbound calls inside KiaOra.</p>
      </div>
      <div class="service-grid">
        <button class="service-tile selected" data-action="toast" data-message="New KiaOra number selected"><span class="tile-icon">${icon("phone", 22)}</span><strong>New KiaOra number</strong><p>Pick a fresh business number.</p></button>
        <button class="service-tile" data-action="toast" data-message="Porting option selected"><span class="tile-icon">${icon("transfer", 22)}</span><strong>Bring a number</strong><p>Move an existing business number.</p></button>
        <button class="service-tile" data-action="toast" data-message="AI Agent number selected"><span class="tile-icon">${icon("sparkle", 22)}</span><strong>AI Agent number</strong><p>Dedicated line for Kia Agent.</p></button>
        <button class="service-tile" data-action="toast" data-message="Team number selected"><span class="tile-icon">${icon("users", 22)}</span><strong>Team number</strong><p>Shared calling for staff.</p></button>
      </div>
      <div class="card app-only-confirm">
        <h3>Your KiaOra number calls from the app</h3>
        <p>Calls from the iPhone Phone app will still use your SIM/eSIM number. Use KiaOra Keypad to show your second number.</p>
        <div class="confirm-row"><span>${icon("shield", 18)} I understand app-only outbound calling</span><strong>Required</strong></div>
      </div>
      <button class="primary wide" data-action="toast" data-message="Number picker opened">Choose available numbers</button>
    </div>
  </section>`;
}

function mobileUsageScreen() {
  const usageRows = [
    ["Data", "18.4GB used", "NZ$0.00"],
    ["Calls", "126 minutes", "Included"],
    ["SMS", "42 messages", "Included"],
    ["MMS", "3 messages", "NZ$0.90"],
  ];
  return `
  <section class="screen">
    ${detailHeader("Usage")}
    <div class="screen-body">
      <div class="card usage-detail-card">
        <div class="usage-card-head"><h3>Primary Mobile</h3><div class="mini-toggle"><span class="active">Week</span><span>Month</span></div></div>
        <div class="chart-bars">
          ${[32, 48, 22, 68, 42, 76, 36].map((value, index) => `<i style="--h:${value}%"><span>${["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"][index]}</span></i>`).join("")}
        </div>
        <div class="usage-total"><strong>18.4GB</strong><span>used of 40GB</span></div>
      </div>
      <div class="filter-chips compact-scroll">${["Data", "Calls", "SMS", "MMS"].map((item, index) => `<button class="chip ${index === 0 ? "active" : ""}" data-action="toast" data-message="${item} breakdown selected">${item}</button>`).join("")}</div>
      <div class="setting-list account-list">
        ${usageRows.map(([label, detail, cost]) => `<div class="setting-row static-row"><span class="setting-icon">${icon(label === "Data" ? "data" : label === "Calls" ? "phone" : "message", 18)}</span><span class="label"><strong>${label}</strong><small>${detail}</small></span><strong class="price-label">${cost}</strong></div>`).join("")}
      </div>
    </div>
  </section>`;
}

function mobilePlansScreen() {
  return `
  <section class="screen">
    ${detailHeader("Plans & add-ons")}
    <div class="screen-body">
      <div class="segments details-tabs"><button class="segment active">Plans</button><button class="segment" data-action="toast" data-message="Add-ons selected">Add-ons</button><button class="segment" data-action="toast" data-message="Roaming selected">Roaming</button></div>
      <p class="group-label">Current</p>
      <div class="card current-plan-card large">
        <div><p class="card-kicker">Active monthly plan</p><h3>KiaOra Mobile Pro</h3><span>40GB data · Unlimited NZ calls · 500 SMS</span></div>
        <strong>NZ$89</strong>
      </div>
      <p class="group-label">Available products</p>
      <div class="plan-list">
        ${mobilePlans.map(([title, cadence, details, price], index) => `<button class="plan-card ${index === 0 ? "selected" : ""}" data-action="toast" data-message="${title} details opened"><span class="setting-icon">${icon(index === 2 ? "data" : "store", 19)}</span><span><h3>${title}</h3><p>${cadence} · ${details}</p></span><strong>${price}</strong></button>`).join("")}
      </div>
      <button class="secondary wide" data-action="toast" data-message="Voucher redeem opened">Redeem voucher</button>
    </div>
  </section>`;
}

function settingRow(symbol, title, subtitle, message = title) {
  return `<button class="setting-row" data-action="toast" data-message="${message} selected">
    <span class="setting-icon">${icon(symbol, 20)}</span>
    <span class="label"><strong>${title}</strong><small>${subtitle}</small></span>
    <span class="chevron">›</span>
  </button>`;
}

function accountSettingRow(symbol, title, subtitle) {
  return `<button class="setting-row" data-action="account-detail" data-detail="${title}">
    <span class="setting-icon">${icon(symbol, 20)}</span>
    <span class="label"><strong>${title}</strong><small>${subtitle}</small></span>
    <span class="chevron">›</span>
  </button>`;
}

function agentSettingRow(symbol, title, subtitle) {
  return `<button class="setting-row" data-action="agent-detail" data-detail="${title}">
    <span class="setting-icon">${icon(symbol, 20)}</span>
    <span class="label"><strong>${title}</strong><small>${subtitle}</small></span>
    <span class="chevron">›</span>
  </button>`;
}

function render() {
  const views = {
    conversations: conversationScreen,
    "conversation-detail": conversationDetail,
    keypad: keypadScreen,
    contacts: contactsScreen,
    "contact-detail": contactDetailScreen,
    "contact-create": contactCreateScreen,
    activity: activityScreen,
    agent: agentScreen,
    "agent-settings": agentSettingsScreen,
    "agent-detail": agentDetailScreen,
    mobile: mobileScreen,
    "second-number-flow": secondNumberFlowScreen,
    "mobile-usage": mobileUsageScreen,
    "mobile-plans": mobilePlansScreen,
    account: accountScreen,
    "account-detail": accountDetailScreen,
    integrations: integrationsScreen,
    plans: plansScreen,
  };
  document.getElementById("app").innerHTML = views[state.route]();
}

function navigate(route, tab = state.tab) {
  state.route = route;
  state.tab = tab;
  render();
}

function toast(message) {
  const element = document.getElementById("toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timeout);
  toast.timeout = setTimeout(() => element.classList.remove("show"), 1900);
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;

  if (action === "tab") navigate(button.dataset.tab, button.dataset.tab);
  if (action === "route") navigate(button.dataset.route, state.tab);
  if (action === "back") navigate(state.tab, state.tab);
  if (action === "segment") {
    state.inboxSegment = button.dataset.value;
    render();
  }
  if (action === "filter") {
    state.messageFilter = button.dataset.value;
    render();
  }
  if (action === "account-detail") {
    state.accountDetail = button.dataset.detail;
    navigate("account-detail", "account");
  }
  if (action === "agent-detail") {
    state.agentDetail = button.dataset.detail;
    navigate("agent-detail", "agent");
  }
  if (action === "contact-detail") {
    state.selectedContact = button.dataset.contact;
    navigate("contact-detail", "contacts");
  }
  if (action === "key") {
    state.dialNumber += button.dataset.digit;
    render();
  }
  if (action === "setup-prev") {
    state.setupStep = Math.max(1, state.setupStep - 1);
    render();
  }
  if (action === "setup-next") {
    if (state.setupStep < 7) {
      state.setupStep += 1;
      render();
    } else {
      state.agentLive = true;
      navigate("agent", "agent");
      toast("AI Agent is live");
    }
  }
  if (action === "method") {
    state.callMethod = button.dataset.value;
    toast(`${state.callMethod} selected`);
  }
  if (action === "toast") toast(button.dataset.message);
});

render();
