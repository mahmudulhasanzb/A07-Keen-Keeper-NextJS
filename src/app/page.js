import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-base-200'>
      <div className="hero mt-20 mb-10 max-w-5xl mx-auto p-2 text-black">
        <div className="hero-content text-center">
          <div className="max-w-">
            <h1 className="text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="text-gray-400 py-6 max-w-xl mx-auto">
              Your personal shelf of meaningful connections. Browse, tend, and
              nature the relationship that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-white">Add a Friend</button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="stats shadow flex max-w-5xl mx-auto text-center text-[#244D3F] gap-5 mb-10">
        <div className="stat border-none bg-base-100 rounded-2xl py-8 px-4 shadow-xl">
          <div className="stat-value">10</div>
          <div className="stat-title text-sm">Total Friends</div>
        </div>

        <div className="stat  border-none bg-base-100 rounded-2xl py-8 px-4 shadow-xl">
          <div className="stat-value">3</div>
          <div className="stat-title text-sm">On Track</div>
        </div>

        <div className="stat  border-none bg-base-100 rounded-2xl py-8 px-4 shadow-xl">
          <div className="stat-value">6</div>
          <div className="stat-title text-sm">Need Attention</div>
        </div>

        <div className="stat  border-none bg-base-100 rounded-2xl py-8 px-4 shadow-xl">
          <div className="stat-value">12</div>
          <div className="stat-title text-sm">Interactions This Month</div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
