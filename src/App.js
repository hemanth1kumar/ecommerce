import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Header from "./components/header";

const LoginRegister = React.lazy(() => import("./pages/LoginRegister"));
const ShopPage = React.lazy(() => import("./pages/shop"));

function App() {
	return (
		<div>
			<Header />

			<Suspense fallback={<div>Loading</div>}>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/login">
						<LoginRegister />
					</Route>
					<Route exact path="/shop">
						<ShopPage />
					</Route>
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</Suspense>
		</div>
	);
}

function NoMatch() {
	return <div>404 Not Found</div>;
}

export default App;
