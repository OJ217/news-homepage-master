export default function NewArticlesCard({ new_articles_data }) {
    return (
        <div className="bg-dark-blue px-6 py-7 space-y-11">
            <h2 className="text-soft-orange text-2xl font-extrabold">New</h2>
            <div>
                {new_articles_data.map(({ title, description }, index, array) => (
                    <div key={index}>
                        <div className="space-y-4">
                            <a href="/">
                                <h3 className="font-extrabold text-lg text-off-white color-transition hover:text-soft-orange">
                                    {title}
                                </h3>
                            </a>
                            <a href="/">
                                <p className="text-grayish-blue">
                                    {description}
                                </p>
                            </a>
                        </div>
                        {index + 1 < array.length && (
                            <hr className="border-[0.5px] border-solid border-grayish-blue my-9" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
