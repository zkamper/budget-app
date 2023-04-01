import AddEntry from "./entries/AddEntry"
import EntriesDisplay from "./entries/EntriesDisplay";
import '../styles/Entry.css'

function Entry(props) {

    const { data, setData } = props;
    return (
        <div className="entries">
            <h1>Entries</h1>
            <AddEntry setData={setData} data={data} />
            <EntriesDisplay data={data} setData={setData} />
        </div>)
}

export default Entry