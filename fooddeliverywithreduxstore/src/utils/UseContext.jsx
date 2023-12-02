// This is how we make useContext

import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "default user",
})

export default UserContext;