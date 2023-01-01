// Hook
import { useState, useEffect } from "react"
// Components
import ArticleCard from "./components/ArticleCard"
import HeroArtilceCard from "./components/HeroArticleCard"
import NewArticlesCard from "./components/NewArticlesCard"
// Assets
import logo from "/assets/images/logo.svg"
import menu_icon from "/assets/images/icon-menu.svg"
import menu_icon_close from "/assets/images/icon-menu-close.svg"
import hero_mobile from "/assets/images/image-web-3-mobile.jpg"
import hero_desktop from "/assets/images/image-web-3-desktop.jpg"
import card_thumbnail_1 from "/assets/images/image-retro-pcs.jpg"
import card_thumbnail_2 from "/assets/images/image-top-laptops.jpg"
import card_thumbnail_3 from "/assets/images/image-gaming-growth.jpg"

const menus = ["Home", "New", "Popular", "Trending", "Categories"]

const hero_article_data = {
  thumbnail_mobile: hero_mobile,
  thumbnail_desktop: hero_desktop,
  title: "The Bright Future of Web 3.0?",
  description: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
}

const articles_data = [
  { thumbnail: card_thumbnail_1, title: "Reviving Retro PCs", description: "What happens when old PCs are given modern upgrades?" },
  { thumbnail: card_thumbnail_2, title: "Top 10 Laptops of 2022", description: "Our best picks for various needs and budgets." },
  { thumbnail: card_thumbnail_3, title: "The Growth of Gaming", description: "How the pandemic has sparked fresh opportunities." }
]

const new_articles_data = [
  { title: "Hydrogen VS Electric Cars", description: "Will hydrogen-fueled cars ever catch up to EVs?" },
  { title: "The Downsides of AI Artistry", description: "What are the possible adverse effects of on-demand AI image generation?" },
  { title: "Is VC Funding Drying Up?", description: "Private funding by VC firms is down 50% YOY. We take a look at what that means." }
]

function App() {
  const [menu_drawer, set_menu_drawer] = useState(false)

  useEffect(() => {
    if (menu_drawer) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "scroll");
  }, [menu_drawer])

  return (
    <>
      <main className="px-4 py-6 max-w-[475px] lg:px-8 lg:py-12 lg:max-w-[1110px] mx-auto bg-off-white">
        {/* Header and navigation */}
        <header className="flex items-center justify-between">
          <img src={logo} alt="logo" className="h-8" />
          <button onClick={() => set_menu_drawer(true)} type="button" className="lg:hidden">
            <img src={menu_icon} alt="menu_icon" />
          </button>
          <nav className="hidden lg:flex items-center gap-10">
            {menus.map((menu, index) => (
              <a key={index} href="/" className="text-dark-grayish-blue color-transition hover:text-soft-red">
                {menu}
              </a>
            ))}
          </nav>
        </header>

        <section className="space-y-16 mt-8 lg:grid lg:grid-cols-[2fr_1fr] lg:items-start lg:gap-8 lg:space-y-0 lg:mt-14">
          {/* Hero article section */}
          <HeroArtilceCard
            thumbnail_mobile={hero_article_data.thumbnail_mobile}
            thumbnail_desktop={hero_article_data.thumbnail_desktop}
            title={hero_article_data.title}
            description={hero_article_data.description}
          />

          {/* New articles section */}
          <NewArticlesCard
            new_articles_data={new_articles_data}
          />
        </section>

        {/* Horizontal article section */}
        <section className="space-y-8 mt-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {articles_data.map(({ thumbnail, title, description }, index) => (
            <ArticleCard
              key={index}
              index={index + 1}
              thumbnail={thumbnail}
              title={title}
              description={description} />
          ))}
        </section>
      </main>

      {/* Shadow overlay */}
      {menu_drawer && (
        <div className="fixed inset-0 bg-dark-blue bg-opacity-40 fade_in_animation lg:hidden"></div>
      )}

      {/* Drawer */}
      <aside className={`overflow-scroll fixed inset-y-0 right-0 left-[40%] ${menu_drawer ? "translate-x-0" : "translate-x-full"} bg-off-white transition-transform ease-in-out duration-300 lg:hidden`}>
        <button onClick={() => set_menu_drawer(false)} type="button">
          <img src={menu_icon_close} alt="menu_icon_close" className="absolute w-6 right-6 top-6 lg:right-12 lg:top-12" />
        </button>
        <div className="flex flex-col gap-8 px-6 pb-6 pt-[20vh]">
          {menus.map((menu, index) => (
            <a key={index} href="/" className="text-dark-blue text-xl color-transition hover:text-soft-red">
              {menu}
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}

export default App  