-- Jalankan sekali di Supabase Dashboard > SQL Editor.
-- Setiap akun hanya dapat membaca dan mengubah data belajarnya sendiri.
create table if not exists public.learning_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  words jsonb not null default '[]'::jsonb,
  known jsonb not null default '[]'::jsonb,
  saved jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.learning_data enable row level security;

drop policy if exists "Users can read their own learning data" on public.learning_data;
create policy "Users can read their own learning data"
  on public.learning_data for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own learning data" on public.learning_data;
create policy "Users can insert their own learning data"
  on public.learning_data for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own learning data" on public.learning_data;
create policy "Users can update their own learning data"
  on public.learning_data for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

grant select, insert, update on public.learning_data to authenticated;
