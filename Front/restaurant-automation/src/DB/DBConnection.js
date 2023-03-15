// Mock DB Conenction

const myDBUserId = "admin";
const myDBPassword = "1234";

class DBConnection {
    constructor() {
        this.DBuserId = "";
        this.DBPassword = "";
        this.DBUri = "https://aws.jrswan";
        this.isConnected = false;
    }

    Connect = (DBuserId, DBPassword) => {
        this.DBuserId = DBuserId;
        this.DBPassword = DBPassword;

        // pretend to be connected
        if (myDBUserId === this.DBuserId && myDBPassword === this.DBPassword)
        {
            this.isConnected = true;
        }
        
        return this.isConnected;
    }
}

const dbConnection = new DBConnection();

export default dbConnection;