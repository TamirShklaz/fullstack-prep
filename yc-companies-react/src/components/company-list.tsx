import {Company, Response} from "../types.ts";
import {fetcher} from "../App.tsx";
import CompanyListItem from "./company-list-item.tsx";
import useSWRInfinite from "swr/infinite";
import {useEffect, useRef} from "react";
import {useFilterStore} from "../hooks/filter-store.tsx";

type Props = {};


function CompanyList({}: Props) {
    const filters = useFilterStore()


    const {data, error, isLoading, size, setSize} = useSWRInfinite<Response>((index, previousPageData: Response) => {
        if (previousPageData && !previousPageData.nextPage) return null
        let pageIndex = index + 1
        if (filters.search) {
            pageIndex -= 1
        }
        const batchParam = filters.batch === "all" ? "" : `&batch=${filters.batch}`
        const searchString = `https://api.ycombinator.com/v0.1/companies?q=${filters.search}&page=${pageIndex}${batchParam}`
        console.log(searchString)
        return searchString
    }, fetcher)

    const observerTarget = useRef<HTMLDivElement>(null)
    const isEmpty = data?.[0].companies.length === 0;
    const isReachingEnd =
        isEmpty || (data && data[data.length - 1].companies.length < 25);

    const isLoadingMore = (size > 0 && data && typeof data[size - 1] === "undefined") && !isReachingEnd

    // const [isLoadingMore, setIsLoadingMore] = useState(false)


    const formatCompany = (company: Company) => {
        return {
            image: company.smallLogoUrl,
            name: company.name,
            location: company.regions[0],
            description: company.oneLiner,
            tags: [company.batch, ...company.tags]
        }
    }
    //
    useEffect(() => {
        console.log("Search filters", filters.search)
        if (filters.search === "") return
        // setSize(0)
    }, [filters.search]);

    useEffect(() => {


    }, [filters.batch]);


    useEffect(() => {
        console.log(observerTarget)
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMore()
            }

        }, {threshold: 1})
        if (observerTarget.current) {
            observer.observe(observerTarget.current)
        }
        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current)
            }
        }

    }, [observerTarget, isLoading]);

    const loadMore = async () => {
        console.log("LOADING MORE")
        // setIsLoadingMore(true)
        setSize(size => size + 1)
        // setIsLoadingMore(false)
    }

    if (error) return <div className={"bg-red-500"}>Error...</div>

    if (isLoading) return <div>
        {Array.from({length: 10}).map(_ => (
            <CompanyListItem.Skeleton/>
        ))}
    </div>


    return (
        <div className={""}>
            <div className={"h-full min-h-screen"}>
                {data?.map((pages) => {
                    return pages.companies.map((company, index) => (
                        <div key={index}>
                            <CompanyListItem className={""} key={index} {...formatCompany(company)}/>
                            <div className={"w-11/12 mx-auto border-[1px] border-gray-300"}/>
                        </div>
                    ))
                })
                }
            </div>

            {isLoadingMore && Array.from({length: 10}).map(_ => <CompanyListItem.Skeleton/>)}
            <button hidden={isReachingEnd} className={"px-4 py-2 bg-gray-500 text-white mt-4 rounded-2xl mb-10"}
                    onClick={() => loadMore()}>Load more
            </button>
            <div className={"w-full h-2 opacity-100"} ref={observerTarget}/>

        </div>
    );
}

export default CompanyList;
