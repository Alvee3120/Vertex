# Image Placeholders

This directory holds 15 placeholder JPGs that the website currently uses.
Each placeholder is a navy→offwhite diagonal gradient with a small label
in the bottom-left corner identifying the slot.

**Replace by overwriting the same file** with your real photo. Keep the
aspect ratio to avoid layout shifts. The expected aspect ratios are:

| File                              | Size (px) | Aspect |
|-----------------------------------|-----------|--------|
| `hero-security-team.jpg`          | 1600×900  | 16:9   |
| `services-overview-header.jpg`    | 1600×500  | ~3.2:1 |
| `secure360-methodology.jpg`       | 1200×900  | 4:3    |
| `industries-overview.jpg`         | 1600×600  | ~2.7:1 |
| `clients-meeting.jpg`             | 1600×600  | ~2.7:1 |
| `about-office.jpg`                | 1600×900  | 16:9   |
| `about-training-session.jpg`      | 1200×900  | 4:3    |
| `services-overview-banner.jpg`    | 1600×500  | ~3.2:1 |
| `rmg-factory-floor.jpg`           | 1200×900  | 4:3    |
| `rmg-cargo-inspection.jpg`        | 1600×600  | ~2.7:1 |
| `contact-dhaka.jpg`               | 1600×500  | ~3.2:1 |
| `solutions/banking-hero.jpg`      | 1600×900  | 16:9   |
| `solutions/healthcare-hero.jpg`   | 1600×900  | 16:9   |
| `solutions/embassies-hero.jpg`    | 1600×900  | 16:9   |
| `solutions/energy-hero.jpg`       | 1600×900  | 16:9   |

If you replace a photo with a different aspect ratio, also update the
`aspect-*` Tailwind class on the parent `<div>` in the corresponding
component to keep the layout tidy. The classes used today are:

- 16:9 → `aspect-video`
- 4:3 → `aspect-[4/3]`
- 16:5 / 16:6 → `aspect-[16/5]` or `aspect-[16/6]`

JPEG quality should be 75–85 for normal photos. Keep each file under
~300 KB so page weight stays low.
