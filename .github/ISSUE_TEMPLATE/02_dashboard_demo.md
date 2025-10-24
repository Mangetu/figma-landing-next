---
name: "📊 Dashboard Demo Request"
about: Request a dashboard demo implementation from Figma to Next.js
title: "[Dashboard Demo] Enter project name"
labels: ["dashboard", "demo", "figma"]
assignees: []
---

> Fill out the sections below. Items marked as Required must be provided.

## Contact (Required)

Provide your preferred contact. GitHub handle, email, or Slack invite.

- Contact: <!-- your@email -->

## Figma file URL (Required)

Paste the link to the Figma file that should be implemented.

- URL: <!-- https://www.figma.com/file/XXXXXX/Project -->

## Screens to include (Required)

Select the screens that should be part of this demo.

- [ ] Overview (KPI cards, sales trend, recent orders)
- [ ] Sales by Region (chart/map + filters)
- [ ] Products (table + column controls + detail modal)
- [ ] Customers (table + saved filters + detail modal)
- [ ] Orders (table + status chips + detail modal)
- [ ] Order Detail (drawer/modal with line items)
- [ ] Settings (profile form, preferences)
- [ ] Sign In (static, non-functional)

## Scope notes

Call out anything out-of-scope or must-have interactions.

```text
Items to exclude, or must-have interactions.
```

## Core features

Check all that apply.

- [ ] Data table (sort / pagination / column visibility)
- [ ] Filters (date range, select, keyword) with URL sync
- [ ] Detail modal (view / edit) with validation
- [ ] Responsive (mobile ≥320px → desktop)
- [ ] i18n-ready (strings isolated)

## Accessibility targets (Required)

Targeting WCAG AA. Check the items you expect for this demo.

- [ ] Keyboard navigation (Tab/Shift+Tab/Arrow/Enter/Escape)
- [ ] Focus visible & logical tab order
- [ ] ARIA labels/roles on interactive elements
- [ ] axe violations = 0 (automated check)

## Lighthouse targets

Performance / Accessibility / SEO targets.

Default: >=90 / 100 / >=95

- Targets: <!-- ">=90 / 100 / >=95" -->

## Tech preferences (Required)

Select one preferred stack or mark "No preference".

- [ ] Next.js (App Router) + TypeScript + Tailwind + shadcn/ui
- [ ] Next.js + Your component library
- [ ] No preference

## Libraries

Check all that apply.

- [ ] TanStack Table
- [ ] React Hook Form + Zod
- [ ] Recharts (or placeholder)
- [ ] Playwright (E2E) + axe checks
- [ ] Storybook

## Data model (mock JSON shape)

Paste a rough shape for mock data if you have one.

```jsonc
// Examples
// Product:  { id, name, sku, price, category, stock, updatedAt }
// Customer: { id, name, email, country, lifetimeValue, createdAt }
// Order:    { id, number, customerName, status, total, createdAt, items[] }
// KPI:      { revenue, orders, aov, conversion }
```

## Attach mock data

If available, attach JSON files or a ZIP with products.json, customers.json, orders.json, kpi.json.

## Deliverables

Check all deliverables you expect.

- [ ] Vercel preview URLs (PR + main)
- [ ] Storybook (deployed or local steps)
- [ ] Lighthouse & axe screenshots (or CI artifacts)
- [ ] README (setup & design-to-code mapping)
- [ ] PRs to figma-dashboard-next

## Desired timeline (Required)

Select one.

- [ ] 5–7 business days (demo scope)
- [ ] 2–3 weeks
- [ ] Consultation

## Acceptance checklist

Edit if needed.

- [ ] Figma tokens mapped to Tailwind (colors/type/spacing)
- [ ] Table: sort/pagination/column toggle/saved filters
- [ ] Filters: date range/select/keyword with URL query sync
- [ ] Detail modal: view/edit; validation announced
- [ ] Keyboard nav & focus visible across controls
- [ ] Storybook coverage (table/filters/modal/form/nav)
- [ ] E2E smoke + axe pass (0 violations)
- [ ] Lighthouse targets met
- [ ] README includes setup & mapping table
- [ ] Vercel preview shared

## Notes / references

Add any reference links, brand guidelines, or constraints.
