import "./home.css";
export default function Home() {
  return (
    <div>
      <div className="home-section-1">
        <div className="h2-section">
          <h2 className="h2-1">
            <span className="quotes">"</span>Step into The Loop: A{" "}
            <span className="red-text">Tech Oasis for Diversity.</span>
          </h2>
          <h2 className="h2-2">
            Elevating underrepresented voices to{" "}
            <span className="green-text">shape the future of technology. </span>
            <span className="quotes">"</span>
          </h2>
        </div>
        <img
          className="social-media"
          src="/imgs/social-media.png"
          alt="Diverse Social Media Circle"
        />
      </div>
      <div className="home-section-2">
        <svg
          className="redsvg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#bd8b9c"
            fill-opacity="1"
            d="M0,64L21.8,58.7C43.6,53,87,43,131,37.3C174.5,32,218,32,262,58.7C305.5,85,349,139,393,170.7C436.4,203,480,213,524,202.7C567.3,192,611,160,655,165.3C698.2,171,742,213,785,197.3C829.1,181,873,107,916,64C960,21,1004,11,1047,37.3C1090.9,64,1135,128,1178,149.3C1221.8,171,1265,149,1309,128C1352.7,107,1396,85,1418,74.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
        <div className="container">
          <div className="row">
            <div className="column"></div>
            <div className="column-border">
              <p>
                A study has shown the two biggest barriers for women in tech are
                a lack of mentors (48%) and a lack of female role models (42%).
                Having little support can have an impact on gender diversity in
                tech as it can cause uncertainty for those who are interested in
                entering the industry.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="column-border">
              <p>
                40% of LGB+ and 55% of trans workers had experienced conflict in
                the workplace in the preceding 12 months, compared to just 29%
                of heterosexual and cisgender employees.{" "}
              </p>
            </div>
            <div className="column">4</div>
          </div>
          <div className="row">
            <div className="column">5</div>
            <div className="column-border">
              <p>
                PwC have calculated that the BAME pay gap in 2020 was 9.2% and
                the BAME bonus gap was 36.9%. Although they claim that their pay
                gap is driven by the fact there are more non BAME staff in
                senior positions, these figures are still disappointing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-3">
        <svg
          className="svg1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#e2efde"
            fill-opacity="1"
            d="M0,128L14.1,117.3C28.2,107,56,85,85,85.3C112.9,85,141,107,169,96C197.6,85,226,43,254,42.7C282.4,43,311,85,339,106.7C367.1,128,395,128,424,144C451.8,160,480,192,508,197.3C536.5,203,565,181,593,160C621.2,139,649,117,678,128C705.9,139,734,181,762,170.7C790.6,160,819,96,847,90.7C875.3,85,904,139,932,138.7C960,139,988,85,1016,58.7C1044.7,32,1073,32,1101,58.7C1129.4,85,1158,139,1186,176C1214.1,213,1242,235,1271,213.3C1298.8,192,1327,128,1355,122.7C1383.5,117,1412,171,1426,197.3L1440,224L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
