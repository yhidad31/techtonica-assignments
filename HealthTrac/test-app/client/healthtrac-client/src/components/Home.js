import React, { useEffect, useState } from 'react';
import { useAuth0 } from "../react-auth0-spa";
​
const HomeContent = (props) => {
​
  const [isDoctor, setDoctor] = useState();
  const [isPatient, setPatient] = useState();
​
  useEffect(() => {
    // axios post to express server to check whether user is a doctor or a patient
​
    // eslint-disable-next-line
  }, []);
​
  if (!isDoctor && !isPatient) {
    return (<div>Loading......</div>);
  } else if (isDoctor) {
    return (
      <div>
        <div>Doctor name: {props.theUser.name}</div>
        <div>Doctor email: {props.theUser.email}</div>
        <div>Doctor sub: {props.theUser.sub}</div>
      </div>
    );
  } else if (isPatient) {
    return (
      <div>
        <div>Patient name: {props.theUser.name}</div>
        <div>Patient email: {props.theUser.email}</div>
        <div>Patient sub: {props.theUser.sub}</div>
      </div>
    );
  }
​
  return (
    <div>
      <div>my user name: {props.theUser.name}</div>
      <div>my user email: {props.theUser.email}</div>
      <div>my user sub: {props.theUser.sub}</div>
    </div>
  );
}
​
const Home = (props) => {
  const { loading, user } = useAuth0();
​
  if (loading || !user) {
    return (
      <div>This is Home Page</div>
    );
  }
​
  return (<HomeContent {...props} theUser={user} />)
}
​
export default Home;