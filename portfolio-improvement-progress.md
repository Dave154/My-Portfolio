# David Okpe Portfolio Improvement Progress

**Source plan:** `davidokpe-portfolio-audit.md`
**Started:** September 21, 2026
**Current status:** Planning aligned; implementation has not started.

## Working Objective

Reposition the portfolio so it clearly communicates:

> David Okpe is a full-stack developer who understands business problems and turns them into working software.

The existing visual identity and design direction should remain intact unless a change is needed for clarity, usability, accessibility, SEO, or conversion.

## Working Process

Each phase will follow this sequence:

1. Inspect the relevant implementation and existing content.
2. Make the smallest focused change for that phase.
3. Run the narrowest useful validation immediately.
4. Review the result against the audit and existing design system.
5. Record the outcome and any follow-up before moving on.

No later phase should be implemented until the previous phase has been checked.

## Baseline Findings

- [x] Audit reviewed and implementation direction aligned.
- [x] Current app structure identified: single homepage composed from section components.
- [x] Metadata and JSON-LD foundation identified in `app/layout.js` and `lib/site.js`.
- [x] Current identity/config still uses `Dave Okpe` and a Vercel fallback URL.
- [x] Current homepage order identified in `app/page.js`.
- [x] Phase 1 implementation started and completed without changing the visual layout.

## Phase 1 - Identity and SEO Foundation

**Status:** Complete

- [x] Change the primary identity to `David Okpe`.
- [x] Set the page title to `David Okpe | Full-Stack Developer`.
- [x] Add the approved meta description.
- [x] Set and normalize the canonical `www.davidokpe.cv` URL.
- [x] Update Open Graph metadata and image text.
- [x] Update Twitter/X metadata.
- [x] Confirm language, favicon, and social preview configuration.
- [x] Replace the current `ProfessionalService`-only JSON-LD with accurate `Person`/`ProfilePage` and `WebSite` signals.
- [x] Preserve only genuine `sameAs` profiles already present in the project.
- [x] Verify `robots.txt` generation.
- [x] Verify `sitemap.xml` generation.

**Validation gate:** Production build passed. Metadata and JSON-LD compile from the intended canonical configuration; robots and sitemap routes are generated. Runtime/search-tool validation remains part of deployment follow-up.

## Phase 2 - Positioning

**Status:** Complete

- [x] Rewrite the hero around David Okpe, Full-Stack Developer, and real business problems.
- [x] Keep the existing visual treatment while improving the semantic heading hierarchy.
- [x] Add clear business-problem positioning near the top of the page.
- [x] Add a concise `What I Build` capabilities layer.
- [x] Place the capabilities layer after selected work and before experience/technologies.

**Validation gate:** Production build passed after the hero edit and after the capabilities section was added. The first viewport now identifies David Okpe, Full-Stack Developer, and the business-problem positioning; the homepage also exposes five client-facing capability categories before the technical stack.

## Phase 3 - Proof and Experience

**Status:** In progress

- [x] Rewrite Darllix in clear business language while retaining useful technical depth.
- [ ] Add Qaffy only with details approved for public use and a suitable public project surface.
- [x] Rewrite Jellosite around concrete production contributions.
- [x] Rewrite Ruumies to show existing-codebase and completion work.
- [x] Keep Darllix as the detailed primary case study and the archive as secondary work.
- [x] Keep claims concrete and avoid unsupported metrics or vague superlatives.

**Validation gate:** Production build passed. Darllix, Jellosite, and Ruumies now explain the problem or system and David's contribution. Qaffy is intentionally deferred until approved public material is available.

## Phase 4 - Conversion and Navigation

**Status:** Complete

- [x] Replace the vague CTA with a clear build/contact invitation.
- [x] Make the email action and contact intent explicit.
- [x] Keep LinkedIn and GitHub as clear secondary contact/profile links.
- [x] Preserve and verify the existing resume download link and filename.
- [x] Make Work, Capabilities, Experience, and Contact destinations understandable and keyboard-accessible.

**Validation gate:** Production build passed. The mounted navigation points to real section anchors, the email opens a mail client, the copy action remains available, and the CTA now asks visitors to build something real.

## Phase 5 - Content Architecture

**Status:** In progress

- [x] Decide that Darllix merits a dedicated public URL based on its live platform, existing assets, and approved content.
- [x] Create the first useful project page at `/work/darllix`.
- [x] Add descriptive title, description, canonical URL, Open Graph metadata, and image alt text to the Darllix page.
- [x] Add a natural internal case-study link from the featured Darllix section.
- [x] Add the published Darllix URL to the sitemap.
- [x] Create the Qaffy case-study page at `/work/qaffy` using the supplied public URL and repository assets.
- [x] Add Qaffy to the secondary work archive and sitemap.
- [ ] Create additional project pages only after approved public material and suitable URLs are available.

