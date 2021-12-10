import Header from "./Components/Header";
import Main from "./Components/Main";
import Search from "./Components/Search/Search";
import NewListing from "./Components/NewListing";
import SearchResult from "./Components/Search/SearchResult"

const Home = ()=>{
    return(
        <div className="container-fluid theBody">
            <Header/>
            <main>
                <Main/>
                <Search/>
                <NewListing/>
            </main>

        </div>
    )
}

export default Home;