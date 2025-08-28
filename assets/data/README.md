# Data Schemas

All pages can load JSON data to replace mock content.

## `companies.json`
Array of companies for `pages/map.html`.

Fields:
- `name` (string)
- `genre` (string)
- `hours` (string, optional)
- `summary` (string, optional)
- `url` (string, optional)

## `events.json`
Array of events for `pages/events.html`.

Fields:
- `title` (string)
- `datetime` (string)
- `venue` (string)
- `summary` (string, optional)
- `detail` (string URL, optional)
- `apply` (string URL, optional)

Place your real data in these files. No build step required; pages fetch JSON directly on GitHub Pages.

