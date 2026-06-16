import { define } from '../utils.ts';
import { NavBar } from '@/components/NavBar.tsx';

export default define.layout(function Layout({ Component }) {
  return (
    <div 
      id='highestLevelDiv' 
      class='min-h-screen flex flex-col'
      style={{
        background: 'linear-gradient(135deg, #2d2a2e 0%, #ab9df2 50%, #ff6188 100%)'
      }}
    >
      {/* 1. Global Navbar visible on every page */}
      <NavBar />

      {/* 2. Page Content injected here */}
      <main class='grow px-4 py-8 mx-auto w-full'>
        <Component />
      </main>

      {/* 3. Global Footer (Optional - placeholder for now) */}
      <footer class="p-4 text-sm text-white bg-transparent flex flex-row items-center justify-center gap-3">
        <span>© {new Date().getFullYear()} Michael Lugo</span>
        <img 
          src="/deno-logo.png" 
          alt="Deno Logo" 
          class="w-18 h-18 object-contain" 
        />
      </footer>
    </div>
  );
});
