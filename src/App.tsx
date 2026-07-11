import { CHAPTERS } from "./data/chapters";

export default function App() {
  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📖 Koding Manga</h1>
      <p>Belajar coding dari dasar hingga master.</p>

      <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
        {CHAPTERS.map((chapter) => (
          <div
            key={chapter.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "12px",
            }}
          >
            <h2>
              {chapter.cover_emoji} Bab {chapter.chapter_num}
            </h2>
            <h3>{chapter.title}</h3>
            <p>{chapter.subtitle}</p>
            <small>
              {chapter.language} • {chapter.difficulty} •{" "}
              {chapter.read_time_min} menit
            </small>
          </div>
        ))}
      </div>
    </main>
  );
}
