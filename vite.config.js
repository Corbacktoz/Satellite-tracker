import { defineConfig } from 'vite';
import { api } from './server/data.mjs';
export default defineConfig({plugins:[{name:'orbital-data',configureServer(s){s.middlewares.use(api)},configurePreviewServer(s){s.middlewares.use(api)}}]});
