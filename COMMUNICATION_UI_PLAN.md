# KiaOra Communication UI Plan

Created on 2026-05-29.

This document converts the reference research into a KiaOra-owned UI plan for the communication part of the app. It should guide future prototype work without copying competitor branding, screenshots, protected copy or visual assets.

## Product Goal

KiaOra should feel like a business communication command center for small teams:

- Manage customer conversations across messages, calls and AI-agent handled interactions.
- Make business phone numbers, mobile lines and AI-agent lines easy to understand.
- Help users act quickly: call back, reply, mark done, add contact, configure agent, check usage and fix setup issues.
- Keep the app operational and clear, not marketing-heavy.

## Core Design Principles

- Show service identity first: active business number, mobile line or AI-agent line should always be obvious.
- Put current status before controls: live/offline, open conversations, unread count, plan status, delivery failure or setup blocker.
- Prefer focused screens with one main task.
- Use bottom navigation only for primary work areas.
- Use detail pages for configuration and bottom sheets for compact choices.
- Use badges for states such as Active, Live, Open, Done, Unread, Failed, Needs setup and Action required.
- Use helpful empty states with a short title, one sentence and one recovery action.
- Make risky actions non-final in the prototype: purchases, real sending, deletion and account changes should be mock-only.

## Proposed App Navigation

Recommended bottom tabs:

- Home
- Keypad
- Contacts
- Kia Agent
- Mobile
- Settings

Reasoning:

- Home is the business inbox and daily command center.
- Keypad is direct outbound communication.
- Contacts is the customer/team directory.
- Kia Agent owns AI call answering and automation.
- Mobile owns carrier-like usage, plans, numbers and SIM services.
- Settings owns workspace, billing, account and support.

## Home / Inbox

### Purpose

Home should be the first place a business owner checks for customer communication.

### Header

Show:

- Active inbox or business line name.
- Phone number.
- Service switcher affordance if multiple lines exist.
- Search.
- Filter.
- Selection/check action for bulk workflows.

### Main Controls

Use two prominent mode cards:

- Chats
- Calls

Each card should show a count and status hint, such as unread or unresponded.

### Conversation Filters

Primary filters:

- Open
- Done
- Unread
- Unresponded
- All

Expanded filters:

- Missed
- Voicemail
- Handled by Kia Agent
- Call tags
- Contact/company
- Date range

After applying filters, show removable filter chips above the list.

### Conversation List Rows

Each row should include:

- Avatar or phone/contact icon.
- Contact name or phone number.
- Last message/call summary.
- Time/date.
- State badge.
- Failure indicator if message delivery failed.
- AI indicator if Kia Agent handled or summarized it.

### Empty States

Use different empty states:

- Clean Inbox: no open work.
- No Chats Found: filter mismatch, with Clear filters action.
- No Calls Yet: prompts the user to test or receive calls.
- No Unread Conversations: reassurance state.

### Bulk Actions

When selection mode is active:

- Select all / Cancel in header.
- Bottom action bar.
- Actions: Mark done, Mark read, Assign, Archive or More.

## Conversation Detail

### Purpose

Make one customer interaction actionable.

### Header

Show:

- Back.
- Contact/avatar.
- Name or number.
- Add as contact if unknown.
- Call action.
- More action.

### Timeline

Support:

- Incoming messages.
- Outgoing messages.
- Failed outgoing state.
- Call events.
- Voicemail events.
- Kia Agent summaries.
- Internal notes.

### Composer

Composer should include:

- Message field.
- Attach/file icon.
- Snippet icon.
- Schedule icon.
- Send icon.

Prototype behavior:

- Send should show a toast or mocked sent state.
- Failed-message demo can be preserved as a realistic operational state.

## Keypad

### Purpose

Fast outbound calling and messaging from the selected business line.

### Layout

Show:

- Active outbound number at top.
- Search/contact lookup.
- Large numeric keypad.
- Message action.
- Call action.

### Interaction Notes

- Do not place call and message actions too close without visual distinction.
- Call should be the main green action.
- Message should be secondary.
- If no line is active, show a setup blocker instead of keypad controls.

## Contacts

### Contacts List

Show:

- Search.
- Filter.
- Contact count.
- List rows with avatar, name, company and phone/email hint.
- Floating add action.

Filters:

- Company.
- Creator.
- Access.
- Tags.
- Recently contacted.

### Contact Detail

Add a real contact detail page with:

- Large avatar.
- Name.
- Company.
- Quick actions: call, message, email, more.
- Details / Notes segmented control.

Details rows:

- Company.
- Role.
- Phone.
- Email.
- Creator.
- Access.
- Tags.

Notes tab:

- Note list.
- Note composer.
- Attachment or mention utilities.

### Create Contact

Use a focused create form:

- Avatar placeholder.
- Name.
- Company.
- Role.
- Mobile.
- Access.
- Add property.
- Disabled Save until required data exists.

Add-property sheet options:

- Phone.
- Email.
- Address.
- URL.
- Tags.
- Date.
- Checkbox.
- Text.
- Number.

## Activity

