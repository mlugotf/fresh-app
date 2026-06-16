/**
 * Purpose: Home Screen
 * 
 * Author: Michael Lugo
 */
import { Head } from 'fresh/runtime';
import { define } from '../utils.ts';
import { HeroCard } from '@/components/HeroCard.tsx';

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      
      {/* Only the unique content for the home page goes here */}
      <div class='w-full mx-auto flex flex-col items-center justify-center px-4'>
        <HeroCard></HeroCard>
      </div>
    </>
  );
});
