// import React, { useEffect, useState } from "react";
// import Toast from "react-bootstrap/Toast";
// import "./App.css";
// import axios from 'axios'
// const Create = () => {
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
//     console.log(resp);
//     setUser(resp);
//   };

//   return (
//     <div className="App">
//       <h2>Do Here...!</h2>
//       {user.name}
//       <div class="container px-4 text-center">
//         <div class="row gx-5">
//           <div class="col bd pt-2">
//             <div class="p-3"></div>
//           </div>
//           <div class="col bd">
//             <div class="p-3">Custom column padding</div>
//           </div>
//           <div class="col bd">
//             <div class="p-3">Demo Custom column padding</div>
//           </div>
//         </div>
//       </div>
//       <div class="container px-4 text-center">
//         <div class="row gx-5">
//           <div class="col bd">
//             <div class="p-3">Custom column padding</div>
//           </div>
//           <div class="col bd">
//             <div class="p-3">Custom column padding</div>
//           </div>
//           <div class="col bd">
//             <div class="p-3">Demo Custom column padding</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Create;

import React, { useEffect, useState } from "react";
import axios from "axios";

function UserRecord() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // const { username, address: { geo: { lat, lng } } } = response.data;
      // setUser({ username, lat, lng });
      setUser(response.data);
    }

    fetchUser();
  }, []);

  return (
    <>
  
      {user &&
        user?.map((item, index) => (
          <>
            <div className="col bd"> {item.name}</div>
            <div className="col bd"> {item.username}</div>
            <div className="col bd"> {item.email}</div>
          </>
        ))}
    </>
  );
}

export default UserRecord;
