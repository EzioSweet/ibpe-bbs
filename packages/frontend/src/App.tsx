import {trpc} from "./trpc";
import {Route, Router} from "wouter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {proxy} from "valtio";
import {useProxy} from "valtio/react/utils";
import {MantineProvider} from '@mantine/core'
import Navigation from "./components/Navigation";
const httpClient = proxy(trpc.createClient())
function App() {
	const client = useProxy(httpClient)
	return (
		<trpc.Provider client={client}>
			<MantineProvider withNormalizeCSS withGlobalStyles>
				<Navigation/>
				<Router>
					<Route path="/"><Home/></Route>
					<Route path="/login"><Login/></Route>
				</Router>
			</MantineProvider>
		</trpc.Provider>
	);
}

export default App;
