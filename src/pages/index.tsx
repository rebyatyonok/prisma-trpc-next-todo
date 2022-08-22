import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<section>
			<p>This is a default page, and you are not supposed to see this</p>
			<p>
				<Link href="/todo" className='text-blue-600 visited:text-purple-600'>Go to the Todo list</Link>
			</p>
		</section>
	);
};

export default Home;
