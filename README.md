friedsilicon.com
====
Landing page, created using hexo, and published using surge.

[![Build Status](https://travis-ci.org/friedsilicon/friedsilicon.svg?branch=master)](https://travis-ci.org/friedsilicon/friedsilicon)

Getting Started
-----

### Prerequisites
This project uses Node.js. We recommend using a Node.js version manager like fnm or nvm.

#### Install and use the correct Node.js version
```bash
# Using fnm
fnm install 12
fnm use 12

# Or using nvm
nvm install 12
nvm use 12
```

### Setup Instructions

1. **Clone the repository with submodules (for the theme)**
   ```bash
   git clone --recursive git@github.com:friedsilicon/friedsilicon.git
   cd friedsilicon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate static site**
   ```bash
   npm run generate
   # or
   hexo generate
   ```

4. **Start development server (optional)**
   ```bash
   hexo server
   ```
   The site will be available at `http://localhost:4000`

5. **Deploy to surge.sh**
   ```bash
   npm run deploy
   ```

### Available Scripts
- `npm run generate` - Generate static version of site
- `npm run clean` - Clean generated files
- `npm run deploy` - Deploy to surge.sh
- `npm test` - Alias for generate
