# MediTrack

**Medication tracking and prescription review by Venkatesh Krishnan — AI Product Manager**

MediTrack is a mobile-first, installable PWA for reviewing prescriptions, tracking doses, recording adherence, and exporting reminders to calendar applications. It runs independently in browsers on Windows, macOS, Linux, Android, and iOS. It is not medical advice.

## Run independently

```bash
npm install
npm run dev
```

For a distributable build:

```bash
npm run build
npm run preview
```

The generated `dist/` directory can be copied to GitHub Pages, Netlify, Vercel, an internal server, or packaged with Capacitor. Each copy has its own browser-local data unless a backend is added.

## How it works

1. Upload an image, PDF, DOCX, TXT, CSV, JSON, or Markdown prescription.
2. MediTrack extracts medication details, diagnosis, physician, and advice locally.
3. Every extracted field can be edited; nothing is scheduled until confirmation.
4. Confirmed medicines create dose records on the dashboard.
5. Users mark doses taken, skipped, or snoozed and review adherence history.
6. Pending doses can be exported as an `.ics` file for Outlook, Google Calendar, Apple Calendar, or compatible apps.

## Reminders, calendar, and privacy

The dashboard and browser notifications provide in-app reminders. Calendar export creates events in the user's calendar, where the calendar application controls alerts. Export is a snapshot, not live two-way synchronization. Browser notifications cannot guarantee delivery while closed or offline; high-risk workflows need native notifications and a secure backend.

Prescription files, OCR text, clinical details, schedules, and adherence records are stored locally in the browser in this standalone release. No prescription is sent to a service. A synchronized edition should use encrypted authenticated storage, accounts, backups, audit logs, and explicit consent.

Uploaded files never receive hard-coded demo medicines. If no recognizable entry is found, extraction is rejected rather than inventing medicine. OCR can misread handwriting or poor scans, so verify every field against the original prescription and a qualified healthcare professional.

## Checks

```bash
npm test
npm run build
```

## Product owner

Venkatesh Krishnan — AI Product Manager
