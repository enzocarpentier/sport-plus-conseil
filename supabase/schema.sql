-- Schéma SQL pour la base de données Supabase de Sport Plus Conseil
-- À exécuter dans le Supabase SQL Editor de votre projet

-- 1. Table des métadonnées et contenus du dossier
CREATE TABLE IF NOT EXISTS dossier_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_key VARCHAR(50) UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  updated_by TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Table des commentaires et annotations des étudiants
CREATE TABLE IF NOT EXISTS dossier_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name VARCHAR(100) NOT NULL,
  page_number INT NOT NULL,
  comment_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Activation de Row Level Security (RLS)
ALTER TABLE dossier_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE dossier_comments ENABLE ROW LEVEL SECURITY;

-- 4. Politiques d'accès en lecture publique (pour l'affichage en ligne)
CREATE POLICY "Lecture publique des sections" 
  ON dossier_sections FOR SELECT 
  TO anon, authenticated 
  USING (true);

CREATE POLICY "Lecture publique des commentaires" 
  ON dossier_comments FOR SELECT 
  TO anon, authenticated 
  USING (true);

-- 5. Politiques d'insertion et modification pour les utilisateurs connectés ou autorisés
CREATE POLICY "Modification autorisée des sections" 
  ON dossier_sections FOR ALL 
  TO anon, authenticated 
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Insertion de commentaires autorisée" 
  ON dossier_comments FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);
