package JavaJDBC.SqlConnection;

import java.beans.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DataBaseConnection {
    /**
     * @param args
     * @throws ClassNotFoundException
     * @throws SQLException
     */
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        String dburlsString = "jdbc:sqlserver://DESKTOP-6EJJG7F;databaseName=JDBC;integratedSecurity=true";
        Connection connection = DriverManager.getConnection(dburlsString);
        Statement stat = (Statement) connection.createStatement();
        String query = "SELECT * FROM Cities";
        ResultSet rs = ((java.sql.Statement) stat).executeQuery(query);
        while (rs.next()) {
            System.out.println(rs.getString(0) + rs.getString(1) + rs.getString(2));
        }
    }
}
