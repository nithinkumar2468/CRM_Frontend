import React from "react";
import MainNavbar from "./MainNavbar";
import Chatbot from "./Chatbot"; 
import Footer from "./Footer";

const Welcome = () => {

    return (
        <section className="py-10">
               <div ><MainNavbar/></div>
               <Chatbot/> 
    <div className="px-12 py-20 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                 <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Customer Relationship Management System</span> <span></span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            CRM is your GPS to a better route on your Business Development journey.
            </p>
        </div>
        <section className="pt-2 bg-white">
            <div className="px-12 mx-auto max-w-7xl">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                       
                        <img src="CRM.png" alt="Description" style={{ maxWidth: '100%', height: '300px', borderRadius: '8px' }} />
 
 
                    </div>
                    <div style={{ flex: 1, }}>
                       
                        <center><h2><b>Customer Relationship Management System</b></h2><p>A customer management system describes the specialist software that can empower companies by streamlining and automatically carrying out the processes involved in crm such as working out take home pay and taxes – saving time for the employer and reducing the number of errors.</p></center>
                    </div>
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                       
                        <center>
                            <h2><b>Health Care </b></h2>
                            <br></br>
                            <p><b>Seamlessly delivering end-to-end digital health experiences</b></p>
                            <br></br><p>The future of healthcare is in digitally reimagined experiences for patients and caregivers alike. Digitalization offers increased choice and convenience for patients, and improved outcomes for caregivers while reducing costs and workloads.</p></center>
                    </div>
                    <div style={{ flex: 1, }}>
                       
                        <img src="./images/crm2.png" alt="Description" style={{ maxWidth: '100%', height: '300px', borderRadius: '8px' }} />
                    </div>
 
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        
                        <img src="./images/crm3.png" alt="Description" style={{ maxWidth: '100%', height: '300px', borderRadius: '8px' }} />
 
 
                    </div>
                    <div style={{ flex: 1, }}>
                        
                        <center><h2><b>Banking & Finance</b></h2><b><p>Driving transformation with our banking, financial services, insurance, and payments experts.</p></b><p>We help Financial Services companies meet rapidly changing customer expectations, exploit disruptive business models and new technologies, become more efficient and resilient, and navigate uncertainty, risks and regulations.
 
                            We deliver this with our “NextGen” services which are unshackled from legacy thinking, processes or mindsets and achieves full stack transformation with Domain, Digital, Experience Design, DevOps, Platforms and AI/ML.</p></center>
                    </div>
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        
                        <center>
                            <h2><b>Telecom</b></h2>
                            <br></br>
                            <p><b>TELECOM
                                Next-gen digital platforms and differentiated offerings for 5G technologies</b></p>
                            <br></br><p>If you’re looking for a trusted and reliable partner for your telecom IT services, look no further. We are uniquely aligned to serve our telecom domain customers as a strategic transformational partner through exclusive focus on Next-gen digital platforms and differentiated offerings for 5G technologies.</p></center>
                    </div>
                    <div style={{ flex: 1, }}>
                        <img src="./images/crm4.png" alt="Description" style={{ maxWidth: '100%', height: '300px', borderRadius: '8px' }} />
                    </div>
 
                </div><br></br>
            </div>
            
        </section>
        </div>
 <hr></hr>
<Footer/>


        






        
</section>       
    );
}
 
export default Welcome;