# AFTER ORBIT

A cinematic, interactive space archive prototype. No astronaut stock imagery: the visual language uses planetary bodies, mission-inspired technical illustrations, orbital geometry, and a 3D celestial scene.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## What's included
- Responsive React + TypeScript + Vite foundation
- Interactive Three.js / React Three Fiber planetary scene (drag to orbit)
- Chapter archive with category filters and search
- Chapter detail modal with story and dataset-grounded facts
- ORI alien guide visual (preview, not connected to an AI model yet)
- Original SVG science/space artwork, not astronaut stock images

## Important content note
The first seven chapters are based on the uploaded NASA records summary. The records distinguish actual missions from ground prototypes and technology research. The 38 search results are not 38 unique spacecraft.

## Next build steps
- Replace illustrative chapter art with verified NASA mission imagery and 3D assets, each with source credits.
- Add a real AI endpoint with server-side API-key handling and retrieval limited to approved NASA source material.
- Add chapter-specific 3D models and mission timelines.
- Add accessibility polish, reduced-motion support, and performance testing.
