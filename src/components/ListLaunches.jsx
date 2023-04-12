import { useEffect, useContext } from "react";
import { LauchContex } from "../context/LaunchsContext";
import { useNavigate } from "react-router-dom";

const ListLaunches = () => {
  const { launchs, setLaunchs } = useContext(LauchContex);
  const navigate = useNavigate();

  useEffect(() => {
    async function launch() {
      const post = await fetch(
        "https://spacelaunchnow.me/api/3.3.0/launch/upcoming/"
      );
      const result = await post.json();
      setLaunchs(result.results);
    }
    launch();
  }, []);

  return (
    <div className="container mx-auto text-gray-200 text-center mt-20">
      <h2 className="text-2xl font-bold py-5">
        Listing upcoming rocket launches
      </h2>
      <div className="mx-32">
        <ul>
          {launchs?.map((item) => (
            <li
              onClick={() => navigate(`/${item.id}`)}
              className="list-disc cursor-pointer hover:font-semibold text-left py-3"
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListLaunches;
