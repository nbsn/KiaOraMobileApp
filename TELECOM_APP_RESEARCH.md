# Telecom App Frontend Research

Captured from live iPhone Mirroring on 2026-05-28.

These notes are for product and UX inspiration only. Do not copy carrier names, logos, exact protected copy, screenshots or brand-specific assets into the KiaOra prototype. Translate useful patterns into KiaOra-owned language, IA and UI.

## Research Scope

Apps reviewed:

- Spark NZ
- My One NZ
- Skinny
- Mighty Mobile

Research focus:

- Frontend information architecture
- First-run and unauthenticated states
- Account/service switching
- Mobile plan, top-up, payment and usage patterns
- Help, shop, rewards and support surfaces
- Design ideas that can inspire KiaOra Mobile / KiaOra Voice

## Cross-App Patterns

- Mobile carriers treat "service selection" as a first-class problem. Users may have multiple numbers, products or accounts.
- The most useful home screen shows service identity, plan status, balance or usage, and the next likely action.
- Prepaid apps prioritize top-up, buy plan, addons, and usage history.
- Postpaid or broad telco apps often separate account management, shop, help, rewards and wallet.
- Help content is frequently available before full account setup, but personalized tools may be gated.
- Strong brand colors dominate each app. KiaOra should borrow layout ideas, not color dominance.
- Bottom navigation works well when there are 4-5 stable destinations.
- Sectioned lists are common for settings, support and account tools.
- Plan cards are strongest when they show price, renewal period, included data/minutes/texts and a clear CTA.
- Usage screens benefit from time toggles, category filters and simple trend charts.

## Spark NZ

### App State Observed

Spark opened into onboarding and then a mostly unauthenticated app shell. The account area required sign-in, but news, shop and help surfaces were visible.

### First-Run Onboarding

Observed onboarding slides:

- Check usage and manage multiple accounts in one view.
- Access music pre-sales, sport highlights and exclusive events.
- Use in-app messaging for technical difficulties.
- Find your way through the app with the menu bar.

Structure:

- Soft pale gradient background.
- Sparse illustration area.
- Large short value statement near the lower half.
- Skip and Next/Get it controls.
- Progress dots.

Design takeaway for KiaOra:

- Onboarding can introduce account management, business phone tools, support messaging and navigation in 3-4 slides.
- Keep onboarding benefit-led rather than feature-dense.

### Main Navigation

Bottom tabs observed:

- News & Events
- MySpark
- Shop
- Help

Design takeaway for KiaOra:

- A broad telco app can support content and shopping before login.
- KiaOra likely does not need News & Events as a core tab, but a Support/Help surface could be useful before account linking.

### News & Events

Observed structure:

- Large branded header.
- Segmented control: News / Events.
- Article cards with large imagery, headline, summary and Learn more link.
- Examples include network/storm connectivity guidance.

Design takeaway for KiaOra:

- A lightweight "Updates" or "Activity" feed could include service notices, delivery failures, new features and agent setup warnings.
- Do not make marketing content central unless the app has a real ongoing content strategy.

### MySpark

Observed unauthenticated state:

- Large branded header.
- Centered logo/illustration.
- Sign-in prompt: sign in to check usage and manage account.
- Primary Sign in button.
- Secondary Create an account button.

Design takeaway for KiaOra:

- If a mobile service is not linked, show a clean account-linking state instead of empty dashboards.
- Use primary and secondary actions with clear hierarchy.

### Shop

Observed structure:

- Header: Shop.
- Segmented control: Products / Plans.
- Products page groups product categories with image cards.
- Categories include Deals, Mobile phones and Accessories.
- Plans page groups Mobile plans and Broadband plans with large category cards.

Design takeaway for KiaOra:

- Shop/category entry should use fewer, larger choices rather than dense product lists on the first screen.
- If KiaOra adds "Add-ons" or "Mobile services", use category cards before plan grids.

### Help

Observed structure:

- Header: Help.
- Segmented control: Articles / Videos.
- Search field.
- Article categories: Mobile, Broadband, Landline, Account & Billing.
- Videos tab shows card-like video help content.

Design takeaway for KiaOra:

- Help should be searchable and grouped by job, not merely a list of links.
- Articles and videos can be separate views if the content library grows.

### Spark Design Notes

- Purple is used as strong brand identity.
- Header is oversized and rounded into the content area.
- Content cards are image-heavy.
- Navigation labels are clear and conventional.
- Unauthenticated app still has useful public content.

KiaOra inspiration:

- Use onboarding to explain combined mobile + AI phone agent value.
- Add a public/help content model if the prototype needs non-authenticated depth.
- Consider a "Shop/Add-ons" area with plan categories, but avoid turning the app into a storefront first.

## My One NZ

