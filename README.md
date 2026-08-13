# Community Mods for Surviving Mars — the docs site

The player-facing documentation site for the *Surviving Mars: Relaunched*
community mods. **This repo is the site and nothing else** — no mod code, no
development notes. Everything in `content/` is written for players.

⛔ **Nothing is on the public web yet.** The build workflow is manual-trigger
only and GitHub Pages is not enabled on this repo. The four pages currently in
`content/` are **layout specimens** and say so on their own face — they exist so
the site's feel can be judged before the real writing starts.

## The mods this site documents

| mod | repo | what it is |
|---|---|---|
| **Community Fix Pack** | [`catt144/SMR-CommunityFixPack`](https://github.com/catt144/SMR-CommunityFixPack) | bug fixes only; every one repairs a defect verified in the game's own shipped code |
| **Community Fix Pack: Opt-In Modules** | [`catt144/SMR-CommunityOptInPack`](https://github.com/catt144/SMR-CommunityOptInPack) | optional changes to how the game behaves, all off until you turn them on |

⭐ **Those repos being public is deliberate.** They are the receipts behind every
claim these pages make, working notes and corrections included. This site is
separate from them for one reason only, and it is not secrecy: a player looking
up *"is my bug fixed"* should not land in development notes, and development
notes carry superseded numbers and in-progress wrong answers — fine as receipts,
bad as something people quote back at you.

## Layout

```
mkdocs.yml                          MkDocs + Material config
content/                            every page, written for players
  index.md · install.md · fix-list.md · faq.md
.github/workflows/publish-site.yml  manual-trigger Pages build
```

## Previewing it locally

```
python -m pip install mkdocs-material
python -m mkdocs serve
```

then open the address it prints. The CI build needs none of this — it installs
its own copy.

## Publishing it

1. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
2. Actions tab → *Publish docs site* → Run workflow.

⚠️ That URL is public the moment it builds.

## The one rule

⛔ **`docs_dir: content` in `mkdocs.yml` is the exposure gate**, and the CI job
fails the build if it changes, if any path escapes this repo, or if a submodule
appears. This repo has nothing to leak by construction — the check stays anyway,
for the day someone points it back at a mod repo.

---

MIT licensed. Moved out of the fix pack repo on 2026-08-13 so one site can serve
every mod in the family rather than riding inside one of them.
