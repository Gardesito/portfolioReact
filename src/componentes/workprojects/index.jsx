import "./worksproject.css";
const WorksP = ({ work }) => {
  return (
    <>
      <div className="design">
        <div>
          <a href="" className="containerD">
            <div className="containerD2">
              <div className="containerd3">
                <img src={work.img} alt="" className="imgD" />
              </div>
            </div>

            <div className="containerTxt">
              <div className="containerTxt1">
                <div className="containerTxt2">
                  <p>{work.name}</p>
                </div>
                <div className="containerTxt3">
                  <p>{work.sub}</p>
                </div>
              </div>
              <div className="iconD">
                <div className="iconD1">
                  <div>
                    <img
                      src="https://framerusercontent.com/images/Lb6hmzD1rqwb6BVGnqeLP0ps88.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export { WorksP };
