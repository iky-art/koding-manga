import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ContinueReading from "./components/ContinueReading";
import StatsGrid from "./components/StatsGrid";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-md space-y-6 p-4">

        <Header username="Risky" />

        <SearchBar />

        <ContinueReading />

        <section>
          <h2 className="mb-3 text-xl font-bold">
            Statistik
          </h2>

          <StatsGrid />
        </section>

      </div>
    </main>
  );
}
