# Паттерн UnitOfWork совместно с Dapper

**Unit of Work** - это паттерн определяющий логическую транзакцию т.е. атомарную синхронизацию изменений в объектах, помещённых в объект **UoW** с хранилищем (базой данных).

Если обратиться к исходному описанию этого паттерна у **Мартина Фаулера** - то видно что объект, реализующий этот паттерн отвечает за накопление информации о том какие объекты входят в транзакцию и каковы их изменния относительно исходных значений в хранилище. Основная работа производится в методе **commit()** который отвечает за вычисление изменений в сохранённых в **UoW** объектах и синхронизацию этих изменений с хранилищем (базой данных).

Паттерн **Unit of Work** как правило не является полностью самостоятельным, он обычно тесно связан с паттерном **Identity Map**, задача которого - сохранение карты созданных объектов, взятых из хранилища с тем чтобы гарантировать что одна единица информации из хранилища представлена ровно одним экземпляром объекта данных в приложении. Это позволяет избежать конфликтов изменений т.к. не допускает ситуации когда два объекта, представляющих один и тот же элемент данных в хранилище, изменены по-разному. Информация из **Identity Map** используется в методе **commit()** паттерна **Unit of Work** для вычисления разницы между исходными данными и накопленными изменениями.

**Dapper** не поддерживает паттерн единицу работы из коробки. Но эту небольшую неприятность можно с лёгкостью обойти. Взгляните на следующую реализацию:

```
using System;
using System.Configuration;
using System.Data;

using Devart.Data.Oracle;

using UserControl.DAL.Interfaces;
using UserControl.DAL.Repositories;

namespace UserControl.DAL.Common
{
    public class DapperUnitOfWork : IDisposable
    {
        private IDbConnection _connection;
        private IDbTransaction _transaction;

        private IUserRepository _userRepository;

        public DapperUnitOfWork()
        {
            _connection = new OracleConnection(ConfigurationManager.ConnectionStrings["upmo"].ConnectionString);
            _connection.Open();
            _transaction = _connection.BeginTransaction();
        }

        public IUserRepository UserRepository
            => _userRepository ?? (_userRepository = new UserRepository(_transaction));

        public void Commit()
        {
            try
            {
                _transaction.Commit();
            }

            catch
            {
                _transaction.Rollback();
                throw;
            }

            finally
            {
                _transaction.Dispose();
                ResetRepositories();
                Dispose();
            }
        }

        public void Dispose()
        {
            if (_connection != null)
            {
                _connection.Dispose();
                _connection = null;
            }

            if (_connection != null)
            {
                _connection.Dispose();
                _connection = null;
            }

            ResetRepositories();
        }

        private void ResetRepositories()
        {
            _userRepository = null;
        }
    }
}
```

И обратите внимание на способ возова UoW в приложении (обязательно через оператор [**using**](https://docs.microsoft.com/ru-ru/dotnet/csharp/language-reference/keywords/using-statement) для гарантии правильного использования объектов [**IDisposable**](https://docs.microsoft.com/ru-ru/dotnet/api/system.idisposable?view=net-6.0)):

```
 public User GetByLogin(string login)
        {
            using (var unitOfWork = new DapperUnitOfWork())
            {
                var userEntity =
               unitOfWork.UserRepository.FindByLogin(login);
               unitOfWork.Commit();

                return (userEntity is null) ? null
                    : CreateModelFromEntity(userEntity);
            }
        }
```