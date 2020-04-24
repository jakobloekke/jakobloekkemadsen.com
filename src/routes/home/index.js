import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";
import {usePrerenderData} from "@preact/prerender-data-provider";

const Home = (props) => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	const [data, isLoading] = usePrerenderData(props);

	return (
		<div>
			{isLoading ? 'Loading ...' : <pre>{JSON.stringify(data)}</pre>}
		</div>
	);
};

export default Home;
