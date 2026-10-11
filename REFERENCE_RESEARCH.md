# KiaOra Prototype Reference Research

Captured from live iPhone Mirroring on 2026-05-28.

These notes are for product and UX research only. Do not copy external app names, logos, exact protected copy, screenshots or brand-specific visual assets into the KiaOra prototype. Translate useful patterns into KiaOra-owned language, flows and visuals.

## Research Goal

Understand two reference app patterns:

- A business communication inbox app with calling, messaging, contacts, workspace settings and phone-number management.
- An AI phone-agent app with setup, agent configuration, integrations, billing and go-live flows.

The current KiaOra prototype already combines both directions. These notes should help refine the mock data, screen structure, states and interaction details.

## Shared Design Patterns

- Use compact iOS-style navigation with large touch targets, soft rounded surfaces and clear section grouping.
- Keep the primary work area sparse and task-focused. Most pages have one obvious job.
- Use bottom tabs for the core mode switch, then use pushed detail pages for configuration.
- Pair icon + title + one-line helper copy for settings rows.
- Use cards for configuration modules, not for every page section.
- Use empty states with a small illustration/icon, a short title and a practical reassurance line.
- Use badges for state: live, action required, available, unread, open, done.
- Keep risky or unavailable actions visibly disabled or behind explanatory modals.
- Put persistent primary actions near the bottom, especially in setup or billing flows.

## Business Communication App Reference

### Navigation

Observed bottom tabs:

- Home
- Keypad
- Contacts
- Activity

Secondary access:

- Profile/avatar opens a side drawer.
- Side drawer contains profile identity, Do not disturb, Settings and Inboxes.
- Inboxes section has an active inbox row and a Manage action.

Design takeaway for KiaOra:

- Keep the core communication tabs simple.
- Consider a lightweight inbox switcher from the avatar or workspace header.
- Settings can remain a separate tab in KiaOra, but the drawer pattern is useful for account/workspace context.

### Home Inbox

Observed structure:

- Header shows active inbox name and phone number.
- Top controls include selection mode, filters and search.
- Two prominent mode cards: Chats and Calls.
- Conversation list rows show avatar, sender/number, preview, error/status text and date.
- Floating composer action opens a new-message sheet.
- Calls card can become the active mode and show an empty state.

States and controls:

- Selection mode changes the header to Select all / Cancel.
- Bulk-action bar appears near the bottom with actions such as Move to Done, Mark as read and overflow.
- Filter quick menu includes Open, Done, Unread, Unresponded and More filters.
- Full filter sheet has Clear all, Done, status options and Company.
- Applying a filter creates a removable filter chip.
- No-results state uses title, explanation and Clear filters action.

Design takeaway for KiaOra:

- Add visible filter chips after applying filters.
- Add bulk-selection states if the inbox becomes more than a static mock.
- Calls and Chats can share one list model but should have different empty states and filters.

### Conversation Detail

Observed structure:

- Header has back, avatar, phone number/name, Add as contact and call action.
- Timeline groups messages by date/time.
- Incoming and outgoing messages use distinct alignment and colors.
- Failed outgoing message displays a red failed-to-send status.
- Composer has message field plus utility icons, attachment, schedule/clock and send.

Design takeaway for KiaOra:

- Conversation detail should support delivery/error states, not only happy-path messages.
- Add as contact is a good bridge from unknown caller to CRM/contact management.
- Keep call action visible in conversation context.

### Keypad

Observed structure:

- Active inbox header with number.
- Search shortcut.
- Large numeric keypad.
- Two bottom actions: message and call.

Design takeaway for KiaOra:

- Keypad should clearly show which business number will be used.
- Message and call actions should be distinct, with call as the primary action.

### Contacts

Observed list:

- Search field.
- Filter control.
- Contact rows with avatar, name and company.
- Floating add action.
- Selection mode mirrors inbox selection mode.

Observed contact detail:

- Large avatar, contact name and company.
- Quick actions: call, message, email and more.
- Details / Notes segmented control.
- Details include company, role, phone, email, creator and access.
- Notes has a bottom note composer with utility icons.

