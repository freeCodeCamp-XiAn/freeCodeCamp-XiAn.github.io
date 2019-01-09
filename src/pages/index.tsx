import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import NoMatch from '@pages/NoMatch'
import Loading from '@components/Loading'
// import { Login } from '@api/LogAction'
import DynamicImport from '@components/DynamicImport'
const Pages = () => {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<React.Fragment>
					<Switch>
						<Route exact path='/' component={Index} />
						{/* <Route path='/login' component={LoginPage} /> */}
						<Route path='/map' component={Map} />
						<Route path='/demo' component={AppComponent} />
						<Route path='/routerTest' component={RouterTest} />
						<Route path='/admin' component={Admin} />
						<Route component={NoMatch} />
					</Switch>
				</React.Fragment>
			</Suspense>
		</Router>
	)
}

export default Pages

const Index = (props) => {
	return <DynamicImport load={() => import(`@pages/Index/index`)}>
		{(Component: any) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
}
const Admin = (props) => {
	return <DynamicImport load={() => import(`@pages/Admin/index`)}>
		{(Component: any) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
}
const AppComponent = (props) => {
	return <DynamicImport load={() => import(`@pages/Demo/index`)}>
		{(Component: any) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
}
const Map = (props) => {
	return <DynamicImport load={() => import(`@pages/Map/index`)}>
		{(Component: any) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
}
const RouterTest = (props) => {
	return <DynamicImport load={() => import(`@pages/RouterTest/index`)}>
		{(Component: any) => Component === null
			? <Loading />
			: <Component {...props} />}
	</DynamicImport>
}

// const Admin = lazy(() => import('@pages/Admin/index'))
// const RouterTest = lazy(() => import('@pages/RouterTest/index'))
// // const Index = lazy(() => import('@pages/Index/index'))
// const LoginPage = lazy(() => import('@pages/User/Login'))
// const AppComponent = lazy(() => import('@pages/Demo/index'))
// const Map = lazy(() => import('@pages/Map'))