**Validation gate:** Production build passed and generated `/work/darllix` and `/work/qaffy` as static routes. Both pages have substantial project content, crawlable homepage links, canonical metadata, and sitemap coverage. Additional project pages remain intentionally deferred.

## Phase 6 - Technical Quality

**Status:** Complete

- [x] Audit and improve meaningful image alt text on the touched project surfaces.
- [x] Check semantic heading structure and interactive element semantics on the touched surfaces.
- [x] Convert experience accordion triggers to keyboard-accessible buttons with expanded state.
- [ ] Check contrast, reduced motion, and content that depends on hover beyond the source review.
- [x] Check the homepage at a 390px viewport for horizontal overflow and core content presence.
- [x] Browser-check the homepage and both published case-study routes for titles, headings, links, and image alt text.
- [ ] Validate structured data and social previews with external deployment tools.

**Validation gate:** `npm run lint` and `npm run build` pass. Browser checks confirm the homepage and both case-study routes render correctly, and the mobile homepage has no horizontal overflow. External contrast, motion, performance, structured-data, and social-preview validation remains deployment follow-up.

## Phase 7 - Search and Entity Growth

**Status:** In progress

- [ ] Link the portfolio from LinkedIn.
- [ ] Link the portfolio from GitHub.
- [x] Keep name, role, URL, and positioning consistent in the website metadata and structured data.
- [ ] Publish useful project or build-process content only when it reflects real experience.
- [ ] Add the site to Google Search Console after deployment.
- [ ] Submit the sitemap and inspect the homepage and important project URLs.
- [ ] Monitor indexing, queries, impressions, and reported crawl issues.

**Validation gate:** External profile links and Search Console checks confirm the intended David Okpe identity and canonical site relationship.

## Decisions and Constraints

- Do not implement all phases in one batch.
- Do not replace the existing visual identity with a generic developer template.
- Do not invent client details, metrics, technologies, or project outcomes.
- Do not publish confidential client or business information.
- Do not create thin pages solely for SEO.
- Prefer semantic HTML, crawlable links, and existing project patterns.
- Keep changes small enough to validate and review phase by phase.

## Change Log

### September 21, 2026

- Reviewed the full portfolio audit.
- Confirmed the primary implementation surfaces: `lib/site.js`, `app/layout.js`, `app/page.js`, and the section components.
- Created this progress tracker.
- Completed Phase 1 identity and SEO foundation changes in `lib/site.js`, `app/layout.js`, and `app/opengraph-image.jsx`.
- Confirmed the production build passes with generated `robots.txt` and `sitemap.xml` routes.
- Confirmed the favicon exists at `app/icon.png`.
- Completed Phase 2 positioning changes in `components/hero.jsx`, `components/capabilities.jsx`, and `app/page.js`.
- Confirmed the production build passes after the hero and capabilities changes.
- Updated Darllix, archive, Jellosite, Ruumies, and record copy for Phase 3.
- Confirmed the production build passes after the Phase 3 proof updates.
- Deferred Qaffy pending approved public details and a suitable public project surface.
- Completed Phase 4 conversion and navigation changes in `components/header.jsx`, `app/page.js`, `components/experience-stack.jsx`, and `components/contact-footer.jsx`.
- Confirmed the production build passes with the mounted navigation and contact actions.
- Created the Darllix case-study page at `app/work/darllix/page.jsx`.
- Linked the featured Darllix section to the case study and added the page to `app/sitemap.js`.
- Confirmed the production build generates the new `/work/darllix` route.
- Created the Qaffy case-study page at `app/work/qaffy/page.jsx` using the supplied `qaffylaundry.com` URL and `public/qaffyassets` images.
- Added Qaffy to `components/project-index.jsx` and `app/sitemap.js`.
- Confirmed the production build generates the new `/work/qaffy` route.
- Converted experience accordion rows to keyboard-accessible buttons and added descriptive Darllix image alt text.
- Replaced the obsolete `next lint` script with a flat-config-compatible source lint command.
- Added explicit authored-file matching to `eslint.config.mjs` and fixed contact footer JSX entities.
- Confirmed `npm run lint` and the final `npm run build` both pass.
- Browser-checked the homepage, `/work/darllix`, and `/work/qaffy` on the local development server.
- Confirmed the homepage has no horizontal overflow at a 390px viewport.
- Confirmed page titles, case-study headings, internal/external links, and supplied image alt text appear in the browser accessibility snapshots.
- Verified rendered title, canonical URL, description, Open Graph URL, and `ProfilePage`/`Person`/`WebSite` JSON-LD in the browser.
- Verified rendered `robots.txt` and `sitemap.xml`, including the homepage, Darllix, and Qaffy canonical URLs.
- Normalized the sitemap homepage URL to match the slash-terminated canonical URL.
- Re-ran `npm run lint` and `npm run build` successfully after the final SEO normalization.
