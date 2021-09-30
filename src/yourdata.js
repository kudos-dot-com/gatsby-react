// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/c.png"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/java.png"

// Social Icon
import githubIcon from "./images/linkedin.png"
import codepenIcon from "./images/facebook-circular-logo.png"
// import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Soumita",
  headerTagline: [
    //Line 1 For Header
    "A Student, An",
    //Line 2 For Header
    "Aspiring Software ",
    //Line 3 For Header
    "Engineer and ",
    "a Reader"
  ],
  //   Header Paragraph
  headerParagraph:
  "i am currently pursuing my B.tech Degree from Kalinga Institute of Industrial Technology, bhubaneswar",
  //Contact Email
  contactEmail: "talukdarsoumita2000@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "basic problem solving", //Project Title - Add Your Project Title Here
      para:
      "earned HackerRank certification for basic problem solving",      //Project Image - Add Your Project Image Here
      imageSrc:
      require('./images/1.png'),
      //Project URL - Add Your Project Url Here
      url: "https://www.hackerrank.com/certificates/3af13dc45afc",
    },
    {
      title: "Java HackerRank Certification", //Project Title - Add Your Project Title Here
      para:
      "earned HackerRank certification for java programming",      //Project Image - Add Your Project Image Here
      imageSrc:
      require('./images/2.png'),
      //Project URL - Add Your Project Url Here
      url: "https://www.hackerrank.com/certificates/0edf2df4430f",
    },
    {
      title: "EFSET CERTIFICATION", //Project Title - Add Your Project Title Here
      para:
      "succesfully completed EP SEY certification",      //Project Image - Add Your Project Image Here
      imageSrc:
      require('./images/3.png'),
      //Project URL - Add Your Project Url Here
      url: "https://www.efset.org/cert/WiotBs",
    },
    {
      title: "BSNL Certification", //Project Title - Add Your Project Title Here
      para:
    "got hands on training from BSNL certification",      //Project Image - Add Your Project Image Here
      imageSrc:
      require('./images/4.png'),
      //Project URL - Add Your Project Url Here
      url: "",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "i am currently pusrsuing my B.tech degree in electronics and telecommunication. i would like to have a hands on experience and knowledge which i can implement in future challenges and career growth.",
  aboutParaTwo:
  "i am a team player and is always ready to take on challanges. i am enthusiatic and want to develop a technical purview",  
  aboutParaThree:
  "",  
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
      "HTML",    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
      "JAVASCRIPT",   
 },
    {
      img: reactIcon,
      para:
      "C programming",    },
    {
      img: designIcon,
      para:
      "Communication skills and verbal ability",    },
    {
      img: codeIcon,
      para:
      "Java"
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Address",
  promotionPara:
  "64/11 Narasingha Avenue, Dum Dum, kolkata- 700074",  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Phone Number: 9330308221",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://www.linkedin.com/in/soumita-talukdar-a34169219" },
    {
      img: codepenIcon,
      url: "https://www.facebook.com/soumita.talukdar.9",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/soumitatalukdar2000/",
    },
  ],

  // End Contact Section ---------------
}

