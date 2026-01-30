export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tailwind CSS Test Page
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Kompletní přehled Tailwind utility tříd
          </p>
        </header>

        {/* Colors Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Barvy
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="h-20 bg-red-500 rounded-lg"></div>
            <div className="h-20 bg-blue-500 rounded-lg"></div>
            <div className="h-20 bg-green-500 rounded-lg"></div>
            <div className="h-20 bg-yellow-500 rounded-lg"></div>
            <div className="h-20 bg-purple-500 rounded-lg"></div>
            <div className="h-20 bg-pink-500 rounded-lg"></div>
            <div className="h-20 bg-indigo-500 rounded-lg"></div>
            <div className="h-20 bg-teal-500 rounded-lg"></div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Typografie
          </h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Heading 1 - Bold
            </h1>
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200">
              Heading 2 - Semibold
            </h2>
            <h3 className="text-2xl font-medium text-slate-700 dark:text-slate-300">
              Heading 3 - Medium
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Normální text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Malý text - Sed do eiusmod tempor incididunt ut labore.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600">
              Velmi malý text - Et dolore magna aliqua.
            </p>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Tlačítka
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Primary
            </button>
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              Success
            </button>
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              Danger
            </button>
            <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              Outline
            </button>
            <button className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
              Secondary
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
              Gradient
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Karty
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-md">
              <h3 className="text-xl font-bold mb-2">Karta 1</h3>
              <p className="text-blue-100">Gradient pozadí s textem</p>
            </div>
            <div className="border-2 border-slate-300 dark:border-slate-600 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Karta 2
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Karta s border a hover efektem
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Karta 3
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Jednoduchá karta s pozadím
              </p>
            </div>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Spacing & Layout
          </h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="p-4 bg-blue-200 dark:bg-blue-900 rounded">p-4</div>
              <div className="px-6 py-2 bg-green-200 dark:bg-green-900 rounded">
                px-6 py-2
              </div>
              <div className="m-4 bg-red-200 dark:bg-red-900 rounded">m-4</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-200 dark:bg-purple-900 p-4 rounded text-center">
                Col 1
              </div>
              <div className="bg-purple-200 dark:bg-purple-900 p-4 rounded text-center">
                Col 2
              </div>
              <div className="bg-purple-200 dark:bg-purple-900 p-4 rounded text-center">
                Col 3
              </div>
            </div>
          </div>
        </section>

        {/* Shadows & Effects */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Stíny & Efekty
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
              shadow-sm
            </div>
            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md">
              shadow-md
            </div>
            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-lg">
              shadow-lg
            </div>
            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-xl">
              shadow-xl
            </div>
          </div>
        </section>

        {/* Borders & Radius */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Ohraničení & Zaoblení
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border-2 border-blue-500 rounded-none">
              rounded-none
            </div>
            <div className="p-6 border-2 border-green-500 rounded-md">
              rounded-md
            </div>
            <div className="p-6 border-2 border-purple-500 rounded-lg">
              rounded-lg
            </div>
            <div className="p-6 border-2 border-pink-500 rounded-full">
              rounded-full
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Blue
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
              Green
            </span>
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
              Red
            </span>
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
              Yellow
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
              Purple
            </span>
          </div>
        </section>

        {/* Responsive Design */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Responzivní Design
          </h2>
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-blue-900 dark:text-blue-100">
              Tento text se mění podle velikosti obrazovky (sm, md, lg, xl)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
