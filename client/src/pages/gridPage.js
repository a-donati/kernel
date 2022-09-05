// import "../App.css";
import Calendar from "../components/Calendar";
import css from "./gridPage.css";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import React, { useState } from "react";
import Grid from '../components/Grid';
import Login from '../components/LoginForm';


function GridPage() {
  // const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  console.log(userData);
  console.log(userData.firstName);
  const meow = userData.savedKernels[0].submissionDate;
  console.log(new Date(meow * 1000));
  console.log(userData.savedKernels[0].dayRating);
  // console.log(userData.savedKernels[0].excite)
  // console.log(userData.savedKernels[0].proud)
  // console.log(userData.savedKernels[0].intention)

  // for(let i=0; i < userData.savedKernels.length; i++) {
  //     let excite = userData.savedKernels[i].excite
  //     let submission = userData.savedKernels[i].submissionDate

  //     console.log(excite, submission)
  //     // console.log(userData.savedKernels[i]._id)

  // }

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }
  console.log(timeConverter(0));

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  function handleButtonClick(event) {
    event.preventDefault();

    if (event.target.id === userData.submissionDate) {
      console.log(true);
    }
  }

  console.log(uuidv4());



  const hasPosts = userData.savedKernels.length
  console.log(hasPosts);

  

  function checkPosts() {
    if (hasPosts > 0) {
      return <Grid/>;
} else {
      return <Login />;
    }

  }

  return (
    <div className="grid">
    {checkPosts()}
      
    </div>
  );
}

export default GridPage;
