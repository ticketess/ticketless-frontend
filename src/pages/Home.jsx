import { makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import SearchTicket from "../components/SearchTicket";

const useStyles = makeStyles((theme) => ({
  bgImage: {
    height: "70vh",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1610985252732-d399339a2df3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=thijs-kennis-AHNlf29SmLU-unsplash.jpg&w=1920)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bgImage}>
        <Navbar />
        <div className="container mx-auto">
          <div className="absolute top-2/4 transform -translate-y-2/4 ">
            {/* <h1>Kemana kita hari ini ?</h1> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <SearchTicket />
      </div>
    </>
  );
};

export default Home;