### App State Observed

The app signed in but showed no linked service. The home state prompted the user to add a service.

### Main Navigation

Bottom tabs observed:

- Accounts & services
- One Wallet
- Need help?

Design takeaway for KiaOra:

- Three-tab IA can work when the product is account-service management rather than commerce-heavy.
- "Need help?" as a primary tab makes support very accessible.

### Accounts & Services

Observed structure:

- Welcome card with illustration.
- Prompt to add access to account or service.
- Primary Add a service CTA.
- Sectioned list below the card.

Observed sections:

- Essentials
- Shop & rewards
- Profile & settings
- Help & tools

Observed items:

- Payments.
- Rewards.
- Online shop.
- My orders.
- My profile.
- App settings.
- Help topics.
- Sign out.

Design takeaway for KiaOra:

- Use a "no services linked" state with a strong Add service CTA.
- Keep account-service tools discoverable below the empty/intro card instead of hiding everything.
- Sectioned account menu works well for general telecom tasks.

### One Wallet

Observed structure:

- Page title.
- Large explanatory panel: "Can't see your wallet?" with checklist-like guidance.
- Actions: view wallet online and add mobile to app.
- Lower section with FAQ and Terms.

Design takeaway for KiaOra:

- If a feature depends on service eligibility, show a diagnostic card with likely reasons and next steps.
- Web fallback CTA can be useful when an app cannot complete a task.

### Help Access / Login Gating

Observed behavior:

- Attempting to access help topics presented a sign-in/register panel.
- Sign-in panel includes email, password, keep me signed in, forgot password, sign in and register tabs.
- App version appears at the bottom.

Design takeaway for KiaOra:

- Some sensitive tools may require re-authentication even after app entry.
- Login gating should be modal-like and explain itself by context.

### My One NZ Design Notes

- Green is the primary brand color.
- Uses soft illustrated mascot/help imagery.
- Section lists are spacious with right chevrons.
- Strong distinction between service management and wallet/support.

KiaOra inspiration:

- Add a "service not linked" mobile state.
- Use a wallet/payment eligibility card if payment or billing is not configured.
- Keep account settings grouped by tasks rather than technical labels.

## Skinny

### App State Observed

Skinny opened into an authenticated prepaid-style account with credit visible but no active plan. The app emphasizes direct purchase/top-up actions.

### Main Navigation

Bottom tabs observed:

- Dashboard
- Top-up
- Plans
- Data Binge
- More

Design takeaway for KiaOra:

- A prepaid/mobile-first app benefits from direct bottom-tab access to money, plans and data.
- If KiaOra Mobile becomes prepaid-like, make Top-up and Plans easy to reach.

### Dashboard

Observed structure:

- Orange header with title.
- Thin top account state row: standard rates renewal status and credit balance.
- My Balances section.
- Empty/current state card: user is on standard rates.
- Rate summary: call, MB, text and MMS rates.
- Primary Buy a Plan CTA.
- Promotional card for Data Binge.
- Learn more row.

Design takeaway for KiaOra:

- Put plan status and credit/balance in a persistent top strip.
- If no plan is active, make the recovery action obvious.
- Promotions can sit below core service status, not above it.

### Top-Up

Observed structure:

- Page title: Top-Up.
- Prompt: how would you like to top up?
- Options:
  - Online EFTPOS.
  - Voucher.
  - New card.

Design takeaway for KiaOra:

- Payment/top-up should present payment method choices as simple rows.
- Do not make users choose amount before method if method is the key decision.

### Plans

Observed structure:

- Page title: Plans.
- Prepay Mobile Plans section.
- Link to full plans and pricing.
- Segmented plan periods:
  - 4-weekly.
  - Weekly.
  - 52 weeks.
- Helper copy explains renewal behavior.
- Plan cards show price, renewal period, data, minutes, texts and Buy Plan CTA.
- 52-week option explains upfront purchase and shows annual pricing.

Design takeaway for KiaOra:

- Segment plan catalog by renewal cadence.
- Use plan cards with explicit inclusions and renewal rules.
- Annual/upfront products need extra explanatory copy.

### Data Binge

Observed structure:

- Page title: Data Binge.
- Explainer copy: select how long max-speed data should last; excludes tethering/hotspot.
- List rows by duration and price:
  - 10 minutes.
  - 20 minutes.
  - 1 hour.
  - 2 hours.
  - 4 hours.
  - 6 hours.
- Each row has price badge and chevron.

Design takeaway for KiaOra:

- Time-boxed boosts are easy to understand when shown as a duration ladder.
- If KiaOra adds temporary data/calling boosts, duration-first rows are better than product jargon.

### More

Observed structure:

