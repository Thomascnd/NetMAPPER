import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container  flex justify-between items-center">
        <h1 className="text-3xl text-white">NetMAPPER</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/historique" className="text-white hover:text-gray-300">
              Historique
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

