import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function detailLaunch(id) {
      const post = await fetch(
        `https://spacelaunchnow.me/api/3.3.0/launch/${id}`
      );
      const res = await post.json();
      setDetails(res);
    }
    detailLaunch(id);
  }, []);

  return (
    <div className="text-white container mx-auto">
      <div className="text-center py-10 uppercase hover:font-semibold">
        <Link to={"/"}>Home</Link>
      </div>
      {details && (
        <div className="container mx-auto divide-y">
          <h3 className="text-center text-2xl py-2">{details.name}</h3>
          <div className="bg-gray-700 py-2">
            <h3 className="text-center text-2xl">Mission</h3>
            <div className="flex">
              <h2 className="px-2">Id:</h2>
              <div>{details.mission.id}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Description:</h2>
              <div>{details.mission.description}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Name:</h2>
              <div>{details.mission.name}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Orbit:</h2>
              <div>{details.mission.orbit}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Type:</h2>
              <div>{details.mission.type}</div>
            </div>
          </div>
          <div className="bg-gray-800 py-2">
            <h3 className="text-center text-2xl">Pad</h3>
            <div className="flex">
              <h2 className="px-2">Latitude:</h2>
              <div>{details.pad.latitude}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Longitude:</h2>
              <div>{details.pad.longitude}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Map:</h2>
              <a
                className="cursor-pointer hover:underline hover:text-sky-800"
                href={details.pad.map_url}
                target="_blank"
              >
                {details.pad.map_url}
              </a>
            </div>
            <div className="flex">
              <h2 className="px-2">Name:</h2>
              <div>{details.pad.name}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Wiki:</h2>
              <a
                className="cursor-pointer hover:underline hover:text-sky-800"
                href={details.pad.wiki_url}
                target="_blank"
              >
                {details.pad.wiki_url}
              </a>
            </div>
            <div>
              <h2 className="text-center text-xl py-2">Location</h2>
              <div>
                <div className="flex">
                  <h2 className="px-2">Name:</h2>
                  <div>{details.pad.location.name}</div>
                </div>
                <div className="flex">
                  <h2 className="px-2">Country code</h2>
                  <div>{details.pad.location.country_code}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 py-2">
            <h3 className="text-center text-2xl">Rocket</h3>
            <div className="flex">
              <h2 className="px-2">Description:</h2>
              <div>{details.rocket.configuration.description}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Diameter:</h2>
              <div>{details.rocket.configuration.diameter}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Family:</h2>
              <div>{details.rocket.configuration.family}</div>
            </div>
            <div className="flex">
              <h2 className="px-2">Full name:</h2>
              <div>{details.rocket.configuration.full_name}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
