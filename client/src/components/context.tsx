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

    componentDidMount = async () => {
        const user = await whoami();
        if (user && !user.error) {
            this.setUser(user.username, user.role === 'admin');
        }
    }
 
    setUser = (username: string, isAdmin: boolean) => {
        this.setState({ username: username, isAdmin: isAdmin, isLoggedIn: true });
    }
    
    logoutUser = () => {
        this.setState({ username: '', isAdmin: false, isLoggedIn: false });
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

const whoami = async () => {
    try {
        let response = await fetch('/api/whoami/');
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}