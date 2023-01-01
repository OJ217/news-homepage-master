export default function ArticleCard({ thumbnail, index, title, description }) {
    return (
        <div className="grid grid-cols-[8fr_17fr] gap-6">
            <img src={thumbnail} alt="thumbnail" className="!aspect-[5/6] object-center object-cover w-full" />
            <div className="space-y-2">
                <h2 className="font-extrabold text-2xl text-grayish-blue">{index >= 10 ? index : `0${index}`}</h2>
                <a href="/">
                    <h3 className="font-extrabold text-lg text-dark-blue color-transition hover:text-soft-red">{title}</h3>
                </a>
                <a href="/">
                    <p className="text-dark-grayish-blue">{description}</p>
                </a>
            </div>
        </div>
    )
}