Observed create-contact form:

- Large editable avatar placeholder.
- Name field.
- Default properties: Company, Role, Mobile and Access.
- Add property action opens a bottom sheet.
- Property options include Phone, Email, Address, URL, Tags, Date, Checkbox, Text and Number.
- Save stays disabled until required content exists.

Design takeaway for KiaOra:

- Contact detail should be a real third-level page, not just a toast.
- Add a Notes tab if the prototype needs CRM-like richness.
- The add-property sheet is a useful pattern for extensible contact records.

### Activity

Observed structure:

- Activity tab lists operational alerts.
- Example event: message not delivered, timestamp, inbox and recipient context.

Design takeaway for KiaOra:

- Activity can summarize delivery failures, missed calls, agent actions and billing/setup warnings.

### Settings

Observed groups:

- Workspace
- Your account
- Product/support section

Observed Workspace items:

- General
- Phone numbers
- Plan & billing
- Trust center
- Contacts
- Snippets
- Blocklist

Observed Your account items:

- Profile
- Preferences
- Notifications

Observed product/support items:

- Chat with us
- Help center
- Terms and privacy
- Leave a review
- Log out
- App version

Design takeaway for KiaOra:

- Current KiaOra Settings map is close. It can be improved with more concrete third-level row content and a few empty states.
- The app version row is useful for realism but can stay low priority.

### Settings Detail Pages

General:

- Workspace logo/avatar.
- Tap to change logo.
- Workspace name row.

Phone number:

- Number name and phone number header.
- Editable icon/avatar.
- Name.
- Business hours.
- Call flow.
- International calls & messages.
- Voicemail greeting.
- Forward all calls.
- Ringtone.
- Mute phone number.
- Show calls in recent.
- Explanatory helper text for privacy/team behavior.

Call flows:

- List row with icon, call-flow name, last edited time and Live badge.
- Attempting to edit a live call flow on mobile can show a modal saying editing requires desktop.

Plan and billing:

- Payment method.
- Next billing date.
- Restore purchase.
- Change billing address.
- Short helper copy under billing address.

Trust center:

- Register your numbers headline.
- Explanation that carriers require VoIP registration before sending texts to US/Canadian numbers.
- Local numbers registration card.
- Register now and Learn more actions.

Contacts settings:

- Sort order.
- Sync contacts.
- Privacy helper text explaining imported address book contacts.

Snippets:

- Search.
- Empty state.
- Add action.
- Create form with name, message and share scope.

Blocklist:

- Empty state with friendly copy.

Profile:

- User photo.
- Name.
- Email.
- Delete account row.

Preferences:

- Theme.
- Emoji skin tone.
- Reaction shortcuts.
- Detect numbers from clipboard toggle with explanatory copy.

Notifications:

- Include message previews toggle.
- Play notification sounds toggle.
- Send notifications while off toggle.
- Work schedule row.
- DND/business-hours helper copy.

Design takeaway for KiaOra:

- Use concrete row-level values rather than generic settings labels.
- Add helper text below settings when privacy, compliance or team visibility matters.
- Include disabled/failure states because they make the prototype feel operational.

## AI Phone Agent App Reference

### Navigation

Observed bottom tabs:

- Conversations
- Agent Settings
- Integrations
- Account

Design takeaway for KiaOra:

- KiaOra's combined app can keep Kia Agent as one bottom tab, but internally it should preserve these four conceptual areas.

### Conversations

Observed structure:

- Business/app identity card.
- Location/business name.
- Phone-number chip.
- Warning card when the agent is not live.
- Filters: All, Unread, Starred, Archived.
- Empty state explaining that incoming conversations will appear there.

Design takeaway for KiaOra:

- Agent dashboard should show live/not-live state before conversation filters.
- Add an explicit no-conversations empty state after setup.

### Setup Guide And Go Live

Observed setup track:

- Train
- Customize
- Test
- Go Live

Observed go-live content:

- Headline tells the user the agent is ready and should be connected with live callers.
- Action-required card prompts choosing a plan.
- Plan CTA is prominent.
- User chooses how the agent should answer calls.
- Options include forwarding existing calls or using the agent number directly.
- Forwarding option shows explanatory copy about forwarding from an existing number.

