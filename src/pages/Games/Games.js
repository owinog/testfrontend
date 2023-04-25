// import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import img1 from "../../assets/rocket.png";
import sentiment from "../../assets/sentiment.png";
import benchmark from "../../assets/benchmark.png";
import controllers from "../../assets/controllers.png";
import counterStrike from "../../assets/Counter-Strike.jpg";
import "./games.css";

const styles = {
  card: {
    width: "14rem",
    height: "19rem",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    background: " #cce0ff",
  },

  cardImage: {
    paddingTop: "10px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },

  gameCard: {
    border: "0",
    width: "240px",
    height: "350px",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "row",
    boxShadow: "1px 5px 10px 2px rgba(0,0,0,.6)",
  },

  gameCardImg: {
    position: "absolute",
    height: "100%",
    objectFit: "cover",
    borderRadius: "30px",
    border: "0",
  },

  gameCardBody: {
    zIndex: "2",
    maxHeight: "50%",
    backgroundColor: "#00000082",
    borderRadius: "30px",
    color: "white",
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    border: "0",
  },
};

function Games() {
  const [showLoading, setShowLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (event) => {
    // setShowLoading(current => !current)
    // console.log(event.target.id)
    // // const {data} = await axios.post(`http://localhost:5000`, {id:event.target.id});
    // if(data){
    //     setFetchedData(current => !current)
    //     navigate('/gamesReviews', {state: data});
    // }
    // console.log(data, "data")

    console.log("data");
    navigate("/gamesReviews");
  };

  // useEffect(() => {
  //     fetch("http://localhost:8000/app/message")
  //       .then((res) => res.json())
  //       .then((data) => setMessage(data.message));
  //   }, []);

  return (
    <div className="games-div">
      <div className="description">
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="img-content"
        >
          <img src={img1} className="img1" alt="astronut" />
        </m.div>
        <div className="text-content">
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            className="text"
          >
            <h1>
              {" "}
              Now you can get insight of your game with this AI powered tool
            </h1>
            <br></br>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            className="game-cards"
          >
            <Card className="text-center" style={styles.card}>
              {/* <img src={sentiment} className='img2' alt='astronut'/> */}
              <Card.Img
                variant="top"
                src={sentiment}
                style={styles.cardImage}
              />
              <Card.Body>
                <Card.Title>Get Sentiments</Card.Title>
                <Card.Text>
                  Get sentiment of your game within its life-cycle.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center" style={styles.card}>
              {/* <img src={sentiment} className='img2' alt='astronut'/> */}
              <Card.Img
                variant="top"
                src={controllers}
                style={styles.cardImage}
              />
              <Card.Body>
                <Card.Title>Build Better Games</Card.Title>
                <Card.Text>
                  Get sentiment of your game within its life-cycle.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center" style={styles.card}>
              {/* <img src={sentiment} className='img2' alt='astronut'/> */}
              <Card.Img
                variant="top"
                src={benchmark}
                style={styles.cardImage}
              />
              <Card.Body>
                <Card.Title>Benchmark Your Game</Card.Title>
                <Card.Text>
                  Get sentiment of your game within its life-cycle.
                </Card.Text>
              </Card.Body>
            </Card>
          </m.div>
        </div>
      </div>
      {/* ================= horizontal line ================== */}
      <div
        style={{
          borderTop: "2px solid #fff ",
          marginLeft: 300,
          marginRight: 300,
        }}
      ></div>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        className="header-3"
      >
        <h3>Select your game</h3>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
        className="games-class"
      >
        <div className="games-list">
          <Card style={styles.gameCard}>
            <img
              src={counterStrike}
              class="card-img-top"
              alt=""
              style={styles.gameCardImg}
            />
            <Card.Body style={styles.gameCardBody}>
              <h5 class="card-title-new">Counter Strike</h5>
              <button
                onClick={handleClick}
                id="10"
                class="button"
                style={{ verticalAlign: "middle" }}
              >
                <span>Click Me! </span>
              </button>
            </Card.Body>
          </Card>
          <Card style={styles.gameCard}>
            <img
              src={counterStrike}
              class="card-img-top"
              alt=""
              style={styles.gameCardImg}
            />
            <Card.Body style={styles.gameCardBody}>
              <h5 class="card-title-new">Counter Strike</h5>
              <button
                id="10"
                class="button"
                style={{ verticalAlign: "middle" }}
              >
                <span>Click Me! </span>
              </button>
            </Card.Body>
          </Card>
          <Card style={styles.gameCard}>
            <img
              src={counterStrike}
              class="card-img-top"
              alt=""
              style={styles.gameCardImg}
            />
            <Card.Body style={styles.gameCardBody}>
              <h5 class="card-title-new">Little Nightmares</h5>
              <button
                id="10"
                class="button"
                style={{ verticalAlign: "middle" }}
              >
                <span>Click Me! </span>
              </button>
            </Card.Body>
          </Card>
          <Card style={styles.gameCard}>
            <img
              src={counterStrike}
              class="card-img-top"
              alt=""
              style={styles.gameCardImg}
            />
            <Card.Body style={styles.gameCardBody}>
              <h5 class="card-title-new">Little Nightmares</h5>
              <button
                id="10"
                class="button"
                style={{ verticalAlign: "middle" }}
              >
                <span>Click Me! </span>
              </button>
            </Card.Body>
          </Card>
        </div>
      </m.div>
    </div>
  );
}

export default Games;
