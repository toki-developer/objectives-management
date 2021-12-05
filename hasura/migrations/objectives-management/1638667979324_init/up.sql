SET check_function_bodies = false;
CREATE FUNCTION public.handle_new_user() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
begin
  insert into public.users (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$;
CREATE TABLE public.objective_items (
    id uuid DEFAULT extensions.uuid_generate_v1() NOT NULL,
    objective_id uuid NOT NULL,
    user_id uuid DEFAULT auth.uid() NOT NULL,
    title text NOT NULL,
    success_num integer DEFAULT 0,
    failure_num integer DEFAULT 0,
    finish_flg integer DEFAULT 0,
    evaluation_type integer DEFAULT 0 NOT NULL,
    items_type integer NOT NULL
);
CREATE TABLE public.objectives (
    id uuid DEFAULT extensions.uuid_generate_v1() NOT NULL,
    user_id uuid DEFAULT auth.uid() NOT NULL,
    title text NOT NULL,
    sort_order integer DEFAULT 0,
    finish_flg integer DEFAULT 0,
    delete_flg integer DEFAULT 0
);
CREATE TABLE public.users (
    id uuid NOT NULL,
    full_name text,
    avatar_url text
);
ALTER TABLE ONLY public.objective_items
    ADD CONSTRAINT objective_items_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.objectives
    ADD CONSTRAINT objectives_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.objective_items
    ADD CONSTRAINT objective_items_objective_id_fkey FOREIGN KEY (objective_id) REFERENCES public.objectives(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.objective_items
    ADD CONSTRAINT objective_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
ALTER TABLE ONLY public.objectives
    ADD CONSTRAINT objectives_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id);
CREATE POLICY "Can update own objectives data." ON public.objectives FOR UPDATE USING ((auth.uid() = user_id));
CREATE POLICY "Can update own user data." ON public.users FOR UPDATE USING ((auth.uid() = id));
CREATE POLICY "Can view own objectives data." ON public.objectives FOR SELECT USING ((auth.uid() = user_id));
CREATE POLICY "Can view own user data." ON public.users FOR SELECT USING ((auth.uid() = id));
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
