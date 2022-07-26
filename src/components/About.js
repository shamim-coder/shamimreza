import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
            <div style={{ boxShadow: "0 4px 6px rgb(0 0 0 / 30%)" }} className="polaroid p-4">
                                <img height="250px" src={profilepic} alt="Avatar placeholder" />
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", gap: "5px" }}>
                                    <i class="devicon-mongodb-plain-wordmark colored" style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}></i>
                                    <i class="devicon-express-original colored" style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}></i>
                                    <i class="devicon-react-original colored" style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}></i>
                                    <i class="devicon-nodejs-plain colored" style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}></i>
                                </div>
                            </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <button class="btn"> Download Resume <button/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
