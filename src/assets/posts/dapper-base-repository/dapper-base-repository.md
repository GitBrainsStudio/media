# Практичная реализация BaseRepository вместе с Dapper

**Dapper** представляет собой инструмент от компании **Stack Exchange**, который сопоставляет результаты sql-запросов с классами c#. В этом плане Dapper немного похож на **Entity Framework**. Однако за счет своей легковесности Dapper обеспечивает большую производительность и быстрее позволяет выполнять запросы, чем **EF Core**. В частности, **Dapper** применяется в работе сайта stackoverflow.com.

На практике, я часто использую **Dapper**, через наследование от класса **BaseRepository**:


    public class BaseRepository
    {
        protected T QueryFirstOrDefault(string sql, object parameters = null)
        {
            using (var connection = CreateConnection())
            {
                connection.Open();
                return connection.QueryFirstOrDefault(sql, parameters);
            }
        }

        protected List Query(string sql, object parameters = null)
        {
            using (var connection = CreateConnection())
            {
                connection.Open();
                return connection.Query(sql, parameters).ToList();
            }
        }

        protected int Execute(string sql, object parameters = null)
        {
            using (var connection = CreateConnection())
            {
                connection.Open();
                return connection.Execute(sql, parameters);
            }
        }

        private IDbConnection CreateConnection()
        {
            return new SQLiteConnection(Startup.SQLiteConnectionString);
        } 
    }


Ну и само наследование происходит следующим образом:

    public class PostRepository : BaseRepository
    {
            public IEnumerable<Post> FindAll()
            {
                return Query<Post>("SELECT * FROM POSTS");
            }
    }
     
    public class Post
    {
        public int id {get;set;}
        public string title {get;set;}
        public string content {get;set;}
    }