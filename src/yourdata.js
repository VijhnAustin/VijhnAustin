// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import pythonIcon from "./images/python.svg"
import javaIcon from "./images/java.svg"
import gatsbyIcon from "./images/gatsby.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import facebookIcon from "./images/facebook.svg"
import instagramIcon from "./images/instagram.svg"
import twitterIcon from "./images/twitter.svg"

export default {
  //
  //

  //   Header Details ---------------------
  name: "Vijhn",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "I am professional freelance coder with 5 years of experience and projects under my belt.",

  //Contact Email
  contactEmail: "vijhn.austin@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Requisite Designs LLC", 
      para:"Elevate Your Digital Presence WEBSITE DESIGN | SEO | DIGITAL MARKETING",
      
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      
      url: "https://requisitedesigns.com/",
    },
    {
      title: "Restaurant's website designed in CSS and JS", 
      para:"Designed to display the ease and convenience of a simple and efficient layout, this website has an impressive landing page with all the necessary info for a small business. ",
      
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      
      url: "https://leelasbistro.w3spaces.com/",
    },

    {
      title: "Github", 
      para:"A collection of my projects across the years. At the moment, they are most centrally located on Github, where these works are open source.",
      
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      
      url: "https://github.com/VijhnAustin",
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
    "I am a coder with accolades from many institutions of knowledge that I claim great pride in. I graduated from Texas A&M University with a Bachelor's in Geophysics in December of 2017. Prior to that, I graduated from Carnegie Vanguard High School in 2013. Both of these places gave me an excellent foundation in which I have used to build a skill that is continuously worked on, toiled over, and finely crafted over time.",
  aboutParaTwo:
    "I view challenges as opportunities to grow, and every person who has touched a keyboard with an attempt at writing code has had challenges in implementing their thoughts at one point or another. Syntax and logic errors can lead to temporary frustration, but that feeling of fixing that specific bug is always such a rewarding experience. Not only that, it's the satisfaction of seeing that same bug pop up, and fixing it immediately. It's the little things like these that always bring me back to my IDE for another session of creation.",
  aboutImage:
    "https://media-exp2.licdn.com/dms/image/C4E03AQH3QvzVbdU2VA/profile-displayphoto-shrink_800_800/0/1517632062156?e=1663200000&v=beta&t=6zCaoiD6Ms9QFMlS7nGrYR9_ViDnJM1YComG9uKN3I4",

  //   End About Section ---------------------

  // Skills Section ---------------

  

  skills: [
    {
      img: htmlIcon,
      para:
        " The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    },
    {
      img: cssIcon,
      para:
        "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.",
    },
    {
      img: jsIcon,
      para:
        "Javascript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    },
    {
      img: reactIcon,
      para:
        "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality ",
    },
    {
      img: pythonIcon,
      para:
        "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a batteries included language due to its comprehensive standard library.",
    },
    {
      img: javaIcon,
      para:
        "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages",
    },
    {
      img: gatsbyIcon,
      para:
        "Gatsby is an open-source static site generator built on top of Node.js using React and GraphQL. It provides over 2500 plugins to create static sites based on sources as Markdown documents, MDX (Markdown with JSX), images, and numerous Content Management Systems such as WordPress, Drupal and more.",
    }
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Services",
  promotionPara:
    "If you are interested in creating a new online project, I am available for consultation at competitve market rates. Please feel free to contact me through any of the platforms on the bottom of the page for more information.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/VijhnAustin" },
    {
      img: facebookIcon,
      url: "https://www.facebook.com/vijhn.austin",
    },
    {
      img: twitterIcon,
      url: "https://twitter.com/VijhnAustin",
    },
  
    {
      img: instagramIcon,
      url: "https://www.instagram.com/vijhn",
    },
  ],

  // End Contact Section ---------------
}


