# 🌈 MistUI +
**👉 [Try MistUi Live](https://gilded-tanuki-0eb52b.netlify.app/) — interactive playground & docs**

 **MistUi** is a modern UI library focused on simplicity, flexibility, and real-world usability. It draws inspiration from MUI, Tailwind, DaisyUI, and Atomic Design—but without the complexity, "magic," or headaches.

MistUi helps you build interfaces that are stylish out of the box, easily customizable, and architecturally unobtrusive.

- ⚡️ Instant start with no theme or global providers required  
- 🎨 Centralized theming and palette, yet easily extendable  
- 🧱 Components follow Atomic Design for clear structure and reusability  
- 🧠 Smart defaults with full customization when needed  
- 🛠️ Built on Tailwind + DaisyUI for a strong foundation, minimal footprint, and great performance  
- 🎯 Aligned with Material Design principles  

![preview](https://i.postimg.cc/8Ch3Djk1/preview.png)


## 📦 Installation

```bash
# Using npm
npm install mistui-kit

# Using yarn
yarn add mistui-kit

# Using pnpm
pnpm add mistui-kit
```

## Theme: Overview

Component styling is based on a unified theme context. This allows centralized control over the entire UI, similar to MUI, but simpler and cleaner.

- Base color variants (`selected`, `primary`, `accent`, etc.)  
- Centralized typography settings (fonts, sizes, weights)  
- Shadow system  
- Size system: auto, predefined, and custom presets  
- Easy overrides and theme extension  

💡 You don’t need to dive deep into architecture. Everything is clear, transparent, and more flexible than most solutions on the market.

### Key Advantages:

- 🎨 Auto palette generation from even a single base color  
- ❌ No styled-components, emotion, or other CSS-in-JS "magic" — just clean, simple Tailwind-compatible code  
- 🔌 Loose coupling with the theme: components use it for initial values, but aren't tightly bound to it  
  - Components can override theme values  
  - Override internal atomic elements  
  - Style and control slotted children  
  - Support for size, palette, and behavior at all levels  
  - ✅ Yes, this follows Atomic Design principles  

---

## Components: Overview

- Built on DaisyUI foundation — a clean, powerful base fully compatible with Tailwind CSS  
- Utility-first and class-based, ensuring easy integration  
- Growing library of ready-to-use components  
- Structured following Atomic Design: from atoms to page templates  
- Familiar interface for those coming from MUI or similar UI systems  

### 🛠️ Solving Common UI Library Pain Points

We’ve addressed (or nearly solved) many common frustrations:

- 🌀 Carousels that *actually work* — no hours of debugging or fragile hacks  
- 🎯 Popovers with predictable, intuitive behavior — no need to learn 10 internal hooks  
- 📂 Accordions — for some reason, hard to get right; here, they just work  
- 📊 Data tables — not perfect, but no longer a nightmare  
- 🔤 Inputs — a notoriously painful area due to poor browser default styling and overcomplicated libraries  

  We've focused on:

  - ✅ Customization out of the box  
  - ✅ No "magic", full flexibility  
  - ✅ Clean styles and high-level abstraction  
  - ✅ Respect for controlled and uncontrolled inputs  
  - ✅ Lightweight and straightforward design  

- 🔄 Hybrid state system:  
  - Work autonomously (uncontrolled)  
  - Become controlled when `value` is passed  
  - But even in controlled mode, retain local autonomy for smoother UX  
  - ⚠️ Yes, this can spark debates — but in practice, it's a balanced compromise between flexibility and usability. We're open to discussion.  


## When to Use MistUi

- 🧱 **Build Your Own Design Systems**  
  MistUi is based on Atomic Design and full theming, making it easy to align with your brand and component architecture. Everything is configurable: from sizes and fonts to color schemes and UI behavior.

- 🛠️ **Build Visual Editors & UI Builders**  
  Components are loosely coupled with the theme, allowing easy dynamic re-styling: colors, sizes, slot behavior, even nested components. Ideal foundation for visual tools, editors, and dynamic UIs.

- ⚙️ **Scalable UI Projects**  
  With strong typing, easy overrides, and automatic palette generation, MistUi scales smoothly as your project grows.

- 🎨 **Developer-Friendly by Design**  
  MistUi doesn’t require deep documentation dives. Interfaces feel natural for those familiar with MUI or similar systems. Intuitive defaults, consistent styling, and simple overrides — just grab a component and use it.

- ⚡️⚡️ **Learn by Doing**  
  MistUi's documentation site includes a live playground where you can experiment with components, props, styles, and behavior in real time. We believe in **learning by doing**, not just reading theory.
  [Try it out here](https://gilded-tanuki-0eb52b.netlify.app/)


  > ⚠️ MistUi is actively under development.  
> The library and documentation site are still in progress — things may change, and docs are being written.