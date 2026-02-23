import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.', // Das Hauptverzeichnis
  build: {
    rollupOptions: {
      input: {
        // Hier sagst du Vite explizit, wo die Datei liegt
        main: resolve(__dirname, '745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html'),
      },
    },
  },
  server: {
    // Damit der Server direkt die richtige Datei aufruft
    open: '/745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html'
  }
})