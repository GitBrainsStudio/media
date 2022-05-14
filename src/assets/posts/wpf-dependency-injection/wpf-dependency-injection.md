# Внедрение Dependency Injection в приложение WPF

Внедрение зависимостей — это стиль настройки объекта, при котором поля объекта задаются внешней сущностью. Другими словами, объекты настраиваются внешними объектами. DI — это альтернатива самонастройке объектов. 

В приложении WPF все зависимости регистрируются в классе App.xaml.cs

```
using System.Windows;

using Autofac;
using Autofac.Features.ResolveAnything;

using ClientService.Models.Repositories;
using ClientService.Models.Services;

namespace ClientService
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        public static IContainer Container { get; private set; }
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            var builder = new ContainerBuilder();
            builder.RegisterSource(new AnyConcreteTypeNotAlreadyRegisteredSource());
            builder.RegisterType<ClientRepository>().As<IClientRepository>().SingleInstance();
            builder.RegisterType<UserRepository>().As<IUserRepository>().SingleInstance();
            builder.RegisterType<AuthenticationService>().As<IAuthenticationService>().SingleInstance();
            Container = builder.Build();
        }
    }
}
```

Обратите внимание на свойство Container с типом IContaner. Это единственное статическое свойство в нашем приложении. 
Далее, мы просто резолвим наши вью модели для установки необходимых контекстов данных для вьюшек:
```
using System.Windows;

using Autofac;

using ClientService.ViewModels;

namespace ClientService.Views
{
    /// <summary>
    /// Логика взаимодействия для AuthenticationView.xaml
    /// </summary>
    public partial class AuthenticationView : Window
    {
        public AuthenticationView()
        {
            InitializeComponent();
            this.DataContext = App.Container.Resolve<AuthenticationVM>();
        }
    }
}
```