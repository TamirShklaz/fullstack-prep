type Props = {
    className?: string
    name: string
    location: string
    description: string
    image: string
    tags: string[]
};

function CompanyListItem({className, name, tags, location, description, image}: Props) {
    return (
        <div className={"flex flex-row bg-[#fdfdf8] p-4 rounded-lg" + " " + className}>
            <div className={"flex w-20 shrink-0 grow-0 basis-20 items-center pr-4"}>
                <img className={"rounded-full"} src={image}/>
            </div>
            <div>
                <div>
                    <span className={"font-bold text-lg mr-2"}>
                        {name}
                    </span>
                    <span className={"text-gray-500 text-sm"}>{location}</span>
                </div>
                <p className={"mt-4"}>
                    {description}
                </p>
                <div className={"mt-2 flex flex-row space-x-2 flex-wrap items-center gap-y-2 justify-start"}>
                    {tags.map((tag, index) => (
                        <span className={"bg-[#e5e6dd] px-1 rounded-lg text-xs"} key={index}>{tag}</span>

                    ))}
                </div>
            </div>
        </div>
    );
}

CompanyListItem.Skeleton = function CompanyListItemSkeleton() {
    return (
        <div role={"status"} className={"h-[126px] w-full animate-pulse flex flex-row p-4"}>
            <div className={"mr-4"}>
                <div className={"bg-gray-200 w-[100px] h-[100px] rounded-full"}/>
            </div>
            <div className={"flex flex-col"}>
                <div className={"rounded-md bg-gray-300 w-48 h-4.5"}/>
                <p className={"mt-4"}>
                    <div className={"rounded-md bg-gray-300 w-64 h-3.5"}/>
                </p>
                <div className={"mt-2 flex flex-row space-x-2"}>
                    {Array.from({length: 3}).map(_ => (
                        <div className={"rounded-md bg-gray-300 w-20 h-2.5"}/>
                    ))}
                </div>
            </div>
        </div>)
}

export default CompanyListItem;