Activity does not need to be a bottom tab initially if Home includes alerts, but it should exist as a subpage or shortcut.

Include events such as:

- Message not delivered.
- Missed call.
- Voicemail received.
- Kia Agent took a message.
- Number setup incomplete.
- Payment or plan issue.
- Call forwarding not configured.

## Kia Agent Communication UI

### Agent Dashboard

Show:

- Agent live/not-live status.
- Agent phone number.
- Setup progress or go-live blocker.
- Conversation filters: All, Unread, Starred, Archived.
- Empty state for no agent conversations.
- Recent handled calls/messages.

### Setup Progress

Use a visible progress track:

- Train.
- Customize.
- Test.
- Go Live.

Go Live should separate:

- Agent configured.
- Plan selected.
- Number connected.
- Forwarding method chosen.

### Agent Settings

Group settings:

- Agent & Business.
- Call Handling.
- Training & Knowledge.
- Protection.
- Website Chat.

Key pages:

- Business Information.
- Agent Profile.
- Greeting.
- Take a Message.
- Transfer Calls.
- Text a Link.
- Appointments.
- FAQs.
- Custom Training.
- Spam Filters.
- Website Testing/Texting.

Each detail page should use:

- One short explanatory banner.
- Cards for modules.
- Local Edit buttons.
- Empty states where relevant.
- Locked or unavailable states when useful.

## Mobile Communication UI

### Mobile Dashboard

Show:

- Service switcher for mobile lines and AI-agent numbers.
- Status strip: active plan, renewal, balance or billing state.
- Usage card: data ring plus calls/SMS mini stats.
- Current plan and add-ons.
- Quick actions:
  - Add data.
  - Activate eSIM.
  - Port number.
  - Roaming.
  - Billing.
  - Redeem voucher.

### Multi-Service Switcher

Each row should show:

- Line name.
- Phone number.
- Type: eSIM, voice, physical SIM, AI Agent line.
- Status: Active, Ready to activate, Needs setup, Suspended.
- Billing/payment model.

### Usage Page

Use:

- Week / Month toggle.
- Data chart.
- Category chips: Data, Calls, SMS, MMS.
- Daily or monthly entries.
- Cost/usage summary.

### Plans And Add-Ons

Structure:

- Current plan and add-ons at top.
- Purchasable plans below.
- Tabs: Plans, Add-ons, Roaming, Boosts.
- Optional cadence tabs: Weekly, Monthly, Annual.
- Plan cards with price, renewal period, data, calls and SMS.
- Detail bottom sheet for inclusions.

## Settings And Account

Settings should support communication workflows, not just generic preferences.

Workspace:

- General.
- Phone numbers.
- Plan & billing.
- Trust center.
- Contacts.
- Snippets.
- Blocklist.

Account:

- Profile.
- Preferences.
- Notifications.
- Users/team.

Support:

- Chat with us.
- Help center.
- Terms.
- App version.

Phone number settings should include:

- Name.
- Business hours.
- Call flow.
- International calls & messages.
- Voicemail greeting.
- Forward all calls.
- Ringtone.
- Mute phone number.
- Show calls in recent.

## Visual Direction

KiaOra should avoid copying competitor palettes:

- Do not become Spark-purple, One-NZ-green, Skinny-orange or Mighty-orange.
- Use a balanced KiaOra-owned palette.
- Keep business communication calm, readable and operational.
- Use accent colors meaningfully:
  - Blue for primary communication actions.
  - Green for call/live/active.
  - Red for failed/destructive.
  - Yellow/amber for setup or billing attention.

UI style:

- iOS-like spacing and touch targets.
- 8px or smaller card radius unless existing design requires otherwise.
- Cards for repeated items and focused modules.
- Plain section lists for settings.
- Bottom sheets for filters, product details and add-property choices.

## Prototype Priority Plan

### Phase 1: Communication Core

- Add conversation detail page.
- Add failed/sent message states.
- Add filter chips and no-results state.
- Add contact detail page.
- Add create contact flow.

### Phase 2: Agent Depth

- Expand Kia Agent settings detail pages.
- Add scenario-based Take a Message.
- Add Transfer Calls and Text a Link pages.
- Add Spam Filters and Custom Training locked states.
- Add clearer Go Live blocker page.

### Phase 3: Mobile Service Depth

- Add mobile dashboard with service switcher.
- Add usage page with week/month and category chips.
- Add plan/add-on catalog.
- Add current plan/add-ons section.
- Add top-up, billing, voucher and transaction mock screens.

### Phase 4: Polish And Realism

- Add onboarding or first-run explanation.
- Add service-not-linked state.
- Add richer help center categories.
- Add bulk inbox actions.
- Add activity alerts page or shortcut.
- Review all UI copy for English-only KiaOra-owned naming.

## Success Criteria

The communication UI is successful if a reviewer can quickly understand:

- Which business line or service is active.
- Which conversations need action.
- What the AI agent has handled.
- How to call, message or add a contact.
- Whether mobile service and plans are healthy.
- What setup or billing blockers remain.

The prototype should feel like an operational app for a small business, not a static marketing demo.
