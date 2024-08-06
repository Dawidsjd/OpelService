// app/page.tsx
import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://cdn.dribbble.com/users/409852/screenshots/2673179/media/3556a174abdf1c718ceb6f23efdf6a97.gif"
            alt="Hero Image"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Link href="/login">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Other content can go here */}
    </div>
  );
};

export default HomePage;
