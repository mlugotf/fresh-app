import { useSignal } from '@preact/signals';

export default function FloatingCounter() {

  /**
   * Variable instantiation section. Get you datas together
   */
  const count = useSignal(0);

  /**
   * function declaration section. Get your actions together
   */

  const addValue = () => {
    count.value++
  }

  const subtractValue = () => {
    count.value--
  }

  return (
    <div class='bg-transparent text-white p-4 rounded-xl shadow-2xl border border-gray-700 flex flex-col items-center gap-2 w-40'>
      <p class='text-xs text-gray-400 font-semibold uppercase tracking-wider'>
        Signal Counter
      </p>
      <span {...count.value >= 0 ? {class:'text-3xl font-bold text-green-400'} : {class:'text-3xl font-bold text-red-400'}}>
        {count}
      </span>
      <button
        type='submit'
        onClick={() => addValue()}
        class='w-full bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-1 px-3 rounded transition-colors text-sm'
      >
        Increment
      </button>
      <button
        type='submit'
        onClick={() => subtractValue()}
        class='w-full bg-red-400 hover:bg-green-600 text-gray-900 font-bold py-1 px-3 rounded transition-colors text-sm'
      >
        Decrement
      </button>
    </div>
  );
}
