# 3D Viewer App (Electron) — Windows EXE via GitHub Actions

## Local run
```
cd 3d-viewer-app
npm install
npm run build:win
```

## Build Windows .exe in the cloud (no local Node required)
1. Skapa ett nytt GitHub-repo och lägg upp allt i denna ZIP som root.
2. Gå till **Actions**-fliken i ditt repo.
3. Kör workflow **Build Windows EXE** (workflow_dispatch).
4. När jobbet är klart, ladda ner artefakten **3d-viewer-windows** — där finns din `.exe`.
