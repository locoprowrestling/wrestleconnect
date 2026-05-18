# Supabase Setup Checklist

Follow these steps to connect WrestleConnect to your Supabase project.

## 1. Create the `page_content` table
Run the following SQL in Supabase (SQL Editor):

```sql
create table if not exists page_content (
  slug text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);
```

## 2. Insert starter JSON documents
Use the ready-made seed script provided in `supabase/sql/page_content_seed.sql`.

**How to run it:**
1. In the Supabase dashboard, click **SQL Editor**.
2. Open `supabase/sql/page_content_seed.sql` in your editor and copy the full contents.
3. Paste the script into the SQL editor.
4. Click **Run**. The four rows (`home`, `wrestlers`, `promotions`, `schools`) will be inserted or updated automatically.

## 3. Configure Row Level Security
Enable RLS on `page_content` and add a simple policy so anyone can read while the service role can write:

```sql
alter table page_content enable row level security;

create policy "Public read" on page_content
  for select using (true);

create policy "Admins manage content" on page_content
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');
```

## 4. Future Tables
As you build wrestlers, promotions, events, etc., create separate tables (e.g., `wrestlers`, `promotions`, `events`, `schools`, `recommendations`). Start with the schema defined in `docs/product_spec.md` under “Data Model”.

## 5. Verify `.env.local`
Make sure the local environment contains:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```
Restart `npm run dev` after updates.

Once rows exist in `page_content`, the Next.js pages will automatically load the remote JSON (validated with Zod) instead of the local mocks.
