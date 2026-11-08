export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen p-8">
      {/* 
        bg-gray-900 : Applique un fond gris très foncé (#111827)
        min-h-screen : La hauteur minimum est égale à 100% de la hauteur de l'écran
        p-8 : Padding (espacement intérieur) de 2rem (32px) sur tous les côtés
      */}

      <h1 className="text-4xl font-bold text-white text-center mb-12">
        {/*
          text-4xl : Taille du texte extra large (36px)
          font-bold : Poids de police gras (700)
          text-white : Couleur du texte blanc (#ffffff)
          text-center : Aligne le texte au centre
          mb-12 : Margin-bottom (espacement extérieur en bas) de 3rem (48px)
        */}
        Tailwind CSS
      </h1>

      <div className="max-w-4xl mx-auto space-y-12">
        {/*
          max-w-4xl : Largeur maximale de 56rem (896px)
          mx-auto : Margin horizontale automatique (centre le conteneur)
          space-y-12 : Espacement vertical de 3rem (48px) entre les enfants directs
        */}

        {/* ========== EXEMPLE 1: CARTE SIMPLE ========== */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          {/*
            bg-white : Fond blanc (#ffffff)
            rounded-lg : Coins arrondis avec un rayon de 0.5rem (8px)
            p-6 : Padding de 1.5rem (24px) sur tous les côtés
            shadow-lg : Ombre portée grande pour donner de la profondeur
                        (0 10px 15px rgba(0, 0, 0, 0.1))
          */}

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {/*
              text-2xl : Taille du texte de 1.5rem (24px)
              font-bold : Poids de police gras (700)
              text-gray-800 : Couleur gris foncé (#1f2937)
              mb-4 : Margin-bottom de 1rem (16px)
            */}
            Ma Première Carte
          </h2>

          <p className="text-gray-600 mb-6">
            {/*
              text-gray-600 : Couleur gris moyen (#4b5563) pour le texte
              mb-6 : Margin-bottom de 1.5rem (24px)
            */}
            Ceci est un exemple simple avec Tailwind CSS.
          </p>

          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            {/*
              bg-blue-500 : Fond bleu (#3b82f6)
              text-white : Texte blanc
              px-6 : Padding horizontal (gauche et droite) de 1.5rem (24px)
              py-2 : Padding vertical (haut et bas) de 0.5rem (8px)
              rounded : Coins arrondis avec rayon de 0.25rem (4px)
              hover:bg-blue-600 : Au survol de la souris, le fond devient bleu foncé (#2563eb)
            */}
            Cliquez ici
          </button>
        </div>

        {/* ========== EXEMPLE 2: CARTE AVEC DÉGRADÉ ========== */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/*
            bg-white : Fond blanc
            rounded-lg : Coins arrondis de 0.5rem (8px)
            shadow-lg : Grande ombre portée
            overflow-hidden : Cache tout contenu qui déborde (important pour les coins arrondis)
          */}

          <div className="bg-primary h-48">
            {/*
              h-48 : Hauteur fixe de 12rem (192px)
              bg-gradient-to-r : Dégradé de couleur de gauche (from) à droite (to)
              from-blue-500 : Couleur de départ du dégradé : bleu (#3b82f6)
              to-purple-500 : Couleur d'arrivée du dégradé : violet (#a855f7)
            */}
          </div>

          <div className="p-6">
            {/*
              p-6 : Padding de 1.5rem (24px) sur tous les côtés
            */}

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {/*
                text-xl : Taille du texte de 1.25rem (20px)
                font-bold : Poids de police gras
                text-gray-800 : Couleur gris foncé
                mb-2 : Margin-bottom de 0.5rem (8px)
              */}
              Carte avec Dégradé
            </h2>

            <p className="text-gray-600">
              {/*
                text-gray-600 : Couleur gris moyen pour le paragraphe
              */}
              Cette carte montre comment utiliser les dégradés et l'espacement.
            </p>
          </div>
        </div>

        {/* ========== EXEMPLE 3: GRILLE DE CARTES ========== */}
        <div className="grid grid-cols-2 gap-4">
          {/*
            grid : Active le système de grille CSS Grid
            grid-cols-2 : Crée 2 colonnes de taille égale (50% chacune)
            gap-4 : Espacement de 1rem (16px) entre les éléments de la grille
          */}

          <div className="bg-green-500 text-white p-6 rounded-lg text-center">
            {/*
              bg-green-500 : Fond vert (#22c55e)
              text-white : Texte blanc
              p-6 : Padding de 1.5rem (24px) partout
              rounded-lg : Coins arrondis de 0.5rem (8px)
              text-center : Centre le texte horizontalement
            */}
            <h3 className="text-xl font-bold">
              {/*
                text-xl : Taille du texte de 1.25rem (20px)
                font-bold : Poids de police gras
              */}
              Carte 1
            </h3>
          </div>

          <div className="bg-red-500 text-white p-6 rounded-lg text-center">
            {/*
              bg-red-500 : Fond rouge (#ef4444)
              text-white : Texte blanc
              p-6 : Padding de 1.5rem (24px) partout
              rounded-lg : Coins arrondis de 0.5rem (8px)
              text-center : Centre le texte horizontalement
            */}
            <h3 className="text-xl font-bold">
              {/*
                text-xl : Taille du texte de 1.25rem (20px)
                font-bold : Poids de police gras
              */}
              Carte 2
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
