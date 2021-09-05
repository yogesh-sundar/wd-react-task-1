import React from 'react';
import Card from './Card';
// import "./style.css";

const packageDetails = [{
    pack: "Free",
    price: "0",
    user: "Single",
    storage: "5GB Storage",
    pubProjects: "Unlimited Public Projects",
    access: "Community Access",
    priProjects: "Unlimited Private Projects",
    phone: "Dedicated Phone Support",
    domain: "Free Subdomain",
    status: "Monthly Status reports"
},
{
    pack: "Plus",
    price: "9",
    user: "5 Users",
    storage: "50GB Storage",
    pubProjects: "Unlimited Public Projects",
    access: "Community Access",
    priProjects: "Unlimited Private Projects",
    phone: "Dedicated Phone Support",
    domain: "Free Subdomain",
    status: "Monthly Status reports"
},
{
    pack: "Pro",
    price: "49",
    user: "Unlimited Users",
    storage: "150GB Storage",
    pubProjects: "Unlimited Public Projects",
    access: "Community Access",
    priProjects: "Unlimited Private Projects",
    phone: "Dedicated Phone Support",
    domain: "Unlimited Free Subdomains",
    status: "Monthly Status reports"
}];

export default function Section() {
    return (<section className="pricing py-5">
        <div className="container">
            <div className="row">
                { packageDetails.map((details, key) => {
                    return (<div className="col-4" index={key}>
                        <Card
                            pack={details.pack}
                            price={details.price}
                            user={details.user}
                            storage={details.storage}
                            access={details.access}
                            pubProjects={details.pubProjects}
                            priProjects={details.priProjects}
                            phone={details.phone}
                            domain={details.domain}
                            status={details.status}
                            buttonName="Button"
                            
                            iconClass = {details.pack}
                            
                        />
                    </div>)
                })

                }
            </div>
        </div>
    </section>
    )
}