# Deploying to cPanel (Node.js Selector)

This portfolio runs on cPanel as a standalone Next.js app. The Node.js app
lives outside `public_html`; Apache in `public_html` only proxies requests to
it. No Vercel account is required.

## Files added for cPanel

| File | Purpose |
| --- | --- |
| `next.config.mjs` | Enables `output: 'standalone'`. |
| `scripts/cpanel-build.mjs` | Copies `public/` and `.next/static/` into `.next/standalone/` after the build. |
| `server.js` | cPanel startup file; boots the standalone Next server on the port Passenger provides. |
| `.htaccess.cpanel.example` | Apache reverse-proxy rules for the domain document root. |
| `.env.example` | Environment variables to set in cPanel before building. |

## One-time setup

1. **Confirm Node.js Selector is available** in your cPanel account. Use Node
   **22.x** (18.18+ also works). Point the domain or subdomain at this cPanel
   account.

2. **Upload the project outside `public_html`**, for example to `~/portfolio`.
   Do not upload `node_modules` or `.next`; they are generated on the server.
   You can use Git, File Manager, or SSH:

   ```bash
   cd ~
   git clone <your-repo-url> portfolio
   cd portfolio
   ```

3. **Set environment variables in cPanel** before building. In
   **Node.js Selector → your app → Environment Variables**, add:

   ```text
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
   CONTACT_TO_EMAIL=you@your-domain.com
   ```

   `NEXT_PUBLIC_SITE_URL` is inlined at build time, so it must be set **before**
   running the build.

4. **Install and build** using cPanel Terminal or SSH:

   ```bash
   cd ~/portfolio
   npm ci
   npm run build:cpanel
   ```

   `build:cpanel` runs `next build` and then prepares the standalone bundle.
   Using plain `npm run build` will produce pages without CSS/JS/images in
   standalone mode.

5. **Create the Node.js app** in cPanel → **Node.js Selector**:

   | Setting | Value |
   | --- | --- |
   | Node.js version | 22.x |
   | Application root | `portfolio` (or `/home/USERNAME/portfolio`) |
   | Application URL | your domain/subdomain |
   | Application startup file | `server.js` |
   | Passenger log file | `portfolio.log` (any writable name) |

   Click **Create**, then **Restart**.

6. **Install the Apache proxy rules.** Copy `.htaccess.cpanel.example` to your
   domain document root as `.htaccess` and replace `__PORT__` with the port
   cPanel shows for the Node.js app (often `3000`):

   ```apache
   RewriteEngine On
   RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L,QSA]
   ```

   If cPanel already generated an `.htaccess` for the Node app, use that file
   and only verify the port is correct.

7. **Verify** in a browser:
   - `https://your-domain.com/` loads with styling, fonts and the portrait.
   - `https://your-domain.com/talks/machine-learning-2026-ai-seminar` works as
     a direct link (no 404).
   - The theme toggle and seminar gallery lightbox work.
   - The contact form returns success only after Resend is configured.

## Updating the site

```bash
cd ~/portfolio
git pull
npm ci                 # only if package-lock.json changed
npm run build:cpanel
```

Then click **Restart** in Node.js Selector. If the port changes, update
`public_html/.htaccess`. Server-only env changes need only a restart; changes
to `NEXT_PUBLIC_SITE_URL` need a rebuild.

## Auto-deploy from GitHub

The GitHub repo is `https://github.com/Dumbo-programmer/Prachya-Portfolio`
(default branch `main`). First **commit and push your current work** — the
server can only pull what is on GitHub.

One-time server setup:

1. Clone the repo outside `public_html`:

   ```bash
   cd ~
   git clone https://github.com/Dumbo-programmer/Prachya-Portfolio.git portfolio
   ```

   Or in **cPanel → Files → Git Version Control**, click **Create**, choose
   **Clone a Repository**, and use that URL with repository path `portfolio`.

2. Keep secrets out of Git. Create `/home/USERNAME/portfolio/.env.production.local`
   on the server with the real values (it is git-ignored, so `git reset --hard`
   will not delete it):

   ```text
   NEXT_PUBLIC_SITE_URL=https://prachyabiswas.com
   RESEND_API_KEY=...
   CONTACT_TO_EMAIL=...
   ```

   Also set the same variables in **Node.js Selector → Environment Variables**
   so the running Node app can read them at runtime.

3. Create the Node.js app once as described above, with startup file
   `server.js`.

### Option A — GitHub Actions (recommended: deploys on every push)

The repo includes `.github/workflows/deploy-cpanel.yml`. It builds the
standalone bundle on a GitHub runner, uploads it to cPanel, extracts it and
restarts the app. **No build runs on cPanel**, so shared-hosting LVE memory
limits are not an issue.

In GitHub, go to **Settings → Secrets and variables → Actions → New repository
secret** and add:

