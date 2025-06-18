import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchAllData = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://api-adsng.c9ja.com/cretive-products/pag/all?page=1"
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Display Data Screen</h1>
      <div>
        {viewResult.map((Item: any) => (
          <>
            <h1>{Item.category}</h1>
            <h2>{Item.description}</h2>
            <h3>{Item.price}</h3>
            <h3>{Item.status}</h3>
            <h3>{Item.title}</h3>
            <h3>{Item.subcategory}</h3>
            <h3>{Item.updatedAt}</h3>
            <div>
              {Item.fileUrl.map((Item: any) => (
                <>
                  <img src={Item} />
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FetchAllData;
