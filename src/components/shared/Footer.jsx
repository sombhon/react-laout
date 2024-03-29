import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footer mt-3">
      <div className="container">
        <footer classname="py-5">
          <div classname="row">
            <div classname="col-6 col-md-2 mb-3">
              <h5>Menu 1</h5>
              <ul classname="nav flex-column">
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Pricing
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    FAQs
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div classname="col-6 col-md-2 mb-3">
              <h5>Menu 2</h5>
              <ul classname="nav flex-column">
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Pricing
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    FAQs
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div classname="col-6 col-md-2 mb-3">
              <h5>Menu 3</h5>
              <ul classname="nav flex-column">
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Pricing
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    FAQs
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div classname="col-6 col-md-2 mb-3">
              <h5>Menu 4</h5>
              <ul classname="nav flex-column">
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    Pricing
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    FAQs
                  </NavLink>
                </li>
                <li classname="nav-item mb-2">
                  <NavLink classname="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div classname="col-md-4">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div classname="d-flex w-100 gap-2">
                  <input
                    id="newsletter1"
                    type="text"
                    classname="form-control"
                    placeholder="Email address"
                  />
                  <button classname="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div classname="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul classname="list-unstyled d-flex">
              <li classname="ms-3">
                <NavLink classname="link-dark">
                  <svg classname="bi" width="{24}" height="{24}">
                    <use xlinkhref="#twitter" />
                  </svg>
                </NavLink>
              </li>
              <li classname="ms-3">
                <NavLink classname="link-dark">
                  <svg classname="bi" width="{24}" height="{24}">
                    <use xlinkhref="#instagram" />
                  </svg>
                </NavLink>
              </li>
              <li classname="ms-3">
                <NavLink classname="link-dark">
                  <svg classname="bi" width="{24}" height="{24}">
                    <use xlinkhref="#facebook" />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
