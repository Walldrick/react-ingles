import "../styles/general.css"
import PagHome from "../pages/PagHome.jsx";


function App() {
    return (
        <div id="app" className="relative h-screen p-2 gap-2">
            <main style={{gridArea: 'main'}} className="rounded-lg bg-zinc-800">
                <PagHome/>
            </main>
            <footer style={{gridArea: 'footer'}} className="rounded-lg bg-zinc-800 min-h-16 flex flex-wrap p-2 gap-10">
                <div>
                    <h1>
                        Trabajo Realizado por: <br/>
                        WALLDRICK WILLOUGHBY MARTINEZ
                    </h1>
                </div>
                <div>
                    <h2>Trabajo Ingles Blog</h2>
                    <h3>walldrick.willoguhby@cecar.edu.co</h3>
                </div>
                <div>
                    <h1>
                        CECAR-corporacion universitaria del caribe
                    </h1>
                    <h2>
                        Programa: Ingenieria En Sistemas
                    </h2>
                </div>
                <div>
                    <h1>
                        Profesor: <br/>
                        Moises Villazon Terrero
                    </h1>
                </div>
                <div>
                    <h1>
                        TheSparkye <br/>
                        @2024
                    </h1>
                </div>
            </footer>
        </div>
    )
}

export default App