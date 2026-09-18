# MediTrack Release Notes

## Version 0.2.0 — Standalone prescription and reminders release

**Product owner:** Venkatesh Krishnan — AI Product Manager

### Included

- Local Tesseract OCR for images and scanned PDFs.
- Text extraction for PDFs, DOCX, TXT, CSV, JSON, and Markdown.
- Hospital prescription-table parsing for medicine name, dose pattern, duration, frequency, and route.
- Editable physician, diagnosis, and physician-advice fields.
- Original prescription file and OCR text saved for future reference.
- Mandatory review and allergy gate before scheduling.
- Dashboard, adherence history, browser notifications, and `.ics` calendar export.
- PWA build for static hosting and later Windows, macOS, Android, or iOS packaging.
- Migration that removes the initial hard-coded demo data.

### How reminders work

MediTrack generates dose records from each medicine's start date, duration, frequency, and reminder times. The dashboard shows the next pending dose. Users mark each dose taken, skipped, or snoozed. Calendar export creates calendar events; Outlook, Google Calendar, Apple Calendar, or another calendar app delivers its configured alert.

### Limitations

- Browser notifications depend on permission and platform behavior.
- Calendar export is a one-time snapshot, not live two-way sync.
- Local data is per browser/device and is not synchronized.
- OCR requires review, especially for handwriting, poor scans, abbreviations, or missing strengths.
- This is not a substitute for medical advice or emergency care.

### Publishing independently

Run `npm run build` and publish `dist/` to GitHub Pages or another static host. Anyone can open the URL from a phone, laptop, Windows PC, or Mac. Add a secure backend only for synchronized accounts, backups, sharing, or clinician workflows.

### Monetization ideas

- Free personal edition plus a paid family/caregiver plan.
- Clinic or pharmacy edition with secure accounts, consent, audit history, and reports.
- White-label deployments for hospitals, employers, insurers, and home-care providers.
- Paid onboarding and integrations while keeping essential safety features accessible.
- Use LinkedIn for B2B pilots and healthcare partnerships; use Facebook for caregiver and family use cases.
- Publish education, transparent demos, and pilot results; avoid medical claims and never sell prescription data.
