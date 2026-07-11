export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-xl bg-white p-4 shadow">
        <h3 className="font-bold">📚 Bab</h3>
        <p>20</p>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <h3 className="font-bold">⭐ Level</h3>
        <p>1</p>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <h3 className="font-bold">📈 Progress</h3>
        <p>0%</p>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <h3 className="font-bold">⏱️ Jam</h3>
        <p>0h</p>
      </div>
    </div>
  );
}
