import { Animation } from "../animation";

export function Loading() {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-zinc-950">
      <Animation />
      <h1 className="mt-4 text-4xl font-bold text-zinc-50">Check-it</h1>
      <p className="text-zinc-100">Make your day simple.</p>
    </div>
  );
}
