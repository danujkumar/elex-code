# elex-code

Classroom locator project for Sahyog's pitch the peculiar hackathon.

## Project Structure

```
elex-code/
├── assets/
│   └── images/          # Images (NITRAIPUR.jpg, team photos, etc.)
├── css/                 # Stylesheets
│   ├── styles.css       # Main/home page styles
│   ├── ground-floor.css
│   ├── first-floor.css
│   ├── second-floor.css
│   ├── info.css
│   └── index.css
├── js/                  # JavaScript
│   ├── script.js        # Shared scripts (dark mode, etc.)
│   ├── ground-floor.js
│   ├── first-floor.js
│   ├── second-floor.js
│   └── index.js
├── index.html           # Home page
├── ground-floor.html
├── first-floor.html
├── second-floor.html
├── info.html            # Team info & more info
├── mapping.html         # Reference/utility
├── Dockerfile
└── README.md
```

## Running with Docker

```bash
docker build -t classroom-locator .
docker run -p 80:80 classroom-locator
```
