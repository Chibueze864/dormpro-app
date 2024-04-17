class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">DormPro</h4>
                    <a class="btn btn-link" href="booking.html">Book A Room</a>
                    <a class="btn btn-link" href="login.html">Login</a>
                    <a class="btn btn-link" href="ticket.html">Meal Ticket</a>
                    <a class="btn btn-link" href="invite.html">Join Via Code</a>
                   
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Contact</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Nile University, Jabi Airport Road, Abuja, Nigeria</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+234 90 365 59198</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>chibueze.onyekpere@gmail.com</p>
                    
                </div>
                
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">DormPro</a>, All Right Reserved.

                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                            <a href="index.html">Home</a>
                            <a href="booking.html">Book A Room</a>
                            <a href="ticket.html">Meal Ticket</a>
                            <a href="register.html">Login</a>
                            <a href="invite.html">Join Via Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define("footer-component", Footer);
