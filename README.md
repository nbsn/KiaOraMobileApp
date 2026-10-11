# KiaOra Mobile Integrated Demo

English-only clickable iPhone-style prototype that combines a business communication workspace with an AI phone agent flow.

## Integrated Functions

- Conversations inbox with Chats / Calls segments, filters and composer action
- Keypad with dial actions
- Contacts list and search surface
- Activity alerts
- Settings covering General, Phone numbers, Plan & billing, Trust center, Contacts, Snippets, Blocklist, Profile, Preferences, Notifications, Support, Help center and Terms
- AI agent 7-step setup flow: Train, Confirm, Test and Go Live
- AI agent dashboard with conversation filters
- Agent settings for business info, profile, greeting, message taking, transfers, text links, appointments, FAQs, training files, spam filters and website testing
- Integrations for Acuity, Appointlet, Calendly, Google Calendar and Zapier
- Go-live plan and call-forwarding method screens

## Preview

Open `index.html` in a browser.

This is a front-end mock only. It does not connect to real calling, messaging, billing, calendar or AI services.

## iOS shell (Capacitor)

The same prototype runs as a native iOS app through a Capacitor shell in `ios/`. Inside the shell the desktop frame and mock status bar are hidden and the app fills the screen using the device safe areas. Append `?native=1` to the URL to check that layout in a browser.

```sh
npm install
npm run sync        # copies index.html, app.js and styles.css into dist/ and the iOS project
```

Building, signing and uploading need macOS with Xcode: open `ios/App/App.xcodeproj`, choose a signing team, then archive. The bundle ID is `nz.co.kiaoramobile.demo` (set in `capacitor.config.json` and the Xcode project).
