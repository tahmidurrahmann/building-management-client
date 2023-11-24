import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutBuilding from "../AboutBuilding/AboutBuilding";
import Location from "../Location/Location";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | THE GLASS HOUSE</title>
            </Helmet>
            <Banner></Banner>
            <AboutBuilding></AboutBuilding>
            <Location></Location>
        </div>
    );
};

export default Home;