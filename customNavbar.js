
const currentPath = window.location.pathname;

function detectScreenSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return width > 768?  "btn-group-horizontal":"btn-group-vertical"
  

  // Request the next animation frame
  requestAnimationFrame(detectScreenSize);
}


class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

        <div class=" container-fluid position-relative p-0" >
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 " >
            <a href="index.html" class="navbar-brand p-0">
                <h1 class="text-primary m-0"><i class="fa fa-bed me-3"></i>DormPro</h1>
                <!-- <img src="img/logo.png" alt="Logo"> -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0 mr-2">
                    <a href="index.html" class="nav-item nav-link active " >Home</a>
                    <a href="booking.html" class="nav-item nav-link" >Book A Room</a>
                     <a href="profile.html" class="nav-item nav-link" >Profile</a>
                    <a href="ticket.html" class="nav-item nav-link text-dark">Meal Ticket</a>
                    <a href="register.html" class="nav-item nav-link text-dark">Login</a>
                    <a href="invite.html" class="nav-item nav-link text-dark">Join Via Code</a>
                   
                </div>


            
        </nav>
        </div>
        <div></div>
        </div>
        </div>
</div>
</div>

      <br></br>
      <br></br>

    
  



       
      

     
    `;
  }
}

customElements.define("navbar-component", Header);
