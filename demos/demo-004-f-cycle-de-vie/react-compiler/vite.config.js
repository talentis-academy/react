import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // React Compiler : il ajoute tout seul la mémoïsation (comme React.memo, useMemo et useCallback)
      babel: { plugins: ['babel-plugin-react-compiler'] },
    }),
  ],
})
