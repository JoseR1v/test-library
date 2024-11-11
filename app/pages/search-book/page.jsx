import { faHome } from "@fortawesome/free-solid-svg-icons";
import Back from "../../components/molecules/BackHome";
import BookTable from "../../components/organisms/BookTable";

export default function SearchPage() {
    return (
        <div>
            <div>
                <Back route="/" icon={faHome}/>
            </div>
            <BookTable itemsPerPage={12}/>
        </div>
    );
}