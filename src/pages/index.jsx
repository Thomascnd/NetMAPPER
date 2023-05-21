import Navbar from "@/pages/component/Navbar";
import { connectDB } from "./api/db";

function App() {
  const [adressip, setAdressip] = useState("");
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [option, setOption] = useState("");

  const handleAdressipChange = (event) => {
    setAdressip(event.target.value);
  };

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };
  
  const handleButtonClick = async () => {

    const data = {
      ip: adressip,
      option
    };

    try {
      const db = await connectDB();
      
      await db.collection("ip").insertOne(data);
      
      setDisplayedMessage(`${adressip} -Option sélectionnée : ${option}`);
      setAdressip("");
      setOption("");

      
    } catch (error) {
      console.error("Une erreur s est produite :", error);
    }
    
  };


  return (
    <div >
      <Navbar />
      
        <p>Entrer une IP :</p>
        <input
          type="text"
          value={adressip}
          onChange={handleAdressipChange}
          placeholder="Entrez votre IP"
          className="border border-gray-300 rounded-md px-3 py-2 mt-2"
        />
        <p>Entrer une option :</p>
        <input
          type="text"
          value={option}
          onChange={handleOptionChange}
          placeholder="Entrez une option"
          className="border border-gray-300 rounded-md px-3 py-2 mt-2"
        />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Valider
        </button>

        {displayedMessage && (
          <p className="mt-4">{displayedMessage}</p>
        )}
      
    </div>
  );
}

export default App;
