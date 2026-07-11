type HeaderProps = {
  username: string;
};

export default function Header({ username }: HeaderProps) {
  return (
    <header className="rounded-3xl bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold">📖 Apollo Manga Academy</h1>
      <p className="mt-2">Halo, {username} 👋</p>
    </header>
  );
}
