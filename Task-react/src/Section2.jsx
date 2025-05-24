import './Section2.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import {faUniversalAccess} from '@fortawesome/free-solid-svg-icons'
import {faDiscord} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
export default function Section2(){
    return(

<div class='cards' >

<div class='three'>
<div class="container py-5">
  <h3 class="mb-4 text-light" >Latest Blog Post</h3>
  <div class='buttons'><h3 class='text-light'>Topics</h3></div>
</div>
</div>



<div class='four'>
<div class="card mb-3 text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-1.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Database</button>
        <h5 class="card-title">Building microservices with Dropwizard, MongoDB & Docker</h5>
        <p class="card-text small">
          This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-...
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Jan 17, 2022 • <FontAwesomeIcon icon={faClock} /> 3 min </p>
      </div>
    </div>
  </div>
</div>
<div class='buttons'>
  <p> <FontAwesomeIcon class='icons' icon={faDatabase}  /><button> Database</button></p>
  <p> <FontAwesomeIcon  class='icons' icon={faUniversalAccess} /><button>   Accessibility</button></p>
  <p> <FontAwesomeIcon class='icons' icon={faRocket} /><button> Web performance</button> </p>
  <h3 class='text-light'>Tags</h3>
  </div>
</div>


<div class='five '>
<div class="card mb-3  text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-2.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Web Performance</button>
        <h5 class="card-title">Fast Web Page loading on a $20 feature phone </h5>
        <p class="card-text small">Feature Phones are affordable (under $20-25),low-end devices enabling 100s of millions of users in developing countries to leverage the web. Think of them as a light...
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Dec 10, 2021 • <FontAwesomeIcon icon={faClock} /> 2 min </p>
      </div>
    </div>
  </div>
</div>
<div class='buttons'>
<div class='box'>
  <button>#mongodb</button>
  <button>#nodejs</button>
  <button>#a11y</button>
  <button>#mobility</button>
  <button>#inclusion</button>
  <button>#webperf</button>
  <button>#optimize</button>
  <button>#performance</button>
</div>
<h3 class='text-light'>Let's Talk</h3></div>
</div>


<div class='six '>
<div class="card mb-3  text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-3.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Accessibility</button>
        <h5 class="card-title">Aceessibility Tips for Web Developers </h5>
        <p class="card-text small">It's awesome to build sites that are inclusive and accessible to everone. There are at least six key areas of disability we can optimize for:visual, hearing, mobility,...
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Nov 28, 2021 • <FontAwesomeIcon icon={faClock} /> 4 min </p>
      </div>
    </div>
  </div>
</div>
<div class='buttons'>
<div class='box2'><p>Do you want to learn more about how i can help your company overcome problems? Let us have a conversation.</p>
<div class='facebook'>
<FontAwesomeIcon icon={faDiscord} style={{color: "#8477ac",}} />
<FontAwesomeIcon icon={faTwitter} style={{color: "#74C0FC",}} />
<FontAwesomeIcon icon={faFacebook} style={{color: "#8477ac",}} />
</div>
</div>

</div>
</div>



<div class='seven '>
<div class="card mb-3  text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-4.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Database</button>
        <h5 class="card-title">Dynamically Securing Databases using Hashicorp Vault</h5>
        <p class="card-text small">Nowadays, it's hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels: from securing code chunks, securing...
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Nov 20, 2021 • <FontAwesomeIcon icon={faClock} /> 4 min </p>
      </div>
    </div>
  </div>
</div>

<div class='game'>
<div class='buttons'>
<div><h3 class='text-light'>Newsletter</h3></div>
<div class='box3'><p>Subscribe to our newsletter to be among the first to keep up with the latest updates.</p>
<input type="Email" placeholder='Email Address'/>
<button> Subscribe</button>
</div>
</div>
</div>




</div>




<div class='eight '>
<div class="card mb-3  text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-5.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Web Performance</button>
        <h5 class="card-title">Adaptive Loading - Improving Web Performance on Low-end devices</h5>
        <p class="card-text small">Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. Any user can have a slow experience. In a world with widely...
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Nov 10, 2021 • <FontAwesomeIcon icon={faClock} /> 3 min </p>
      </div>
    </div>
  </div>
</div>
</div>



<div class='nine '>
<div class="card mb-3  text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-6.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Accessibility</button>
        <h5 class="card-title">Don't Develop Just for Yourself - A Developer's Checklist to Accessibility</h5>
        <p class="card-text small">We, as developers, tend to develop sites unconsciously for people like ourselves. If we don't actively pay attention, the sites are often accessible only for certain... 
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Oct 25, 2021 • <FontAwesomeIcon icon={faClock} /> 7 min </p>
      </div>
    </div>
  </div>
</div>
</div>



<div class='ten '>
<div class="card mb-3  text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-7.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Database</button>
        <h5 class="card-title">Building a Restful CRUD API with Node JS,Express,and MongoDB</h5>
        <p class="card-text small">Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another. In other words, an API...
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Oct 15, 2021 • <FontAwesomeIcon icon={faClock} /> 5 min </p>
      </div>
    </div>
  </div>
</div>
</div>


<div class='eleven '>
<div class="card mb-3  text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-8.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Web Performance</button>
        <h5 class="card-title">Monitoring Performance With the PageSpeed Insights API</h5>
        <p class="card-text small">The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve. The V5 API include... 
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Oct 3, 2021 • <FontAwesomeIcon icon={faClock} /> 5 min </p>
      </div>
    </div>
  </div>
</div>
</div>


<div class='tweleve '>
<div class="card mb-3  text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-9.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Accessibility</button>
        <h5 class="card-title">The best web accessibility tools for developers in 2021</h5>
        <p class="card-text small">The quality of the tools you use deflines the speed with which you can diagnose and resolve problems. Each year the landscape changes dramatically in web technologies... 
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Sep 13, 2021 • <FontAwesomeIcon icon={faClock} /> 7 min </p>
      </div>
    </div>
  </div>
</div>
</div>


<div class='thirteen '>
<div class="card mb-3  text-white "   >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../images/blog-10.png" class="img-fluid rounded-start p-2" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <button>Database</button>
        <h5 class="card-title">How to connect a React frontend with a NodeJS/Express backend</h5>
        <p class="card-text small">The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing javascript for both the backend and frontend as well as ...
        </p>
        <h6 class="card-text">
        <img src="../images/author.png" alt="" /> Julia Walker </h6>
        <p> Sep 21, 2021 • <FontAwesomeIcon icon={faClock} /> 4 min </p>
      </div>
    </div>
  </div>
</div>
</div>

<div class='btn'>
    <button>Load More</button>
</div>











</div>
    )
}