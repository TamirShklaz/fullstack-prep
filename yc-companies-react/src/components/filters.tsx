import BatchSelect from "./batch-select.tsx";

type Props = {};

function Filters({}: Props) {
    return (
        <div className={"bg-[#fdfdf8] min-w-48 rounded-lg mr-4 h-fit pb-20 pt-4 flex flex-col items-center"}>
            <BatchSelect/>
        </div>
    );
}

export default Filters;
