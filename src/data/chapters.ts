export type Chapter = {
  id: number;
  volume: string;
  volume_order: number;
  chapter_num: number;
  title: string;
  subtitle: string;
  language: 'Python' | 'JavaScript' | 'HTML/CSS' | 'React' | 'SQL' | 'General';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  panels_count: number;
  read_time_min: number;
  cover_emoji: string;
  content_key: string;
};

export const CHAPTERS: Chapter[] = [
  { id: 1, volume: "Volume I — Hello, World!", volume_order: 1, chapter_num: 1, title: "Panggilan Sang Programmer", subtitle: "Petualangan dimulai: apa itu kode?", language: "General", difficulty: "Beginner", panels_count: 6, read_time_min: 5, cover_emoji: "⚔️", content_key: "ch01" },
  { id: 2, volume: "Volume I — Hello, World!", volume_order: 1, chapter_num: 2, title: "Mantra Pertama: print()", subtitle: "Mengucapkan salam ke dunia digital", language: "Python", difficulty: "Beginner", panels_count: 6, read_time_min: 6, cover_emoji: "✨", content_key: "ch02" },
  { id: 3, volume: "Volume I — Hello, World!", volume_order: 1, chapter_num: 3, title: "Ilmu Variabel & Tipe Data", subtitle: "Menampung kekuatan dalam sebuah nama", language: "Python", difficulty: "Beginner", panels_count: 7, read_time_min: 8, cover_emoji: "📦", content_key: "ch03" },
  { id: 4, volume: "Volume I — Hello, World!", volume_order: 1, chapter_num: 4, title: "Percabangan: Jalan Pilihan", subtitle: "Ketika kode harus mengambil keputusan", language: "Python", difficulty: "Beginner", panels_count: 6, read_time_min: 7, cover_emoji: "🔀", content_key: "ch04" },
  { id: 5, volume: "Volume I — Hello, World!", volume_order: 1, chapter_num: 5, title: "Perulangan: Ritual Berulang", subtitle: "for, while, dan seni mengulang", language: "Python", difficulty: "Beginner", panels_count: 7, read_time_min: 9, cover_emoji: "🔁", content_key: "ch05" },
  { id: 6, volume: "Volume II — Kekuatan Struktur", volume_order: 2, chapter_num: 6, title: "Fungsi: Membentuk Jurus Sendiri", subtitle: "Bungkus logika, panggil kapan saja", language: "Python", difficulty: "Intermediate", panels_count: 7, read_time_min: 10, cover_emoji: "🥋", content_key: "ch06" },
  { id: 7, volume: "Volume II — Kekuatan Struktur", volume_order: 2, chapter_num: 7, title: "List, Dict, & Set", subtitle: "Gudang penyimpan senjata data", language: "Python", difficulty: "Intermediate", panels_count: 8, read_time_min: 11, cover_emoji: "🎒", content_key: "ch07" },
  { id: 8, volume: "Volume II — Kekuatan Struktur", volume_order: 2, chapter_num: 8, title: "Jurus OOP: Kelas & Objek", subtitle: "Merancang cetakan pahlawan sendiri", language: "Python", difficulty: "Intermediate", panels_count: 8, read_time_min: 13, cover_emoji: "🏯", content_key: "ch08" },
  { id: 9, volume: "Volume III — Sisi Klien: Web", volume_order: 3, chapter_num: 9, title: "HTML: Kerangka Dunia Web", subtitle: "Menyusun tulang punggung halaman", language: "HTML/CSS", difficulty: "Beginner", panels_count: 6, read_time_min: 7, cover_emoji: "🧱", content_key: "ch09" },
  { id: 10, volume: "Volume III — Sisi Klien: Web", volume_order: 3, chapter_num: 10, title: "CSS: Seni Menghias Ksatria", subtitle: "Warna, layout, dan animasi", language: "HTML/CSS", difficulty: "Beginner", panels_count: 7, read_time_min: 9, cover_emoji: "🎨", content_key: "ch10" },
  { id: 11, volume: "Volume III — Sisi Klien: Web", volume_order: 3, chapter_num: 11, title: "JavaScript: Nafas Kehidupan", subtitle: "Membuat halaman ikut bergerak", language: "JavaScript", difficulty: "Intermediate", panels_count: 8, read_time_min: 12, cover_emoji: "⚡", content_key: "ch11" },
  { id: 12, volume: "Volume III — Sisi Klien: Web", volume_order: 3, chapter_num: 12, title: "DOM: Sang Peta Halaman", subtitle: "Memanipulasi elemen dengan tangan digital", language: "JavaScript", difficulty: "Intermediate", panels_count: 7, read_time_min: 10, cover_emoji: "🗺️", content_key: "ch12" },
  { id: 13, volume: "Volume IV — Framework Legenda", volume_order: 4, chapter_num: 13, title: "React: Merajut Komponen", subtitle: "Dari fungsi kecil ke UI raksasa", language: "React", difficulty: "Advanced", panels_count: 8, read_time_min: 14, cover_emoji: "⚛️", content_key: "ch13" },
  { id: 14, volume: "Volume IV — Framework Legenda", volume_order: 4, chapter_num: 14, title: "State & Hooks", subtitle: "Nadi yang membuat komponen hidup", language: "React", difficulty: "Advanced", panels_count: 8, read_time_min: 15, cover_emoji: "🪝", content_key: "ch14" },
  { id: 15, volume: "Volume V — Sisi Server & Data", volume_order: 5, chapter_num: 15, title: "SQL: Bahasa Sang Arsip", subtitle: "Menanyakan rahasia pada database", language: "SQL", difficulty: "Intermediate", panels_count: 7, read_time_min: 11, cover_emoji: "🗄️", content_key: "ch15" },
  { id: 16, volume: "Volume V — Sisi Server & Data", volume_order: 5, chapter_num: 16, title: "REST API: Utusan Antar Kerajaan", subtitle: "GET, POST, PUT, DELETE — kontrak dunia web", language: "General", difficulty: "Advanced", panels_count: 7, read_time_min: 12, cover_emoji: "📡", content_key: "ch16" },
  { id: 17, volume: "Volume VI — Ilmu Tingkat Dewa", volume_order: 6, chapter_num: 17, title: "Async & Concurrency", subtitle: "Menari dengan waktu: promise, await, event loop", language: "JavaScript", difficulty: "Expert", panels_count: 8, read_time_min: 16, cover_emoji: "🌀", content_key: "ch17" },
  { id: 18, volume: "Volume VI — Ilmu Tingkat Dewa", volume_order: 6, chapter_num: 18, title: "Struktur Data & Algoritma", subtitle: "Otak sejati sang programmer", language: "General", difficulty: "Expert", panels_count: 9, read_time_min: 18, cover_emoji: "🧠", content_key: "ch18" },
  { id: 19, volume: "Volume VI — Ilmu Tingkat Dewa", volume_order: 6, chapter_num: 19, title: "System Design", subtitle: "Merancang kastel yang skalabel", language: "General", difficulty: "Expert", panels_count: 8, read_time_min: 17, cover_emoji: "🏰", content_key: "ch19" },
  { id: 20, volume: "Volume VI — Ilmu Tingkat Dewa", volume_order: 6, chapter_num: 20, title: "Ujian Akhir: Sang Master Coder", subtitle: "Menghadapi bug legendaris terakhir", language: "General", difficulty: "Expert", panels_count: 9, read_time_min: 20, cover_emoji: "👑", content_key: "ch20" }
];