| Secret | Value |
| --- | --- |
| `CPANEL_HOST` | Your cPanel hostname or server IP. |
| `CPANEL_USER` | cPanel username. |
| `CPANEL_SSH_KEY` | Private SSH key whose public key is installed in cPanel → SSH Access. |
| `CPANEL_SSH_PASSPHRASE` | Only if the private key is passphrase-protected; otherwise leave unset. |
| `CPANEL_APP_PATH` | `/home/USERNAME/portfolio` |
| `CPANEL_SSH_PORT` | The real SSH port shown in cPanel. If unset, the workflow uses `22`. |
| `NEXT_PUBLIC_SITE_URL` | `https://prachyabiswas.com` (needed at build time). |

If you see `ssh: this private key is passphrase protected`, either add the
`CPANEL_SSH_PASSPHRASE` secret or regenerate the key without a passphrase:

```bash
ssh-keygen -t ed25519 -N "" -C github-actions
```

If you see `connect: connection refused` on port `22`, your host uses a
different SSH port or SSH is blocked. Check **cPanel → SSH Access** and set
`CPANEL_SSH_PORT` to that port. Confirm SSH is enabled for your cPanel account.

Generate a key locally with `ssh-keygen -t ed25519 -C github-actions`, paste the
**private** key into `CPANEL_SSH_KEY`, and add the **public** key to cPanel's
**SSH Access → Manage SSH Keys**.

Now push to `main`. The Actions tab will show a workflow that runs `npm ci`,
`npm run build:cpanel`, tars `.next/standalone`, uploads it, extracts it into
`/home/USERNAME/portfolio/.next/standalone` and touches `tmp/restart.txt`.
You can also trigger it manually with **Run workflow**.

Because the build happens on GitHub, `NEXT_PUBLIC_SITE_URL` must be a GitHub
secret. Server-only Resend variables still come from **Node.js Selector →
Environment Variables** at runtime.

> If your host uses a password instead of an SSH key, replace `key:` with
> `password: ${{ secrets.CPANEL_PASSWORD }}` in both the upload and restart
> steps of the workflow.

### Option B — cPanel cron job (autopull on a schedule)

If you do not want GitHub Actions, add a cron job in **cPanel → Advanced →
Cron Jobs** that runs every 5 minutes:

```cron
*/5 * * * * /bin/bash /home/USERNAME/portfolio/scripts/cpanel-deploy.sh >> /home/USERNAME/portfolio/deploy.log 2>&1
```

This pulls GitHub, rebuilds and restarts automatically, but only every 5
minutes. It runs `npm run build:cpanel` **on the server**, so it needs enough
LVE memory. If you hit the WebAssembly/LVE out-of-memory error, use Option A
instead — GitHub builds the bundle and only uploads the result. If `npm` is not
found, run `which npm` in cPanel Terminal and add its directory to the `PATH`
line in `scripts/cpanel-deploy.sh`.

### Restart note

`touch tmp/restart.txt` is Passenger's restart signal and normally restarts a
cPanel Node.js app. If your host does not react to it, click **Restart** in
**Node.js Selector** after the first deploy, or ask the host which restart
hook they support.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| 502 / 503 Bad Gateway | Wrong port in `.htaccess`, app not restarted, or startup file not `server.js`. |
| `WebAssembly.instantiate(): Out of memory` | You are running `npm run dev` / `next dev` on cPanel, or building inside the LVE. Never run dev mode on the server. Stop the dev process, use startup file `server.js`, and let GitHub Actions build with the workflow above. |
| `ssh: this private key is passphrase protected` | Add `CPANEL_SSH_PASSPHRASE`, or regenerate the key with `-N ""`. |
| `dial tcp ...:22: connect: connection refused` | Wrong SSH port/host, SSH disabled, or firewall. Set `CPANEL_SSH_PORT` to the port from cPanel SSH Access. |
| Page loads but no CSS/JS | `.next/static` was not copied — rerun `npm run build:cpanel` or use the GitHub Actions upload. |
| Broken portraits / seminar photos | `public/` was not copied — rerun `npm run build:cpanel`. |
| Contact form says email is unavailable | Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`, restart the app. |
| Wrong canonical URL / OG links | Set `NEXT_PUBLIC_SITE_URL` before rebuilding. |
| 404 on direct article links | Apache is not proxying all requests; check `.htaccess` rewrite rule. |

## Notes

- Keep the application root outside `public_html` so source files, `.env` and
  `.next` are not downloadable.
- Enable SSL in cPanel and force HTTPS; set `NEXT_PUBLIC_SITE_URL` to the final
  HTTPS domain.
- The generated `sitemap.xml` and `robots.txt` are served by Next.js through
  the proxy; submit `https://your-domain.com/sitemap.xml` to Search Console.
