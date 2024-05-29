// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_n4mkhz9",
//         "template_ugoztxr",
//         form.current,
//         "user_vYmDSd9PwIuRXUQEDjYwN"
//       )
//       .then(
//         (result) => {
//           toast.success("Message Sent Successfully!", {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//           document.getElementById("myForm").reset();
//         },
//         (error) => {
//           toast.error("Ops Message Not Sent!", {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }
//       );
//   };

//   return (
//     <>
//       <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
//         <div className="row">
//           <div className="col-12 col-md-6">
//             <div className="form-group">
//               <input type="text" name="name" id="name" placeholder="YOUR NAME" required />
//             </div>
//           </div>
//           {/* End .col */}

//           <div className="col-12 col-md-6">
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="YOUR EMAIL"
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-12 col-md-6">
//             <div className="form-group">
//               <input
//                 type="phone"
//                 name="phone"
//                 id="phone"
//                 placeholder="Phone contact < Optional>"
//                 required
//               />
//             </div>
//           </div>

//           {/* End .col */}

//           <div className="col-12 col-md-12">
//             <div className="form-group">
//               <input
//                 type="text"
//                 id="topic"
//                 name="topic"
//                 placeholder="Topic"
//                 required
//               />
//             </div>
//           </div>
//           {/* End .col */}

//           <div className="col-12">
//             <div className="form-group">
//               <textarea
//                 name="message"
//                 id="message"
//                 placeholder="YOUR MESSAGE"
//                 required
//               ></textarea>
//             </div>
//           </div>
//           {/* End .col */}

//           <div className="col-12">
//             <button type="submit" className="button">
//               <span className="button-text">Send Message</span>
//               <span className="button-icon fa fa-send"></span>
//             </button>
//           </div>
//           {/* End .col */}
//         </div>
//       </form>
//     </>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const formValues = Object.fromEntries(formData.entries());

    fetch("https://t9vb2wgs60.execute-api.us-east-1.amazonaws.com/V1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        } else {
          throw new Error(data.message || "Unknown error occurred");
        }
      })
      .catch((error) => {
        toast.error(`Ops Message Not Sent! ${error.message}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder="YOUR NAME" required />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="email" name="email" placeholder="YOUR EMAIL" required />
            </div>
          </div>
          <div className="col-12 col-md-12">
            <div className="form-group">
              <input type="text" id="phone" name="phone" placeholder="Phone <Optional>" required />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input type="text" id="topic" name="topic" placeholder="Topic" required />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea name="message" id="message" placeholder="YOUR MESSAGE" required></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;

