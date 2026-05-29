# KiaOra Mobile Prototype Handoff

## Project Location

Local project root:

```text
LOCAL_WORKSPACE\kiaora-mobile-ios
```

GitHub repository:

```text
https://github.com/nbsn/KiaOraMobileApp.git
```

Current branch:

```text
main
```

## Current Product Direction

This project is now an English-only KiaOra Mobile prototype. It is no longer the earlier KiaOra Mobile / 2degrees family data pool demo.

The current app combines:

- Business inbox and conversations
- Keypad and calling
- Contacts
- Kia Agent setup and settings
- Mobile services
- Settings and account management

External reference branding has been removed. The retained UX patterns are represented under KiaOra-owned names such as KiaOra Mobile, Kia Assistant and Kia Agent.

## Important Files

```text
index.html      App shell and presentation frame
app.js          Main mock data, routing, screens and interactions
styles.css      iPhone frame, UI system and all screen styles
README.md       Short project description
HANDOFF.md      This handoff document
previews/       Generated screenshots for review
```

## Implemented Navigation

Bottom navigation currently has 6 tabs:

```text
Home
Keypad
Contacts
Kia Agent
Mobile
Settings
```

The internal route for Home is still named `conversations`, but the visible label is `Home`.

## Implemented Screens

### Home

Includes:

- Primary business inbox
- Chats / Calls segmented control
- Status filters: Open, Done, Unread, Unresponded, All
- Conversation list
- Floating message composer button
- Activity and Settings shortcuts

### Keypad

Includes:

- Primary inbox number
- Dial pad
- Message action
- Call action

### Contacts

Includes:

- Search field
- Contact list
- Contact open toast interaction

### Kia Agent

Includes:

- 7-step AI Agent setup flow
- Train / Confirm / Test / Go Live progress track
- Go-live dashboard after setup
- AI Agent conversation filters
- No unread conversations empty state

### Kia Agent Settings

Agent settings now has third-level detail pages.

Second-level items:

- Business Information
- Agent Profile
- Greeting
- Take a Message
- Transfer Calls
- Text a Link
- Appointments
- FAQs
- Training Files
- Spam Filters
- Website Testing

Each item opens an `agent-detail` route with its own summary and configuration rows.

### Mobile

Includes:

- Mobile services overview
- Data usage ring
- NZ mobile numbers using `+64`
- eSIM, voice and physical SIM lines
- Activate eSIM
- Port number
- Roaming
- Billing
- Add-ons

Current sample numbers:

```text
Primary inbox: +64 9 000 0116
AI Agent number: +64 9 000 7902
Primary mobile: +64 21 000 0116
Team mobile: +64 22 000 7902
Conversation sample: +64 20 000 2627
```

### Settings

Settings was previously Account. It now has third-level detail pages.

Second-level groups:

- Workspace
- Messaging
- Account
- Support

Second-level items:

- General
- Phone numbers
- Plan & billing
- Trust center
- Contacts
- Snippets
- Blocklist
- Profile
- Preferences
- Notifications
- Chat with us
- Help center
- Terms of Service

Each item opens an `account-detail` route with its own summary and configuration rows.

## Brand / Content Rules

Current project requirements:

- English only
- No visible external reference branding
- No Chinese UI copy in the main prototype
- Use KiaOra Mobile, Kia Assistant and Kia Agent naming
- Use New Zealand phone numbers starting with `+64`

Useful check:

```powershell
rg "[\p{Han}]|Quo|QUO|Rosie|rosie|quo" app.js index.html README.md
```

Expected result: no matches.

## Local Preview

Open:

```text
file:///LOCAL_WORKSPACE/kiaora-mobile-ios/index.html
```

The prototype is dependency-free. It can be opened directly in a browser.

## Verification Commands

JavaScript syntax check:

```powershell
& 'LOCAL_CODEX_CACHE\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check 'LOCAL_WORKSPACE\kiaora-mobile-ios\app.js'
```

Brand/content scan:

```powershell
rg "[\p{Han}]|Quo|QUO|Rosie|rosie|quo" app.js index.html README.md
```

Recent Playwright checks verified:

- Home tab label
- Kia Agent tab label
- Mobile tab
- Account/Settings third-level pages
- Agent settings third-level pages
- No console errors on tested routes

## Git Status

Repository has been initialized and pushed to GitHub.

Git author:

```text
user.name = nbsn
user.email = owner@kiaora.example
```

Remote:

