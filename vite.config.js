import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
    base: '/meditrack/',
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'MediTrack',
                short_name: 'MediTrack',
                description: 'Medication management and reminders',
                theme_color: '#0b6e69',
                background_color: '#f6fbfa',
                display: 'standalone',
                icons: [
                    {
                        src: 'icon.svg',
                        sizes: 'any',
                        type: 'image/svg+xml',
                        purpose: 'any'
                    }
                ]
            },
            workbox: {
                navigateFallback: 'index.html'
            }
        })
    ]
});
