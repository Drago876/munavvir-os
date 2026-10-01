# MUNAVVIR_OS

An interactive, OS-style personal portfolio for Munavvir Musthafa, built with React and Vite. Visitors boot into a fictional personal system and explore its apps as windows on a responsive desktop.

## What Is This?

MUNAVVIR_OS presents a personal portfolio as a small digital world rather than a conventional page of sections. The interface is playful and game-inspired, while the profile and project information stays grounded in real details.

## Features

- OS boot screen and interactive desktop
- Application launcher, dock, and reusable app windows
- AI Lab for learning and exploration topics
- Projects displayed as missions
- Skills grouped by current tools and learning areas
- Linux workstation-style interface
- Cyber Lab educational tabletop simulation
- Game Zone reaction-time mini-game
- Fictional, browser-only terminal
- Mascot and keyboard Easter eggs
- Responsive desktop and mobile layouts

## Tech Stack

- React
- Vite
- JavaScript
- HTML
- CSS
- Git
- GitHub

## Running Locally

Install the project dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173/`.

## Production Build

Create an optimized static build in `dist/`:

```bash
npm run build
```

To preview that build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  apps/          Individual application views and shared app UI
  components/    Boot screen, desktop, system bar, reusable window
  data/          Editable project information
  App.jsx        Boot state and application-window management
  main.jsx       React entry point
  styles.css     Theme, layout, application styling, and responsive rules
index.html       Document metadata and Vite entry point
vite.config.js   Vite and React plugin configuration
```

Application ids in `src/components/Desktop.jsx` are connected to React views in `src/apps/AppContent.jsx`. Project details are kept separately in `src/data/projects.js` so that real project information can be added without rewriting the mission layout.

## Learning Notes

- **React state** stores changing interface values, such as which windows are open or what terminal output to show.
- **Components** split the interface into reusable parts, such as `Window`, `SystemBar`, and each app view.
- **Props** pass data and event handlers between components. For example, the desktop sends an app id to the window manager when an icon is activated.
- **Events** connect visitor actions to state changes. The terminal handles form submission; the reaction game handles clicks and a timer.
- **CSS** defines the visual design, window states, and motion without a separate animation library.
- **Responsive design** uses media queries to change the desktop launcher and present app windows as full-screen mobile panels.

Comments in the source explain the main state, data flow, window behavior, terminal routing, game phases, and editable values.

## Contact

- Email: [munnumunawir0@gmail.com](mailto:munnumunawir0@gmail.com)
- GitHub: [github.com/Drago876](https://github.com/Drago876)
- LinkedIn: [linkedin.com/in/munavvir-musthafa-b42538248](https://www.linkedin.com/in/munavvir-musthafa-b42538248)

## Safety Note

The Terminal is a fictional browser interface that responds only to its built-in portfolio commands. It does not execute operating-system shell commands. Cyber Lab is a static educational simulation and does not scan devices, send packets, or perform attacks.

## Portfolio Information To Add

The project mission currently has placeholders for its repository URL, live demo, screenshots, detailed challenges, and results. The Resume app also needs a real resume document before its download button can be enabled.