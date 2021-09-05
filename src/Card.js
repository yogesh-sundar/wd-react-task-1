import React from 'react';
import "./style.css";




const Card = (props) => {
  let { pack, price, user, storage, pubProjects, access, priProjects, phone, domain, status, buttonName, iconClass } = props;

  return (<div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{pack}</h5>
      <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
      <hr />
      <ul className="fa-ul">
        <li className={(pack === "Free" ? "" : iconClass="boldUser")}><span className="fa-li"><i className="fas fa-check"></i></span>{user}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{storage}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{pubProjects}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{priProjects}</li>
        <li className={(pack === "Free" ? iconClass = "text-muted" : "")}><span className="fa-li"><i className={(pack === "Free" ? iconClass = "fas fa-times" : iconClass = "fas fa-check")}></i></span>{access}</li>
        <li className={(pack === "Free" ? iconClass = "text-muted" : "")}><span className="fa-li"><i className={(pack === "Free" ? iconClass = "fas fa-times" : iconClass = "fas fa-check")}></i></span>{phone}</li>
        <li className={(pack === "Free" ? iconClass = "text-muted" : (pack === "Pro" ? (iconClass="boldUser") : ""))}><span className="fa-li"><i className={(pack === "Free" ? iconClass = "fas fa-times" : iconClass = "fas fa-check")}></i></span>{domain}</li>
        <li className={(pack === "Pro" ? "" : iconClass = "text-muted")}><span className="fa-li"><i className={(pack === "Pro" ? iconClass = "fas fa-check" : iconClass = "fas fa-times")}></i></span>{status}</li>
      </ul>
      <div className="d-grid">
        <a className="btn btn-primary btn-block text-uppercase">{buttonName}</a>
      </div>
    </div>
  </div>)


}

export default Card;