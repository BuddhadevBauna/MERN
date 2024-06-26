import React, { useEffect } from "react";
import { useAuth } from "../store/auth";
import ServerError from "../Error/ServerError";


const Services = () => {
    const { serverIssue, services } = useAuth();
    // console.log(services);

    if(serverIssue) return <ServerError />;
    return (
        <>
            <section className="section-services">
                <div className="container">
                    <h1 className="main-heading">Services</h1>
                </div>
                <div className="container grid grid-col-3">
                    {
                        services.map((currectService, index) => {
                            const { provider, price, service, description } = currectService;
                            return (
                                <div className="card" key={index}>
                                    <div className="card-img">
                                        <img src="/images/design.png" alt="design-img" width="200" />
                                    </div>
                                    <div className="card-details">
                                        <div className="grid grid-col-2">
                                            <p>{ provider }</p>
                                            <p>{ price }</p>
                                        </div>
                                        <h2>{ service }</h2>
                                        <p>{ description }</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Services;