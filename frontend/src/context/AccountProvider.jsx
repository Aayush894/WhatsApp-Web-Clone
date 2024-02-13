import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AccountContext = createContext(null); 

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState(); 

    return (
        <AccountContext.Provider value={{
            account, 
            setAccount,
        }}>
            {children}
        </AccountContext.Provider>
    );
}


AccountProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccountProvider;
