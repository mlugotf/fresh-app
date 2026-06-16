/**
 * Purpose: Display our work history using a carousel and cards
 * 
 * Author: Michael Lugo
 */
import WorkHistoryCards from "@/components/WorkHistoryCard.tsx";

const cards = [
  {
    cardName: 'Janus Research Group',
    cardDescription: 'Software Developer I',
    cardImg: 'https://media.istockphoto.com/id/1917077246/photo/funny-pets-banner-cat-and-border-collie-dog-hanging-its-paws-over-a-white-blank-isolated-on.jpg?s=1024x1024&w=is&k=20&c=otWG5IjBxjx1CNm7cFRz_qa7RkjkGMdwxdzuVnXoAxo='
  },
  {
    cardName: 'NCR Voyix',
    cardDescription: 'Software Developer I',
    cardImg: 'https://media.istockphoto.com/id/623368750/photo/sacred-birma-cat-in-interior.jpg?s=1024x1024&w=is&k=20&c=TObTXkmdKZnozCNypyxyqEZ4uMFHUN07EsU4HQ-7zYc='
  }
]
export default function WorkHistoryPage() {
  return (
    <div id='workHistoryTopLevel'>
      <WorkHistoryCards historyCards={cards} />
    </div>
  );
}
