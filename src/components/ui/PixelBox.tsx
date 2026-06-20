export function PixelBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border-2 border-current px-4 py-1 font-pixel text-2xl uppercase leading-none">
      {children}
    </span>
  );
}
