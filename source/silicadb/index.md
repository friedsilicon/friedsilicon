---
title: SilicaDB
date: 2025-11-16
layout: page
---

# SilicaDB  
### A local-first data engine for AI apps

**Data + vectors + schemas.  
Local-first. Zero-copy. Optional sync.**

Build real apps without a backend.  
Give your app an on-device brain.

---

## What is SilicaDB?

SilicaDB is a single-file database designed for modern applications.

It stores:

- **Relational tables**
- **Documents**
- **Events / state**
- **Embeddings & vectors**
- **Schemas (SODL)**
- **Semantic search indexes**

All in one portable `.silica` file you embed directly in your app.

Use it for:

- **AI apps** – local RAG, agent memory, semantic search  
- **Mobile & desktop apps** – a real data layer without Firebase or a backend  
- **Games** – entity state, save files, world data, local inference  
- **Tools & CLIs** – portable AI-powered utilities  
- **Edge devices** – fast embedded storage with vectors  

---

## Why does this matter?

Today, most apps glue together:

- SQLite or Postgres (state)  
- Firestore / Supabase (sync)  
- Chroma / LanceDB (embeddings)  
- JSON / Protobuf (schemas)  
- Ad-hoc local caches  
- Python microservices  

It works, but it's messy:

- More moving parts  
- More latency  
- More production incidents  
- Harder to test and reason about  

SilicaDB replaces that stack with a single embedded engine:

- Runs on-device (iOS, Android, desktop, WASM, edge)  
- No cloud required  
- Reads and writes in microseconds  
- Built-in vector search  
- Built-in schema intelligence  
- Optional sync if/when you need it  

---

## Built for developers

```bash
# Initialize your app database
silica init app.sdb

# Define your schema
silica schema add user.sodl

# Insert data
silica insert data.json

# Search semantically
silica search "users who had billing problems this week"
```

---

## Early Pricing (Validation Phase)

Right now, I'm testing whether developers want SilicaDB enough to pay for it.  
Nothing here is final — this page exists only to measure interest.

### Free Tier — $0

You will be able to:

- Download the core engine when it launches  
- Use SilicaDB locally in your own projects  
- Keep using the core for free, forever  

No credit card required.

### PRO Founding User — $29 (one-time, refundable)

If you want to support the project early, you can pre-order access.

You will receive:

- Lifetime PRO license  
- Early access builds  
- A private feedback channel  
- Priority support  
- Your name (optional) on the SilicaDB "Founding Users" page  

If this doesn't ship or doesn't fit your needs, I will refund you — no questions asked.

---

## Get Started

<div style="display: flex; flex-wrap: wrap; gap: 2rem; margin: 2rem 0;">
  
  <div style="flex: 1; min-width: 300px; padding: 1.5rem; border: 1px solid #333; border-radius: 8px;">
    <h3 style="margin-top: 0; color: #0a64ff;">🚀 Founding User</h3>
    <p>Support the project early and get lifetime PRO access.</p>
    <ul style="margin: 1rem 0;">
      <li>Lifetime PRO license</li>
      <li>Early access builds</li>
      <li>Private feedback channel</li>
      <li>Priority support</li>
    </ul>
    <form action="https://buy.stripe.com/fZubJ02YE97Z0dZ1pC0co00" method="GET" style="margin-top: 1rem;">
      <button
        type="submit"
        style="padding:0.75rem 1.5rem; background:#0a64ff; color:#fff; border:none; border-radius:6px; cursor:pointer; font-size:1rem; font-weight:600; width: 100%;"
      >
        Pre-order PRO for $29
      </button>
    </form>
    <p style="margin: 0.5rem 0; color: #666; font-size: 0.9rem;">
      <small>One-time payment, full refund if not satisfied</small>
    </p>
  </div>

  <div style="flex: 1; min-width: 300px; padding: 1.5rem; border: 1px solid #333; border-radius: 8px;">
    <h3 style="margin-top: 0; color: #666;">📧 Early Access List</h3>
    <p>Get notified when SilicaDB launches. No commitment required.</p>
    <ul style="margin: 1rem 0;">
      <li>Free core engine access</li>
      <li>Launch notifications</li>
      <li>Documentation & tutorials</li>
      <li>Community access</li>
    </ul>
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/shivanand"
      method="post"
      target="_blank"
      style="margin-top: 1rem;"
    >
      <input
        type="email"
        name="email"
        id="bd-email"
        placeholder="you@example.com"
        required
        style="padding:0.6rem; width:100%; border:1px solid #444; border-radius:4px; margin-bottom:0.5rem; background:#1a1a1a; color:#fff;"
      />
      <button
        type="submit"
        style="padding:0.75rem 1.5rem; background:#444; color:#fff; border:none; border-radius:6px; cursor:pointer; font-size:1rem; font-weight:600; width: 100%;"
      >
        Notify me when ready
      </button>
    </form>
  </div>

</div>

---

## Questions?

If you'd use SilicaDB as the primary data store for your app, I want to hear from you.

After you join the early access list, I'll ask: **What are you planning to build with SilicaDB?**