```text
origin https://github.com/nbsn/KiaOraMobileApp.git
```

Useful commands:

```powershell
git status
git add .
git commit -m "Describe change"
git push
```

On another machine:

```bash
git clone https://github.com/nbsn/KiaOraMobileApp.git
cd KiaOraMobileApp
git config user.name "nbsn"
git config user.email "owner@kiaora.example"
```

## Related Local Folders

The parent workspace also contains:

```text
LOCAL_WORKSPACE\reference-inbox-screens
LOCAL_WORKSPACE\reference-agent-screens
LOCAL_WORKSPACE\kiaora-mobile-ios-v1-bilingual
```

Notes:

- The reference screenshot folders are not part of the current GitHub project.
- `kiaora-mobile-ios-v1-bilingual` is an older bilingual KiaOra Mobile / 2degrees demo direction.
- The current GitHub project is only `kiaora-mobile-ios`.

## Recommended Next Steps

- Review all third-level detail pages for copy quality.
- Decide whether the Home screen should become a richer dashboard instead of an inbox-first page.
- Add lightweight route state to keep setup completion persistent across reloads if needed.
- Replace generated preview screenshots that still reference old concepts if they are no longer useful.
- Consider moving old preview images out of the repo if the repository should stay lean.

## Live iPhone Reference Observations

Captured from the mirrored iPhone on 2026-05-28. Treat these as UX reference notes only. Do not expose Quo, Rosie, or other external reference branding in the KiaOra prototype.

### Business Inbox Reference

- Main mobile navigation uses four tabs: Home, Keypad, Contacts and Activity.
- Home combines an inbox selector, Chats / Calls cards, a filter menu, search and a floating new-message action.
- Calls filter menu includes Missed, Voicemail, Unresponded, Handled by assistant, Call tags and conversation state options such as Any, Open and Done.
- Empty inbox state uses a compact illustration, a short title and one-line reassurance copy.
- New message opens as a bottom sheet with a recipient field and composer bar.
- Activity shows alert-style events such as failed message delivery.
- Side drawer includes profile, do-not-disturb, Settings and an Inboxes list with a Manage action.

### Contacts Reference

- Contacts screen has search, a filter control, contact list rows and a floating add action.
- Contact filter sheet has Clear all, Done and grouped filters such as Company, Creator and Access.
- Contact detail page includes large avatar, name, company, quick actions for call/message/email/more, and Details / Notes segmented tabs.
- Contact details use simple key-value rows for company, role, phone, email, creator and access.
- Notes tab has a note composer with small utility icons.

### Phone Number Settings Reference

- Phone number detail page starts with number name and number, then an editable icon/avatar.
- Rows include Name, Business hours, Call flow, International calls & messages, Voicemail greeting, Forward all calls, Ringtone, Mute phone number and Show calls in recent.
- Call flow selection list shows call flow name, last edited time and a Live badge.
- Mobile call-flow editing may be blocked with a modal telling the user to open the desktop browser.

### AI Agent Reference

- Agent app navigation uses Conversations, Agent Settings, Integrations and Account.
- Conversations page has business/location identity, phone number chip, plan-not-live alert, filters for All / Unread / Starred / Archived and an empty conversation state.
- Setup guide uses a progress track: Train, Customize, Test and Go Live.
- Go-live step emphasizes that the agent is ready, prompts the user to choose a plan, and asks how the agent should answer calls.
- Call-answering options are shown as selectable cards, including forwarding existing calls or using the agent number directly.

### Agent Settings Reference

- Agent Settings are grouped into Agent & Business, Call Handling, Training & Knowledge, Protection and Website Chat.
- Items observed: Business Information, Agent Profile, Greeting, Take a Message, Transfer Calls, Text a Link, Appointments, FAQs, Custom Training and Spam Filters.
- Greeting detail page has an explanatory banner, Phone Greeting card, type, greeting copy, legal disclaimer status, Edit action, and Alternative Greeting toggle/configure card.
- Take a Message detail page has Message Taking Scenarios, included-plan count, Add action, scenario cards with edit icons, and a default fallback rule.

### Integrations And Account Reference

- Integrations page uses a two-column card grid with service logo, title, short benefit copy and availability status.
- Services observed: Acuity Scheduling, Appointlet, Calendly, Google Calendar and Zapier.
- Account page groups Setup Guide, Account Settings, Notifications, Users, Billing, Chat with Support, Add New Business and Sign Out.
