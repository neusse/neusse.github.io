# George Neusse Static Site

Static replacement site for `neusse.com`.

## Contents

- `index.html`: single-page personal site
- `styles.css`: responsive visual design
- `script.js`: reveal and hero motion
- `assets/observability-field.png`: hero visual asset
- `downloads/George-Neusse-Senior-Splunk-Engineer-Resume.pdf`: resume download generated from the master DOCX

## Deployment Notes

Deploy the contents of this `site` directory into `/home3/neusseco/public_html` after backing up the existing web root.

Recommended server sequence:

1. Back up `/home3/neusseco/public_html` to `/home3/neusseco/site-backups/public_html-YYYYMMDD-HHMMSS`.
2. Upload this directory to a staging path outside the live web root.
3. Verify `index.html` and the PDF download path.
4. Replace the live web root contents only after confirmation.
