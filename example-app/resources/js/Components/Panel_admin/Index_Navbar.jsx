import { Link } from '@inertiajs/react';
import React, { useContext } from 'react';
import { DataContext } from '@/Context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Index_Navbar({ auth }) {
    const { url } = useContext(DataContext);
  return(
    <>
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Sidebar Toggle (Topbar) --> */}
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
      </button>


      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">

          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
              <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-search fa-fw"></i>
              </a>
              {/* <!-- Dropdown - Messages --> */}
              <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown">
                  <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                          <input type="text" className="form-control bg-light border-0 small"
                              placeholder="Search for..." aria-label="Search"
                              aria-describedby="basic-addon2"/>
                          <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                  <i className="fas fa-search fa-sm"></i>
                              </button>
                          </div>
                      </div>
                  </form>
              </div>
          </li>

          {/* <!-- Nav Item - Alerts --> */}
          <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-bell fa-fw"></i>
                  {/* <!-- Counter - Alerts --> */}
                  <span className="badge badge-danger badge-counter">3+</span>
              </a>
              {/* <!-- Dropdown - Alerts --> */}
              <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown">
                  <h6 className="dropdown-header">
                      Alerts Center
                  </h6>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                          <div className="icon-circle bg-primary">
                              <i className="fas fa-file-alt text-white"></i>
                          </div>
                      </div>
                      <div>
                          <div className="small text-gray-500">December 12, 2019</div>
                          <span className="font-weight-bold">A new monthly report is ready to download!</span>
                      </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                          <div className="icon-circle bg-success">
                              <i className="fas fa-donate text-white"></i>
                          </div>
                      </div>
                      <div>
                          <div className="small text-gray-500">December 7, 2019</div>
                          $290.29 has been deposited into your account!
                      </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                          <div className="icon-circle bg-warning">
                              <i className="fas fa-exclamation-triangle text-white"></i>
                          </div>
                      </div>
                      <div>
                          <div className="small text-gray-500">December 2, 2019</div>
                          Spending Alert: We've noticed unusually high spending for your account.
                      </div>
                  </a>
                  <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
          </li>

          {/* <!-- Nav Item - Messages --> */}
          <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-envelope fa-fw"></i>
                  {/* <!-- Counter - Messages --> */}
                  <span className="badge badge-danger badge-counter">7</span>
              </a>
              {/* <!-- Dropdown - Messages --> */}
              <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="messagesDropdown">
                  <h6 className="dropdown-header">
                      Message Center
                  </h6>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                          <LazyLoadImage className="rounded-circle" src={url+"/admin_panel_asset/assets/image/user.svg"}
                              alt="..."/>
                          <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="font-weight-bold">
                          <div className="text-truncate">Hi there! I am wondering if you can help me with a
                              problem I've been having.</div>
                          <div className="small text-gray-500">Emily Fowler · 58m</div>
                      </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                          <LazyLoadImage className="rounded-circle" src={url+"/admin_panel_asset/assets/image/user.svg"}
                              alt="..."/>
                          <div className="status-indicator"></div>
                      </div>
                      <div>
                          <div className="text-truncate">I have the photos that you ordered last month, how
                              would you like them sent to you?</div>
                          <div className="small text-gray-500">Jae Chun · 1d</div>
                      </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                          <LazyLoadImage className="rounded-circle" src={url+"/admin_panel_asset/assets/image/user.svg"}
                              alt="..."/>
                          <div className="status-indicator bg-warning"></div>
                      </div>
                      <div>
                          <div className="text-truncate">Last month's report looks great, I am very happy with
                              the progress so far, keep up the good work!</div>
                          <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                      </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                          <LazyLoadImage className="rounded-circle" src={url+"/admin_panel_asset/assets/image/user.svg"}
                              alt="..."/>
                          <div className="status-indicator bg-success"></div>
                      </div>
                      <div>
                          <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                              told me that people say this to all dogs, even if they aren't good...</div>
                          <div className="small text-gray-500">Chicken the Dog · 2w</div>
                      </div>
                  </a>
                  <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
              </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">{auth.user.name}</span>
                  <LazyLoadImage className="img-profile rounded-circle"
                      src={url+"/admin_panel_asset/assets/image/user.svg"}/>
              </a>
              {/* <!-- Dropdown - User Information --> */}
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      پروفایل
                  </a>
                  <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                  </a>
                  <a className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <Link href={route('logout')} method="post" className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      خروج از حساب
                  </Link>
              </div>
          </li>

      </ul>

      </nav>
    </>
  );
}
  