- Phone number and profile link at top.
- Settings/actions list:
  - Notifications.
  - Add-ons.
  - Overseas Roaming.
  - Manage Payments.
  - Send Gift.
  - Buddy Rewards.
  - Transaction History.
  - Usage & Spend Summary.
  - Gifting History.

Design takeaway for KiaOra:

- "More" can hold secondary tasks without overcrowding the bottom tab.
- Rewards/gifting/referral are optional growth loops and should not distract from service management.

### Usage & Spend Summary

Observed structure:

- Time range: past year.
- Average usage cards for data, minutes and texts.
- CTA rows for usage summary and spending summary.
- Spending average card.

Design takeaway for KiaOra:

- Long-term summaries complement live usage rings.
- Good for business admin: show monthly average cost, data, calls and messages.

### Skinny Design Notes

- Bright orange brand system.
- Highly utilitarian prepaid flow.
- Product cards are data-dense but easy to scan.
- Strong top strip repeats credit and status across tabs.

KiaOra inspiration:

- Add credit/plan status strip to Mobile.
- Add plan cadence tabs if plan catalog expands.
- Add data boost/add-on purchase flows as mock screens.
- Add usage and spend summary for admin usefulness.

## Mighty Mobile

### App State Observed

Mighty Mobile opened with a multiple-services selector. After selecting an active prepaid mobile service, it showed an account home dashboard.

### Service Selection

Observed structure:

- Header logo.
- Title: multiple services.
- Instruction to select a service.
- Card listing account number/name.
- Service rows with phone number, status and payment type.
- Status examples:
  - Ready to activate.
  - Active.
- Payment examples:
  - Not activated.
  - Prepay.
- Back action.

Design takeaway for KiaOra:

- Multi-number/multi-service selection should be explicit and visual.
- Show service status and billing/payment type before entering the dashboard.
- This is useful for KiaOra users with multiple business lines, agent numbers or mobile SIMs.

### Home Dashboard

Observed structure:

- Selected phone number shown near top with switch-service icon.
- Menu icon.
- Greeting with account name and account ID.
- Avatar/profile image.
- Data card with active badge.
- Circular usage ring showing unlimited data.
- Carousel indicator below usage cards.
- Current Plans and Addons section.
- Plan row/card with plan name and visibility/detail icon.

Bottom tabs:

- Home
- Products
- Redeem
- Usage

Design takeaway for KiaOra:

- For multiple mobile lines, include a service switcher at top.
- Usage ring plus active badge is a strong first screen.
- Current plan/addons should live directly under usage, not buried in settings.

### Side Menu

Observed menu items:

- Mobile Features.
- Receipts.
- Payment History.
- My Account.
- Shipping Details.
- Order History.
- Credit Cards.
- Notifications.
- Terms & Conditions.
- Privacy Policy.
- Help.
- Logout.
- App version.

Design takeaway for KiaOra:

- Keep transactional records together: receipts, payment history, orders.
- Keep account and legal/support items separated by dividers.
- Include app version at bottom for realism.

### Products

Observed structure:

- Page title: Products.
- Current "My plans and addons" card.
- Current plan name, price and recurring toggle.
- Expiry date/time.
- Purchase plans and addons section.
- Filters control.
- Product cards labeled PLAN or ADDON.
- Product price.
- CTA row such as Switch to this plan or Purchase this addon.
- Carousel-like horizontal product browsing.

Product detail bottom sheet:

- Product name and price.
- Category badge.
- Illustration.
- Description.
- Renewal period.
- Data.
- Voice calls.
- SMS.
- MMS.

Design takeaway for KiaOra:

- Split current products from purchasable products.
- Use labels to distinguish plan vs addon.
- Use bottom sheets for product details instead of full navigation when the user is shopping.
- Show recurring toggle and expiry date clearly.

### Redeem

Observed structure:

- Mobile number field/header.
- Voucher section.
- Voucher code input.
- Use button.

Design takeaway for KiaOra:

- Voucher/redeem is a compact utility page.
- If added to KiaOra, keep it simple and isolated from payment cards.

### Usage

Observed structure:

- Usage page title.
- Data usage card.
- Week / Month segmented toggle.
- Simple chart with date labels.
- Unlimited indicator.
- Breakdown section.
- Daily toggle.
- Category chips: Data, Voice, SMS, MMS.
- List entries show date, quantity and cost.

Design takeaway for KiaOra:

- Usage should combine summary chart, time toggle and category drill-down.
- Data/voice/SMS/MMS category chips fit a telco product well.
- Business users may value cost per category and date.

### Mighty Mobile Design Notes

- Orange/yellow brand with white card surfaces.
- Heavy use of cards, bottom sheets and side drawer.
- Strong visual service identity and plan status.
- Good multi-service support.
- More operational/transactional than Spark or One NZ.

