import Header from "./Components/Header";
import SearchResult from "./Components/Search/SearchResult"

const Home = ()=>{
    return(
        <div className="container-fluid theBody">
            <Header/>
            <main>
                <SearchResult/>
            </main>

        </div>
    )
}

export default Home;