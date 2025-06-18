import "./Main.css";
import service1 from "./../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";
import { DataApi } from "../../Data/Data";

const Main = () => {
  return (
    <div>
      <div className="main1">
        <p className="main-p">Our Blogs</p>

        <div>
          <hr />
        </div>
      </div>
      {/* Data div */}
      <div className="flex-container">
        {DataApi.map((Item: any) => (
          <>
            <div className="service-1">
              <div>
                <img src={Item.image} alt="someone sitting" />
              </div>
              <h2>{Item.title}</h2>
              <p>{Item.desc}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