KiaOra inspiration:

- Add a service switcher and multi-line list.
- Add usage chart with weekly/monthly toggle.
- Add current plan/addon cards plus purchasable plan/addon cards.
- Add transaction records, receipts and payment history in Settings or Mobile.

## Comparative IA Matrix

| Area | Spark | My One NZ | Skinny | Mighty Mobile | KiaOra Opportunity |
| --- | --- | --- | --- | --- | --- |
| Home focus | News/content or sign-in | Add service | Balance + buy plan | Usage + current plan | Blend usage, active lines, account setup and agent status |
| Bottom tabs | News, account, shop, help | Services, wallet, help | Dashboard, top-up, plans, data, more | Home, products, redeem, usage | Keep 5-6 tabs max; use nested Kia Agent areas |
| Service switching | Account-focused | Add service | Single visible number | Explicit multi-service selector | Add multi-line/agent-number switcher |
| Usage | Behind account | Requires service | Summary and spend | Chart + category breakdown | Add both live ring and historical summary |
| Plans | Shop categories | Service-dependent | Cadence tabs and cards | Current vs purchase sections | Plan cards with renewal, price, data, calls, SMS |
| Payment | Account sign-in | Payments/wallet | Top-up methods | Receipts/history/cards/redeem | Separate billing, top-up, vouchers and records |
| Help | Articles/videos | Help topics gated | More/menu | Help in side menu | Searchable help center plus support entry |
| Rewards | Events/perks | Rewards | Buddy rewards/gifting | Not prominent | Optional, lower priority |

## Detailed KiaOra Design Inspiration

### Mobile Home

Recommended KiaOra Mobile home modules:

- Service switcher: current line or account, with quick switch for multiple numbers.
- Status strip: plan status, renewal date and balance/credit if relevant.
- Usage card: data ring plus calls/SMS mini stats.
- Current plan card: plan name, renewal cadence, active badge and expiry/renewal.
- Quick actions: Add data, Port number, Activate eSIM, Roaming, Billing.
- Alerts: setup incomplete, payment issue, low balance or agent forwarding not configured.

### Plans And Add-Ons

Recommended structure:

- Current plan and addons at top.
- Purchasable products below.
- Tabs or segmented control by type: Plans, Add-ons, Roaming, Boosts.
- Optional cadence tabs: Weekly, Monthly, Annual.
- Plan cards show price, renewal period, data, voice, SMS, roaming or business features.
- Detail opens as bottom sheet or pushed detail page with full inclusions.

### Usage

Recommended structure:

- Week / Month toggle.
- Data chart with remaining/used state.
- Category chips: Data, Calls, SMS, MMS.
- Daily or monthly list entries.
- Average monthly usage/spend summary.
- Export or invoice CTA can be considered for business users.

### Payments And Billing

Recommended structure:

- Payment method.
- Next billing/renewal.
- Top-up or pay-now methods.
- Voucher/redeem utility.
- Transaction history.
- Receipts/invoices.
- Payment history.
- Billing address.

### Help And Support

Recommended structure:

- Search.
- Categories: Mobile, Phone numbers, Billing, AI Agent, Account, Troubleshooting.
- Support chat entry.
- Guides/videos if useful.
- Status/outage or service notices.

### Multi-Service Management

Recommended structure:

- Service list with line name, number, type, status and billing model.
- Status badges: Active, Ready to activate, Suspended, Needs setup, Trial, Live.
- Quick-switch from Mobile home header.
- Separate AI Agent line and mobile SIM lines can share this pattern.

## Visual And Interaction Guidance For KiaOra

- Avoid copying Spark purple, One NZ green, Skinny orange or Mighty orange/yellow as dominant palettes.
- Use carrier patterns, not carrier branding.
- Keep KiaOra screens operational and business-focused rather than retail-heavy.
- Use cards for live service modules and product cards; use plain lists for settings.
- Use bottom sheets for compact product details, filters and add-property flows.
- Use disabled states and explanatory text for unavailable features.
- Keep purchase CTAs non-functional in prototype unless explicitly requested; use toasts or mock confirmation screens.

## Priority Backlog Ideas

- Add a Mobile dashboard with current service, plan status, data/call/SMS usage and quick actions.
- Add a multi-service switcher for mobile lines and AI phone numbers.
- Add current plan/addons section under Mobile.
- Add plan/addon catalog with cards and detail bottom sheets.
- Add top-up/payment method mock screens.
- Add voucher/redeem screen.
- Add usage page with week/month toggle and Data/Voice/SMS/MMS chips.
- Add transaction history, receipts and payment history pages under Settings or Mobile.
- Add help center categories and search.
- Add a no-service-linked state with Add service CTA.
- Add onboarding slides for combined mobile + AI agent value.
