# KiaOra Mobile Second Number UI Plan

Created on 2026-05-29.

Product positioning:

```text
KiaOra Mobile
Take Your Own Second Number
```

This plan defines the UI direction for users who keep a primary mobile number on a physical SIM or eSIM, then add a KiaOra app-based second number for business calls and messages. The second number is not a normal device SIM line. Outbound calling from the second number must happen inside the KiaOra Mobile app.

## Product Interpretation

The user may have:

- A primary personal mobile number on a physical SIM.
- A primary personal mobile number on an eSIM.
- One or more KiaOra second numbers inside the app.

The core distinction:

- Primary number: lives at device/carrier level, works through the native phone app.
- KiaOra second number: lives at app/workspace level, works through KiaOra app calling and messaging.

The UI must make this distinction impossible to miss.

## User Jobs

Primary jobs:

- Buy or activate a second number.
- Understand that this number is app-based.
- Use the second number to call customers without exposing the personal primary number.
- Receive calls/messages to the second number in KiaOra.
- Switch between multiple second numbers if needed.
- Manage availability, forwarding, voicemail and AI-agent routing.

Secondary jobs:

- See what number will be used before placing a call.
- Add contacts and keep notes tied to the second number.
- View usage and billing for the second number.
- Upgrade from one second number to multiple numbers.

## Core UI Principle

Always separate these two concepts visually:

```text
My phone number
Your device SIM/eSIM number. Used by the native phone app.

KiaOra second number
Your app-based business number. Used only inside KiaOra.
```

Avoid labels like "primary line" and "secondary line" without explanation. Users may assume both behave like SIMs.

## Proposed Navigation Impact

Keep existing bottom tabs:

- Home
- Keypad
- Contacts
- Kia Agent
- Mobile
- Settings

But adjust Mobile and Keypad around second-number ownership:

- Mobile becomes the place to buy, manage and understand second numbers.
- Keypad becomes explicitly "Call from KiaOra number".
- Home/inbox groups communication by KiaOra second number.

## Mobile Home Design

### Hero Card

Replace generic "Mobile services" with a clearer proposition:

```text
Take Your Own Second Number
Keep your personal SIM number private. Call and text customers from a KiaOra number inside this app.
```

Hero card should show:

- Current device primary number status: Physical SIM or eSIM.
- KiaOra second number status: Active / Not set up / Trial / Needs payment.
- Primary CTA:
  - Add second number, if none exists.
  - Manage second number, if active.

Example layout:

```text
KiaOra Mobile
Take Your Own Second Number

Device number
Primary SIM / eSIM
Used by iPhone Phone app

KiaOra number
+64 9 000 7902
Used inside KiaOra only

[Call from KiaOra number] [Add another number]
```

### Number Relationship Card

Add a visual comparison card:

| | Primary SIM/eSIM | KiaOra Second Number |
| --- | --- | --- |
| Where it works | Native phone app | KiaOra app |
| Best for | Personal calls | Business calls |
| Outbound caller ID | Personal number | KiaOra number |
| Setup | Carrier SIM/eSIM | In-app activation |

Use plain UI rows rather than a dense table if space is tight.

### Second Number Cards

Each KiaOra number card should show:

- Number label: Business Line, Sales Line, VIP Line, Agent Line.
- Phone number.
- Status badge.
- Calling mode: App calling only.
- Inbox state: open/unread/unresponded.
- Routing: Ring app, forward, AI Agent, voicemail.

Actions:

- Call from this number.
- Message.
- Routing.
- Settings.

## Buy / Activate Second Number Flow

### Entry Points

Entry points should appear in:

- Mobile home hero.
- Mobile number list.
- Keypad blocker when no KiaOra number exists.
- Settings > Phone numbers.

CTA labels:

- Add second number.
- Choose a KiaOra number.
- Bring a number to KiaOra.

Avoid "Buy SIM" because this is not a SIM purchase.

### Flow Steps

Recommended 5-step flow:

1. Choose number type.
2. Pick number.
3. Choose plan.
4. Confirm app-only calling.
5. Activate.

Step 1: Choose number type

- New KiaOra number.
- Port an existing business number.
- Add AI Agent number.

Step 2: Pick number

- Search by city/region.
- Show available numbers.
- Mark memorable numbers.
- Explain monthly price if relevant.

Step 3: Choose plan

Plan cards should emphasize:

- Included calls/minutes.
- Included SMS.
- App calling.
- Voicemail.
- AI Agent compatibility.
- Team access.

Step 4: Confirm app-only calling

This is critical.

Show a confirmation card:

```text
Your KiaOra number calls from the app
To show this number as caller ID, start calls inside KiaOra.
Calls from the iPhone Phone app will use your SIM/eSIM number.
```

Require a clear checkbox/toggle in the prototype:

