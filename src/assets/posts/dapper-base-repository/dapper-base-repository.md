# Практичная реализация BaseRepository вместе с Dapper

**Dapper** представляет собой инструмент от компании **Stack Exchange**, который сопоставляет результаты sql-запросов с классами C#. В этом плане Dapper немного похож на **Entity Framework**. Однако за счет своей легковесности Dapper обеспечивает большую производительность и быстрее позволяет выполнять запросы, чем **EF Core**. В частности, **Dapper** применяется в работе сайта stackoverflow.com.

На практике, я довольно часто использую **Dapper** через реализацию **BaseRepository**:


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


Далее нам остаётся определить ещё один репозиторий, который будет выполнять наследование BaseRepository и объект для сопоставления с таблицей. В коде это будет выглядеть следующим образом:

    public class PostRepository : BaseRepository
    {
            public IEnumerable<Post> FindAll()
            {
                return Query<Post>("SELECT * FROM POSTS");
            }
    }
     
    public class Post
    {
        public int id { get; set; }
        public string title { get; set; }
        public string content { get; set; }
    }

В заключении, хочется добавить, что представленный в коде объект Post, является всего лишь объектом передачи данных ([**Data Transfer Object**](https://docs.microsoft.com/ru-ru/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-5)), а не бизнес моделью. Обязательно обращайте на это внимание при использовании Dapper'а в Ваших проектах.