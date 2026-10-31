-- Additive only. Shared database: minisplitzip-subscribers.
-- Skip the ALTER when site already exists. Backfill is safe to re-run and does not delete rows.
-- This site writes site = 'thefaultcode.com'. Blank or missing values stay the minisplitzip domain.

ALTER TABLE subscribers ADD COLUMN site TEXT NOT NULL DEFAULT 'minisplitzip.com';

UPDATE subscribers SET site = 'minisplitzip.com' WHERE site IS NULL OR site = '';
