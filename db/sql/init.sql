-- user table
create table users (
  id uuid references auth.users not null primary key,
  full_name text,
  avatar_url text
);
alter table users enable row level security;
create policy "Can view own user data." on users for select using (auth.uid() = id);
create policy "Can update own user data." on users for update using (auth.uid() = id);

-- inserts a row into public.users
create function public.handle_new_user()
  returns trigger as $$
begin
  insert into public.users (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- objectives table

create table objectives (
  id uuid default uuid_generate_v1() primary key,
  user_id uuid default auth.uid() references public.users not null,
  title text,
  sort_order int default 0,
  finish_flg int default 0,
  delete_flg int default 0,
);
-- alter table objectives enable row level security;
-- create policy "Can view own objectives data." on objectives for select using (auth.uid() = user_id);
-- create policy "Can update own objectives data." on objectives for update using (auth.uid() = user_id);

create table objective_items (
  id uuid default uuid_generate_v1() primary key,
  objective_id uuid references public.objectives ON DELETE CASCADE not null,
  user_id uuid default auth.uid() references public.users not null,
  title text,
  success_num int default 0,
  failure_num int default 0,
  finish_flg int default 0,
  evaluation_type int default 0, --0.no, 1.num, 2.probability
  items_type int not null -- 1.purpose, 2.action, 3.evaluation
);
-- alter table objectives enable row level security;
-- create policy "Can view own objectives data." on objectives for select using (auth.uid() = user_id);
-- create policy "Can update own objectives data." on objectives for update using (auth.uid() = user_id);