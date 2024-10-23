import { Link } from "react-router-dom";
interface DetailRendering {
  RenderDetail : boolean;
}

export const PackagesTable: React.FC<DetailRendering> = ({RenderDetail}) => {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl block md:grid grid-cols-3 gap-4">
        {/* Start-up Plan */}
        <div className="bg-Beta shadow-lg rounded-lg p-8 border-Alpha/20 mb-6 md:mb-0">
          <div className="py-4">
            <h4 className="font-semibold text-center">Start-up</h4>
          </div>
          <div className="py-6">
            <p className="leading-7">un pack introductif pour les petites entreprises qui cherchent à établir une présence en ligne.</p>
          </div>
          <div className="flex justify-center items-center py-6">
            <ul className="text-sm text-left [&>*]:my-4 capitalize">
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                Site Web basique.
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                Branding minimal.
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                3 designs de choix
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                8 images
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                30 secondes de vidéo
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                configuration des profiles sociaux
              </li>
            </ul>
          </div>
          <div className="py-6 text-center">
            <button className="bg-Alpha hover:bg-cyan-600 text-Dark font-semibold py-2 px-4 rounded">
              Choose Package
            </button>
            {RenderDetail && <p className="text-slate-400 mt-6">More details</p>}
          </div>
        </div>

        {/* Standard Plan */}
        <div className="bg-Beta shadow-lg rounded-lg border-Alpha p-8 relative mb-6 md:mb-0">
          <div className="bg-Alpha py-2 rounded-t-lg absolute inset-x-0 top-0">
            <p className="text-xs text-Dark text-center">Recommended</p>
          </div>
          <div className="py-4">
            <h4 className="font-semibold text-center">Standard</h4>
          </div>
          <div className="py-6">
            <p className="leading-7">Conçu pour les entreprises qui ont besoin d'une présence en ligne plus solide et plus professionnelle.</p>
          </div>
          <div className="flex justify-center items-center py-6">
            <ul className="text-sm text-left [&>*]:my-4 capitalize">
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                Site Web entreprises
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                Branding standard
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                6 designs de choix
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                15 images
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                90 secondes de vidéo
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                analyses et engagement des plateformes
              </li>
            </ul>
          </div>
          <div className="py-6 text-center">
            <button className="bg-Alpha hover:bg-cyan-600 text-Dark font-semibold py-2 px-4 rounded">
              Choose Package
            </button>
            {RenderDetail && <p className="text-slate-400 mt-6">More details</p>}
          </div>
        </div>

        {/* Advanced Plan */}
        <div className="bg-Beta shadow-lg rounded-lg p-8 border-Alpha/20 mb-6 md:mb-0">
          <div className="py-4">
            <h4 className="font-semibold text-center">Advanced</h4>
          </div>
          <div className="py-6">
            <p className="leading-7">Un plan pour les entreprises à la recherche d'une présence en ligne sophistiquée et dynamique.</p>
          </div>
          <div className="flex justify-center items-center py-6">
            <ul className="text-sm text-left [&>*]:my-4 capitalize">
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                Application Web dynamique
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                Branding complete
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                8 designs de choix
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                25 images
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                120 secondes de vidéo
              </li>
              <li>
                <span className="text-green-500 mr-2">&#x2713;</span>
                engagement communautaire avec publicités ciblées
              </li>
            </ul>
          </div>
          <div className="py-6 text-center">
            <button className="bg-Alpha hover:bg-cyan-600 text-Dark font-semibold py-2 px-4 rounded">
              Choose Package
            </button>
            {RenderDetail && <p className="text-slate-400 mt-6">More details</p>}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export function CustomPack() {
  return(
    <article className="bg-Beta w-full ">
      <section className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12 py-12">
        <div className="w-full md:w-1/2 ">
          <h2 className="leading-none">Vous souhaitez personnaliser votre propre plan ?</h2>
          <p className="mt-4 text-slate-400">contactez-nous afin de définir vos propres critères</p>
          <ul className="mt-8 flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <span className="text-green-500">&#x2713;</span>
              <p>Development web</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">&#x2713;</span>
              <p>Design graphique</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">&#x2713;</span>
              <p>Production Media Visuel</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">&#x2713;</span>
              <p>Management des reseaux sociaux</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center bg-slate-100 p-8 rounded-2xl">
          <span className="text-Dark/50 py-2">choisissez ce dont vous avez besoin</span>
          <h3 className="text-Dark py-6">Custom Pack</h3>
          <Link to='/CustomPage'>
            <button className="bg-Alpha hover:bg-cyan-600 text-Dark font-semibold py-2 px-4 rounded">
                Créer un plan
            </button>          
          </Link>

          {/* <span className="text-Dark/50 mt-4">TVA</span> */}
        </div>
      </section>
    </article>
  );
};
