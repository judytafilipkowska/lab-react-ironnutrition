import { useState } from "react";
import { Input } from "antd";

function Search({ foundFood }) {

    const [search, setSearch] = useState("");
    const handleSearch = (event) => {
        setSearch(event.target.value);
        foundFood(event.target.value);
    }
    return (
        <div>
            <form>
                <label>Search:</label>
                <Input type="text" value={search} onChange={handleSearch} />
            </form>
        </div>
    );
}

export default Search;