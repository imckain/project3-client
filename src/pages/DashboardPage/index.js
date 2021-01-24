import AdminPage from '../AdminPage';

function DashboardPage(props) {
    
    return(
        <div>
            { 
                props.isAdmin ?
                <AdminPage 
                    {...props} 
                    listings={props.listings}
                    refresh={props.refresh}
                />
                :
                <h1>Dashboard</h1>
            }
        </div>
    );
};

export default DashboardPage;