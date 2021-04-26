import { Component, createContext } from 'react';

interface State {
    username: string;
    isAdmin: boolean;
    isLoggedIn: boolean;
}

interface ContextValue extends State {
    setUser: (username: string, isAdmin: boolean) => void;
    logoutUser: () => void;
}

export const UserContext = createContext<ContextValue>({
    username: '',
    isAdmin: false,
    isLoggedIn: false,
    setUser: () => {},
    logoutUser: () => {},
    
});

class UserProvider extends Component<{}, State> {
    state: State = {
        username: '',
        isAdmin: false,
        isLoggedIn: false,
    }

    setUser = (username: string, isAdmin: boolean) => {
        console.log(this.state);
        this.setState({ username: username, isAdmin: isAdmin, isLoggedIn: true });
        console.log(this.state);
    }
    
    logoutUser = () => {
        this.setState({ username: '', isAdmin: false, isLoggedIn: false });
        console.log(this.state);
    }

    render() {
        return (
            <UserContext.Provider value={{
                username: this.state.username,
                isAdmin: this.state.isAdmin,
                isLoggedIn: this.state.isLoggedIn,
                setUser: this.setUser,
                logoutUser: this.logoutUser,
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;