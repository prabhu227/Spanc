


const footerHTML = `
<footer class="bg-dark text-light pt-5">
  <div class="container">
    <div class="row justify-content-around text-start text-md-start">
      <div class="col-12 col-sm-6 col-md-3 mb-4">
        <div class="footer-logo mb-2">
          <img src="assets/images/spanco logo.png" alt="Company Logo" class="img-fluid" style="max-height: 50px;">
        </div>
        <p class="mt-3 small">Leading provider of advanced laboratory equipment and solutions for research facilities worldwide.</p>
      </div>
      <div class="col-6 col-md-2 mb-4">
        <h6 class="fw-semibold">Products</h6>
        <ul class="list-unstyled small">
          <li><a href="/products-page/plus-three-product-che&bio/analytical.html" class="text-secondary text-decoration-none d-block py-1">Analytical Instruments</a></li>
          <li><a href="/products-page/plusthree-phyequipments.html" class="text-secondary text-decoration-none d-block py-1">Physics Lab Instruments</a></li>
          <li><a href="/products-page/plus-three-product-che&bio/heating-cooling.html" class="text-secondary text-decoration-none d-block py-1">Heating & Cooling</a></li>
          <li><a href="/products-page/plus-three-product-che&bio/microscope.html" class="text-secondary text-decoration-none d-block py-1">Microscopes</a></li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-4">
        <h6 class="fw-semibold">Company</h6>
        <ul class="list-unstyled small">
          <li><a href="/about.html" class="text-secondary text-decoration-none d-block py-1">About Us</a></li>
          <li><a href="/product.html" class="text-secondary text-decoration-none d-block py-1">Products</a></li>
          <li><a href="/testimonials.html" class="text-secondary text-decoration-none d-block py-1">Testimonals</a></li>
          <li><a href="/contact.html" class="text-secondary text-decoration-none d-block py-1">Contacts</a></li>
        </ul>
      </div>
      <div class="col-12 col-md-3 mb-4">
        <h6 class="fw-semibold">Follow Us</h6>
        <div class="d-flex gap-3 mt-2 fs-5">
          <a href="#" class="text-secondary"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="text-secondary"><i class="bi bi-twitter"></i></a>
          <a href="#" class="text-secondary"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-secondary"><i class="bi bi-instagram"></i></a>
        </div>
         <p class="mt-3 small"><strong>GSTIN:</strong> 21XXXXXXXZXZ1Z1</p>
      </div>
    </div>

    <div class="text-center border-top border-secondary pt-3 mt-4 small text-secondary">
      &copy; 2025 Spanco Tek • Designed by <a href="https://astericscompute.com/"> Asterics Compute</a>  • All Rights Reserved
    </div>
  </div>
</footer>
`;

document.getElementById("footer-container").innerHTML = footerHTML;
