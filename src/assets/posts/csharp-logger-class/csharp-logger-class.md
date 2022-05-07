# Логирование в C#

 Я покажу один из вариантов реализации логов в C#, на примере класса **Logger**.
 Класс **Logger**, производит запись событий либо ошибок в соответствующие файлы, в папке Logs.
        
   

    public class Logger
    {
        private ReaderWriterLockSlim lock_ = new ReaderWriterLockSlim();

        private string logDirectory { get; set; }

        public Logger()
        {
            logDirectory = AppDomain.CurrentDomain.BaseDirectory + @"/_logs/" + DateTime.Now.ToString("dd-MM-yy HH-mm-ss") + @"/";

            if (!Directory.Exists(logDirectory))
                Directory.CreateDirectory(logDirectory);
        }

        public void Event(string _message) 
        {
            lock_.EnterWriteLock();
            try
            {
                using (StreamWriter writetext = new StreamWriter(logDirectory + "events.txt", append: true))
                {
                    writetext.WriteLine(_message);
                }
            }
            finally
            {
                lock_.ExitWriteLock();
            }
        }

        public void Error(string _message)
        {
            lock_.EnterWriteLock();
            try
            {
                using (StreamWriter writetext = new StreamWriter("errors.txt", append: true))
                {
                    writetext.WriteLine(_message);
                }
            }
            finally
            {
                lock_.ExitWriteLock();
            }
        }
    }

Обратите внимание на создание объекта экземпляра класса **ReaderWriterLockSlim**.

Данный класс используется  для защиты ресурса, который считывается несколькими потоками и записывается в один поток за раз. **ReaderWriterLockSlim** позволяет нескольким потокам находиться в режиме чтения, что позволяет одному потоку находиться в режиме записи с монопольным владельцем блокировки, а также допускает один поток, имеющий доступ на чтение, в обновляемом режиме чтения, из которого поток может обновиться до режима записи, не требуя от него доступа для чтения к ресурсу.

Более подробно про класс **ReaderWriterLockSlim** на  [**msdn**](https://docs.microsoft.com/ru-ru/dotnet/api/system.threading.readerwriterlockslim?view=net-6.0).