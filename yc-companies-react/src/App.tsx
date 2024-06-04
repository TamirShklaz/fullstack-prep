import './App.css'
import CompanyList from "./components/company-list.tsx";
import SearchBar from "./components/search-bar.tsx";
import Filters from "./components/filters.tsx";

// @ts-ignore
export const fetcher = (...args) => fetch(...args).then(res => res.json())


function App() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    return (
        <div className={"w-full min-h-screen bg-primaryBg flex flex-col items-center"}>
            <div className={"flex flex-col w-full max-w-[800px] p-4"}>
                <h1 className={"mt-20 text-3xl"}>Companies</h1>
                <div className={"mt-10"}>
                    <div className={"flex"}>
                        <Filters/>
                        <div>
                            <SearchBar className={"mb-4"}/>
                            <CompanyList/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default App
