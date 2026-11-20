# Deutschzeit — Belajar Bahasa Jerman A2

Aplikasi belajar bahasa Jerman A2 berbasis React + Vite. Fitur: bank kosakata Nomen/Verben, flashcards, audio pelafalan, latihan Hören dan Sprechen, serta progress.

## Setup lokal dan akun cloud

1. Buat project di [Supabase](https://supabase.com/).
2. Salin `.env.example` menjadi `.env.local`, lalu isi `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` dari Project Settings → API.
3. Jalankan isi `supabase/schema.sql` melalui Supabase Dashboard → SQL Editor.
4. Jalankan `npm install`, lalu `npm run dev`.

Pengguna dapat mendaftar/masuk dengan email dan password. Data kosakata, kata yang dikuasai, dan bookmark tersimpan pada tabel `learning_data`. Row Level Security memastikan setiap akun hanya dapat mengakses data miliknya sendiri.

Untuk hosting, masukkan dua environment variables tersebut pada pengaturan deployment (misalnya Vercel atau Netlify). Jangan pernah memasukkan service-role key ke frontend.

## Catatan

- Konfirmasi email dapat diatur melalui Authentication → Providers/Email di Supabase.
- Speech synthesis dan speech recognition bergantung pada dukungan browser/perangkat.
- Layout memiliki breakpoint untuk desktop, tablet, dan ponsel.
- 64 kartu awal adalah set belajar awal, bukan klaim bahwa seluruh kosakata buku sudah diekstrak lengkap.
