import {useState} from "react";
import {batches} from "../scripts/generate-batches.ts";
import {useFilterStore} from "../hooks/filter-store.tsx";

type Props = {};

function BatchSelect({}: Props) {

    const filters = useFilterStore()

    const [selectedBatch, setSelectedBatch] = useState<string>(filters.batch)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setSelectedBatch(e.target.value)
        filters.onBatchChange(e.target.value)
    }

    return (
        <label>
            Batch
            <select className={"ml-2 p-4"} name={"batchSelect"} value={selectedBatch} onChange={handleChange}>
                <option value={"all"}>All</option>
                {batches.map(b => (
                    <option key={b} value={b}>{b}</option>
                ))}
            </select>
        </label>
    );
}

export default BatchSelect;
