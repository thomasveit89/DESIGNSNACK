export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  ssr: false,
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
  },
  routeRules: {
    '/laws-and-patterns': { prerender: true },
    '/laws-and-patterns/**': { prerender: true }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/laws-and-patterns',
        '/laws-and-patterns/privacy',
        '/laws-and-patterns/terms'
      ]
    }
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.prerender?.routes) {
        try {
          // Import Supabase client
          const { createClient } = await import('@supabase/supabase-js');

          // Get credentials
          const supabaseUrl = process.env.SUPABASE_URL;
          const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

          if (!supabaseUrl || !supabaseAnonKey) {
            console.warn('⚠️  Supabase credentials not found');
            return;
          }

          // Create client and fetch principles
          const supabase = createClient(supabaseUrl, supabaseAnonKey);
          const { data: principles, error } = await supabase
            .from('principles')
            .select('title');

          if (error) {
            console.error('❌ Failed to fetch principles:', error);
            return;
          }

          // Generate slugs
          const generateSlug = (title: string) => {
            return title
              .toLowerCase()
              .replace(/['']/g, '')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');
          };

          // Create route array
          const slugs = principles.map(p =>
            `/laws-and-patterns/${generateSlug(p.title)}`
          );

          // Add to prerender routes
          nitroConfig.prerender.routes.push(...slugs);

          console.log(`✅ Generated ${slugs.length} principle routes`);
        } catch (error) {
          console.error('❌ Error generating routes:', error);
        }
      }
    }
  },
  app: {
    head: {
      title: 'DESIGNSNACK - UX/UI Design für Fintech, Banking & Versicherung',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Erfahrene UX/UI Designer für Fintech-, Bank- und Versicherungsteams. Team-Integration oder flexibles Design-Abo. Schnell, kampferprobt, ohne Overhead.'
        },

        // iOS Safari status bar styling
        { name: 'theme-color', content: '#ffffff' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'author', content: 'DESIGNSNACK' },
        { name: 'keywords', content: 'UX Design, UI Design, Fintech Design, Banking UX, Versicherung Design, Design-Abo, Team Integration, Schweiz' },

        // Open Graph tags
        { property: 'og:title', content: 'DESIGNSNACK - UX/UI Design für Fintech, Banking & Versicherung' },
        { property: 'og:description', content: 'Erfahrene UX/UI Designer für Fintech-, Bank- und Versicherungsteams. Team-Integration oder flexibles Design-Abo.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://designsnack.ch' },

        // Twitter Card tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'DESIGNSNACK - UX/UI Design für Fintech, Banking & Versicherung' },
        { name: 'twitter:description', content: 'Erfahrene UX/UI Designer für Fintech-, Bank- und Versicherungsteams. Team-Integration oder flexibles Design-Abo.' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-V3N7VQ35VG',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V3N7VQ35VG');
          `
        }
      ]
    }
  }
})
