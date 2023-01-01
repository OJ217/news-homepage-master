export default function HeroArticleCard({ thumbnail_mobile, thumbnail_desktop, title, description }) {
    return (
        <div>
            <a href="/">
                <img src={thumbnail_mobile} alt="thumbnail_mobile" className="lg:hidden" />
                <img src={thumbnail_desktop} alt="thumbnail_desktop" className="hidden lg:block h-[300px] object-cover object-center" />
            </a>
            <div className="space-y-6 mt-7 lg:space-y-0 lg:grid lg:grid-cols-[2fr_3fr] gap-8">
                <a href="/">
                    <h1 className="text-dark-blue text-[44px] lg:text-5xl font-extrabold leading-[48px] lg:leading-[60px]">{title}</h1>
                </a>
                <div className="space-y-7">
                    <a href="/">
                        <p className="text-dark-grayish-blue leading-7">{description}</p>
                    </a>
                    <a href="/">
                        <button className="py-5 px-8 bg-soft-red color-transition hover:bg-dark-blue uppercase text-off-white font-bold tracking-[4px]">
                            Read more
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