Design takeaway for KiaOra:

- Keep setup progress visible during go-live.
- Separate "agent configured" from "agent live"; payment and forwarding may still block launch.
- Use selectable cards for call-forwarding method choice.

### Agent Settings List

Observed groups:

- Agent & Business
- Call Handling
- Training & Knowledge
- Protection
- Website Chat

Observed settings:

- Business Information
- Agent Profile
- Greeting
- Take a Message
- Transfer Calls
- Text a Link
- Appointments
- FAQs
- Custom Training
- Spam Filters
- Website Texting

Design takeaway for KiaOra:

- Current KiaOra agent settings should keep this grouping.
- Website testing/texting should be visually separated from call handling because it is a different channel.

### Business Information

Observed detail page:

- Top info banner explains the purpose.
- Training Sources card lists sources the agent uses.
- Sources include business profile and business website.
- Website source can show page count included.
- Business Details card includes business name, pronunciation, address and primary phone number.
- Edit actions are local to cards.

Design takeaway for KiaOra:

- Split source ingestion from editable business facts.
- Use card-local Edit buttons instead of one global edit mode.

### Agent Profile

Observed detail page:

- Agent name.
- Voice.
- Tone.
- Talking speed.
- Background noise.
- Languages section.

Design takeaway for KiaOra:

- Agent persona should have concrete values.
- Voice/tone/speed/noise are useful demo controls even if not connected to real AI.

### Greeting

Observed detail page:

- Purpose banner.
- Phone Greeting card.
- Type value.
- Greeting script.
- Legal disclaimer included value.
- Edit action.
- Alternative Greeting card with toggle and Configure action.

Design takeaway for KiaOra:

- Greeting needs script preview and compliance status.
- Alternative greeting is a good feature for after-hours or special events.

### Take A Message

Observed detail page:

- Purpose banner explains collecting relevant info based on caller reason.
- Message Taking Scenarios card.
- Included-plan count.
- Add action.
- Scenario cards with title, explanation and edit icon.
- Default fallback rule for unmatched scenarios.

Design takeaway for KiaOra:

- Message taking should be scenario-based, not one generic message form.
- Include fallback behavior so the agent always has an answer.

### Transfer Calls

Observed detail page:

- Explains transfer to person or department at caller request.
- Notes that transfer numbers must be unique and different from forwarding numbers.
- Feature availability text for phone-number limitations.
- Transfer scenarios section.
- Add action.
- Empty state when no transfer scenarios exist.

Design takeaway for KiaOra:

- Transfers should be modeled as scenarios with constraints.
- Explain setup constraints in-page instead of hiding them in help docs.

### Text A Link

Observed detail page:

- Explains texting a link based on scenarios.
- Uses examples such as directions, menu or custom link.
- Mentions SMS compliance settings in Account Settings.
- Link Scenarios section.
- Add action.
- Empty state when no link scenarios exist.

Design takeaway for KiaOra:

- Text-link behavior should be scenario-triggered.
- Cross-link compliance settings from the feature page.

### Appointments

Observed detail page:

- Send Appointment Link section with disabled toggle.
- Helper copy says enable it to send appointment links.
- Edit action.
- Schedule Appointments card.
- Explains direct calendar booking from real-time availability.
- CTA to explore calendar integrations.
- Calendar service icons appear in the card footer.

Design takeaway for KiaOra:

- Separate "send a booking link" from "book directly into calendar".
- Use integration status to explain why appointment automation may be inactive.

### FAQs

Observed detail page:

- Purpose banner.
- FAQs card explains the agent can answer caller questions from provided knowledge.
- Up to 20 FAQs.
- Questions section.
- Add action.
- Empty state when no questions exist.

Design takeaway for KiaOra:

- FAQs should have a capped list and empty state.
- Use this as a lightweight knowledge-base demo.

### Custom Training

Observed detail page:

- Premium feature banner.
- Available on higher plans.
- Explains uploading relevant files for business context.
- Mock file-list preview.
- Upgrade to Enable action.