```text
I understand outbound calls from this number must start in KiaOra.
```

Step 5: Activate

Show:

- Number.
- Plan.
- First billing date.
- Caller ID behavior.
- Primary action: Start using number.

## Keypad Design

The keypad must make the active outbound number explicit.

### Header

Show:

```text
Calling from
KiaOra Business Line
+64 9 000 7902
App calling only
```

If multiple second numbers exist:

- Add a number switcher at the top.
- Switching changes outbound caller ID.

### Native Phone Warning

Add a subtle info card:

```text
Want this caller ID?
Start the call here. Your iPhone Phone app uses your SIM/eSIM number.
```

This should not block normal use, but it should be visible enough during first use.

### Empty State

If no KiaOra number exists:

```text
No KiaOra number yet
Add a second number to call customers from the app.
[Add second number]
```

## Home / Inbox Design

Home should group communication by KiaOra second number, not by SIM.

### Inbox Header

Show:

- Active KiaOra number label.
- Number.
- App-based badge.
- Switcher if multiple numbers exist.

Example:

```text
Business Line
+64 9 000 7902
App-based number
```

### Conversation Rows

Rows should show:

- Contact/caller.
- Last activity.
- Which KiaOra number received/sent it.
- State: Open, Done, Unread, Failed, Handled by AI.

### Filters

Add number-based filter:

- All numbers.
- Business Line.
- VIP Line.
- Agent Line.

This matters once a user owns multiple second numbers.

## Contacts Design

Contacts should show which number was last used.

Contact detail should include:

- Preferred outbound number.
- Recent conversations by number.
- Notes.
- Quick action: Call from KiaOra number.

If the user taps Call:

- Open a call sheet if multiple KiaOra numbers exist.
- Otherwise call from default KiaOra number.

## Settings / Phone Numbers

Phone numbers should be redesigned around number type.

Sections:

### Device Numbers

Rows:

- Primary SIM number.
- Primary eSIM number, if available.

Explanation:

```text
Device numbers are controlled by your mobile carrier and the iPhone Phone app.
```

### KiaOra Second Numbers

Rows:

- Business Line.
- VIP Line.
- AI Agent Line.

Each row shows:

- Number.
- Status.
- Plan.
- Outbound mode: App only.

### Number Detail Page

Rows:

- Number name.
- Number.
- Caller ID.
- App calling only.
- Default outbound number.
- Business hours.
- Voicemail greeting.
- Forward all calls.
- Ring in app.
- AI Agent routing.
- Text messaging.
- Team access.
- Plan and billing.

## AI Agent Relationship

The second number can route to Kia Agent.

Important states:

- KiaOra number rings app first.
- KiaOra number forwards to Kia Agent after no answer.
- KiaOra number is fully handled by Kia Agent.
- Kia Agent has its own dedicated number.

UI should let the user choose:

```text
When someone calls this KiaOra number:

Ring me in the app
Ring team members
Send to Kia Agent
Take voicemail
Forward to another number
```

## Naming System

Use these labels consistently:

- Primary SIM number.
- Primary eSIM number.
- KiaOra second number.
- App-based number.
- Business Line.
- AI Agent Line.
- Call from KiaOra.

Avoid:

- Secondary SIM.
- Virtual SIM.
- Cloud SIM.
- Fake number.
- Burner number.

## Visual Treatment

Use a two-layer visual model:

- Device layer: neutral grey/blue, SIM/eSIM icon, "device" language.
- KiaOra layer: stronger KiaOra accent, app icon, "business number" language.

Badges:

- App-based.
- App calling only.
- Active.
- Needs setup.
- Default outbound.
- AI routed.

Recommended icons:

- SIM/eSIM: card or chip icon.
- KiaOra second number: phone + app badge.
- Caller ID: ID/card icon.
- App-only: phone inside app frame.
- Routing: transfer icon.

## First Version Prototype Changes

For the next UI iteration, prioritize:

1. Mobile hero: replace generic mobile services copy with "Take Your Own Second Number".
2. Add device number vs KiaOra number comparison card.
3. Add "Add second number" flow mock.
4. Update Keypad header to "Calling from KiaOra number".
5. Add app-only calling explanation.
6. Update Phone numbers settings to split Device Numbers and KiaOra Second Numbers.
7. Add second-number detail page with routing options.
8. Add number switcher in Home and Keypad.

## Success Criteria

A reviewer should understand within 10 seconds:

- Their personal SIM/eSIM number remains separate.
- KiaOra gives them a second number for business.
- The second number works inside the KiaOra app.
- To show the second number as caller ID, they must call from KiaOra.
- They can buy/manage multiple second numbers.
- Kia Agent can answer or route calls for those numbers.

The UI should feel like a clean mobile-business communication product, not a generic telco account page.
