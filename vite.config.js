import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/',
  plugins: [
    vue({
      // Use runtime-only build (smaller, no template compiler)
      template: {
        compilerOptions: {
          isCustomElement: (tag) => false,
        },
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
    allowedHosts: ['494c9145ae60.ngrok-free.app'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Use terser for better compression (smaller output)
    minify: 'terser',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller output
    target: 'es2015',
    // Use modern output format
    modulePreload: {
      polyfill: false, // Don't include polyfill for modern browsers
    },
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Separate vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize asset file names
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Terser options for maximum compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace', 'console.warn'],
        passes: 4, // More passes for better compression
        unsafe: true, // Enable unsafe optimizations
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        dead_code: true, // Remove dead code
        unused: true, // Remove unused code
        collapse_vars: true, // Collapse single-use variables
        evaluate: true, // Evaluate constant expressions
        reduce_vars: true, // Reduce variable usage
        reduce_funcs: true, // Reduce function declarations
        inline: 2, // Inline functions
        keep_fargs: false, // Remove unused function arguments
        keep_fnames: false, // Remove function names
        keep_infinity: false, // Optimize infinity
        loops: true, // Optimize loops
        negate_iife: true, // Negate IIFEs
        properties: true, // Optimize property access
        sequences: true, // Optimize sequences
        side_effects: false, // Assume no side effects for better optimization
        switches: true, // Optimize switches
        toplevel: true, // Optimize top-level code
      },
      format: {
        comments: false, // Remove all comments
        ascii_only: false, // Allow non-ASCII characters (smaller)
        beautify: false,
        ecma: 2015,
      },
      mangle: {
        safari10: true, // Fix Safari 10 issues
        properties: false, // Don't mangle properties
        toplevel: true, // Mangle top-level names
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue'],
  },
});

