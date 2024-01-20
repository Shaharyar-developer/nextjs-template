import { ModeToggle } from "@/components/mode-toggle";
export default function Home() {
  return (
    <>
      <main className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ModeToggle />
      </main>
    </>
  );
}
