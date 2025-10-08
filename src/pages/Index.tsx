import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('main');

  const projects = [
    {
      id: 1,
      title: 'ул. Красноярова 1',
      status: 'completed',
      type: 'Многоквартирный жилой дом'
    },
    {
      id: 2,
      title: 'ул. Кирова 32',
      status: 'completed',
      type: 'Многоквартирный жилой дом'
    },
    {
      id: 3,
      title: 'Таун-хаусы Покровский тракт 17 км',
      status: 'completed',
      type: 'Таун-хаусы'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/files/31ac5b14-13b9-44e3-bd1f-549118fee477.jpg',
      title: 'Современный жилой комплекс'
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/files/66e50908-2e18-4ae9-8c07-057f6ed61fb8.jpg',
      title: 'Архитектурный проект'
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="HardHat" className="text-accent" size={32} />
              <h1 className="text-2xl font-bold text-primary">Пилигримм</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('main')} className="text-foreground hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-colors">О компании</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-accent transition-colors">Объекты</button>
              <button onClick={() => scrollToSection('clients')} className="text-foreground hover:text-accent transition-colors">Для клиентов</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-accent transition-colors">Контакты</button>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+79849849849" className="hidden md:flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">8 984 984 98 49</span>
              </a>
              <Button variant="outline" size="sm">
                <Icon name="Eye" size={16} className="mr-2" />
                Версия для слабовидящих
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="main" className="py-28 bg-gradient-to-b from-muted to-background relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-block mb-4 px-4 py-1.5 bg-accent/10 rounded-full text-sm font-medium text-accent">
                С 2005 года строим будущее Якутии
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-primary mb-7 leading-tight">
                Строительная компания<br />
                <span className="text-accent relative inline-block">
                  Пилигримм
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 transform -rotate-1"></div>
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-9 leading-relaxed max-w-3xl mx-auto">
                Одна из динамично развивающихся строительных компаний Республики Саха (Якутия) 
                с высоким уровнем производства и современной технологией в сфере гражданского 
                многоквартирного строительства.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all" onClick={() => scrollToSection('projects')}>
                  <Icon name="Building2" size={20} className="mr-2" />
                  Наши объекты
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-accent/5" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Mail" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-14">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">Наши проекты</h3>
                <div className="w-20 h-1.5 bg-accent"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                {galleryImages.map((image, index) => (
                  <div 
                    key={image.id} 
                    className="overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 animate-fade-in group" 
                    style={{ 
                      animationDelay: `${index * 0.15}s`,
                      transform: index === 1 ? 'translateY(20px)' : 'translateY(0)'
                    }}
                  >
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-primary mb-8 text-center">О компании</h3>
              
              <Card className="p-8 mb-8 animate-fade-in">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="Calendar" className="text-accent" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Основана в 2005 году</h4>
                    <p className="text-muted-foreground">
                      Компания была организована 13 августа 2005 года. За это время были построены 
                      многоквартирные жилые дома по ул. Красноярова 1, ул.Кирова 32, Таун-хаусы 
                      по Покровскому тракту 17 км.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-5">
                <Card className="p-7 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-accent" size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2.5">Опыт</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Большой опыт в возведении многоэтажных жилых домов</p>
                </Card>

                <Card className="p-7 hover:shadow-lg transition-shadow border-l-4 border-l-transparent hover:border-l-accent">
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Ruler" className="text-accent" size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2.5">Проекты</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Типовые и индивидуальные проекты любой сложности</p>
                </Card>

                <Card className="p-7 hover:shadow-lg transition-shadow">
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Clock" className="text-accent" size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2.5">Сроки</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Выполнение работ точно в установленный срок</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Объекты</h3>
                  <p className="text-muted-foreground">
                    Построенные и реализованные проекты
                  </p>
                </div>
                <div className="hidden md:block w-24 h-1 bg-accent/30"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card 
                    key={project.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group" 
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: index === 1 ? 'translateY(-8px)' : 'translateY(0)'
                    }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                      <Icon name="Building2" className="text-muted-foreground group-hover:scale-110 transition-transform duration-300" size={56} />
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                          Сдан
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-1.5 group-hover:text-accent transition-colors">{project.title}</h4>
                      <p className="text-muted-foreground text-sm">{project.type}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-14 flex justify-center">
                <Button variant="outline" size="lg" className="group">
                  Смотреть все объекты
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl font-bold text-primary mb-8">Для клиентов</h3>
              
              <Card className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Строительная компания «Пилигримм» имеет большой опыт в возведении многоэтажных 
                  жилых домов и готова выполнить строительство, как по типовым, так и по индивидуальным 
                  проектам, выполнив весь комплекс строительно-монтажных работ точно в срок.
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="mb-14">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">Контакты</h3>
                <div className="w-20 h-1.5 bg-accent"></div>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                <Card className="md:col-span-3 p-7 space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="bg-accent/10 p-3.5 rounded-xl">
                      <Icon name="Phone" className="text-accent" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1.5">Телефон</h4>
                      <a href="tel:+79849849849" className="text-lg text-accent hover:underline">
                        8 984 984 98 49
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-accent/10 p-3.5 rounded-xl">
                      <Icon name="MapPin" className="text-accent" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1.5">Адрес</h4>
                      <p className="text-muted-foreground">ул. Кирова 32, 301 офис</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-accent/10 p-3.5 rounded-xl">
                      <Icon name="Clock" className="text-accent" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1.5">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт с 09:00 до 18:00</p>
                      <p className="text-muted-foreground text-sm">Обед с 13:00 до 14:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="md:col-span-2 p-8 bg-primary text-primary-foreground relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-3">Свяжитесь<br/>с нами</h4>
                    <p className="mb-6 opacity-90 text-sm leading-relaxed">
                      Готовы обсудить ваш проект? Наши специалисты ответят на все вопросы.
                    </p>
                    <Button size="lg" variant="secondary" className="w-full group">
                      <Icon name="Mail" size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                      Отправить заявку
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="HardHat" size={28} />
                  <h5 className="text-xl font-bold">Пилигримм</h5>
                </div>
                <p className="text-sm opacity-80">
                  Строительная компания полного цикла
                </p>
              </div>

              <div>
                <h6 className="font-semibold mb-3">Навигация</h6>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><button onClick={() => scrollToSection('main')} className="hover:opacity-100 transition-opacity">Главная</button></li>
                  <li><button onClick={() => scrollToSection('about')} className="hover:opacity-100 transition-opacity">О компании</button></li>
                  <li><button onClick={() => scrollToSection('projects')} className="hover:opacity-100 transition-opacity">Объекты</button></li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-3">Услуги</h6>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Многоквартирное строительство</li>
                  <li>Индивидуальные проекты</li>
                  <li>Таун-хаусы</li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-3">Контакты</h6>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>8 984 984 98 49</li>
                  <li>ул. Кирова 32, офис 301</li>
                  <li>Пн-Пт 09:00-18:00</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
              <p>© 2005-2024 Строительная компания «Пилигримм». Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}