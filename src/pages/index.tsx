import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <section>
      <p>This is a default page, and you are not supposed to see this</p>
      <p>
        <a href="/todo" className='text-blue-600 visited:text-purple-600'>Go to the Todo list</a>
      </p>
    </section>
  );
};

export default Home;
