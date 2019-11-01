**HealthTrac**
**MVP:**
This software will allow a device to communicate vitals from the patient directly to the doctor. At the very least, the app will track heart rate, number of steps, sleep, and blood pressure.
**Summary:**
Vital health information is often passed from patient or caregiver to doctor in a slow and inefficient way. Health data such as blood pressure is logged by a patient or caregiver on paper or recorded physically at the doctor’s office and then brought to the doctor, however logging this information on paper can be difficult to keep track of. What if there was a more streamlined approach to health monitoring? The patient will be able to stop the sharing of information whenever they please, and will be able to pick and choose the information which is sent to the doctor when they sign up. 
**Overall Plan:**
The homepage will have a 0auth login to verify the doctor’s credentials, then once the doctor is logged in, they will type the patient’s medical record number and that will allow them to view a patient profile with patient’s tracked data. The project will take the form of a web app and the stretch goal is creating a mobile app for patient and doctor.
**Medium-term goals:**
An alert to patient’s hospital if any of the reported metrics are dangerous, or in need of further observation. The app will alert the hospital if there are any dangerous metrics reported.
**Stretch goals:**
I would like to integrate features which allow reporting from devices such as an insulin pump, pacemaker, or ventilator. Later on I would like to integrate features that allow the patient to access their medical records on their own and download immunization records and such.
**Technical details:**
Fitbit API, React.Js, Express.JS, Node.Js, Auth0, Bootstrap, AWS database.
