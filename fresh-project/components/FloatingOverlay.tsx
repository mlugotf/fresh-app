import FloatingCounter from '../islands/FloatingCounter.tsx';

export default function FloatingOverlay() {
  return (
    <div class='fixed bottom-4 left-4 z-50 pointer-events-auto'>
      {/* You can add static decorations, badges, or text here */}
      <FloatingCounter />
    </div>
  );
}
