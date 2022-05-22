import React, { useContext,useState } from "react";
import Link from "next/link";
import { Collapse } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import { useRouter } from 'next/router';
//import imgL from "../../assets/image/logo-main-black.png";
import imgL from "../../assets/favicon2.png";
const Sidebar = () => {
  const router = useRouter();
  const path = router.asPath;

 //btn-primary text-white 

  const gContext = useContext(GlobalContext);

  return (
    <>
      <Collapse in={gContext.showSidebarDashboard}>
        <div className="dashboard-sidebar-wrapper pt-11" id="sidebar">
          <div className="brand-logo px-11">
            <Link href="/">
              <a>
               
              </a>
            </Link>
          </div>
          {/* <div className="my-15 px-11">
            <Link href="/dashboard-uni-registration">
              <a className="btn btn-primary btn-xl w-100 text-uppercase">
                <span className="mr-5 d-inline-block">+</span>Add a Uni
              </a>
            </Link>
          </div> */}
          <ul style={{marginTop:"30px"}} className="list-unstyled dashboard-layout-sidebar">
            
        <li className="">
        { path=="/dashboard-main" && 
    
            <a className="btn-primary text-white  px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">  
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/monitor_yahvra.png" alt="" />Dashboard
                </a> 
               
             }
              { path!="/dashboard-main" && 
          <Link href="/dashboard-main">
            <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">  
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/monitor_yahvra.png" alt="" />Dashboard
                </a> 
              </Link>}
            </li>
       
            <li className="">
            { path=="/dashboard-main-office-checkin-waiting" && 
                <a className="btn-primary text-white  px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                    <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/work_sp7tby.png" alt="" />Office Check-in
                </a>
             }
              { path!="/dashboard-main-office-checkin-waiting" && 
             <Link href="/dashboard-main-office-checkin-waiting">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                    <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/work_sp7tby.png" alt="" />Office Check-in
                </a>
              </Link> }
            </li>
            <li className="">
            { path=="/dashboard-main-enquiries" && 
     
                 <a className="btn-primary text-white px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/files_qjg6uy.png" alt="" />Enquiries{" "}
                
                </a>
       }
              { path!="/dashboard-main-enquiries" && 
              <Link href="/dashboard-main-enquiries">
                 <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/files_qjg6uy.png" alt="" />Enquiries{" "}
                
                </a>
              </Link> }
            </li>
            <li className="">
            { path=="/dashboard-main-clients" && 
          
               <a className="btn-primary text-white px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/rating_ks3yvo.png" alt="" />Clients{" "}
           
                </a>
             }
              { path!="/dashboard-main-clients" && 
             <Link href="/dashboard-main-clients">
               <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/rating_ks3yvo.png" alt="" />Clients{" "}
           
                </a>
              </Link> }
            </li>
            <li className="">
            { path=="/dashboard-main-services" && 
           
             <a className="btn-primary text-white px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/plane_qwnyky.png" alt="" />Services{" "}
                
                </a>
        }
              { path!="/dashboard-main-services" && 
             <Link href="/dashboard-main-services">
             <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/plane_qwnyky.png" alt="" />Services{" "}
               
                </a>
              </Link> }
            </li>
            <li className="">
            { path=="/dashboard-main-partners" &&
         <a className="btn-primary text-white px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/deal_xvhkmj.png" alt="" />Partners{" "}
                 
                </a>
            }
              { path!="/dashboard-main-partners" &&  <Link href="/dashboard-main-partners">
         <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/deal_xvhkmj.png" alt="" />Partners{" "}
               
                </a>
              </Link> }
            </li>
            <li className="">
            { path=="/dashboard-main-products" &&  
             <a className="btn-primary text-white  px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/delivery-box_kyjtwu.png" alt="" />Products{" "}
               
                </a>
            }
              { path!="/dashboard-main-products" &&  <Link href="/dashboard-main-products">
             <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/delivery-box_kyjtwu.png" alt="" />Products{" "}
                 </a>
              </Link> }
            </li>
            <li className="">
            { path=="/dashboard-main-applications" && 
                <a className="btn-primary text-white  px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Active Applications{" "}
               
                </a>
          }
              { path!="/dashboard-main-applications" &&  <Link href="/dashboard-main-applications">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Active Applications{" "}
               
                </a>
              </Link> }
            </li>
            <li className="">
            { path=="/dashboard-main-applications-pending"
             && 
               <a className="btn-primary text-white  px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Pending Applications{" "}
              
                </a>
             }
              { path!="/dashboard-main-applications-pending"
             && <Link href="/dashboard-main-applications-pending">
               <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Pending Applications{" "}
               </a>
              </Link>  }
            </li>
            <li className="">
            { path=="/dashboard-main-applications-archived" && 
                <a className="btn-primary text-white  px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Archived Applications{" "}
               
                </a>
            
              }
              { path!="/dashboard-main-applications-archived" && <Link href="/dashboard-main-applications-archived">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Archived Applications{" "}
               
                </a>
              </Link>}
              
            </li>
       
       
            <li className="">
            { path=="/dashboard-main-accounts-invoices" 
            && 
               <a className="btn-primary text-white px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/accounts_ji00gp.png" alt="" />Accounts{" "}
            
                </a> 
            }
              { path!="/dashboard-main-accounts-invoices" 
            && <Link href="/dashboard-main-accounts-invoices">
               <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/accounts_ji00gp.png" alt="" />Accounts{" "}
            
                </a> 
              </Link>}
            </li>
            <li className="">
            { path=="/dashboard-main-teams-users" && 
               <a className="btn-primary text-white px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/brainstorm_d4r4vs.png" alt="" />Teams{" "}
             
                </a>
             }
              { path!="/dashboard-main-teams-users" &&  <Link href="/dashboard-main-teams-users">
               <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/brainstorm_d4r4vs.png" alt="" />Teams{" "}
             
                </a>
              </Link> }

              
            </li>
            <li className="">
            { path=="/dashboard-main-agents" && 
         <a className="btn-primary text-white px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/agent_ygpzuw.png" alt="" />Active Agents{" "}
          
                </a>
          }
              { path!="/dashboard-main-agents" && <Link href="/dashboard-main-agents">
         <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/agent_ygpzuw.png" alt="" />Active Agents{" "}
          
                </a>
              </Link>}
            </li>
            <li className="">
            { path=="/dashboard-main-agents-pending" &&  
              <a className="btn-primary text-white px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/agent_ygpzuw.png" alt="" />Pending Agents{" "}
               
                </a> 
         
              }
              { path!="/dashboard-main-agents-pending" &&  <Link href="/dashboard-main-agents-pending">
              <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/agent_ygpzuw.png" alt="" />Pending Agents{" "}
               
                </a> 
              </Link>}
            </li>
            <li className="">
            { path=="/dashboard-main-agents-archived" && 
             <a className="btn-primary text-white px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/agent_ygpzuw.png" alt="" />Archived Agents{" "}
                </a> 
                
              }
              { path!="/dashboard-main-agents-archived" &&  <Link href="/dashboard-main-agents-archived">
             <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/agent_ygpzuw.png" alt="" />Archived Agents{" "}
                </a> 
                
              </Link>}
            </li>
          </ul>
        </div>
      </Collapse>
      <a
        href="/#"
        className="sidebar-mobile-button"
        onClick={(e) => {
          e.preventDefault();
          gContext.toggleSidebarDashboard();
        }}
      >
        <i className="icon icon-sidebar-2"></i>
      </a>
    </>
  );
};

export default Sidebar;
