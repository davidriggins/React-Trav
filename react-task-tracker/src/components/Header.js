const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

// Default prop values
Header.defaultProps = {
    title: 'Task Tracker',
};

export default Header;
