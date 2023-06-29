import React from "react";
import img1 from "../assets/ecommerce.png";
import img2 from "../assets/ecommerce2.png";
import img3 from "../assets/ecommerce3.jpg";
import "./landing.css"

class Landing extends React.Component {
  constructor() {
    super()
    this.state = {
      pic1: 0,
      pic2: 100,
      pic3: 200,
      activePic: 1,
    }
  }
  prevClick = () => {
    if (this.state.activePic == document.querySelector(".carousel-inner").firstChild.id.slice(1)) {
      this.setState({ activePic: +document.querySelector(".carousel-inner").lastChild.id.slice(1) });
      this.setState({ pic1: document.querySelector(".carousel-inner").childElementCount * -100 + this.state.pic1 + 100 });
      this.setState({ pic2: document.querySelector(".carousel-inner").childElementCount * -100 + this.state.pic2 + 100 });
      this.setState({ pic3: document.querySelector(".carousel-inner").childElementCount * -100 + this.state.pic3 + 100 });
    } else {
      this.setState({ activePic: +this.state.activePic - 1 });
      this.setState({ pic1: this.state.pic1 + 100 });
      this.setState({ pic2: this.state.pic2 + 100 });
      this.setState({ pic3: this.state.pic3 + 100 });
    }
  }
  nextClick = () => {
    if (this.state.activePic == document.querySelector(".carousel-inner").lastChild.id.slice(1)) {
      this.setState({ activePic: +document.querySelector(".carousel-inner").firstChild.id.slice(1) });
      this.setState({ pic1: document.querySelector(".carousel-inner").childElementCount * 100 + this.state.pic1 - 100 });
      this.setState({ pic2: document.querySelector(".carousel-inner").childElementCount * 100 + this.state.pic2 - 100 });
      this.setState({ pic3: document.querySelector(".carousel-inner").childElementCount * 100 + this.state.pic3 - 100 });
    } else {
      this.setState({ activePic: +this.state.activePic + 1 });
      this.setState({ pic1: this.state.pic1 - 100 });
      this.setState({ pic2: this.state.pic2 - 100 });
      this.setState({ pic3: this.state.pic3 - 100 });
    }
  }
  bulletEnter = (ev) => {
    ev.target.classList.add("hover-active");
  }
  bulletLeave = (ev) => {
    ev.target.classList.remove("hover-active");
  }
  bulletClick = (ev) => {
    this.setState({ pic1: (this.state.activePic - ev.target.id.slice(1)) * 100 + this.state.pic1 });
    this.setState({ pic2: (this.state.activePic - ev.target.id.slice(1)) * 100 + this.state.pic2 });
    this.setState({ pic3: (this.state.activePic - ev.target.id.slice(1)) * 100 + this.state.pic3 });
    this.setState({ activePic: +ev.target.id.slice(1) });
  }
  componentDidMount() {
    document.querySelector(`#b${this.state.activePic}`).classList.add("active");
  }
  componentDidUpdate(propval, preval) {
    if (this.state.activePic !== preval) {
      document.querySelector(`#b${this.state.activePic}`).classList.add("active");
      document.querySelector(`#b${preval.activePic}`).classList.remove("active");
    }
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel-inner">
          <img className="pic pic1" style={{ transform: `translateX(${this.state.pic1}%)` }} src={img1} id={"p1"} />
          <img className="pic pic2" style={{ transform: `translateX(${this.state.pic2}%)` }} src={img2} id={"p2"} />
          <img className="pic pic3" style={{ transform: `translateX(${this.state.pic3}%)` }} src={img3} id={"p3"} />
        </div>
        <div className="carousel-control">
          <span className="prev" onClick={this.prevClick}>{"<"}</span>
          <span className="next" onClick={this.nextClick}>{">"}</span>
        </div>
        <ol className="carousel-indicators">
          <li>
            <div className="carousel-bullet" id={"b1"} onClick={this.bulletClick} onMouseEnter={this.bulletEnter} onMouseLeave={this.bulletLeave}></div>
          </li>
          <li>
            <div className="carousel-bullet" id={"b2"} onClick={this.bulletClick} onMouseEnter={this.bulletEnter} onMouseLeave={this.bulletLeave}></div>
          </li>
          <li>
            <div className="carousel-bullet" id={"b3"} onClick={this.bulletClick} onMouseEnter={this.bulletEnter} onMouseLeave={this.bulletLeave}></div>
          </li>
        </ol>
      </div>
    )
  }
}

export default Landing;