Design takeaway for KiaOra:

- Premium/locked features can still be shown to explain product depth.
- File training should not look active unless enabled.

### Spam Filters

Observed detail page:

- Purpose banner.
- Detect and Block Spam card.
- Smart Spam Detection toggle.
- Block toll-free numbers toggle.
- Blocked Number List card.
- Add action.
- Empty blocked-numbers state.

Design takeaway for KiaOra:

- Spam protection should combine automatic toggles and manual block list.
- This page gives a strong, simple demo of operational control.

### Website Texting

Observed behavior:

- Feature unavailable modal.
- Explains the feature is not available with Apple billing and requires sign-up on the web.

Design takeaway for KiaOra:

- If a feature is web-only or unavailable, use a clear modal with the reason and next step.

### Integrations

Observed structure:

- Header icon and title.
- Supporting line about connecting tools.
- Two-column grid of integration cards.
- Cards include logo, title, short benefit copy and availability status.

Observed services:

- Acuity Scheduling
- Appointlet
- Calendly
- Google Calendar
- Zapier

Design takeaway for KiaOra:

- Two-column card grid works well in a narrow iPhone frame.
- For each integration, show what automation it unlocks, not only the service name.

### Account

Observed account menu:

- Setup Guide.
- Account Settings.
- Notifications.
- Users.
- Billing.
- Chat with Support.
- Add New Business.
- Sign Out.

Account Settings detail:

- Account email.
- Helper text to contact support to change email.
- Recordings section.
- Clear recordings action.
- Verification Codes section.
- Call Forwarding Verification - SMS authentication code toggle.
- Explanation about carrier requirements and turning it off after forwarding setup.

Notifications detail:

- Call Notifications card.
- Email notifications toggle.
- Email address list with edit action.
- Text notifications toggle.
- Mobile number section with Add action.
- Push notifications toggle.
- Call types row with edit action.

Users detail:

- Team Members card.
- Add action.
- Table-like list with email, role and last active.
- Edit icon per user.

Billing detail:

- Choose Your Plan page.
- Free trial banner.
- Expandable "all plans include" row.
- Plan cards with price, intended audience and feature bullets.
- Professional tier observed at US$49/month.
- Scale tier observed at US$149/month and marked most popular.
- Start Free Trial sticky CTA.
- Restore Purchases.
- Terms and privacy links.

Design takeaway for KiaOra:

- Account pages should distinguish account identity, team management, notification routing and billing.
- The plan page is useful for prototype realism, but avoid final purchase actions in the mock.

## Visual System Notes

Business communication reference:

- Strong dark-mode support.
- Black/dark charcoal background, subtle borders and muted row dividers.
- Blue primary action for composer and call-to-action buttons.
- Green call action.
- Red for failed delivery and destructive/risky actions.
- Compact monochrome icons in settings rows.

AI agent reference:

- Light background with soft lavender/purple accent.
- Section cards use pale purple icons and generous spacing.
- Progress states use pills and compact checkmarks.
- Locked/premium features use yellow/gold treatment.
- Primary paid CTA uses bold purple.
- Many pages use explanatory banners at the top, then actionable cards.

KiaOra adaptation:

- Avoid one-note purple dominance in the combined app.
- Keep KiaOra visual identity distinct: use KiaOra-owned color balance, names and icons.
- Borrow structural patterns, not brand styling.

## Priority Ideas For Next Development

- Add contact detail and create-contact pages to the KiaOra prototype.
- Add conversation detail with delivery-failure state and composer utilities.
- Add filter chips and no-results empty state for Home.
- Expand Mobile / phone-number settings with business hours, call flow, voicemail, forwarding, ringtone and recent-calls rows.
- Add Agent Profile detail values: name, voice, tone, speed, language and background sound.
- Add Agent Settings detail pages for Transfer Calls, Text a Link, Appointments, FAQs, Custom Training, Spam Filters and Website Texting.
- Add a clearer Go Live page with plan blocker and call-answering method cards.
- Add integrations card grid with concise benefit copy.
- Add account notification routing and team users pages.
- Add more realistic disabled, locked, live and action-required states.
